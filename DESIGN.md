---
version: alpha
name: FICAT-design-system
description: FICAT (Ficha Catalográfica) é uma ferramenta web para geração padronizada de fichas catalográficas no formato ABNT. O design system adota uma paleta de tons terra e bege — evocando papel envelhecido, bibliotecas e o ambiente acadêmico — com tipografia Geist Sans para leitura limpa em telas. O layout é centrado em formulário com prévia ao lado, numa estética que prioriza clareza, confiança e aridez visual proposital.

colors:
  canvas: "#f7f2ea"
  surface: "#ffffff"
  surface-warm: "#fff7ec"
  surface-alt: "#fdf6ee"
  surface-soft: "#f7efe6"
  ink-deep: "#1f1c18"
  ink: "#2d241a"
  ink-secondary: "#5a4a3b"
  ink-muted: "#6b5b4b"
  ink-subtle: "#7a6246"
  ink-label: "#473828"
  ink-tag: "#6b4f2d"
  hairline: "#e3d5c3"
  hairline-soft: "#e5d4c1"
  hairline-medium: "#d7c4ab"
  hairline-strong: "#e0d1be"
  hairline-divider: "#ead9c6"
  badge: "#ead8c0"
  accent: "#d3a86b"
  accent-deep: "#a0763c"
  accent-ring: "#e2c08b"
  accent-bright: "#8b6b4a"
  gradient-top: "#efe4d4"
  preview-border: "#d6c2ab"
  button-primary: "#2d241a"
  button-primary-hover: "#1f1812"
  button-primary-text: "#f9f4ee"

typography:
  hero:
    fontFamily: Geist Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -0.02em
  heading-1:
    fontFamily: Geist Sans
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
  heading-2:
    fontFamily: Geist Sans
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
  heading-3:
    fontFamily: Geist Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
  heading-4:
    fontFamily: Geist Sans
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.30
  body:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
  body-sm:
    fontFamily: Geist Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  caption:
    fontFamily: Geist Sans
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  micro:
    fontFamily: Geist Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.05em
    textTransform: uppercase

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px

rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  xxxl: 28px
  full: 9999px

shadows:
  card: "0 24px 80px -60px rgba(0, 0, 0, 0.6)"
  card-sm: "0 16px 40px -40px rgba(0, 0, 0, 0.7)"
  card-md: "0 24px 60px -55px rgba(0, 0, 0, 0.7)"
  card-lg: "0 18px 50px -40px rgba(0, 0, 0, 0.6)"

components:
  metric-card:
    background: "{colors.surface}"
    border: "1px solid {colors.hairline-soft}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
    shadow: "{shadows.card-sm}"
  text-input:
    background: "{colors.surface}"
    border: "1px solid {colors.hairline-strong}"
    rounded: "{rounded.xl}"
    padding: "0 {spacing.md}"
    height: 44px
    typography: "{typography.body-sm}"
    text-color: "{colors.ink}"
  text-input-focused:
    border: "2px solid {colors.accent-deep}"
    ring: "{colors.accent-ring}"
  button-primary:
    background: "{colors.button-primary}"
    text-color: "{colors.button-primary-text}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "0 24px"
    typography: "{typography.body-sm}"
    font-weight: 600
  button-secondary:
    background: "transparent"
    text-color: "{colors.ink}"
    border: "1px solid {colors.hairline-medium}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "0 24px"
    typography: "{typography.body-sm}"
    font-weight: 600
  card-form:
    background: "{colors.surface}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    shadow: "{shadows.card}"
  card-preview:
    background: "{colors.surface-warm}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xl}"
    shadow: "{shadows.card-md}"
  preview-inner:
    background: "{colors.surface}"
    border: "1px solid {colors.preview-border}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    shadow: "inset 0 1px 2px rgba(0,0,0,0.05)"
  pill-tag:
    background: "{colors.badge}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
    typography: "{typography.caption}"
  badge-section:
    background: "{colors.surface}"
    border: "1px solid {colors.hairline-medium}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    typography: "{typography.micro}"
    text-color: "{colors.ink-tag}"
  info-row:
    border-bottom: "1px solid {colors.hairline-divider}"
    padding: "0 0 {spacing.sm}"
---

## Visão Geral

FICAT é uma ferramenta de ficha catalográfica — um formulário que gera a prévia da ficha no formato ABNT. O design system foi construído em torno de três princípios: **clareza acadêmica** (tipografia limpa, espaçamento generoso), **materialidade** (cores que lembram papel envelhecido e encadernação) e **consistência** (sistema de tokens aplicado em toda a interface).

A página principal divide-se em duas colunas: formulário à esquerda (~55%) e painel de prévia + informações à direita (~45%). O formulário é organizado em seções (Dados da Obra, Autoria, Instituição, Complementares) com campos em grid 2-col. A prévia da ficha é renderizada em um cartão de fundo aquecido que simula o papel da ficha impressa.

## Cores

### Superfície
- **Canvas** (`#f7f2ea`): Fundo da página — bege claro que remete a papel craft/papel envelhecido
- **Surface** (`#ffffff`): Cartões, inputs, superfícies de conteúdo primário
- **Surface Warm** (`#fff7ec`): Cartão de prévia — tom mais quente que simula papel
- **Surface Alt** (`#fdf6ee`): Itens secundários dentro de cartões
- **Surface Soft** (`#f7efe6`): Dicas, banners informativos

### Texto
- **Ink Deep** (`#1f1c18`): Quase preto para contraste máximo em títulos
- **Ink** (`#2d241a`): Marrom escuro para headings e labels
- **Ink Secondary** (`#5a4a3b`): Corpo de texto
- **Ink Muted** (`#6b5b4b`): Metadados, captions
- **Ink Subtle** (`#7a6246`): Labels de métricas em uppercase
- **Ink Label** (`#473828`): Rótulos de campos, linhas de prévia
- **Ink Tag** (`#6b4f2d`): Badges, tags

### Linhas & Bordas
- **Hairline** (`#e3d5c3`): Borda principal de cartões
- **Hairline Soft** (`#e5d4c1`): Bordas secundárias
- **Hairline Medium** (`#d7c4ab`): Badges, pills, botões secundários
- **Hairline Strong** (`#e0d1be`): Input fields
- **Hairline Divider** (`#ead9c6`): Separadores de linha

### Acentos
- **Accent** (`#d3a86b`): Elementos decorativos (blur, glow)
- **Accent Deep** (`#a0763c`): Foco de input (border)
- **Accent Ring** (`#e2c08b`): Foco de input (ring)
- **Accent Bright** (`#8b6b4a`): Glow decorativo secundário

## Tipografia

**Geist Sans** — typeface desenhada pela Vercel, de característica geométrica e legibilidade exemplar em telas. Usada em toda a interface. O contraste controlado entre pesos 400, 500 e 600 cria hierarquia sem necessidade de variações extremas.

| Token | Size | Weight | Line H | Use |
|---|---|---|---|---|
| `hero` | 48px → 36px | 600 | 1.10 | Headline principal |
| `heading-1` | 36px | 600 | 1.15 | Título de página |
| `heading-2` | 28px | 600 | 1.20 | Título de seção |
| `heading-3` | 22px | 600 | 1.25 | Título de cartão |
| `heading-4` | 18px | 600 | 1.30 | Título de fieldset |
| `body` | 16px | 400 | 1.50 | Corpo primário |
| `body-sm` | 14px | 400 | 1.50 | Corpo secundário, inputs |
| `caption` | 12px | 500 | 1.40 | Metadados, badges |
| `micro` | 11px | 600 | 1.40 | Tag de seção (uppercase) |

## Layout

### Grid
- **Desktop**: 2-col layout (formulário + sidebar)
- **Max-width**: 1280px (`max-w-6xl` ≈ 1152px)
- **Gutters**: 24px (`gap-10` entre colunas)
- **Form**: grid 2-col para campos dentro de cada fieldset

### Seções do Formulário
1. **Dados da Obra** — título, subtítulo, ano
2. **Autoria** — autor, orientador, coorientador
3. **Instituição** — instituição, programa, cidade
4. **Dados Complementares** — paginação, palavras-chave, natureza

### Sidebar
1. **Prévia da ficha** — renderização ao vivo no formato ABNT
2. **Checklist rápido** — informações de referência (CDU, CDD, etc.)

## Elevação

| Nível | Shadow | Uso |
|---|---|---|
| 0 (flat) | Nenhuma | Inputs, badges, tags |
| 1 (sm) | `shadow-card-sm` | Metric cards, info items |
| 2 (md) | `shadow-card-md` | Preview card |
| 3 (lg) | `shadow-card-lg` | Info card (checklist) |
| 4 (card) | `shadow-card` | Form card principal |

### Depth Decorativo
- Glows sutis com `accent` e `accent-bright` usando `blur-3xl` atrás do container principal
- Gradiente radial suave do topo (`gradient-top` → transparent) para profundidade atmosférica

## Cantos

| Token | Valor | Uso |
|---|---|---|
| `rounded-sm` | 6px | Discount badges (futuro) |
| `rounded-md` | 8px | (reservado) |
| `rounded-lg` | 12px | (reservado) |
| `rounded-xl` | 16px | Metric cards, preview inner |
| `rounded-xxl` | 20px | (reservado) |
| `rounded-xxxl` | 28px | Cartões principais (form, preview, info) |
| `rounded-full` | 9999px | Badges, pills, botões |

## Componentes

### Botões
- **Primary**: Fundo escuro `button-primary`, texto claro, pill (`rounded-full`), 44px height, 14px semibold
- **Secondary**: Outline `hairline-medium`, texto `ink`, pill, 44px height

### Inputs
- 44px height, `rounded-xl`, borda `hairline-strong`
- Foco: borda `accent-deep` + ring `accent-ring`
- Rótulo acima em `ink-label` 14px medium

### Cartões
- **Form card**: `rounded-xxxl`, `hairline` borda, fundo `surface`, padding 24px
- **Preview card**: `rounded-xxxl`, fundo `surface-warm` (tom de papel), tags em `badge`
- **Info card**: Mesma estrutura do form card, com lista de informações

### Badges & Tags
- **Section tag**: Badge no topo da página ("FICAT · Gerador...") em `rounded-full` com borda, uppercase tracking largo
- **Draft tag**: Dentro do preview, badge `rounded-full` com borda
- **Pill tags**: Abaixo da prévia, fundo `badge`, `rounded-full`, caption size
- **Metric tags**: Uppercase com tracking, cor `ink-subtle`

## Diretrizes

### Do
- Usar `canvas` como fundo de página para manter o tom acolhedor de papel
- Preferir `ink` para headings e `ink-secondary` para corpo
- Manter inputs com 44px de altura para touch target acessível
- Usar `rounded-full` em todos os botões e badges
- Aplicar `rounded-xxxl` nos cartões principais

### Don't
- Não usar cores vibrantes ou saturadas — a paleta é propositalmente sóbria
- Não adicionar sombras pesadas; `shadow-card` é o máximo
- Não misturar cantos vivos com cantos arredondados no mesmo contexto

## Breakpoints

| Nome | Largura | Mudanças |
|---|---|---|
| Mobile | < 768px | Layout 1-col (form + sidebar empilhados), hero 36px |
| Tablet | 768 – 1023px | 2-col mantido, hero 36px |
| Desktop | ≥ 1024px | Layout 2-col completo, hero 48px |

## Iteração

1. Altere tokens no `@theme` do `globals.css`
2. Substitua classes Tailwind nos componentes da página
3. Para novos componentes, crie em `packages/ui/src/` com estilos via `var(--color-*)`
4. Execute `npm run lint` após alterações
