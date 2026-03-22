export interface FreeTool {
  id: string;
  name: string;
  tagline: string;
  what: string;
  install: string;
  why: string;
  works: string;
  cost: string;
  badgeColor: string;
}

export const freeTools: FreeTool[] = [
  {
    id: "supermaven",
    name: "Supermaven",
    tagline: "Unlimited free autocomplete",
    what: "VS Code extension for instant, context-aware code completions. Sub-500ms response time — fastest on the market.",
    install: "VS Code Extensions → search 'Supermaven'",
    why: "No usage caps, no subscription, never throttled on the free plan. The default replacement for Copilot autocomplete at $0.",
    works: "VS Code · Cursor · Windsurf · JetBrains (beta)",
    cost: "Huge free tier",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "codeium",
    name: "Codeium",
    tagline: "Free autocomplete for any IDE",
    what: "Free AI autocomplete that works across VS Code, WebStorm, JetBrains IDEs, Vim, and more. Made by the same team as Windsurf.",
    install: "VS Code: Extensions → 'Codeium'\nWebStorm: Plugins → 'Codeium'",
    why: "Best choice for WebStorm and JetBrains users where Supermaven doesn't fully work. Unlimited free completions.",
    works: "VS Code · WebStorm · All JetBrains · Vim · Neovim",
    cost: "Huge free tier",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "kilocode",
    name: "Kilo Code",
    tagline: "Free agentic AI in VS Code",
    what: "VS Code extension (fork of Cline) for agentic multi-file tasks. Connects to any model via OpenRouter, Anthropic API, or local Ollama models.",
    install:
      "VS Code Extensions → search 'Kilo Code'\nSettings → add OpenRouter API key",
    why: "Brings plan → edit → run agentic tasks directly into the VS Code UI without a subscription. Claude Sonnet via API often costs <$1/month for light use.",
    works: "VS Code · Cursor · Windsurf (as extension)",
    cost: "Extension free · Pay-per-token via OpenRouter",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    tagline: "One API key, 100+ models",
    what: "API aggregator for Claude, GPT-4o, Gemini, Llama, Mistral — all through one endpoint. Works with Kilo Code, Continue, and any OpenAI-compatible tool.",
    install:
      "openrouter.ai → sign up → copy API key → paste in Kilo Code settings",
    why: "Includes genuinely free models (Llama 3.1 8B, Mistral 7B — rate-limited but $0). Claude Sonnet API is cheaper than $20/month sub for low-to-mid usage.",
    works: "Kilo Code · Continue · Any OpenAI-compatible client",
    cost: "Free models available · Pay-per-token for premium",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
];
