# Changelog

## [3.3.0] — 2026-04-20

### Added
- `telegramStalk(username)`
- `redditStalk(username, limit)`
- `pinterestStalk(username)`
- `fetchSingle()` helper for Islamic content JSON objects
- Full browser headers on all HTTP requests (20s default timeout)


### Deprecated & Removed
- `freefireStalk` — Codashop permanently blocks all server IPs
- `nickff` — Codashop permanently blocks all server IPs
- `nickml` — Duniagames API returns 500 for all external requests
- `Remini` — API endpoint changed (405 Method Not Allowed)
- `apkmirror` — Cloudflare WAF blocks all non-browser requests
- `anoboys` — anoboy.app domain shut down
- `film` — bioskopkeren.id domain shut down
- `gempa` — BMKG blocks all non-browser scraping
- `zerochan` — zerochan.net returns HTTP 503 (service unavailable)
- `igStalk` — Instagram API rate limiting (HTTP 429)