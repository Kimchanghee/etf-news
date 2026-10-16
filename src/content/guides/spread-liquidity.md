---
title: "ETF Bid-Ask Spreads: Liquidity and Trading Cost Guide"
description: "Learn what an ETF bid-ask spread costs, compare dollar and percentage quotes, and interpret liquidity without mistaking historical spreads for execution prices."
question: "What does an ETF bid-ask spread cost when you trade?"
answer: "The spread is the difference between the best quoted ask and bid. Buying at the ask and immediately selling at the unchanged bid loses the full spread before commissions. A quoted spread describes trading conditions at a moment, not a guaranteed price for every order size."
data_asof: "2026-10-16"
updated: "2026-10-16"
sources:
  - title: "Investor.gov: Updated Investor Bulletin, Exchange-Traded Funds"
    url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
  - title: "Investor.gov: Mutual Fund and ETF Fees and Expenses, July 23, 2025"
    url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin"
faq:
  - question: "Does commission-free trading remove the spread?"
    answer: "No. A broker's commission and the bid-ask spread are different costs. A zero-commission trade can still buy at the ask and sell at the bid."
  - question: "Is the full spread the cost of one purchase?"
    answer: "Relative to the midpoint of unchanged quotes, a purchase at the ask is half a symmetric spread above that midpoint. An immediate buy-and-sell round trip crosses the full spread. Neither calculation guarantees an actual execution."
---

## Which quote is the buying price?

The bid is the highest quoted price a buyer is willing to pay for a specified quantity, and the ask is the lowest quoted price a seller will accept. An investor buying immediately against the displayed selling quote would use the ask; an investor selling immediately against the displayed buying quote would use the bid. Confusing the two makes the cost look like a gain rather than a friction.

The SEC's ETF bulletin calls the spread a hidden cost because it can reduce potential returns without appearing as a separate brokerage commission. The same bulletin notes that more liquid ETFs with higher trading volume typically have tighter spreads. The word typically matters: it describes a relationship, not a rule that every high-volume fund must have a narrow quote whenever you trade. Inspect current conditions rather than substituting a popularity ranking for a quote.

## How do you calculate the dollar and percentage spread?

Consider hypothetical quotes of $99.90 bid and $100.10 ask. The dollar spread is $0.20 per share. The midpoint is the average of the two prices, $100.00. Under the midpoint convention used here, the percentage full spread is $0.20 divided by $100.00, multiplied by 100, which is 0.20%. That is 20 basis points. State the denominator because not every display uses the same convention.

Buying 100 shares at $100.10 costs $10,010 before other charges. Selling those same shares immediately at the unchanged $99.90 bid returns $9,990. The difference is $20. This is an illustrative round trip with no market movement and enough available size at both quotes. It is not a prediction that you will lose exactly $20, nor is it a measurement taken from an exchange.

## Why can half-spread and full-spread estimates both be valid?

A purchase at $100.10 is $0.10 above the $100 midpoint. For 100 shares, the purchase-side difference from that reference is $10. A sale at $99.90 is $10 below the same reference. Together they produce the $20 round-trip difference. There is no contradiction: half-spread and full-spread refer to different comparisons. The midpoint is a reference value here, not a price that a broker promises you can obtain.

Do not charge a full round-trip spread for a single purchase and then add another full spread for the sale unless your model explicitly intends that conservative assumption. Conversely, do not assume a round trip costs only half the spread. The [cost tools](/tools/) expose their assumptions so you can distinguish a one-way estimate from a buy-and-sell scenario. Actual quotes can change between purchase and sale, so the two legs should not automatically share one historical spread.

## What does a historical median spread tell you?

The SEC bulletin directs investors to ETF websites for the median bid-ask spread and other trading disclosures. A median summarizes a set of observations: half are on either side under the dataset's conventions. It is not a live executable offer, a worst-case spread or a promise about an unusually large trade. Read the measurement window and methodology before treating two median figures as comparable.

A historical median can be useful when screening similar funds, but keep the observation date attached. A figure recorded last month does not verify conditions now. For a concrete trade, check the current bid, ask, quoted quantity and timestamp through the trading venue or broker. If only delayed information is available, mark it as delayed rather than turning it into a purported live cost estimate. This site does not supply a real-time order book.

## How should liquidity and order size enter the comparison?

A narrow displayed spread describes the best available quotes for their stated quantities. It does not establish how much can trade at those prices. If the intended order is larger than the available quantity, an estimate based only on the best quote can understate the potential execution cost. This follows from what the quote represents; it is not a claim about the depth of any specific fund's market.

Before placing an order, understand the broker's order controls and read its explanation of price protection and execution risk. Price control and certainty of completion are different objectives. Do not treat an unfilled order as an executed trade, or a displayed midpoint as a fill. For educational comparisons, keep trade size constant between candidate funds and record the limits of your available data. An unsupported decimal place cannot replace missing execution information.

## How does the spread fit into total ETF cost?

Spreads concern trading, whereas the [expense ratio](/guides/expense-ratio/) concerns recurring fund operating expenses. Frequent trading can repeatedly incur trading friction; a long holding period changes the balance between one-time execution costs and ongoing expenses. Neither observation makes a particular holding period right for everyone. Portfolio risk, cash needs and the investment objective remain separate decisions from a cost calculation.

Also distinguish the spread from a [premium or discount to NAV](/guides/premium-discount-nav/). Bid and ask are two exchange quotes. NAV is a fund valuation, normally calculated at the end of the business day. A tight spread does not prove the market price equals NAV. The practical checklist is therefore separate: confirm comparable exposure, read ongoing fees, inspect current trading conditions, check valuation timestamps, and retain the assumptions behind every estimate. That avoids collapsing several different costs into one misleading headline number.
