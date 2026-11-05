# Portfólio · Alan Gustavo Souza Santos

Product Designer · UX/UI · Design de Serviço.

O site é um prédio: cada andar é uma fase da minha carreira, cada **cômodo** é um estudo de caso completo e cada **janela** é um resumo curto. O painel do elevador fica sempre à mão para trocar de andar.

## Tecnologia

- Next.js (App Router) com exportação estática, React e TypeScript
- CSS próprio, sem framework
- Hospedagem: Cloudflare Pages

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em ./out
```

## Publicação na Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Node: 22 (arquivo `.node-version`)

## Estrutura

- `app/` páginas (térreo, andares, cômodos, sobre mim)
- `components/` painel do elevador, modelo de andar e blocos dos cômodos
- `lib/` andares e contato
- `public/img/` imagens dos casos
