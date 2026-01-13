# Nobre Matilha - Pet Shop

Nobre Matilha é uma loja online de produtos e serviços para pets, construída com Next.js 16 e Tailwind CSS 4.

## Tecnologias

- **Framework:** Next.js 16.1.1 (App Router)
- **React:** 19.2.3
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + shadcn/ui
- **Animações:** Framer Motion
- **State Management:** TanStack React Query
- **Forms:** React Hook Form + Zod

## Estrutura do Projeto

```
nobre-matilha/
├── src/
│   ├── app/                    # App Router (páginas e layouts)
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial
│   │   ├── not-found.tsx       # Página 404
│   │   └── providers.tsx       # Providers (React Query, Theme)
│   ├── components/             # Componentes React
│   │   ├── ui/                 # Componentes UI (shadcn)
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...                 # Outros componentes
│   ├── hooks/                  # Custom hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib/                    # Utilitários
│       └── utils.ts
├── public/                     # Arquivos estáticos
├── tailwind.config.ts          # Configuração do Tailwind
├── components.json             # Configuração do shadcn/ui
├── next.config.ts              # Configuração do Next.js
└── tsconfig.json               # Configuração do TypeScript
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

## Instalação

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor será iniciado em [http://localhost:3000](http://localhost:3000).

## Alias de Imports

O projeto usa o alias `@/` para imports a partir da pasta `src/`:

```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
```

## Cores Personalizadas

O projeto inclui uma paleta de cores da marca "Nobre Matilha":

- `brand-navy` - Azul marinho (#1a2744) - Cor principal da marca
- `brand-navy-light` - Azul marinho claro - Variação para backgrounds
- `brand-gold` - Dourado (#D4A853) - Cor de destaque/CTA
- `brand-gold-light` - Dourado claro - Variação suave
- `brand-gold-dark` - Dourado escuro - Variação para ícones
- `brand-cream` - Creme (#FAF8F5) - Background principal
- `brand-cream-dark` - Creme escuro - Backgrounds secundários

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Licença

Este projeto é apenas para fins educacionais e de demonstração.
