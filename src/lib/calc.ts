// Pure cost calculators. No imports so node:test can load this file directly.
// All rates are decimals (0.0003 = 0.03%). Money in the investor's own currency units.
// Model conventions are stated next to each function and repeated on the methodology page.

export type YearRow = { year: number; gross: number; net: number; feesPaid: number; cumFees: number };

/**
 * Expense-ratio drag. Contributions are added at the start of each year; the fund earns `r` and the
 * expense ratio `er` is taken from assets at year end: B(t+1) = (B(t) + c) * (1 + r) * (1 - er).
 * `gross` is the same path with er = 0. Fees paid in a year = (B + c) * (1 + r) * er.
 */
export function feeDrag(p: { initial: number; contribution: number; years: number; r: number; er: number }) {
  const years = Math.max(0, Math.floor(p.years));
  let gross = p.initial, net = p.initial, cumFees = 0;
  const rows: YearRow[] = [];
  for (let y = 1; y <= years; y++) {
    gross = (gross + p.contribution) * (1 + p.r);
    const pre = (net + p.contribution) * (1 + p.r);
    const fee = pre * p.er;
    net = pre - fee;
    cumFees += fee;
    rows.push({ year: y, gross, net, feesPaid: fee, cumFees });
  }
  const contributed = p.initial + p.contribution * years;
  const totalCost = gross - net; // fees paid + growth those fees would have earned
  return { rows, gross, net, feesPaid: cumFees, forgoneGrowth: totalCost - cumFees, totalCost, contributed, costShare: gross > 0 ? totalCost / gross : 0 };
}

/** Compare two expense ratios on the same inputs. */
export function compareFees(p: { initial: number; contribution: number; years: number; r: number; erA: number; erB: number }) {
  const a = feeDrag({ ...p, er: p.erA });
  const b = feeDrag({ ...p, er: p.erB });
  return { a, b, difference: a.net - b.net };
}

/**
 * Total cost of ownership for one lump sum held `years` years and then sold.
 * Buy at the ask and sell at the bid: each side costs half the quoted spread (as a fraction of mid price).
 * Commission is a flat amount per trade. Holding cost compounds as in feeDrag.
 * Benchmark = the same money growing at r with no costs at all.
 */
export function ownershipCost(p: { amount: number; years: number; r: number; er: number; spread: number; commission: number }) {
  const invested = p.amount * (1 - p.spread / 2) - p.commission;
  const grown = feeDrag({ initial: invested, contribution: 0, years: p.years, r: p.r, er: p.er }).net;
  const proceeds = grown * (1 - p.spread / 2) - p.commission;
  const benchmark = p.amount * Math.pow(1 + p.r, Math.max(0, Math.floor(p.years)));
  const cost = benchmark - proceeds;
  const tradingCost = p.amount * p.spread / 2 + p.commission + grown * p.spread / 2 + p.commission;
  return { invested, proceeds, benchmark, cost, costPct: cost / p.amount, tradingCost };
}

/**
 * Simple (non-compounding) round-trip cost in percent of the amount: spread + 2 commissions + er * years.
 * Used for the break-even holding period between two funds, the way fund-cost comparisons are usually quoted.
 */
export const simpleCostPct = (p: { amount: number; years: number; er: number; spread: number; commission: number }) =>
  p.spread + (2 * p.commission) / p.amount + p.er * p.years;

/**
 * Holding period (years) at which fund A (cheaper to trade, dearer to hold) and fund B cost the same,
 * using simpleCostPct. Returns null when one fund is cheaper on both counts (no crossover).
 */
export function breakEvenYears(a: { er: number; spread: number; commission: number }, b: { er: number; spread: number; commission: number }, amount: number): number | null {
  const tradeA = a.spread + (2 * a.commission) / amount;
  const tradeB = b.spread + (2 * b.commission) / amount;
  const dEr = a.er - b.er;
  if (dEr === 0) return null;
  const t = (tradeB - tradeA) / dEr;
  return t > 0 && Number.isFinite(t) ? t : null;
}

/**
 * ETF vs mutual fund share class over `years`, lump sum, pre-tax at sale.
 * Mutual fund: front-end load taken on purchase; annual expense ratio (12b-1 fees are part of the ER);
 * taxable distributions modeled as `distRate` of assets per year taxed at `taxRate`, paid out of the account
 * (B *= 1 - distRate * taxRate). ETF: half-spread on buy and sell plus commissions, its own distRate.
 */
export function etfVsMutualFund(p: {
  amount: number; years: number; r: number;
  etf: { er: number; spread: number; commission: number; distRate: number };
  fund: { er: number; load: number; distRate: number };
  taxRate: number;
}) {
  const years = Math.max(0, Math.floor(p.years));
  let etf = p.amount * (1 - p.etf.spread / 2) - p.etf.commission;
  let fund = p.amount * (1 - p.fund.load);
  let etfTax = 0, fundTax = 0;
  for (let y = 0; y < years; y++) {
    etf = etf * (1 + p.r) * (1 - p.etf.er);
    const te = etf * p.etf.distRate * p.taxRate; etf -= te; etfTax += te;
    fund = fund * (1 + p.r) * (1 - p.fund.er);
    const tf = fund * p.fund.distRate * p.taxRate; fund -= tf; fundTax += tf;
  }
  const etfEnd = etf * (1 - p.etf.spread / 2) - p.etf.commission;
  return { etfEnd, fundEnd: fund, difference: etfEnd - fund, etfTax, fundTax, loadPaid: p.amount * p.fund.load };
}

/**
 * Dividend withholding through a fund structure. Level 1: tax withheld by the source country on dividends
 * paid to the fund. Level 2: tax withheld by the fund's domicile on distributions to the investor.
 * Annual dividends = amount * yield. Leakage compounds as lost reinvestment over `years` at r.
 */
export function withholding(p: { amount: number; yield: number; level1: number; level2: number; years: number; r: number }) {
  const dividends = p.amount * p.yield;
  const lost1 = dividends * p.level1;
  const lost2 = (dividends - lost1) * p.level2;
  const annualLeak = lost1 + lost2;
  const effectiveRate = dividends > 0 ? annualLeak / dividends : 0;
  const drag = p.yield * effectiveRate; // return drag as a fraction of assets per year
  const years = Math.max(0, Math.floor(p.years));
  const noLeak = p.amount * Math.pow(1 + p.r, years);
  const withLeak = p.amount * Math.pow(1 + p.r - drag, years);
  return { dividends, lost1, lost2, annualLeak, effectiveRate, drag, cumulative: noLeak - withLeak };
}

/**
 * Daily-reset leveraged/inverse fund: product of (1 + L * daily index return). Compared with L times the
 * index's total return over the same days. Returns both and the gap ("decay" when negative).
 */
export function leveragedPath(dailyReturns: number[], L: number) {
  let idx = 1, fund = 1;
  for (const d of dailyReturns) { idx *= 1 + d; fund *= 1 + L * d; }
  const indexReturn = idx - 1;
  const fundReturn = fund - 1;
  return { indexReturn, fundReturn, naive: L * indexReturn, gap: fundReturn - L * indexReturn };
}
