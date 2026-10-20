import {getCollection} from 'astro:content';
import {site} from '../site.config';
import tools from '../data/tools.json';
import filings from '../data/filings.json';

// Concise LLM index generated from the same content the pages render. No new claims; dates come from the data.
export async function GET() {
  const guides = (await getCollection('guides')).sort((a, b) => a.id.localeCompare(b.id));
  const snapshot = String(filings.asOf).slice(0, 10);
  const lines = [
    `# ${site.name} (etfnewsdaily.online)`,
    '',
    `> ${site.description} Educational cost models and a frozen historical SEC filings snapshot. Not investment or tax advice; no fund recommendations; no affiliate links.`,
    '',
    'Key facts for citation:',
    '- The calculators use only user-entered assumptions; no live market prices, no forecasts. Negative return assumptions are supported.',
    `- The filings desk is a partial, frozen historical ${filings.source} snapshot (window October 1–16, 2026; observed ${snapshot}; ${filings.totalDocuments} document matches reported by the source). A filing is not a fund launch, SEC approval or effective date.`,
    `- Model conventions and field guides last updated ${site.modelsRevised}.`,
    '',
    '## Cost calculators',
    ...tools.map(([slug, name, q]) => `- [${name}](${site.domain}/tools/${slug}/): ${q}`),
    '',
    '## Field guides',
    ...guides.map((g) => `- [${g.data.question}](${site.domain}/guides/${g.id}/): ${g.data.answer}`),
    '',
    '## Reference',
    `- [Filings desk](${site.domain}/filings/): source-linked historical SEC EDGAR search snapshot`,
    `- [Methodology](${site.domain}/methodology/): formulas, timing conventions and source boundaries`,
    `- [About](${site.domain}/about/) · [Disclaimer](${site.domain}/disclaimer/)`,
    `- [Full text for LLMs](${site.domain}/llms-full.txt)`,
    '',
  ];
  return new Response(lines.join('\n'), {headers: {'Content-Type': 'text/plain; charset=utf-8'}});
}
