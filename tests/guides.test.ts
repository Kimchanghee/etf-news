import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const ids=['expense-ratio','tracking-difference-error','spread-liquidity','premium-discount-nav'];
for(const id of ids)test('guide contract: '+id,()=>{
 const raw=fs.readFileSync('src/content/guides/'+id+'.md','utf8');const body=raw.split('---')[2];const words=body.trim().split(/\s+/).length;assert.ok(words>=800&&words<=1500,`body words ${words}`);
 const h=fs.readFileSync('dist/guides/'+id+'/index.html','utf8');const json=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m=>JSON.parse(m[1])['@graph']||[]);
 assert.ok(json.some(x=>x['@type']==='Article'&&x.dateModified));assert.ok(json.some(x=>x['@type']==='BreadcrumbList'));
 const faq=json.find(x=>x['@type']==='FAQPage');assert.equal(faq.mainEntity.length,2);for(const q of faq.mainEntity){assert.ok(h.includes(q.name));assert.ok(h.includes(q.acceptedAnswer.text));}
 assert.ok(h.includes('Sources inspected 2026-10-16'));assert.ok(h.includes('https://www.investor.gov/'));assert.ok((h.match(/href="\/guides\//g)||[]).length>=3);assert.ok(!h.includes('adsbygoogle.js')&&!h.includes('googletagmanager.com'));
 const title=h.match(/<title>(.*?)<\/title>/s)[1],desc=h.match(/name="description" content="([^"]*)"/)[1];assert.ok(title.length>=50&&title.length<=60);assert.ok(desc.length>=150&&desc.length<=160);
 assert.ok(fs.readFileSync('dist/sitemap.xml','utf8').includes('/guides/'+id+'/'));
});
test('RSS exactly covers four guides with stable identities',()=>{const rss=fs.readFileSync('dist/rss.xml','utf8');assert.equal((rss.match(/<item>/g)||[]).length,4);for(const id of ids)assert.ok(rss.includes('<guid isPermaLink="true">https://etfnewsdaily.online/guides/'+id+'/</guid>'));assert.ok(rss.includes('Fri, 16 Oct 2026 00:00:00 GMT'));});
test('worked examples use the stated formulas',()=>{assert.ok(Math.abs(10000*Math.pow(0.998,10)-9801.790433519494)<0.001);assert.ok(Math.abs(10000*Math.pow(0.995,10)-9511.101304657719)<0.001);assert.ok(Math.abs((100/101-1)*100+0.9900990099)<1e-8);assert.ok(Math.abs((100/99-1)*100-1.0101010101)<1e-8);assert.ok(Math.abs((100.1-99.9)*100-20)<1e-8);});
