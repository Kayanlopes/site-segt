# Site SEGT — Contexto do Projeto

## Stack
Next.js 15 (v16 release), App Router, TypeScript, Tailwind CSS v4, Framer Motion. Deploy no Vercel.

## Figma
- File key: Vb890R2VtfJSsLc3cDTWyB
- Node ID do design completo: 1:72
- Largura do design: 1920px

## Identidade Visual — Tokens de Cor
| Token CSS              | Hex       | Uso                          |
|------------------------|-----------|------------------------------|
| `--color-green`        | `#008743` | Verde principal (fundos, tabs)|
| `--color-green-dark`   | `#006A36` | Verde escuro (hover, sombras) |
| `--color-green-light`  | `#B3DBC7` | Verde claro (linhas deco, separadores) |
| `--color-yellow`       | `#F8AD2D` | Amarelo/dourado (headlines, CTAs) |
| `--color-black`        | `#000000` | Preto puro                   |
| `--color-white`        | `#FFFFFF` | Branco                       |
| `--color-text`         | `#1A1A1A` | Texto corrido                |
| `--color-border`       | `#F8AD2D` | Bordas (cards Missão/Visão)  |

## Tipografia
- **Fonte única:** Poppins — CSS var `--font-poppins`, Tailwind class `font-body`
  - Pesos carregados: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
  - Títulos/headlines: `font-bold` (700)
  - Texto corrido: `font-normal` (400)
  - NÃO existe mais `font-display` nem Jost

## Container e Espaçamentos
- Classe utilitária: `.container-segt`
  - `max-width: 1920px` + `margin-inline: auto`
  - Padding horizontal fluido: `clamp(24px, 8.6vw, 165px)`
- Padding vertical padrão de seção: `clamp(40px, 4.2vw, 80px)` via inline style
- Seções full-bleed (sem container): Hero, EmpresasAtendidas, CTAFinal

## Seções do Site (ordem em page.tsx)
1. **HeroSection** — 2 colunas full bleed, headline fluida, Vector-bg.svg como background
2. **TreinamentosDestaqueSection** — 4 cards amarelo/verde com ícones reais (SVG da public/)
3. **SobreSection** — 2 colunas, foto real (sobre-image.png) + parágrafo justificado
4. **NumerosSection** — 3 números (+04/+50/+100) com bordas amarelas, sem container fundo
5. **MissaoVisaoSection** — 3 cards border amarelo, label #F8AD2D, texto preto #000000
6. **AssessoriaSection** — 2 colunas, foto real (assesoria-image.png), ícones stars/check
7. **TreinamentosGridSection** — Grid 3×4, 12 NRs, fundo PRETO #000000, fotos reais
8. **EmpresasAtendidasSection** — Full bleed verde, marquee infinito com 21 logos reais
9. **AtendimentosSection** — Título primeiro, galeria assimétrica depois, 6 fotos reais
10. **FooterSection** — Full bleed #006A36, grid 3 colunas (logo+desc / links / contato), divisor + copyright + ícones sociais

## Convenção de Assets
- `public/` — raiz: imagem-capacete.png, sobre-image.png, assesoria-image.png, Vector-bg.svg
- `public/NR-*.png` — 12 fotos de treinamentos (NR-01 a NR-35)
- `public/logos empresa/` — 21 logos de empresas (SVG/PNG)
- `public/images-atendimentos-0*.png` — 6 fotos de atendimentos
- `public/logo/` — logo-segt.svg
- Ícones: Cipa-Icon.svg, Fire-icon.svg, empilhadeira-icon.svg, security-icon.svg, stars-icon.svg, check-icon.svg

## Regras de Componentes
- Cada seção = 1 arquivo em `src/components/sections/`
- Componentes reutilizáveis em `src/components/ui/`
- Cores SEMPRE via tokens CSS ou inline `style={{ color: "#008743" }}`
- Nunca usar as cores antigas #006B43 ou #F7AE2E — estão obsoletas
- Font sizes: sempre `clamp()` para tipografia fluida

## Contato
- Email: segt.assessoria@hotmail.com
- Telefones: (48) 99609-4054 / (48) 98819-0033
- WhatsApp: a confirmar com a cliente
