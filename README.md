# Site para academias (modelo de proposta)

Um único código, uma pasta de identidade por academia em `gyms/`. Veja `gyms/README.md` para o formato.

## Comandos

| O que fazer | Comando |
|---|---|
| Rodar o modelo neutro | `npm run dev` |
| Rodar uma academia | `npm run dev:gym -- ellus` |
| Criar uma academia nova (copia o modelo) | `npm run new-gym -- nome-da-academia` |
| Gerar o site de uma academia | `npm run build:gym -- ellus` (saída em `dist/ellus`) |
| Ver o site gerado | `npm run preview:gym -- ellus` |

Cada build leva **somente** os arquivos da academia escolhida, então uma proposta nunca carrega material de outra.

## Para trocar a identidade
1. `npm run new-gym -- nome`
2. Editar `gyms/nome/gym.json` (nome, frase, cores, SEO, WhatsApp, Instagram).
3. Colocar logotipo, vídeo/poster e fotos em `gyms/nome/public` (nomes em `gyms/README.md`).
4. Reiniciar o `dev` ao adicionar fotos novas (a lista de fotos é lida na partida).
