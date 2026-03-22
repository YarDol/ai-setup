export interface PRTool {
  id: string;
  name: string;
  tagline: string;
  price: string;
  freeTier: string;
  freeTierNote?: string;
  setupComplexity: "zero" | "low" | "medium";
  model: string;
  strengths: string[];
  weaknesses: string[];
  badgeColor: string;
}

export const prTools: PRTool[] = [
  {
    id: "coderabbit",
    name: "CodeRabbit",
    tagline: "Easiest setup — paid after 14-day trial",
    price: "14-day Pro trial · Pro $24/seat/month (annual)",
    freeTier:
      "Free plan = 14-day Pro trial (no credit card). After trial: Pro required for private repos at $24/seat/month. OSS public repos: unlimited free forever.",
    freeTierNote:
      "Private repos are NOT free after the trial. If your team works on private repos, budget $24/seat/month or use Qodo PR-Agent (OSS) instead.",
    setupComplexity: "zero",
    model: "Claude + GPT (their infra, no key needed)",
    strengths: [
      "Zero setup — install GitHub app, done in 2 minutes",
      "Line-by-line PR comments with full context",
      "PR summaries reduce review time significantly",
      "OSS public repos: unlimited free forever",
      "14-day Pro trial — worth testing",
    ],
    weaknesses: [
      "Private repos require Pro after 14-day trial ($24/seat/month)",
      "5-person team = $120/month — expensive",
      "No model choice — uses their infrastructure",
    ],
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "qodo",
    name: "Qodo PR-Agent",
    tagline: "Best free — self-hosted on GitHub Actions",
    price: "Free (OSS, self-hosted) · Hosted free: 75 reviews/month/org",
    freeTier:
      "Open-source. Run on GitHub Actions with your own API key — completely free (only pay model API costs, ~$0.01–0.05/review with Haiku). Supports Claude, GPT, Deepseek, Ollama.",
    freeTierNote:
      "Self-hosting requires adding a GitHub Actions workflow + API key secret. 15-minute setup.",
    setupComplexity: "low",
    model: "Your choice — Claude, GPT, Deepseek, local via Ollama",
    strengths: [
      "Fully free when self-hosted (OSS)",
      "Choose any model — Claude Haiku = pennies/review",
      "Auto-describe, auto-review, auto-improve on every PR",
      "Works with GitHub, GitLab, Bitbucket",
      "Hosted free tier: 75 reviews/month/org (no setup needed)",
    ],
    weaknesses: [
      "Self-hosted requires a GitHub Actions workflow file",
      "You manage API keys and model costs",
      "Less polished UI than CodeRabbit",
    ],
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "kilo",
    name: "Kilo Code Review",
    tagline: "Local review before you push",
    price: "Free (launch period — long-term pricing TBD)",
    freeTier:
      "VS Code extension. Review changes locally before opening a PR. CLI: /local-review (branch vs base) or /local-review-uncommitted. No credit card. Can also auto-trigger on PR open.",
    setupComplexity: "zero",
    model: "Your choice via Kilo Code model settings",
    strengths: [
      "Review before pushing — catch issues early",
      "Integrated into VS Code, no context switch",
      "Free during launch period",
      "CLI commands: /local-review, /local-review-uncommitted",
      "Also supports automated PR review on open/update",
    ],
    weaknesses: [
      "Launch pricing — may change",
      "VS Code only (not a GitHub App)",
      "Newer, less battle-tested than CodeRabbit or Qodo",
    ],
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "diy",
    name: "DIY GitHub Actions",
    tagline: "Maximum control, minimum cost",
    price: "Free (GitHub Actions) + model API costs only",
    freeTier:
      "Write a GitHub Actions workflow that calls Claude API (or any LLM) on PR events. Pay per token — Claude Haiku costs ~$0.01–0.03 per review. Full control over prompt, model, and output format.",
    setupComplexity: "medium",
    model: "Any — you choose the API call",
    strengths: [
      "Cheapest at scale — pay only for tokens used",
      "Full prompt control — tune for your codebase",
      "No vendor lock-in",
      "Combine with Qodo PR-Agent for structured output",
    ],
    weaknesses: [
      "Requires writing and maintaining workflow YAML",
      "No pre-built review UI — outputs as PR comments",
      "You handle prompt engineering",
    ],
    badgeColor: "bg-zinc-50 text-zinc-700 border-zinc-200",
  },
];

export interface CompareRow {
  label: string;
  coderabbit: string;
  qodo: string;
  kilo: string;
  diy: string;
}

export const compareRows: CompareRow[] = [
  {
    label: "Price (free path)",
    coderabbit: "Free tier",
    qodo: "Free (self-hosted)",
    kilo: "Free (launch)",
    diy: "~$0.01–0.03/PR",
  },
  {
    label: "Setup effort",
    coderabbit: "Install app",
    qodo: "Add workflow YAML",
    kilo: "Install extension",
    diy: "Write workflow",
  },
  {
    label: "Reviews PRs",
    coderabbit: "Yes",
    qodo: "Yes",
    kilo: "Yes + local",
    diy: "Custom",
  },
  {
    label: "Local pre-push",
    coderabbit: "No",
    qodo: "No",
    kilo: "Yes",
    diy: "No",
  },
  {
    label: "Model choice",
    coderabbit: "No (their infra)",
    qodo: "Yes",
    kilo: "Yes",
    diy: "Yes",
  },
];
