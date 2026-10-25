# Uma pasta por academia

    gyms/<nome>/
      gym.json          identidade: nome, cores, SEO, WhatsApp, Instagram, logotipo
      content.ts        textos da página, planos, FAQ, mensagens do WhatsApp (opcional)
      public/
        brand/          logotipo (PNG transparente ou SVG)
        favicon.png
        images/         fotos, com os nomes usados no content.ts

Sem `content.ts`, a página usa os textos neutros de `src/content/default.ts`.
Para personalizar, copie esse arquivo para `gyms/<nome>/content.ts` e troque o import do tipo
para `import type { SiteContent } from '../../src/content/types';` (veja `gyms/arven/content.ts`).

Fotos (WebP, ~1600 px de largura) usadas pelos textos padrão. O que faltar vira um espaço "Foto em breve":

- Topo: `equipamentos-musculacao.webp`
- Estrutura: `area-pesos-livres.webp`, `area-treino.webp`, `maquinas-detalhe.webp`, `ambiente-interno-02.webp`
- Diferenciais: `ambiente-interno-03.webp`
- Contato (fundo): `ambiente-interno.webp`

Os nomes podem ser outros: basta apontar o campo `file` no `content.ts`.

Campos do `gym.json`:
- obrigatórios: `name`, `theme.accent|ground|ink` (#rrggbb), `seo.title`, `seo.description`
- opcionais: `seo.siteUrl` (canonical, sitemap, og:image absoluto), `seo.image`, `brand`,
  `contact.whatsapp` (sem ele os botões de WhatsApp e o formulário somem), `contact.instagram`

Nova academia: `npm run new-gym -- <nome>` copia o modelo `demo`. Reinicie o `dev` ao adicionar fotos novas.
