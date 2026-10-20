import {getCollection} from 'astro:content';
import {site} from '../site.config';
import tools from '../data/tools.json';
import filings from '../data/filings.json';

type Row = {date: string; filer: string; form: string; name: string; url: string};

// Full-text companion to /llms.txt, generated from the guide bodies, calculator definitions and the frozen filings data.
export async function GET() {
  const guides = (await getCollection('guides')).sort((a, b) => a.id.localeCompare(b.id));
  const snapshot = String(filings.asOf).slice(0, 10);
  const rows = (filings.rows as Row[]) ?? [];
  const text = [
    `# ${site.name} (etfnewsdaily.online): full text`,
    '',
    `> ${site.description} Educational content, not investment or tax advice. No fund recommendations. No affiliate links.`,
    '',
    `Model conventions and guides last updated: ${site.modelsRevised}. Method: ${site.domain}/methodology/`,
    '',
    '# Cost calculators',
    '',
    'All calculators use only the user\'s inputs (no live prices). Expense ratios apply after the annual gross return; contributions arrive at the start of each year; trading cost uses half the spread on purchase and half on sale. Results are illustrative, not forecasts.',
    '',
    ...tools.map(([slug, name, q]) => `## ${name}\nURL: ${site.domain}/tools/${slug}/\nQuestion: ${q}\n`),
    '# Field guides',
    '',
    ...guides.map((g) => [
      `## ${g.data.title}`,
      `URL: ${site.domain}/guides/${g.id}/`,
      `Updated: ${g.data.updated}`,
      `Sources inspected: ${g.data.data_asof}`,
      '',
      `Question: ${g.data.question}`,
      `Answer: ${g.data.answer}`,
      '',
      (g.body ?? '').trim(),
      '',
      'FAQ:',
      ...g.data.faq.map((f) => `- Q: ${f.question}\n  A: ${f.answer}`),
      '',
      `Sources: ${g.data.sources.map((s) => `${s.title} <${s.url}>`).join('; ')}`,
      '',
    ].join('\n')),
    '# Filings desk (frozen historical snapshot)',
    '',
    `URL: ${site.domain}/filings/`,
    `Source: ${filings.source} <${filings.sourceUrl}>`,
    `Observed: ${snapshot}. Search window: October 1–16, 2026. The source reported ${filings.totalDocuments} document matches; this view keeps ${rows.length} primary documents from the first result batch, deduplicated by accession number, exhibits excluded. Not refreshed. A filing does not establish a new fund, SEC approval, an effective date or a trading launch.`,
    '',
    ...rows.map((r) => `- ${r.date} | ${r.filer} | ${r.form} ${r.name} | ${r.url}`),
    '',
  ];
  return new Response(text.join('\n'), {headers: {'Content-Type': 'text/plain; charset=utf-8'}});
}
