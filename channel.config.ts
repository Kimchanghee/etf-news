import type { Locale } from './i18n';
export type Category = { slug: string; name: Partial<Record<Locale, string>>; };
export type RSSSource = { url: string; category: string; weight?: number; };
export const channel = {
  id: 'ETF',
  name: 'ETF와이어',
  tagline: 'ETF·펀드·패시브 투자, 매일 5분으로',
  description: '국내외 ETF, 액티브/패시브 펀드, 인덱스 투자, 자금 흐름을 초등생도 이해할 수 있게 정리합니다.',
  domain: 'etfwire.live',
  accent: 'blue',
  keywords: ['ETF', '펀드', '패시브', '인덱스', '자금흐름', '자산배분'],
  geo: { country: 'KR', region: 'Asia', primaryCity: 'Seoul' },
  rssSources: [
    { url: 'https://news.google.com/rss/search?q=ETF+%ED%95%9C%EA%B5%AD&hl=ko&gl=KR&ceid=KR:ko', category: 'market' },
    { url: 'https://news.google.com/rss/search?q=%ED%8E%80%EB%93%9C+%EC%9E%90%EA%B8%88&hl=ko&gl=KR&ceid=KR:ko', category: 'analysis' },
    { url: 'https://news.google.com/rss/search?q=ETF+inflows&hl=en&gl=US&ceid=US:en', category: 'market' },
    { url: 'https://news.google.com/rss/search?q=index+fund+passive&hl=en&gl=US&ceid=US:en', category: 'analysis' },
    { url: 'https://news.google.com/rss/search?q=BlackRock+Vanguard&hl=en&gl=US&ceid=US:en', category: 'breaking' }
  ] as RSSSource[],
  categories: [
    { slug: 'breaking', name: { ko: '속보', en: 'Breaking', ja: '速報', zh: '快讯', es: 'Última hora', pt: 'Última hora', de: 'Eilmeldung', fr: 'Dernières', ar: 'عاجل', hi: 'ब्रेकिंग', id: 'Terbaru' } },
    { slug: 'market',   name: { ko: '자금흐름', en: 'Flows', ja: '資金フロー', zh: '资金流', es: 'Flujos', pt: 'Fluxos', de: 'Mittelflüsse', fr: 'Flux', ar: 'التدفقات', hi: 'फ्लो', id: 'Aliran Dana' } },
    { slug: 'analysis', name: { ko: '분석', en: 'Analysis', ja: '分析', zh: '分析', es: 'Análisis', pt: 'Análise', de: 'Analyse', fr: 'Analyse', ar: 'تحليل', hi: 'विश्लेषण', id: 'Analisis' } },
    { slug: 'launches', name: { ko: '신규샃품', en: 'New Launches', ja: '新規上場', zh: '新发行', es: 'Lanzamientos', pt: 'Lançamentos', de: 'Neue Produkte', fr: 'Lancements', ar: 'إطلاقات جديدة', hi: 'नई लॉन्च', id: 'Peluncuran Baru' } }
  ] as Category[]
};
export type ChannelConfig = typeof channel;
