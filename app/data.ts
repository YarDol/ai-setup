export const layers = [
  {
    num: "5",
    title: "You",
    subtitle: "Natural language",
    description:
      "Type what you want in plain English. No special syntax required.",
    color: "border-l-foreground bg-foreground/5",
    dot: "bg-foreground",
  },
  {
    num: "4",
    title: "Commands",
    subtitle: "SuperClaude",
    description:
      "31 slash commands give Claude structured workflows. /sc:implement, /sc:analyze, /sc:troubleshoot…",
    color: "border-l-blue-500 bg-blue-50",
    dot: "bg-blue-500",
  },
  {
    num: "3",
    title: "Infrastructure",
    subtitle: "everything-claude-code",
    description:
      "Language-specific agents, memory hooks, and rules that activate silently in the background.",
    color: "border-l-violet-500 bg-violet-50",
    dot: "bg-violet-500",
  },
  {
    num: "2",
    title: "Context",
    subtitle: "MCPs + Skills",
    description:
      "Live library docs, GitHub access, Figma designs — external knowledge injected on demand.",
    color: "border-l-emerald-500 bg-emerald-50",
    dot: "bg-emerald-500",
  },
  {
    num: "1",
    title: "Claude Code",
    subtitle: "The engine",
    description:
      "Reads your CLAUDE.md, uses tools, edits files. This is what everything else enhances.",
    color: "border-l-border bg-secondary/40",
    dot: "bg-muted-foreground",
  },
];

export const pages = [
  {
    href: "/setup",
    step: "01",
    title: "Setup",
    description: "Install and configure every layer in order. ~15 min.",
  },
  {
    href: "/concepts",
    step: "02",
    title: "Concepts",
    description: "CLAUDE.md, skills, MCPs, rules, hooks, plan mode.",
  },
  {
    href: "/tools",
    step: "03",
    title: "Tools",
    description: "What each tool does, install commands, marketplaces.",
  },
  {
    href: "/models",
    step: "04",
    title: "Models",
    description:
      "Haiku vs Sonnet vs Opus, and Claude Code vs Gemini CLI vs GPT Codex.",
  },
  {
    href: "/ides",
    step: "05",
    title: "IDEs",
    description:
      "VS Code, Cursor, Windsurf, WebStorm, Zed — connect Claude Code + use their AI.",
  },
  {
    href: "/pr-review",
    step: "06",
    title: "PR Review",
    description:
      "AI-powered PR review — free and near-free setups with CodeRabbit, Qodo, Kilo Code.",
  },
  {
    href: "/platforms",
    step: "07",
    title: "Platforms",
    description: "CLAUDE.md templates for Android, iOS, JS, monorepos.",
  },
  {
    href: "/security",
    step: "08",
    title: "Security",
    description: "Permissions, secrets handling",
  },
];
