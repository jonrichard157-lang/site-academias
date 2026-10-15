import { cpSync, existsSync } from 'node:fs';

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Uso: npm run new-gym -- <nome-em-minusculas-sem-espaco>');
  process.exit(1);
}
const target = `gyms/${slug}`;
if (existsSync(target)) {
  console.error(`${target} já existe.`);
  process.exit(1);
}
// As fotos e mídias do demo são fictícias: não vão para a academia nova (só a estrutura de pastas).
const DEMO_MEDIA = /[\\/]public[\\/](images|media)[\\/][^\\/]+\.(webp|avif|jpe?g|png|mp4|webm)$/i;
cpSync('gyms/demo', target, { recursive: true, filter: (src) => !DEMO_MEDIA.test(src) });
console.log(`Criado ${target}. Edite ${target}/gym.json e coloque os arquivos em ${target}/public.`);
console.log(`Rodar: npm run dev:gym -- ${slug}   |   Gerar: npm run build:gym -- ${slug}`);
