# Local release evidence: 2026-10-16

Scope: etfnewsdaily.online, v2-cloudflare-static, starting at 1157c7f. No deployment or account work.

## Verified local result
- Astro check: 32 files, zero errors/warnings/hints (`qa/finish-check.log`).
- Production build: 25 HTML pages plus RSS (`qa/finish-build.log`).
- Tests: 25/25, including 23 existing checks plus consent ordering/region coverage and default network-loader/unique PNG contracts (`qa/finish-tests.log`).
- Full local gate: zero errors and metadata warnings, all 25 page-specific OG PNGs present. Local browser receipt is bound to the complete dist SHA256, so a changed build requires fresh browser QA.
- Dist fingerprint: `8bc39b5e87330e46902fb827bb13d76f5287d89fcc3212a44aa89a8803143566` (sorted path+byte hash, scripts/release-hash.mjs).
- Same-process runner starts Astro preview and installed Microsoft Edge, tests 390x1000 and 1440x1000, then closes browser and server. Home, expense-ratio tool, filings and expense guide return 200 without document overflow or page errors. Calculator submission and negative return work. Skip-link focus visible; main geometry stable across two frames after fonts load (not a field CLS score). Sitemap/index, robots, llms, ads.txt return 200; missing path returns 404.
- Screenshots: `qa/390--.png`, `qa/1440--.png`, corresponding `--tools-expense-ratio-`, `--filings-`, `--guides-expense-ratio-` files. Images inspected: readable ledger hierarchy, inputs and result wrapping, document-source boundaries. Mobile filing table needs horizontal scrolling: added explicit instructions and keyboard-focusable labeled region; source column reached in QA (`qa/390-filing-source-scroll.png`).
- Calculator library and SEC JSON remain byte-for-byte unchanged from 1157c7f. SEC observation remains 2026-10-16T13:55:37.579Z, 30 primary documents from first batch of 292 matches, historical October 1-16 window; not a launch feed.

## Analytics and ads boundaries
Valid PUBLIC_GA4_ID opts in to GA4. Global consent defaults granted, then EEA+UK+CH overrides all four storage/user-data/personalization flags to denied, wait_for_update 500, before config. tool_used sends the tool name only. Default build has no analytics or advertising loader. This is advanced consent-mode wiring, not a CMP or a consent collection interface; denied consent can still produce cookieless pings when GA4 is enabled. Privacy copy states this. Advertising remains hard OFF. No credentials/IDs were configured or verified.

## Still external, not claimed complete
Operator identity/contact delivery verification; production GA4/GSC setup; real certified CMP and legal/account review before any ad enablement. SEC rolling window, pagination and new-fund identification remain intentionally outside this historical research product. Local gate is not deployment authorization, AdSense approval, indexing or revenue evidence.

Reproduce: pnpm check; pnpm build; pnpm test; node scripts/browser-qa.mjs; pnpm gate. Browser QA requires the existing parent _qa-tools Playwright package and installed Edge. Evidence under qa is ignored; this summary is committed.
