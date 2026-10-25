# Contexto do projeto

Template comercial de landing page para academias, da VeyzaTech. React 19 + TypeScript + Vite, CSS Modules.

- Academia de exemplo: **Arven Academia** (`gyms/arven`), marca 100% fictícia. Não usar dados de
  academias reais (o repositório começou com dados da "Ellus Academia", que foram removidos).
- Uma pasta por academia em `gyms/<slug>/`: `gym.json` (nome, cores, SEO, WhatsApp), `content.ts`
  (todos os textos, planos, FAQ, mensagens de WhatsApp) e `public/` (logo, favicon, fotos).
  Sem `content.ts`, vale `src/content/default.ts`. Formato em `src/content/types.ts`.
- `vite.config.ts` escolhe a academia pelo `--mode <slug>`, injeta cores/SEO/JSON-LD no HTML e
  gera robots.txt/sitemap. `vercel.json` gera a Arven (`dist/arven`).
- Seções em `src/components/sections/`, numeradas pela ordem em `src/App.tsx`.
- Regras de conteúdo: sem urgência falsa, cronômetros ou descontos inventados; depoimentos só
  marcados como fictícios; preços marcados como ilustrativos.
- Fotos atuais são ilustrativas (ambientes sem pessoas). A rede do ambiente remoto bloqueia bancos de imagem.
- Verificar antes de commitar: `npx tsc -b`, `npm run lint`, `npm run build:gym -- arven`.
