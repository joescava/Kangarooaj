import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "_site";
function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = walk(root)
  .filter((p) => /\.(html|css|js|png|svg|webp|avif|json|ico)$/.test(p))
  .map((p) => p.replace(/^_site\//, "/"));

const sw = `self.addEventListener('install',e=>{e.waitUntil(caches.open('kaj-v1').then(c=>c.addAll(${JSON.stringify(files)})))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!=='kaj-v1').map(k=>caches.delete(k)))) )});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(r=>{caches.open('kaj-pages').then(c=>c.put(req,r.clone()));return r;}).catch(()=>caches.match('/index.html')));return;}
  if(/\.(css|js|png|svg|webp|avif)$/.test(new URL(req.url).pathname)){
    e.respondWith(caches.match(req).then(c=>c||fetch(req).then(r=>{const rc=r.clone();caches.open('kaj-static').then(ca=>ca.put(req,rc));return r;})));
  }
});`;
writeFileSync(join(root, "sw.js"), sw);
console.log("Service Worker generado en _site/sw.js");