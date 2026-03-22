type ToolCategory = "Commands" | "Infrastructure" | "MCP" | "Plugin" | "Agents";

interface Tool {
  name: string;
  author: string;
  category: ToolCategory;
  what: string;
  install: string;
  when: string;
  link: string;
}

const categoryColors: Record<ToolCategory, string> = {
  Commands: "bg-blue-50 text-blue-700 border-blue-200",
  Infrastructure: "bg-violet-50 text-violet-700 border-violet-200",
  MCP: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Plugin: "bg-amber-50 text-amber-700 border-amber-200",
  Agents: "bg-rose-50 text-rose-700 border-rose-200",
};

export const tools: Tool[] = [
  {
    name: "SuperClaude",
    author: "NomenAK",
    category: "Commands",
    what: "31 structured slash commands: /sc:implement, /sc:analyze, /sc:troubleshoot, /sc:workflow, /sc:pm, /sc:git, /sc:test, /sc:index-repo, and more.",
    install: "npx superclaude@latest install",
    when: "Daily — structured implementation, analysis, debugging",
    link: "https://github.com/NomenAK/SuperClaude",
  },
  {
    name: "everything-claude-code",
    author: "affaan-m",
    category: "Infrastructure",
    what: "Anthropic hackathon winner. Language-specific agents (TS, Python, Go, Java, Kotlin…), memory hooks, security hooks, rules for 12 ecosystems. The engine layer.",
    install: "bun add -g ecc-universal && ecc-universal install",
    when: "Always on — runs in the background",
    link: "https://github.com/affaan-m/everything-claude-code",
  },
  {
    name: "Context7",
    author: "Upstash",
    category: "MCP",
    what: "Injects up-to-date library docs at query time. No more outdated Next.js or React API guesses. Say 'use context7' in any prompt.",
    install: "Add to .mcp.json (see this repo)",
    when: "Any session with fast-moving libraries",
    link: "https://github.com/upstash/context7",
  },
  {
    name: "GitHub MCP",
    author: "Anthropic",
    category: "MCP",
    what: "Read repos, create issues, review PRs, search code — all without leaving Claude.",
    install: "Add to .mcp.json (see this repo)",
    when: "When working with GitHub issues, PRs, or code search",
    link: "https://github.com/modelcontextprotocol/servers",
  },
  {
    name: "Figma MCP",
    author: "Community",
    category: "MCP",
    what: "Read Figma designs directly into Claude context. Describe a component and Claude reads the actual design tokens, layout, and specs.",
    install: "Add to .mcp.json (see this repo)",
    when: "Frontend work — translating designs to code",
    link: "https://github.com/sonnylazuardi/figma-mcp",
  },
  {
    name: "Serena",
    author: "oraios",
    category: "MCP",
    what: "Symbol-level code navigation via LSP. find_symbol, find_referencing_symbols, insert_after_symbol — reads precise code locations instead of whole files. Saves tokens and improves output quality. 30+ languages.",
    install: "Add to .mcp.json (see below)",
    when: "Large codebases — symbol search instead of reading whole files",
    link: "https://github.com/oraios/serena",
  },
  {
    name: "Kaban kanban MCP",
    author: "Kaban team",
    category: "MCP",
    what: "Manage your kanban board directly in Claude. Create, update, and track tasks with ease.",
    install: "Add to .mcp.json (in development)",
    when: "Project management and task tracking",
    link: "https://kabanreport.com",
  },
  {
    name: "Superpowers",
    author: "obra",
    category: "Plugin",
    what: "Battle-tested skills: TDD patterns, debugging, collaboration. Adds /brainstorm, /write-plan, /execute-plan. Plugin marketplace with more.",
    install: "/plugin marketplace add obra/superpowers-marketplace",
    when: "Planning sessions, debugging, TDD workflows",
    link: "https://github.com/obra/superpowers-marketplace",
  },
  {
    name: "claude-mem",
    author: "thedotmack",
    category: "Plugin",
    what: "Persistent memory across sessions. Captures what Claude does, compresses it with Claude SDK, injects relevant context automatically next session.",
    install: "bun add -g claude-mem",
    when: "Always on — solves 'Claude forgot' problem",
    link: "https://github.com/thedotmack/claude-mem",
  },
  {
    name: "BMAD Method",
    author: "bmadcode",
    category: "Agents",
    what: "Agile AI development framework. 12+ specialized agents: PM, Architect, Developer, UX, QA, Scrum Master. Structured workflow from PRD to deployment.",
    install: "npx bmad-method install",
    when: "Starting new features — structured planning phase",
    link: "https://github.com/bmadcode/BMAD-METHOD",
  },
];

export function ToolTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 pr-4 font-semibold text-foreground w-40">
              Tool
            </th>
            <th className="text-left py-3 pr-4 font-semibold text-foreground w-28">
              Type
            </th>
            <th className="text-left py-3 pr-4 font-semibold text-foreground">
              What it does
            </th>
            <th className="text-left py-3 pr-4 font-semibold text-foreground w-56">
              Install
            </th>
            <th className="text-left py-3 font-semibold text-foreground w-48">
              When to use
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr
              key={tool.name}
              className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
            >
              <td className="py-4 pr-4 align-top">
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:underline"
                >
                  {tool.name}
                </a>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {tool.author}
                </div>
              </td>
              <td className="py-4 pr-4 align-top">
                <span
                  className={`inline-block text-sm font-medium px-2 py-0.5 rounded border ${categoryColors[tool.category]}`}
                >
                  {tool.category}
                </span>
              </td>
              <td className="py-4 pr-4 align-top text-muted-foreground leading-relaxed">
                {tool.what}
              </td>
              <td className="py-4 pr-4 align-top">
                <code className="text-sm bg-secondary px-1.5 py-0.5 rounded font-mono break-all">
                  {tool.install}
                </code>
              </td>
              <td className="py-4 align-top text-muted-foreground text-sm">
                {tool.when}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
