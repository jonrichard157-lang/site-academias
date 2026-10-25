# Site para academias (template VeyzaTech)

Landing page de conversão para academias, em React + TypeScript + Vite. Um único código,
uma pasta de identidade e conteúdo por academia em `gyms/`.

A academia de exemplo é a **Arven Academia** (`gyms/arven`), uma marca fictícia usada como
template comercial demonstrativo da VeyzaTech. Nome, logotipo, WhatsApp, endereço, planos, valores e depoimentos dela são exemplos.

## Comandos

| O que fazer | Comando |
|---|---|
| Rodar a Arven em desenvolvimento | `npm run dev:gym -- arven` |
| Gerar o site da Arven | `npm run build:gym -- arven` (saída em `dist/arven`) |
| Ver o site gerado | `npm run preview:gym -- arven` |
| Rodar o modelo neutro | `npm run dev` |
| Criar uma academia nova | `npm run new-gym -- nome-da-academia` |
| Lint | `npm run lint` |

Cada build leva **somente** os arquivos da academia escolhida.

## Estrutura da página

1. Header compacto (menu em painel no celular)
2. Topo com proposta de valor e CTA "Agendar uma visita"
3. Benefícios
4. Estrutura e equipamentos (galeria com ampliação)
5. Planos (cada plano abre o WhatsApp com o nome do plano)
6. Diferenciais
7. Depoimentos — opcionais, marcados como exemplos fictícios
8. Perguntas frequentes
9. CTA final com formulário opcional + rodapé

## Onde fica cada coisa

| Arquivo | Conteúdo |
|---|---|
| `gyms/<academia>/gym.json` | Nome, cores, SEO, WhatsApp, Instagram, logotipo |
| `gyms/<academia>/content.ts` | Todos os textos: seções, planos, áreas, FAQ, depoimentos, mensagens do WhatsApp, endereço e horários |
| `gyms/<academia>/public/images/` | Fotos (ver `gyms/README.md`) |
| `src/content/types.ts` | Formato do `content.ts` (o TypeScript aponta campos faltando) |
| `src/content/default.ts` | Textos neutros, usados quando a academia não tem `content.ts` |
| `src/components/sections/` | Uma seção por arquivo |
| `src/components/` | Peças reutilizáveis (botões, títulos de seção, foto, galeria, formulário) |

Nos títulos, `*palavra*` vira o destaque em itálico verde.

## Conversão

- Todo CTA de WhatsApp tem mensagem própria pré-preenchida (topo, header, cada plano, FAQ, contato, botão flutuante).
- O botão flutuante só aparece quando nenhuma seção com CTA (topo, planos, contato) está na tela.
- O formulário valida nome, objetivo e período e abre o WhatsApp com a mensagem montada.
  **Nenhum dado é enviado a servidor** — não há backend nem armazenamento.
- Cada CTA tem `data-cta="<id>"` e, se o Google Tag Manager estiver instalado, envia
  `{ event: 'cta_click', cta_id }` para o `dataLayer`. IDs: `header`, `menu-mobile`, `hero`,
  `plano-<id>`, `faq`, `contato`, `formulario`, `flutuante`.
- Não há cronômetros, urgência ou descontos.

## Antes do deploy (checklist)

1. **WhatsApp** — `contact.whatsapp` em `gym.json` com DDI + DDD + número, só dígitos (ex.: `5511999999999`).
   A Arven usa o número fictício `5511900000000`: troque pelo real antes de publicar.
   Sem esse campo, todos os botões de WhatsApp e o formulário somem.
2. **Domínio** — preencha `seo.siteUrl` (ex.: `https://arvenacademia.com.br`). Com ele o build gera
   `canonical`, `og:url`, `og:image` absoluto, `sitemap.xml` e a linha `Sitemap:` no `robots.txt`.
3. **SEO** — revise `seo.title` (até ~60 caracteres) e `seo.description` (até ~155).
   `seo.image` é a imagem de compartilhamento (ideal 1200×630).
4. **Conteúdo real** — troque em `content.ts` endereço, horários, planos e valores; remova
   `testimonials` (ou substitua por depoimentos reais autorizados) e esvazie `footer.disclaimer`.
5. **Fotos** — substitua as imagens ilustrativas por fotos reais (ver abaixo).
6. **Instagram** — `contact.instagram` (opcional).
7. **Vercel** — `vercel.json` já gera a Arven (`npm run build:gym -- arven`, saída `dist/arven`).
   Para outra academia, troque o nome nos dois campos.
8. **Analytics (opcional)** — adicione o snippet do GTM no `index.html` e crie um gatilho para o evento `cta_click`.

### Sobre as fotos da Arven

As fotos em `gyms/arven/public/images` são as imagens ilustrativas do modelo (ambientes sem pessoas).
Para a versão final, recomenda-se incluir fotos reais com pessoas treinando, mantendo os mesmos nomes
de arquivo (WebP, ~1600 px de largura).

## Qualidade verificada

- `tsc -b` e `oxlint` sem erros; build da Arven e do modelo neutro.
- Sem rolagem horizontal de 320 px a 1440 px.
- axe-core (WCAG 2 A/AA + boas práticas) sem violações no desktop e no celular.
- Teclado: link "Pular para o conteúdo", foco visível, menu fecha com Esc, FAQ com `<details>` nativo,
  erros do formulário com resumo focável e `aria-invalid`/`aria-describedby`.
- `prefers-reduced-motion` respeitado.
- Performance: foto do topo com `fetchpriority="high"`, demais com `loading="lazy"` e dimensões
  declaradas; fontes auto-hospedadas; JS ~80 kB gzip, CSS ~7 kB gzip.
