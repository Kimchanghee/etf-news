---
title: "ETF Premiums and Discounts to NAV: A Practical Guide"
description: "Understand ETF premiums and discounts to net asset value, match valuation timestamps, and calculate price effects without treating a discount as free profit."
question: "What does an ETF premium or discount to NAV mean?"
answer: "A premium means an ETF's market price exceeds its net asset value per share; a discount means the price is below it. Compare values from compatible times. A discount is not automatically a bargain, and the creation-redemption mechanism does not guarantee that gaps disappear."
data_asof: "2026-10-16"
updated: "2026-10-16"
sources:
  - title: "Investor.gov: Updated Investor Bulletin, Exchange-Traded Funds"
    url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
  - title: "Investor.gov: Mutual Fund and ETF Fees and Expenses, July 23, 2025"
    url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin"
faq:
  - question: "Is an ETF trading at a discount guaranteed to recover?"
    answer: "No. The discount may persist or widen, and the value of the underlying portfolio may fall. The ETF structure generally encourages alignment but does not guarantee a profitable convergence trade."
  - question: "Is NAV the price available to a retail buyer?"
    answer: "Not necessarily. Retail investors normally buy and sell ETF shares on an exchange at market prices. Direct creation and redemption with the fund generally involves authorized participants and large blocks."
---

## What is NAV measuring?

Net asset value per share is the value of the fund's assets minus its liabilities, divided by the number of shares. The SEC's ETF bulletin explains that registered ETFs calculate NAV every business day. It is a measure of the underlying investment portfolio, not a standing exchange quote at which every shareholder can trade. Retail investors ordinarily buy and sell ETF shares on national exchanges at market prices throughout the trading day.

This guide concerns the registered investment-company ETFs discussed in that bulletin. It should not be automatically applied to exchange-traded notes or commodity trusts with different structures. First identify the product's legal form. A familiar ticker and an exchange listing do not establish that two products share the same redemption rights, risks or valuation framework. Reading the prospectus is more useful than treating every exchange-traded product as interchangeable.

## How do you calculate a premium or discount?

Use the formula: market price divided by NAV, minus one, then multiplied by 100. For a hypothetical market price of $101 and NAV of $100, the result is positive 1%, a premium. At a $99 market price with the same NAV, it is negative 1%, a discount. The NAV must be positive for this ratio to have the intended meaning. A missing or invalid NAV should produce an unavailable result, not a zero gap.

The denominator matters. Dividing the $1 price difference by $101 instead gives about 0.9901%, which describes a different ratio. Record which market price is used, such as a specified closing price, rather than switching between the bid, ask, last trade and midpoint without explanation. These numbers are worked examples, not current fund data. The precision of the calculation cannot compensate for incompatible inputs.

## Why must the timestamps match?

The exchange price can change throughout the day while the published NAV belongs to a stated valuation time. Comparing an intraday quote with yesterday's NAV can combine portfolio movement and a valuation gap. A resulting percentage is therefore not automatically a clean measurement of a current premium or discount. Attach dates, times and the issuer's measurement convention before drawing a conclusion from the apparent difference.

The SEC bulletin directs readers to ETF websites for NAV, closing market price, historical premiums and discounts, portfolio holdings and median spreads. Use those disclosures to establish what each field actually represents. If the source supplies only a previous-business-day figure, label it accordingly. Do not replace an unavailable current NAV with an old value while retaining a live label. Our site provides education and a partial historical filings snapshot, not intraday fair-value estimates.

## How can a changing gap affect a return?

Imagine an ETF with NAV of $100, purchased at a 1% premium for $101. Later its NAV is still $100, but the shares trade at NAV and you sell for $100. Before spreads, commissions and taxes, the price return is $100 divided by $101 minus one, approximately negative 0.9901%. It is not exactly negative 1%, because the investment started at $101 rather than $100. This example isolates the premium change by holding NAV constant.

The reverse can help a return, but it is not assured. Buying at $99 and selling at $100 with unchanged NAV produces about positive 1.0101% before other costs. Now change the assumption: if NAV falls to $90 and the discount closes, selling at $90 still loses money from a $99 purchase. A favorable movement in the gap cannot by itself neutralize adverse movement in the underlying portfolio.

## Why do creation and redemption matter?

The SEC describes authorized participants as financial institutions, typically large broker-dealers, with arrangements to transact directly with the ETF. They generally exchange designated baskets of assets and cash for large blocks called creation units, or perform the reverse transaction. These processes differ from a retail investor placing an ordinary exchange order. Owning a few shares does not normally give the same direct redemption channel.

Arbitrage activity can encourage the market price to move toward NAV. The bulletin describes that alignment as an expected result of the structure, not a guarantee that every gap vanishes at once. It also warns that a trading market may not develop at all. Accordingly, do not promote a discount screen as a risk-free strategy. The investor still faces portfolio risk, execution costs and uncertainty about future market prices.

## How is this different from the bid-ask spread?

The [spread](/guides/spread-liquidity/) compares two exchange quotes: what buyers bid and sellers ask. A premium or discount compares a chosen market price with NAV. A fund could have a narrow bid-ask spread while both quotes are above its published NAV. Conversely, a midpoint near NAV does not mean the spread is narrow enough to make a particular transaction inexpensive. These are separate comparisons with separate reference values.

Before comparing funds, document the exact product, market-price convention, NAV timestamp, historical gap series and intended transaction size. Then review the [expense ratio](/guides/expense-ratio/) for ongoing ownership costs and [tracking difference](/guides/tracking-difference-error/) for benchmark-relative performance. None replaces the others. A useful decision record keeps these layers distinct and flags what is unknown, instead of converting a negative premium figure into an unsupported buy recommendation.
