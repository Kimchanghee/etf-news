---
title: "ETF Tracking Difference and Tracking Error Explained"
description: "Compare ETF tracking difference and tracking error using matched benchmarks, return conventions and worked examples, without double-counting the fund expenses."
question: "How do tracking difference and tracking error differ?"
answer: "Tracking difference describes the return gap between a fund and its benchmark over a stated period. Tracking error describes the variability of periodic return gaps under a specified calculation. A fund can lag consistently with low variability, so the two measures answer different questions."
data_asof: "2026-10-16"
updated: "2026-10-16"
sources:
  - title: "Investor.gov: Investor Bulletin, Index Funds"
    url: "https://www.investor.gov/additional-resources/news-alerts/alerts-bulletins/investor-bulletin-index-funds"
  - title: "Investor.gov: Updated Investor Bulletin, Exchange-Traded Funds"
    url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
faq:
  - question: "Can tracking error be low when an ETF underperforms?"
    answer: "Yes. A persistent negative return gap can have little variability. Under a standard-deviation calculation, a constant periodic gap has zero tracking error even though it consistently lags."
  - question: "Should I add the expense ratio to historical tracking difference?"
    answer: "Not automatically. Fund returns already reflect operating expenses, so adding the fee again can double-count part of the observed shortfall. Check the return methodology first."
---

## What does the SEC source establish?

The SEC staff's index-funds bulletin explains that an index fund may hold every security in its index or use a sample. It may also use derivatives. The bulletin identifies imperfect tracking as a risk and says fees, expenses, trading costs and tracking error can cause underperformance. It does not promise that an index fund will reproduce its benchmark or prescribe a universal statistical formula for every provider's tracking-error figure.

That distinction matters when reading this guide. The return-gap and standard-deviation formulas below are explicit analytical conventions used here, not a claim that the SEC mandates those formulas. Some disclosures use the words tracking error broadly to mean divergence from an index. Before comparing two reported figures, look for the calculation methodology. A familiar label is not proof that the observations, frequency and annualization match.

## How do you calculate a return difference?

Choose a sign convention and keep it visible. Here, tracking difference equals the fund's total return minus the benchmark's total return over the same period. If a hypothetical ETF returns 7.8% and its benchmark returns 8.0%, the difference is negative 0.2 percentage points, or negative 20 basis points. It is not negative 0.2% of the benchmark's return, and it is not evidence that the published expense ratio must be 0.20%.

Use matched start and end dates, currency and dividend conventions. A price-only index omits distributions that a total-return series includes. Comparing an ETF total return with a price index can make the ETF appear to outperform for a reason unrelated to management. Likewise, a fund's market-price return and NAV return answer different questions. NAV performance focuses on the portfolio; a purchaser's actual execution also depends on exchange prices and transaction costs.

## What does variability add to the picture?

Suppose three hypothetical monthly fund-minus-index gaps are negative 0.10, negative 0.10 and negative 0.10 percentage points. Their average gap is negative 0.10 percentage points. Because each observation equals that average, their standard deviation is zero. Under this calculation the fund has zero tracking error for the sample, yet it falls behind every month. Low tracking error does not mean no cost or no underperformance.

Now consider gaps of negative 0.30, positive 0.10 and negative 0.10 percentage points. Their average is also negative 0.10. The deviations from the mean are negative 0.20, positive 0.20 and zero. Squaring and adding gives 0.08 in squared percentage-point units. Dividing by two for sample variance, then taking the square root, gives a monthly sample tracking error of 0.20 percentage points. These invented observations illustrate dispersion, not any fund's record.

## Is annualizing tracking error always straightforward?

A common convention scales a monthly standard deviation by the square root of 12. On the hypothetical second series, that would produce about 0.693 percentage points annually. This scaling assumes a suitable return process; it is not a promise about future annual divergence. Three observations are also far too few to establish a reliable assessment. State the sample period, observation frequency and variance convention whenever presenting a calculation.

Do not multiply the average monthly gap by 12 and call that the actual annual tracking difference. Actual total returns compound. For a full-period gap, compound each complete return series and subtract the resulting fund and benchmark returns. Averages of periodic differences are useful for describing observations, but they are not interchangeable with the difference between compounded returns. Missing observations should not be silently replaced with zero.

## Why does an index fund fail to match perfectly?

The SEC bulletin supplies several practical starting points: a sampled portfolio need not behave exactly like the whole index, and fees and trading costs reduce the fund's results. The index is a measurement framework, while the fund must operate an investable portfolio. A discrepancy therefore deserves investigation rather than an automatic accusation of poor management. Read the fund's prospectus and shareholder report for its actual approach and risks.

Start the investigation by validating your comparison. Is this the correct benchmark version? Did its composition or the fund's objective change? Are you comparing the same calendar period and distribution treatment? Are figures annualized or cumulative? These checks can resolve an apparent mismatch before assigning an economic explanation. If the available documents do not explain a gap, label the cause unknown instead of attributing it entirely to fees, taxes or a particular trading decision.

## How do you use both measures without double-counting?

Use tracking difference to describe the observed outcome relative to the specified benchmark and tracking error to describe the consistency of periodic gaps. Neither is a standalone rating. An actively managed ETF may not seek to replicate an index at all, so a low tracking-error target can be inappropriate. A short history or a changed mandate also limits how much an old number says about the current portfolio.

Finally, keep fund-level performance separate from investor-level execution. Read the [expense-ratio guide](/guides/expense-ratio/) to understand recurring operating costs and the [premium and discount guide](/guides/premium-discount-nav/) to distinguish exchange price from NAV. A comparison record should identify each series, source, period, formula and missing observation. That modest discipline is more useful than displaying an unexplained precision-heavy score that makes different funds look directly comparable when they are not.
