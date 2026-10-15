# Uma pasta por academia

    gyms/<nome>/
      gym.json          identidade: nome, frase, cores, SEO, WhatsApp, Instagram, caminhos do logo/vídeo
      public/
        brand/          logotipo (PNG transparente ou SVG)
        favicon.png
        media/          vídeo (mp4 + webm, sem áudio) e poster (webp) do hero
        images/         fotos da galeria, com os nomes abaixo

Fotos esperadas em `public/images/` (WebP, ~1600 px de largura). O que faltar vira um espaço "Foto em breve":

- Estrutura e equipamentos: `equipamentos-musculacao.webp`, `area-pesos-livres.webp`, `maquinas-detalhe.webp`, `area-treino.webp`
- Conheça o espaço: `ambiente-interno.webp` (panorâmica), `ambiente-interno-02.webp`, `ambiente-interno-03.webp`

Campos opcionais do `gym.json`: `brand`, `hero`, `contact` (sem `whatsapp`, os botões de WhatsApp somem), `sections` (títulos das seções).
Sem logotipo, o nome aparece em texto. Sem `hero`, o topo fica só com cor e título.

Nova academia: `npm run new-gym -- <nome>` copia o modelo `demo`.
