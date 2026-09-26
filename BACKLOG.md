# Arcade maintenance backlog

## Fixed: score-name normalization can hide a successful submission

Priority: medium. Found during the documentation review.

The API normalizes names with NFKC and collapses repeated spaces. The game client previously used NFC and trimmed only, then required the returned name to match its submitted name exactly. A name such as `Alice  Smith` can be stored as `Alice Smith` while the client reports an unconfirmed result. Repeated retries are idempotent but do not resolve the display state.

Affected files: game `src/arcade/scoreClient.js` and arcade `api/server.mjs`. Align client normalization with the server and cover compatibility characters and repeated spaces in an end-to-end submission test before deploying the fix.

The game now normalizes the submitted name with NFKC, trim, and repeated-space collapse before freezing its retry payload. Actual isolated API verification covers fullwidth characters, repeated spaces, and a lost response followed by an identical retry without duplicate rows. Deployed in release 20260925231818-7caa7c. Live browser submission and identical replay passed.
