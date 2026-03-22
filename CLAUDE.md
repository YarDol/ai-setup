# ai-setup — Claude Code Team Setup Guide

## What this repo is
A Next.js documentation website with our team's recommended Claude Code setup.
The guide lives at `/app` — plain TSX, no MDX.

## Commands
- Dev server: `npm run dev` (localhost:3000)
- Build: `npm run build`
- Type check: `npx tsc --noEmit`
- Lint: `npm run lint`

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS + shadcn/ui
- No database, no auth — static content site

## Design
- Target: developers, clean editorial style
- Run `/audit` (impeccable frontend-design skill) on pages before shipping
- No gradients, no glass effects, no generic AI aesthetics
- Left-aligned, asymmetric layouts with strong typography hierarchy

## Security
- Never read or modify `.env*` files
- Token env vars are in `.env.local` — use `.env.example` as reference only

## Compaction Instructions
When compacting, preserve: current page being built, list of modified files, any TypeScript errors.
