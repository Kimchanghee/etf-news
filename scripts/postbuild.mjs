import fs from 'node:fs';import path from 'node:path';
// Sitemaps from the built pages. lastmod is the latest real content date (guide `updated` / frozen filings snapshot date),
// never the build time, so maintenance builds do not re-date the frozen historical content.
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const guideDates=fs.readdirSync('src/content/guides').filter(f=>f.endsWith('.md')).map(f=>fs.readFileSync(path.join('src/content/guides',f),'utf8').match(/^updated:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1]).filter(Boolean);
const snapshot=String(JSON.parse(fs.readFileSync('src/data/filings.json','utf8')).asOf).slice(0,10);
const lastmod=[...guideDates,snapshot].filter(d=>/^\d{4}-\d{2}-\d{2}$/.test(d)).sort().at(-1);
if(!lastmod)throw Error('No content date for sitemap lastmod');
const urls=walk('dist').filter(p=>p.endsWith('.html')&&!p.endsWith('404.html')).map(p=>'https://etfnewsdaily.online/'+path.relative('dist',p).replaceAll('\\','/').replace(/index.html$/,'')).sort();
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(u=>'<url><loc>'+u+'</loc><lastmod>'+lastmod+'</lastmod></url>').join('')+'</urlset>');
fs.writeFileSync('dist/sitemap-index.xml','<?xml version="1.0"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://etfnewsdaily.online/sitemap.xml</loc><lastmod>'+lastmod+'</lastmod></sitemap></sitemapindex>');
if(!fs.existsSync('dist/llms.txt')||!fs.existsSync('dist/llms-full.txt'))throw Error('llms endpoints missing from build');
