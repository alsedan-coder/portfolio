// Ajusta a cópia do GitHub Pages: as imagens usam caminhos como "/img/...",
// que precisam ganhar o prefixo do repositório ("/portfolio/img/...").
// Roda depois do build, só no GitHub Actions.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = process.env.BASE_PATH || '';
if (!base) process.exit(0);

let changed = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|txt)$/.test(name)) {
      const s = readFileSync(p, 'utf8');
      const t = s.replace(/(["'(])\/img\//g, `$1${base}/img/`);
      if (t !== s) { writeFileSync(p, t); changed++; }
    }
  }
}
walk('out');
console.log(`pages-base: ${changed} arquivos ajustados para ${base}`);
