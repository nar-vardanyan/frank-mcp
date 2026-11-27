# Changelog

All notable changes to this project are documented here. This project follows [Semantic Versioning](https://semver.org/).

## 0.1.0 (unreleased)

- First release.
- `attach`, `open`, `report`, `autoInit`, `sendWebhook` and `DEFAULT_REASONS` (values match Stripe's `cancellation_details.feedback`).
- Script-tag build with `data-cancel-reasons` auto-attach, ESM, CommonJS and TypeScript types.
- Result via callback, `cancelreasons:submit` DOM event, and optional JSON webhook.
- Never blocks the cancel: skip is always available, callbacks and webhooks are time-boxed, rendering errors fail open.
- Optional, off by default: link to a short voice chat.
- Stripe and Paddle integration guides.
