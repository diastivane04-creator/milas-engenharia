# Milas Engenharia e Obras Públicas — Website

Site institucional em Next.js para a Milas Engenharia e Obras Públicas, Lda,
construído a partir do perfil da empresa fornecido. Todo o texto, estatísticas,
serviços, fotografias de projectos e contactos vêm directamente desse
documento — nada foi inventado.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — sistema de tokens de design em `tailwind.config.ts`
- Sem CMS/base de dados: o conteúdo vive num único ficheiro tipado,
  fácil de editar (ver "Actualizar Conteúdo" abaixo)

## Instalação

Requer Node.js 18.18+ (recomendado: 20 LTS ou superior).

```bash
npm install
```

> **Nota sobre fontes:** o projecto usa `next/font/google` (Archivo, IBM Plex
> Sans, IBM Plex Mono). O primeiro `npm run build` ou `npm run dev` precisa de
> acesso à internet para descarregar essas fontes do Google Fonts — isto é
> normal e só acontece uma vez (ficam colocadas em cache localmente depois).

## Desenvolvimento

```bash
npm run dev
```

Abre em `http://localhost:3000`.

## Build de Produção

```bash
npm run build
npm run start
```

## Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sim | URL final do site (usado no sitemap, robots.txt, canonical e Open Graph) |
| `RESEND_API_KEY` | Sim, para receber pedidos por email (ver abaixo) | Chave de API do Resend |
| `RFQ_NOTIFICATION_EMAIL` | Não | Para onde os pedidos são enviados (por omissão, `milas.engenharia@gmail.com`) |
| `RESEND_FROM_EMAIL` | Não | Endereço de envio (ver abaixo) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Não | Google Analytics |

**Nunca** coloque chaves ou credenciais directamente no código — usam-se
sempre variáveis de ambiente, e `.env.local` nunca é submetido ao
controlo de versões (já está no `.gitignore`).

## Formulário RFQ — Recepção de Pedidos por Email

O formulário em `/contacto` valida os dados, limita a taxa de pedidos (rate
limiting), protege contra spam (campo *honeypot*) e injecção, e **já envia
email automaticamente** através do [Resend](https://resend.com) — só falta
configurar a chave de API:

1. Criar conta gratuita em [resend.com](https://resend.com)
2. Gerar uma API key em **Resend → API Keys**
3. Adicionar as seguintes variáveis de ambiente ao projecto (ver
   `.env.example`):
   - `RESEND_API_KEY` — a chave gerada no passo anterior
   - `RFQ_NOTIFICATION_EMAIL` — para onde os pedidos são enviados
     (por omissão, `milas.engenharia@gmail.com`)
   - `RESEND_FROM_EMAIL` — endereço de envio. Funciona de imediato com o
     endereço de teste do Resend (`onboarding@resend.dev`), mas para uso
     em produção recomenda-se verificar o domínio da Milas Engenharia no
     Resend e usar um endereço próprio (ex:
     `Milas Engenharia <rfq@milasengenharia.co.mz>`)

Cada email de notificação inclui todos os dados do pedido e tem o campo
"Responder a" (*reply-to*) já preenchido com o email de quem submeteu o
formulário — basta responder directamente ao email recebido.

Se `RESEND_API_KEY` não estiver definida, o formulário continua a validar e
registar os pedidos nos logs do servidor, mas não envia email — a pessoa que
submeter vê uma mensagem a informar que o envio falhou, para não pensar que
o pedido chegou quando na realidade não chegou.

**Local:** para testar em `npm run dev`, criar um ficheiro `.env.local`
(nunca commitado) com as mesmas variáveis.
**Vercel:** adicionar as variáveis em **Project → Settings → Environment
Variables**.

## Deployment (Vercel)

1. Publicar este repositório no GitHub/GitLab — o repositório já vem com
   `git init` feito e o primeiro commit criado. Basta criar um repositório
   vazio no GitHub e correr:
   ```bash
   git remote add origin https://github.com/SEU-UTILIZADOR/milas-engenharia.git
   git branch -M main
   git push -u origin main
   ```
2. Importar o repositório em [vercel.com](https://vercel.com)
3. Adicionar as variáveis de ambiente do `.env.example` no painel do
   projecto Vercel
4. Deploy — a Vercel detecta automaticamente o Next.js

## Domínio

1. Em **Vercel → Project → Settings → Domains**, adicionar o domínio
   (ex: `milasengenharia.co.mz`)
2. Escolher a versão canónica (com ou sem `www`) e a Vercel trata do
   redireccionamento automático da outra
3. Actualizar os registos DNS conforme instruído pela Vercel
4. Actualizar `NEXT_PUBLIC_SITE_URL` para o domínio final

HTTPS é activado automaticamente pela Vercel.

## Google Search Console

1. Aceder a [search.google.com/search-console](https://search.google.com/search-console)
2. Adicionar a propriedade com o domínio final
3. Verificar a propriedade (método DNS, recomendado, ou upload de ficheiro HTML)
4. Submeter o sitemap: `https://SEU-DOMINIO/sitemap.xml`
5. Usar "Inspeção de URL" para pedir a indexação de páginas específicas
6. Acompanhar em "Cobertura" o estado de indexação e possíveis erros
7. Acompanhar "Core Web Vitals" e "Consultas de pesquisa" regularmente

O `sitemap.xml` e `robots.txt` já são gerados automaticamente pelo Next.js
(`app/sitemap.ts` e `app/robots.ts`) — não precisam de manutenção manual,
actualizam-se sozinhos quando novas páginas são adicionadas.

## Google Analytics (opcional)

Se `NEXT_PUBLIC_GA_MEASUREMENT_ID` for definido, adicionar o snippet do
Google Analytics/Tag Manager em `app/layout.tsx` seguindo a documentação
oficial do Next.js para scripts de terceiros
(`next/script`, estratégia `afterInteractive`).

## Actualizar Conteúdo

Todo o conteúdo do site (nome, descrição, estatísticas, serviços, frota,
projectos, equipa, clientes, contactos) está centralizado em:

```
lib/content.ts
```

Editar este ficheiro é suficiente para actualizar texto em todas as páginas
— não é necessário tocar em componentes ou páginas para alterações de
conteúdo.

### Imagens

As fotografias reais da Milas (extraídas do perfil da empresa fornecido)
estão em `public/images/`. Para adicionar novas fotografias de projectos:

1. Colocar o ficheiro em `public/images/`
2. Referenciar o caminho (`/images/nome-do-ficheiro.jpg`) em `lib/content.ts`

### Perfil da Empresa (PDF)

O PDF descarregável em `/perfil-da-empresa` está em
`public/downloads/Milas-Engenharia-Perfil-da-Empresa.pdf`. Para actualizar,
substituir este ficheiro mantendo o mesmo nome (ou actualizar o caminho em
`app/perfil-da-empresa/page.tsx`).

## Estrutura de Páginas

```
/                     Home
/sobre                Sobre / Missão / Visão / Valores / Equipa
/servicos             Áreas de actuação + capacidade técnica (frota)
/projectos            Trabalho no terreno + pavimentação
/qualidade-seguranca  Segurança, qualidade, acompanhamento
/perfil-da-empresa    Download do perfil em PDF
/contacto             Formulário de pedido de orçamento (RFQ) + contactos
/privacidade          Política de privacidade (placeholder legal)
/termos               Termos e condições (placeholder legal)
```

## Notas Importantes

- **Nenhuma informação foi inventada.** Estatísticas, clientes, serviços e
  descrições vêm directamente do perfil da empresa fornecido. Nenhuma
  certificação (ex: ISO) é mencionada porque nenhuma foi fornecida — ao
  obter certificações reais, adicionar em `lib/content.ts` e criar uma
  secção correspondente em `app/qualidade-seguranca/page.tsx`.
- Os placeholders de **Política de Privacidade** e **Termos e Condições**
  devem ser revistos por um jurista antes da publicação.
- As redes sociais (LinkedIn, Facebook) não foram incluídas no rodapé por
  não terem sido fornecidas — adicionar links reais em `components/Footer.tsx`
  quando disponíveis.
