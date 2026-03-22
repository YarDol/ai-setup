export interface IDE {
  id: string;
  name: string;
  tagline: string;
  price: string;
  freeTier: string;
  freeTierWarning?: string;
  platform: string;
  builtInAI: string;
  mcp: boolean;
  claudeConnect: "extension" | "terminal" | "terminal+plugin";
  claudeConnectSteps: string[];
  theirAIFeatures: string[];
  combineWith: string;
  badgeColor: string;
}

export const ides: IDE[] = [
  {
    id: "vscode",
    name: "VS Code",
    tagline: "Best free stack",
    price: "Free & open-source",
    freeTier:
      "Completely free. Pair with Supermaven (free unlimited autocomplete) + Kilo Code extension + OpenRouter for a full agentic stack at near-zero cost.",
    platform: "macOS · Windows · Linux",
    builtInAI: "GitHub Copilot (optional, limited free tier)",
    mcp: true,
    claudeConnect: "extension",
    claudeConnectSteps: [
      "Install the official Claude Code extension (marketplace → 'Claude Code' by Anthropic) for inline chat + panel",
      "Or open the integrated terminal (Ctrl+`) and run claude — same capabilities, no extension needed",
      "Install Supermaven for free unlimited autocomplete (replaces Copilot tab completion at $0)",
    ],
    theirAIFeatures: [
      "Supermaven — unlimited free tab autocomplete, <500ms, no caps",
      "Kilo Code — agentic multi-file editing via OpenRouter (pay-per-token, often <$1/month)",
      "GitHub Copilot free tier — 2 000 completions + 50 chat msgs/month with MCP support",
      "Copilot Edits — multi-file agent mode (limited on free)",
    ],
    combineWith:
      "Supermaven handles autocomplete. Kilo Code handles agentic VS Code tasks. Claude Code in the terminal handles skills, hooks, plan mode, and complex multi-step work. All three run independently with zero conflicts.",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "All-in-one AI IDE",
    price: "Free tier* · Pro $20/month",
    freeTier:
      "Free tier severely restricted after Jan 2026 — fast model requests run out in a day of normal use. Effectively requires Pro ($20/month) for daily work.",
    freeTierWarning:
      "Cursor Pro ($20/month) + Claude Code subscription ($20–30/month) = $40–50/month minimum. Only worth combining if Cursor Tab's autocomplete quality is a hard requirement for you.",
    platform: "macOS · Windows · Linux",
    builtInAI: "Cursor Tab · Composer · Chat (Claude / GPT / o3)",
    mcp: true,
    claudeConnect: "terminal",
    claudeConnectSteps: [
      "Open integrated terminal (Ctrl+`) — run claude as usual",
      "Cursor's agent and Claude Code are fully independent, no conflicts",
      "Alternative: use VS Code + Supermaven + Kilo Code for the same features at a fraction of the cost",
    ],
    theirAIFeatures: [
      "Cursor Tab — predictive multi-line autocomplete (genuinely best-in-class quality)",
      "Composer — multi-file agentic editing with file browsing",
      "Background agents — async task execution",
      "MCP support built-in",
    ],
    combineWith:
      "Cursor Tab for autocomplete, Claude Code in terminal for plan mode and skills. But factor in the combined cost — $40+/month. If budget matters, VS Code + Supermaven + Kilo Code delivers similar results for far less.",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    tagline: "Unlimited autocomplete free forever",
    price: "Free tier · Pro $15/month",
    freeTier:
      "Codeium autocomplete is unlimited and free with no caps. Cascade (agentic mode) has a monthly credit limit on free — sufficient for occasional use.",
    platform: "macOS · Windows · Linux",
    builtInAI: "Cascade (agentic) · Codeium autocomplete",
    mcp: true,
    claudeConnect: "terminal",
    claudeConnectSteps: [
      "Open the terminal panel — run claude as usual",
      "Windsurf Cascade and Claude Code operate independently in the same project",
      "When Cascade credits run out, switch to Claude Code in the terminal for the rest of the session",
    ],
    theirAIFeatures: [
      "Codeium autocomplete — unlimited, fast, free forever (same as the Codeium plugin)",
      "Cascade — agentic mode: reads, edits, runs commands, iterates",
      "Flows — multi-step task execution with checkpoints",
      "MCP server support",
    ],
    combineWith:
      "Use Windsurf for free unlimited autocomplete (Codeium) + occasional Cascade sessions. When Cascade credits run out, Claude Code in the terminal takes over. Good free daily driver.",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "webstorm",
    name: "WebStorm",
    tagline: "Best JS/TS IDE",
    price: "$7.90/month commercial + AI costs",
    freeTier:
      "Install the Codeium plugin for free unlimited autocomplete — better than JetBrains AI on the free tier.",
    platform: "macOS · Windows · Linux",
    builtInAI: "JetBrains AI Assistant · Codeium plugin",
    mcp: false,
    claudeConnect: "terminal+plugin",
    claudeConnectSteps: [
      "Open Terminal tool window (Alt+F12 / ⌥F12) — run claude as usual",
      "Install Codeium from JetBrains Plugin Marketplace for free unlimited autocomplete",
      "Optional: install 'Claude' plugin from JetBrains marketplace for inline chat",
    ],
    theirAIFeatures: [
      "Codeium plugin — free unlimited autocomplete, works excellently in WebStorm",
      "JetBrains AI — type-aware completions and inspections (limited on free tier)",
      "Best-in-class JS/TS static analysis and refactor awareness",
      "AI-powered inspections and quick-fixes",
    ],
    combineWith:
      "Codeium (free plugin) handles autocomplete. Claude Code in the terminal handles multi-file refactors. JetBrains AI helps with type-aware single-file edits. No MCP support — Claude Code's MCP stack stays in the terminal only.",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: "antigravity",
    name: "Google Antigravity",
    tagline: "Async multi-agent, free in preview",
    price: "Free (public preview, Nov 2025)",
    freeTier:
      "Fully free during preview. Generous Gemini 3.1 Pro rate limits. Claude Sonnet 4.6 and GPT-OSS-120B also included at no extra cost.",
    platform: "macOS · Windows · Linux",
    builtInAI: "Gemini 3.1 Pro · Claude Sonnet 4.6 · GPT-OSS-120B",
    mcp: false,
    claudeConnect: "terminal",
    claudeConnectSteps: [
      "Open integrated terminal — run claude as usual (it's a VS Code fork with a full shell)",
      "Claude Sonnet 4.6 is already available in the Manager Surface — many tasks won't need Claude Code at all",
      "Use Claude Code when you need skills, hooks, or plan mode that Antigravity doesn't expose",
    ],
    theirAIFeatures: [
      "Manager Surface — spawn and watch multiple AI agents working async in parallel",
      "Artifacts — verifiable agent outputs: screenshots, browser recordings, task lists",
      "Editor View — tab completions and inline commands",
      "Multi-model per task: Gemini 3 Pro, Claude, or GPT-OSS",
      "Agents autonomously use terminal and browser",
    ],
    combineWith:
      "Best fully-free option right now. Manager Surface handles async orchestration. Claude is built-in, so Claude Code is optional. Use Claude Code in the terminal only when you need skills, hooks, or precise permission control.",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];
