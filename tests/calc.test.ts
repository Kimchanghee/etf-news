// Hand-computed cases for every calculator (node:test with Node's built-in type stripping).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { feeDrag, compareFees, ownershipCost, simpleCostPct, breakEvenYears, etfVsMutualFund, withholding, leveragedPath } from '../src/lib/calc.ts';
import { pickLength, buildDescription } from '../src/lib/seo.ts';

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

test('fee drag, two years by hand', () => {
  // Year 1: 1000 * 1.10 = 1100, fee 1% = 11, net 1089. Year 2: 1089 * 1.10 = 1197.9, fee 11.979, net 1185.921.
  const d = feeDrag({ initial: 1000, contribution: 0, years: 2, r: 0.10, er: 0.01 });
  near(d.net, 1185.921);
  near(d.gross, 1210);
  near(d.feesPaid, 22.979);
  near(d.totalCost, 24.079);
  near(d.forgoneGrowth, 1.1); // the year-1 fee of 11 would have earned 10% in year 2
  assert.equal(d.rows.length, 2);
});

test('fee drag closed form, 10 years at 7% and 1%', () => {
  const d = feeDrag({ initial: 10000, contribution: 0, years: 10, r: 0.07, er: 0.01 });
  near(d.net, 10000 * Math.pow(1.07 * 0.99, 10), 1e-6);
  near(d.gross, 10000 * Math.pow(1.07, 10), 1e-6);
});

test('contributions at the start of each year', () => {
  const d = feeDrag({ initial: 0, contribution: 100, years: 2, r: 0.10, er: 0 });
  near(d.gross, 231); // (100 * 1.1 + 100) * 1.1
  near(d.net, 231);
  assert.equal(d.contributed, 200);
  assert.equal(d.totalCost, 0);
});

test('compare two expense ratios', () => {
  const c = compareFees({ initial: 1000, contribution: 0, years: 1, r: 0, erA: 0.01, erB: 0.001 });
  near(c.a.net, 990);
  near(c.b.net, 999);
  near(c.difference, -9);
});

test('ownership cost with spread', () => {
  // invested 10000 * (1 - 0.001) = 9990; after 1 year at er 0.1%: 9980.01; sold at half-spread: 9970.02999
  const o = ownershipCost({ amount: 10000, years: 1, r: 0, er: 0.001, spread: 0.002, commission: 0 });
  near(o.invested, 9990);
  near(o.proceeds, 9970.02999);
  near(o.cost, 29.97001);
});

test('simple cost and break-even', () => {
  near(simpleCostPct({ amount: 10000, years: 5, er: 0.002, spread: 0.001, commission: 5 }), 0.012);
  // A: er 0.09%, spread 0.01%; B: er 0.03%, spread 0.10% -> (0.0010 - 0.0001) / (0.0009 - 0.0003) = 1.5 years
  near(breakEvenYears({ er: 0.0009, spread: 0.0001, commission: 0 }, { er: 0.0003, spread: 0.0010, commission: 0 }, 10000)!, 1.5);
  assert.equal(breakEvenYears({ er: 0.0003, spread: 0.0001, commission: 0 }, { er: 0.0009, spread: 0.0010, commission: 0 }, 10000), null);
  assert.equal(breakEvenYears({ er: 0.001, spread: 0.0001, commission: 0 }, { er: 0.001, spread: 0.001, commission: 0 }, 10000), null);
});

test('ETF vs mutual fund, one year by hand', () => {
  // Fund: 10000 * (1 - 5%) = 9500 -> * 1.1 * 0.99 = 10345.5 -> tax on 2% distribution at 20% = 41.382 -> 10304.118
  const r = etfVsMutualFund({ amount: 10000, years: 1, r: 0.10, etf: { er: 0, spread: 0, commission: 0, distRate: 0 }, fund: { er: 0.01, load: 0.05, distRate: 0.02 }, taxRate: 0.2 });
  near(r.fundEnd, 10304.118);
  near(r.etfEnd, 11000);
  near(r.fundTax, 41.382);
  near(r.loadPaid, 500);
});

test('dividend withholding levels', () => {
  const a = withholding({ amount: 100000, yield: 0.02, level1: 0.15, level2: 0, years: 0, r: 0 });
  near(a.dividends, 2000); near(a.lost1, 300); near(a.effectiveRate, 0.15); near(a.drag, 0.003);
  const b = withholding({ amount: 100000, yield: 0.02, level1: 0.30, level2: 0.10, years: 0, r: 0 });
  near(b.lost1, 600); near(b.lost2, 140); near(b.annualLeak, 740); near(b.effectiveRate, 0.37);
  const c = withholding({ amount: 1000, yield: 0.02, level1: 0.15, level2: 0, years: 2, r: 0.05 });
  near(c.cumulative, 1000 * (1.05 ** 2 - 1.047 ** 2)); // drag 0.3%: 1102.5 - 1096.209 = 6.291
});

test('leveraged and inverse decay', () => {
  const up = leveragedPath([0.10, -0.10], 2);
  near(up.indexReturn, -0.01); near(up.fundReturn, -0.04); near(up.naive, -0.02); near(up.gap, -0.02);
  const inv = leveragedPath([0.10, -0.10], -1);
  near(inv.fundReturn, -0.01); near(inv.naive, 0.01); near(inv.gap, -0.02);
  const trend = leveragedPath([0.01, 0.01, 0.01], 2); // a steady trend helps a 2x fund
  near(trend.fundReturn, 1.02 ** 3 - 1); assert.ok(trend.gap > 0);
});

test('SEO length helpers', () => {
  assert.equal(pickLength(['short', 'x'.repeat(55)], 50, 60), 'x'.repeat(55));
  assert.equal(buildDescription(['a'.repeat(100) + '.', 'b'.repeat(70) + '.', 'c'.repeat(50) + '.']).length, 153);
});
