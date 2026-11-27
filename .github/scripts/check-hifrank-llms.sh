#!/usr/bin/env bash
# Daily regression check for https://www.hifrank.ai/llms.txt
# Checks: the file answers 2xx, has at least MIN_LINES lines, and every URL in it
# answers 2xx or 3xx after redirects. Dependency-free: bash + curl.
#
# LLMS_EXPECT_FIXED=false (default, "pending" mode): report failures as ::warning::
#   annotations and in the job summary, but exit 0. Use until the new file ships.
# LLMS_EXPECT_FIXED=true ("strict" mode): any failure exits 1.
set -uo pipefail

URL="${LLMS_URL:-https://www.hifrank.ai/llms.txt}"
MIN_LINES="${MIN_LINES:-100}"
EXPECT_FIXED="${LLMS_EXPECT_FIXED:-false}"
UA="frank-mcp-llms-check/1.0 (+https://github.com/nar-vardanyan/frank-mcp)"
# The MCP endpoint is OAuth-protected and answers 401 without a token. That is healthy.
AUTH_OK_URLS=" https://api.hifrank.ai/mcp "
SUMMARY="${GITHUB_STEP_SUMMARY:-/dev/null}"

if [[ "$EXPECT_FIXED" == "true" ]]; then MODE=strict; LEVEL=error; else MODE=pending; LEVEL=warning; fi

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT
problems=()
checked=0
lines=0

code="$(curl -sS -L --max-time 30 -A "$UA" -o "$tmp" -w '%{http_code}' "$URL" 2>/dev/null || true)"
[[ -z "$code" ]] && code=000
if [[ "$code" != 2* ]]; then
  problems+=("$URL returned HTTP $code")
else
  lines="$(wc -l < "$tmp" | tr -d ' ')"
  echo "$URL: HTTP $code, $lines lines (mode: $MODE)"
  if (( lines < MIN_LINES )); then
    problems+=("llms.txt has $lines lines; expected at least $MIN_LINES")
  fi
  # Every http(s) URL in the file: markdown link targets and bare URLs.
  mapfile -t links < <(grep -oE 'https?://[^][()<>"'"'"' ]+' "$tmp" | sed -E 's/[.,;:]+$//' | sort -u)
  echo "Checking ${#links[@]} links"
  for link in "${links[@]}"; do
    checked=$((checked + 1))
    status="$(curl -s -o /dev/null -L --max-time 30 -A "$UA" -w '%{http_code}' "$link" || true)"
    [[ -z "$status" ]] && status=000
    if [[ "$status" == 2* || "$status" == 3* ]]; then
      echo "ok   $status $link"
    elif [[ "$status" == 401 && "$AUTH_OK_URLS" == *" $link "* ]]; then
      echo "ok   $status $link (OAuth-protected, 401 expected)"
    else
      echo "FAIL $status $link"
      problems+=("broken link ($status): $link")
    fi
  done
fi

for p in "${problems[@]}"; do echo "::$LEVEL::$p"; done

{
  echo "## hifrank.ai llms.txt check ($MODE mode)"
  echo
  echo "- URL: $URL"
  echo "- Lines: $lines (minimum $MIN_LINES)"
  echo "- Links checked: $checked"
  if (( ${#problems[@]} )); then
    echo "- Problems: ${#problems[@]}"
    echo
    for p in "${problems[@]}"; do echo "- $p"; done
    if [[ "$MODE" == pending ]]; then
      echo
      echo "Pending mode: reported as warnings, job passes. Set LLMS_EXPECT_FIXED=true once the new llms.txt, llms-full.txt and /agents are live."
    fi
  else
    echo "- Problems: none"
  fi
} >> "$SUMMARY"

if (( ${#problems[@]} )); then
  if [[ "$MODE" == strict ]]; then
    echo "llms.txt check FAILED (${#problems[@]} problems)"
    exit 1
  fi
  echo "llms.txt check: ${#problems[@]} problems, pending mode, exiting 0"
  exit 0
fi
echo "llms.txt check passed"
