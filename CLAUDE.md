# Site SEGT — Contexto do Projeto

## Stack
Next.js 15, App Router, TypeScript, Tailwind CSS v4, Framer Motion. Deploy no Vercel.

## Identidade Visual
- Verde escuro: #006B43
- Amarelo/dourado: #F7AE2E
- Fundo: #FFFFFF
- Background decorativo: linhas vetoriais verdes e amarelas

## Seções do Site
1 - HERO: Logo SEGT + headline 'Construindo Ambientes de Trabalho Seguros.' em amarelo + subtítulo em preto + ícones Facebook e Instagram
2 - BANNER: Imagem de fundo verde com foto de capacete
3 - TREINAMENTOS: Cards com ícone + nome — CIPA NR05, Brigada de Incêndio NR23, Operador de Empilhadeira NR11, Lei Lucas
4 - SOBRE: Foto à esquerda + texto 'Com mais de uma década de experiência...' + botão expansível
5 - MISSÃO/VISÃO/VALORES: 3 cards brancos, label amarelo, texto verde
6 - ASSESSORIA: Tab ativa + headline amarela + lista de features com ícones
7 - SERVIÇOS/TREINAMENTOS: Tab + cards de serviço

## Convenção de Assets
- public/images/ para fotos
- public/icons/ para ícones SVG
- public/logo/ para o logo SEGT

## Regras de Componentes
- Cada seção é um componente separado em src/components/sections/
- Componentes reutilizáveis em src/components/ui/
- Cores via variáveis CSS definidas no globals.css

## Contato / CTA
A ser definido pela cliente (WhatsApp ou telefone).
