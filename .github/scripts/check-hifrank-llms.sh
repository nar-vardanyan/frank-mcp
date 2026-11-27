#!/usr/bin/env bash
# Daily regression check for https://www.hifrank.ai/llms.txt
# Fails if the file is missing, has fewer than MIN_LINES lines, or links to a URL
# that does not answer 2xx or 3xx after redirects. Dependency-free: bash + curl.
set -uo pipefail

URL="${LLMS_URL:-https://www.hifrank.ai/llms.txt}"
MIN_LINES="${MIN_LINES:-100}"
UA="frank-mcp-llms-check/1.0 (+https://github.com/nar-vardanyan/frank-mcp)"
# The MCP endpoint is OAuth-protected and answers 401 without a token. That is healthy.
AUTH_OK_URLS=" https://api.hifrank.ai/mcp "

tmp="$(mktemp)"
trap 'rm -f "$tmp"' EXIT
fail=0

code="$(curl -sS -L --max-time 30 -A "$UA" -o "$tmp" -w '%{http_code}' "$URL" || echo 000)"
if [[ "$code" != 2* ]]; then
  echo "::error::$URL returned HTTP $code"
  exit 1
fi

lines="$(wc -l < "$tmp" | tr -d ' ')"
echo "$URL: HTTP $code, $lines lines"
if (( lines < MIN_LINES )); then
  echo "::error::$URL has $lines lines; expected at least $MIN_LINES"
  fail=1
fi

# Every http(s) URL in the file: markdown link targets and bare URLs.
mapfile -t links < <(grep -oE 'https?://[^][()<>"'"'"' ]+' "$tmp" | sed -E 's/[.,;:]+$//' | sort -u)
echo "Checking ${#links[@]} links"

for link in "${links[@]}"; do
  status="$(curl -s -o /dev/null -L --max-time 30 -A "$UA" -w '%{http_code}' "$link" || true)"
  [[ -z "$status" ]] && status=000
  if [[ "$status" == 2* || "$status" == 3* ]]; then
    echo "ok   $status $link"
  elif [[ "$status" == 401 && "$AUTH_OK_URLS" == *" $link "* ]]; then
    echo "ok   $status $link (OAuth-protected, 401 expected)"
  else
    echo "::error::broken link ($status): $link"
    fail=1
  fi
done

if (( fail )); then
  echo "llms.txt check FAILED"
  exit 1
fi
echo "llms.txt check passed"
