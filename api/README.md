# ShoeMoney Arcade API

![Node](https://img.shields.io/badge/runtime-Node_22.13%2B-339933) ![Storage](https://img.shields.io/badge/storage-SQLite_WAL-003b57) ![Dependencies](https://img.shields.io/badge/runtime_dependencies-none-46a758)

Persistent, per-game high scores with expiring run tokens and safe retry handling. Uses Node's built-in HTTP, crypto, and SQLite modules.

## Run locally

From the arcade root:

```sh
npm test --prefix api
ARCADE_DB_PATH=/tmp/arcade-dev.sqlite \
ARCADE_DEV_ORIGIN=http://127.0.0.1:5174 \
PORT=3784 npm start --prefix api
```

| Environment variable | Behavior |
|---|---|
| `ARCADE_DB_PATH` | Required writable SQLite path; keep outside releases |
| `ARCADE_ORIGIN` | Allowed production origin; defaults to `https://arcade.shoemoney.com` |
| `ARCADE_DEV_ORIGIN` | Optional additional exact origin |
| `PORT` | Standalone default 3012; production and Vite proxy use 3784 |

The server always binds to `127.0.0.1`; `HOST` is not read. Use a same-origin reverse proxy. The API does not emit wildcard CORS headers.

## Request flow

`slug` must exist in `games.json`. POST requests require `Content-Type: application/json` and an approved `Origin`. `GET /api/health` checks database access.

### Last Engineer version 2

All paths below start with `/api/games/last-engineer`.

| Request | Contract |
|---|---|
| `POST /runs` | `{scoreVersion:2}` returns `runToken`, `scoreVersion:2`, and `expiresAt` with 201 |
| `POST /qualify` | `{runToken,scoreVersion:2,completedWaves,combatSeconds,wave,kills,headshots,duration}` freezes metrics and derives the score |
| Qualification response | `{scoreVersion:2,score,qualified,rank,limit,reason,scores}` |
| `POST /scores` | `{runToken,scoreVersion:2,name}` submits a name against frozen metrics |
| Accepted response | `{accepted:true,replayed,rank,scoreVersion:2,score}`; 201 for insertion, 200 for an identical retry |
| Displaced response | HTTP 200 with `{accepted:false,qualified:false,reason:"board_changed",scoreVersion:2,rank,scores}`; no insertion |
| `GET /scores` | Current version 2 board |
| `GET /scores?scoreVersion=1` | Preserved legacy board |

The client requests a name only after `qualified:true`. Zero completed waves return `reason:"complete_wave"`; other ineligible results use `below_cutoff`. Failed checks offer a retry without showing a name field. Submission rechecks the top-ten cutoff in the same transaction as insertion, so an initially qualifying run can be displaced while its form is open.

`api/rankedScore.mjs` derives points from completed waves and simulated combat time:

```js
const seconds = Math.round(combatSeconds * 1000) / 1000
const score = completedWaves * 10000
  + Math.min(9999, Math.floor(completedWaves * 6000 / Math.max(1, seconds)))
```

`combatSeconds` excludes preparation, train arrival, breaks, and pauses. `duration` is active real time, including preparation and breaks. Supported simulation speeds reach 2×, so validation permits combat time up to `2 * duration + 0.1`. Millisecond normalization prevents floating-point accumulation from changing equivalent scores. `wave` is the highest wave started, not the completed-wave count.

Qualification freezes canonical metrics on the run. Repeating it with changed metrics returns 409. Accepted submission retries use the same canonical name and token and remain valid after expiry or displacement from the displayed board.

Public scores include `id`, `name`, `score`, `scoreVersion`, `completedWaves`, `combatSeconds`, and ISO `createdAt`. Legacy rows have null combat metrics. Board reads return `{scores,scoreVersion,order:"highest"}`.

### Legacy version 1 and SMTD

`POST /runs` with `{}` still creates version 1 runs. Existing Last Engineer clients and SMTD retain their direct submission contract:

```json
{
  "runToken": "<issued token>",
  "name": "Player",
  "score": 4200,
  "wave": 5,
  "kills": 28,
  "headshots": 12,
  "duration": 180.5
}
```

Version 1 accepts the submitted score and has no qualification step. SMTD defaults to its version 1 board and cannot opt into Last Engineer's version 2 formula. Last Engineer's default board is version 2; existing version 1 rows remain stored and readable with the explicit version query.

## Rankings and retention

| Rule | Implementation |
|---|---|
| Ranking | Highest score first, then earlier creation time, then lower row ID |
| Display limit | `games.json` limit; currently 10 for Last Engineer and SMTD |
| `order` registry field | Preserved metadata only; changing it does not change ranking |
| Browser display | Arcade UI independently caps displayed rows at 10 |
| Retention | All accepted scores remain stored, including scores outside the top ten |
| Scope | Each game and scoring version has an independent board; multiple runs may share a name |

This is a **client-reported, unverified leaderboard**. Version 2 computes points on the server, but its gameplay metrics still come from the browser. Tokens prevent duplicate results; they do not authenticate players, simulate gameplay, or prove that reported metrics are genuine.

## Validation and retries

| Field | Accepted value |
|---|---|
| `name` | NFKC-normalized, trimmed, repeated ASCII spaces collapsed; 1–24 Unicode code points; control/format and line/paragraph separators rejected |
| `score` | Version 1 submitted integer from 0 through 1,000,000,000; version 2 derived by the server |
| `completedWaves` | Version 2 integer from 0 through 10,000, no greater than `wave` |
| `combatSeconds` | Version 2 finite seconds from 0 through 86,400, subject to the 2× duration bound |
| `wave` | Integer from 0 through 10,000 |
| `kills`, `headshots` | Integers from 0 through 10,000,000; headshots cannot exceed kills |
| `duration` | Finite seconds from 0 through 86,400 |
| `runToken` | Issued 256-bit random token, encoded as 43 base64url characters |

Names remain plain text. Render them as text, never HTML. Tokens are stored as SHA-256 hashes and expire after 24 hours for first submission. A SQLite transaction and unique token constraint permit one result per run.

| Status | Meaning |
|---|---|
| 201 | New run or newly accepted score |
| 200 | Board read, health, qualification, displaced submission, or accepted retry |
| 400 | Invalid JSON or fields |
| 403 | Missing/unapproved POST origin, or unapproved supplied origin on a score read |
| 404 | Unknown game/route or missing run |
| 405 | Unsupported method on a recognized endpoint |
| 409 | Conflicting metrics/name/version, or version 2 submission before qualification |
| 410 | Expired unsubmitted run still present in storage |
| 413 | JSON body exceeds 8,192 bytes |
| 415 | Content type is not JSON |
| 429 | Request or run issuance limit exceeded |

Expired unsubmitted runs are removed during periodic request-driven cleanup, so they may return 404 after cleanup instead of 410. Submitted token hashes remain for retry recovery, including after their original expiry.

<details>
<summary>Rate limits and proxy trust</summary>

Limits are per IP and per service process: 120 requests per minute and 30 issued runs per minute. Restarting the service resets counters. A 429 response includes `Retry-After: 60`.

Only loopback peers may supply the trusted `X-Real-IP`. Nginx must overwrite it with `$remote_addr`, as the checked-in template does. Never expose the Node listener directly or forward an arbitrary client-provided value.

GET score requests may omit Origin; if supplied, it must be allowed. POST requests must supply an allowed Origin. All JSON responses disable caching.

</details>

## Production operations

The checked-in service runs as `shoemoney`, uses port **3784**, and stores scores at:

```text
/srv/arcade/shared/scores.sqlite
```

The working directory is `/srv/arcade/current/api`. The service has a read-only system view, a writable shared directory, private temporary storage, restrictive umask, and restart-on-failure. SQLite initializes its schema and indexes additively at startup and uses WAL mode.

The nginx template permits **16k** request bodies; the API applies the stricter **8,192-byte** JSON limit. Nginx proxies `/api/` to `127.0.0.1:3784`. The committed template is HTTP-only; preserve the host's separately provisioned HTTPS configuration.

The deployer backs up SQLite using the backup API before activating a release. Keep the database and WAL outside release directories; do not copy a live database file alone as a backup. See the [arcade release workflow](../README.md#release-workflow) for payload validation and rollback.


### Schema migration and rollback compatibility

Version 2 additively adds score-version and frozen-result columns to `runs`, version/combat columns to `scores`, and a versioned ranking index. Existing rows default to version 1; accepted rows are retained.

Before activating this migration, deploy the compatibility update to the previous API so its run insertion names the four original columns:

```sql
INSERT INTO runs(token_hash,game,created,expires) VALUES(?,?,?,?)
```

The old positional `INSERT INTO runs VALUES(?,?,?,?)` fails after columns are added. The named-column compatibility release can create version 1 runs and scores against the migrated database, allowing operational rollback without restoring or losing score data. Its old unversioned board will temporarily mix scoring versions; restore the current API for separated rankings.

Keep `rankedScore.mjs` beside `server.mjs` in version 2 release payloads. Test migration and rollback against an isolated SQLite copy before deployment; health checks alone do not test score writes.
