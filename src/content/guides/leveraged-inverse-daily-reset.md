---
title: "Leveraged and Inverse ETFs: Daily Reset Risk Explained"
description: "Understand daily leveraged and inverse ETF objectives, compounding and path dependence. Test two-day examples without confusing targets with guaranteed returns."
question: "Why can leveraged ETF returns diverge over several days?"
answer: "Most leveraged and inverse ETFs target a multiple over a single daily measurement period. Compounding across resets means a longer holding-period return can differ substantially from that multiple."
data_asof: "2026-10-16"
updated: "2026-10-16"
sources: [{"title":"SEC Investor.gov: Characteristics of Mutual Funds and ETFs (April 29, 2025)","url":"https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds"},{"title":"FINRA: The Lowdown on Leveraged and Inverse Exchange-Traded Products (July 28, 2022)","url":"https://www.finra.org/investors/insights/lowdown-leveraged-and-inverse-exchange-traded-products"}]
faq: [{"question":"Does a 2x ETF promise twice my monthly return?","answer":"No. A daily objective applies to its stated daily measurement period, not automatically to a month or your personal holding period."},{"question":"Does perfect daily tracking eliminate risk?","answer":"No. Daily compounding can produce large longer-period differences even when the daily target is met."}]
---

## Read the measurement period first

A daily leveraged ETF seeks a multiple of its benchmark's return over a specified daily period. An inverse ETF seeks an opposite-direction return over its stated period. FINRA emphasizes that most geared exchange-traded products reset daily, generally from one trading close to the next. The multiple is not a promise about the return from whenever you buy to whenever you sell.

The period is part of the objective, not a footnote. A product with a monthly objective would require a different interpretation. Read the actual prospectus rather than assuming every geared product resets in the same way. This guide addresses daily-reset arithmetic and risks, not a specific fund, trading strategy or recommendation. Objectives remain targets and can fail to be achieved.

## Compounding changes the base each day

Suppose a hypothetical benchmark starts at 100, rises 10% to 110, then falls 10% to 99. Its two-day return is negative 1%, because the second change applies to 110 rather than the original 100. Adding positive 10 and negative 10 misses this change in the base. The same issue matters even more when each daily move is multiplied.

A hypothetical perfect 2x daily fund starts at $100, rises 20% to $120, then falls 20% to $96. It loses 4% over the two days, not twice the benchmark's 1% loss. Both daily targets were achieved in this simplified model. The difference is a consequence of compounding, not evidence by itself that the fund failed to track its daily objective.

A hypothetical perfect negative 1x daily fund starts at $100, falls 10% to $90, then rises 10% to $99. It also loses 1%. It does not gain 1% simply because the benchmark's overall return was negative 1%. Daily inverse exposure and the inverse of a multi-day return are different mathematical objects.

## A trend produces another result

Now consider a benchmark that rises 5% on each of two days. Starting from 100, it reaches 110.25, a 10.25% gain. A perfect 2x daily fund rises 10% each day, reaching $121 from $100, a 21% gain. That is greater than twice 10.25%. Daily compounding does not always cause a negative difference relative to a naive period multiple.

This second example is important because saying that leverage always decays is also misleading. The return depends on the sequence of daily outcomes, exposure multiple and costs. A trending illustration does not establish an attractive strategy: future paths are unknown, losses are magnified, and actual implementation may differ. Neither example includes fund fees, financing, taxes or tracking shortfalls.

## Intraday purchases add another boundary

FINRA notes that holding periods shorter than the objective period can also produce different exposure results. If the target is measured close to close, an investor entering halfway through the day did not start at the reference close. Do not apply the displayed daily multiple automatically to the market movement after your own execution time.

Your transaction also occurs at an exchange price. A market price can differ from NAV, and spreads or price changes can affect entry and exit. Our [NAV guide](/guides/premium-discount-nav/) and [spread guide](/guides/spread-liquidity/) explain those additional mechanics. A correct spreadsheet calculation of the target cannot eliminate trading friction or ensure an executable quote.

## Know how the exposure is created

FINRA describes the use of instruments such as swaps, futures and other derivatives to obtain geared exposure. Product structure matters. An exchange-traded note is debt issued by a financial institution, not the same ownership interest as a registered ETF portfolio. An exchange listing and a familiar-looking ticker do not make different legal structures interchangeable.

Read the principal strategy and risk sections to identify the actual instruments and their consequences. Financing, counterparty and market risks depend on the design. A single-stock leveraged ETF also does not provide broad diversification merely because it is packaged as a fund. Identify the benchmark or stock explicitly, rather than substituting the assumption that every ETF tracks a broad index.

## Costs and taxes are separate checks

Geared products may cost more than traditional products. Record disclosed expenses and understand that the simple daily arithmetic is usually not a full investor-level cost calculation. The [expense-ratio guide](/guides/expense-ratio/) separates operating expenses from other charges. Do not subtract a fee twice from a reported return that already reflects it.

FINRA also warns that resets can cause significant short-term gains and that these products may be less tax-efficient than traditional ETFs. That is not enough information to calculate a particular investor's tax bill. Legal structure, account type and tax residence matter. Consult the actual documents and appropriate tax guidance rather than importing assumptions from a conventional equity ETF.

## A pre-investment comprehension test

Write down the exact target multiple, measurement interval, benchmark, instruments, expenses and principal risks. Reproduce both an alternating-return scenario and a trending scenario. Then explain in plain language why the longer-period multiple differs. If that explanation remains unclear, the ticker's headline is not a sufficient basis for understanding the product.

Close monitoring does not make losses impossible, and a one-day holding period is not a safety guarantee. No execution or hedge is recommended here. The purpose is to recognize the limits of the stated objective and preserve uncertainty rather than replace a complex product with an oversimplified promise.
