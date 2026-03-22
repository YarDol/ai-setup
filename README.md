# Claude Code — Team Setup

Curated Claude Code setup guide for development teams. Built as a Next.js documentation site.

**Live guide** → open `bun dev` and visit [localhost:3000](http://localhost:3000)

## Pages

| Page         | Content                                            |
| ------------ | -------------------------------------------------- |
| `/`          | Overview and tool stack at a glance                |
| `/setup`     | Step-by-step setup guide (start here)              |
| `/tools`     | Full tool reference table with install commands    |
| `/platforms` | CLAUDE.md templates for Android, iOS, JS, Monorepo |
| `/security`  | Settings, secrets handling, permission modes       |

## Recommended tool stack

| Tool                   | Type           | Purpose                           |
| ---------------------- | -------------- | --------------------------------- |
| SuperClaude            | Commands       | 31 structured slash commands      |
| everything-claude-code | Infrastructure | Agents, hooks, rules, memory      |
| Context7               | MCP            | Up-to-date library docs           |
| GitHub MCP             | MCP            | Issues, PRs, code search          |
| Figma MCP              | MCP            | Read designs into Claude          |
| Superpowers            | Plugin         | TDD, debugging, planning skills   |
| claude-mem             | Plugin         | Persistent session memory         |
| BMAD Method            | Agents         | Agile dev with specialized agents |

## This repo

```
.mcp.json          — MCPs configured: context7 + github + figma
.env.example       — Token env vars reference (copy to .env.local)
.claude/
  settings.json    — Safety permissions: deny .env*, rm -rf, pipe-to-shell
  skills/
    frontend-design/ — Impeccable skill (pbakaus/impeccable) for UI quality
CLAUDE.md          — Project instructions for Claude Code
```

## Dev

```bash
bun dev          # localhost:3000
bun run build    # production build
bun run lint     # eslint
bunx tsc --noEmit # type check
```
