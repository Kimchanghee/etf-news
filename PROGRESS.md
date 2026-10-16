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
