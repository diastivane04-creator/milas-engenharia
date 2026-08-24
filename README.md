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
| `RESEND_API_KEY` / `RFQ_NOTIFICATION_EMAIL` | Não (ver abaixo) | Envio de email dos pedidos de orçamento |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Não | Google Analytics |

**Nunca** coloque chaves ou credenciais directamente no código — usam-se
sempre variáveis de ambiente, e `.env.local` nunca é submetido ao
controlo de versões (já está no `.gitignore`).

## Ligar o Formulário RFQ a um Serviço de Email

O formulário em `/contacto` já valida, limita a taxa de pedidos (rate
limiting) e protege contra spam (campo *honeypot*) e injecção. Falta apenas
ligar o envio de email — a rota está em `app/api/rfq/route.ts`, com um
exemplo comentado usando o [Resend](https://resend.com). Basta:

1. Criar conta no Resend (ou outro fornecedor à escolha)
2. Adicionar `RESEND_API_KEY` e `RFQ_NOTIFICATION_EMAIL` às variáveis de
   ambiente do projecto
3. Descomentar o bloco de código correspondente na rota

Até lá, os pedidos submetidos ficam registados nos logs do servidor.

## Deployment (Vercel)

1. Publicar este repositório no GitHub/GitLab
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
