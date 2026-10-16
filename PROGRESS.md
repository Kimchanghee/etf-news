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
