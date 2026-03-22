export interface ClaudeModel {
  id: string;
  name: string;
  tier: string;
  tierColor: string;
  speed: number; // 1-3 dots
  cost: number; // 1-4 dots
  context: string;
  bestFor: string[];
  note: string;
  apiId: string;
}

export const claudeModels: ClaudeModel[] = [
  {
    id: "haiku",
    name: "Claude Haiku 4.5",
    tier: "Fast",
    tierColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    speed: 3,
    cost: 1,
    context: "200K tokens",
    bestFor: [
      "Explore subagent (codebase search)",
      "Quick reads and summaries",
      "Simple, repetitive tasks",
      "Skills that run frequently",
      "Token-sensitive workflows",
    ],
    note: "Default model for the Explore subagent. Use it whenever you need speed over depth.",
    apiId: "claude-haiku-4-5-20251001",
  },
  {
    id: "sonnet",
    name: "Claude Sonnet 4.6",
    tier: "Balanced",
    tierColor: "bg-blue-50 text-blue-700 border-blue-200",
    speed: 2,
    cost: 2,
    context: "200K tokens",
    bestFor: [
      "Default for all Claude Code sessions",
      "Most coding and editing tasks",
      "Skills without a model override",
      "General subagents",
      "Day-to-day development",
    ],
    note: "The right choice for 90% of tasks. Start here, upgrade to Opus only when it fails you.",
    apiId: "claude-sonnet-4-6",
  },
  {
    id: "opus",
    name: "Claude Opus 4.6",
    tier: "Powerful",
    tierColor: "bg-violet-50 text-violet-700 border-violet-200",
    speed: 1,
    cost: 4,
    context: "200K tokens",
    bestFor: [
      "Complex architecture decisions",
      "Hard reasoning and debugging",
      "Security audits",
      "Generating specs and PRDs",
      "Tasks where Sonnet misses nuance",
    ],
    note: "10–20× more expensive than Haiku. Never use for exploration, reading, or simple edits.",
    apiId: "claude-opus-4-6",
  },
];

export interface CompetitorRow {
  vendor: string;
  models: string;
  coding: "excellent" | "good" | "fair";
  reasoning: "excellent" | "good" | "fair";
  speed: "fast" | "medium" | "slow";
  context: string;
  cost: string;
  free: boolean;
}

export const competitorRows: CompetitorRow[] = [
  {
    vendor: "Anthropic (Claude)",
    models: "Haiku / Sonnet / Opus",
    coding: "excellent",
    reasoning: "excellent",
    speed: "fast",
    context: "200K",
    cost: "$–$$$$",
    free: false,
  },
  {
    vendor: "OpenAI (GPT)",
    models: "GPT-4o / o3 / o4-mini",
    coding: "excellent",
    reasoning: "excellent",
    speed: "medium",
    context: "128K",
    cost: "$$–$$$",
    free: false,
  },
  {
    vendor: "Google (Gemini)",
    models: "Flash / Pro / Ultra",
    coding: "good",
    reasoning: "good",
    speed: "fast",
    context: "1M",
    cost: "$–$$",
    free: true,
  },
];

export interface CodingTool {
  name: string;
  badgeColor: string;
  interface: string;
  agentic: boolean;
  mcp: boolean;
  cost: string;
  strengths: string[];
  weaknesses: string[];
}

export const codingTools: CodingTool[] = [
  {
    name: "Claude Code",
    badgeColor: "bg-foreground/5 text-foreground border-foreground/20",
    interface: "Terminal (CLI)",
    agentic: true,
    mcp: true,
    cost: "Paid — Claude Pro/Max/Team subscription",
    strengths: [
      "Best-in-class multi-file agentic editing",
      "Full skills, hooks, and MCPs ecosystem",
      "Plan mode and permission controls",
      "Works in any repo, any language",
      "Extended thinking via Opus 4.6",
      "1M token context window",
    ],
    weaknesses: [
      "Learning curve for skills/hooks",
      "High cost for extensive usage",
    ],
  },
  {
    name: "GPT Codex CLI",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    interface: "Terminal (CLI)",
    agentic: true,
    mcp: false,
    cost: "Free via OpenAI API credits (limited) · pay-per-token after, Paid - Plus, Pro, Business",
    strengths: [
      "Open-source — auditable and forkable",
      "Powered by o3/o4-mini (strong reasoning)",
      "Works with any OpenAI-compatible endpoint",
      "Access to large extension ecosystem",
    ],
    weaknesses: [
      "No skills or hooks system",
      "Smaller ecosystem than Claude Code",
    ],
  },
  {
    name: "Gemini CLI",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    interface: "Terminal (CLI)",
    agentic: true,
    mcp: true,
    cost: "Free tier — 1 000 req/day on Gemini 2.5 Pro · API key required, Paid - Pro, Ultra, Team",
    strengths: [
      "Most generous free tier of the three",
      "Open-source — Apache 2.0 licensed",
      "Google Search grounding built-in",
      "1M token context window",
    ],
    weaknesses: [
      "No skills or hooks system",
      "Less mature agentic capabilities",
      "Weaker on SWE-bench vs Claude/GPT",
      "Smaller extension ecosystem",
    ],
  },
];
