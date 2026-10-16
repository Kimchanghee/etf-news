# etfnewsdaily.online v2 — progress log (resume from here)

Branch `v2-cloudflare-static` (repo etf-news). Contract: `../CONTRACT.md`. Brief: `../BRIEFS.md`.
Concept: "The Fee Meter" — ETF cost calculators + new-ETF filings tracker (cost ledger / fine-print magnifier).

## Milestones
- [x] M0 Old AI-news app removed (commit "Remove old AI news app for v2 static rebuild"), pushed
- [ ] M1 Scaffold (Astro 5 static, wrangler.jsonc, site.config.ts) + refresh script + real data snapshot
- [ ] M2 Design system + layout + DESIGN_REFERENCES.md
- [ ] M3 Core data/tool pages
- [ ] M4 Trust/legal pages + 404
- [ ] M5 Guides (>=10) + content collection + RSS
- [ ] M6 SEO files (sitemap, robots, llms.txt, ads.txt, IndexNow, OG PNGs, JSON-LD)
- [ ] M7 gate.mjs + tests + refresh-build.ps1
- [ ] M8 QA (build/check/gate, curl crawl, Playwright 1440/390, scorecard, measure.md)
- [ ] M9 Final report

## Log
- 2026-10-15: M0 done.

## 2026-10-16 checkpoint A
Preserved 195d2b1 calculator source and dirty pnpm lock. Added static Fee Meter layout, four calculator routes, home/tools hub, real SEC snapshot (partial first batch, primary documents only), refresh with retain-on-failure. Existing node tests: 10/10 pass. Remaining: trust/content/SEO scripts and local QA. No deployment.

## 2026-10-16 checkpoint B (resume here; release NOT complete)
- Commit A 4601533: Fee Meter typography/layout, calculator-first home, 4 calculator routes, tool hub, SEC snapshot, source-boundary page, refresh-retain-on-failure. Existing 195d2b1 and dirty lock preserved.
- Added 6 trust/legal pages, one field-guide overview (NOT 10 articles), custom 404, default 1200x630 OG PNG generation, sitemap/index, robots, llms, ads.txt, IndexNow key file, structural/full-release gate, SEO scorecard and measurement plan.
- Real SEC initial observation: see src/data/filings.json asOf; 30 primary documents retained from first search batch / 292 total document matches, historical window 2026-10-01 through 2026-10-16. Not exhaustive; no product-launch validation claimed.
- Tests: pnpm test 10/10 passed. Astro static production build passed (15 HTML pages including 404), qa/build.log. node scripts/gate.mjs --structural passed with 0 structural errors and 8 metadata-length warnings (qa/gate.json). Full pnpm gate deliberately FAILS on documented release gaps.
- pnpm check did not finish within command timeout; do not claim typecheck clean. Local preview crawl, desktop/mobile screenshots, keyboard/browser interactions NOT completed. No browser tab was opened.
- Remaining hard gaps: 10 substantive original source-reviewed guides (800–1500 words each), Astro collection/frontmatter and RSS; current overview is not counted as a guide. Per-key-page OG images; breadcrumb/article/dataset LD; metadata lengths; actual source-body review for editorial claims; further calculator range/unit tests; GA4/consent/AdSense script integration (intentionally no tracking/ad requests yet); exact operator identity/contact mailbox verification. No claim of AdSense readiness.
- Refresh currently re-fetches the fixed historical window. Rolling window, pagination and exact new-fund identification remain incomplete. Failure preserves old snapshot and nonzero exit.
- scripts/*-setup.mjs and foundation.mjs are one-time checkpoint generators, NOT operational commands. Do not rerun over later edits. Runtime paths: refresh.mjs, og.mjs, postbuild.mjs, gate.mjs, refresh-build.ps1.
- No deploy, DNS, accounts, secrets or other site folder changes. Next owner can resume directly from this worktree without reset/clean.

## 2026-10-16 checkpoint C: four-guide bounded chunk
- Pushed implementation commit 381c872 on v2-cloudflare-static (base c8f6bc6). Added Astro content collection/schema, static guide routes, guide index, RSS autodiscovery/feed, visible FAQ + matching FAQPage, Article and BreadcrumbList schemas, related-guide/tool links.
- Four original guides: expense ratio (853 body words), tracking difference/error (868), spread/liquidity (883), premium/discount NAV (861). Directly inspected three official Investor.gov SEC staff original HTML bodies; source-review notes in content/source-review-20261016.md. Statistical conventions and hypothetical arithmetic explicitly distinguished from official guidance/current observations.
- Preserved all calculator source and the partial historical SEC snapshot byte-for-byte; no refresh, deploy, account, DNS or other site work. Ads/analytics remain OFF, no ad/analytics loader or fictitious consent-banner claim added.
- Added tests/guides.test.ts: content lengths, built HTML metadata, visible FAQ/schema equivalence, internal links, sitemap, RSS identities, no ad/analytics scripts, worked arithmetic.
- Verification boundary: initial build with THREE guides passed (18 HTML pages plus RSS). Fourth guide was subsequently written and committed. Final four-guide build/check attempts stalled without diagnostics after package banners; direct Astro invocation also timed out after 20s without output. Terminated the two outstanding verification processes. Do NOT claim final four-guide build, typecheck, tests or structural gate passed. Re-run pnpm build, pnpm test, pnpm check and node scripts/gate.mjs --structural in next bounded session. Earlier 10/10 calculator tests remain historical only.
- No browser tabs opened; no desktop/mobile visual QA claimed. Full release gate intentionally remains blocked. Six further substantive guides, per-key-page OGs, remaining non-guide schemas/metadata, full QA, operator/contact verification and account/CMP readiness remain. No deployment or 10-guide completion claim.


## 2026-10-16 checkpoint D: six-guide completion chunk
- Added six substantive English guides: index/active (857 body words), ETF/mutual-fund trading (871), bond duration (886), leveraged/inverse daily reset (875), U.S. distributions/tax boundaries (915), prospectus/holdings reading (919). Total collection: 10. Existing four guide bodies untouched.
- Direct primary-body review and precise limitations recorded in content/source-review-20261016.md. All six use collection schema, two visible FAQs/FAQPage, source links and related guides. Metadata titles 50–54 characters; descriptions 154–160.
- Expanded targeted guide/RSS tests to all ten and added arithmetic cases. Release gate remains fail-closed for outstanding site-wide QA and other existing gaps. No calculator, SEC snapshot, refresh, deploy, account, DNS or other site work.
- Verification: pnpm build PASSED, 25 HTML pages and RSS; pnpm test PASSED (23/23); node scripts/gate.mjs --structural PASSED, zero structural errors and the same 8 non-guide metadata warnings. Logs: qa/checkpoint-d-build.log, qa/checkpoint-d-tests.log, qa/checkpoint-d-gate.log (local ignored QA output). Collection schema validated by Astro build.
- pnpm check/typecheck, served crawl, keyboard interaction, desktop/mobile visual QA and full release QA NOT completed. No release-ready claim; existing per-page OG/non-guide schema, accounts/CMP, operator/contact and SEC rolling-refresh limitations remain. No deployment.
