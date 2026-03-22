import { ToolTable } from "@/components/ToolTable";
import Link from "next/link";

const marketplaces = [
  {
    name: "skills.sh",
    description:
      "Community skill registry — browse and install Claude Code skills by category",
    url: "https://skills.sh",
  },
  {
    name: "skillsmp.com",
    description:
      "Skills marketplace — curated collections for different workflows",
    url: "https://skillsmp.com",
  },
  {
    name: "obra/superpowers-marketplace",
    description:
      "Plugin marketplace — skills for TDD, debugging, writing, and Claude Code development",
    url: "https://github.com/obra/superpowers-marketplace",
  },
  {
    name: "awesome-claude-code",
    description:
      "Curated list of skills, hooks, commands, agents, and plugins — 30k+ stars",
    url: "https://github.com/hesreallyhim/awesome-claude-code",
  },
  {
    name: "awesome-claude-code-subagents",
    description:
      "100+ ready-made subagent definitions across all development domains",
    url: "https://github.com/VoltAgent/awesome-claude-code-subagents",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Tool Reference
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Recommended tool stack
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          8 tools, carefully chosen. Each one has a distinct role — no two do
          the same thing.
        </p>
      </div>

      {/* Token warning */}
      <div className="mb-8 flex gap-3 p-4 border border-amber-200 bg-amber-50 rounded-lg">
        <span className="text-amber-600 text-base shrink-0">⚠</span>
        <div>
          <p className="text-sm font-semibold text-amber-900 mb-0.5">
            Don&apos;t install everything at once
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Every tool, MCP, and skill adds to your context window on every
            session — even when idle. Start with{" "}
            <strong>SuperClaude + ECC + Context7</strong>. Add others only when
            you have a concrete use case. More tools ≠ better results.
          </p>
        </div>
      </div>

      {/* Tool table */}
      <div className="mb-10">
        <ToolTable />
      </div>

      {/* SuperClaude vs ECC */}
      <div className="border border-border rounded-lg p-5 mb-8">
        <h2 className="font-semibold mb-3">
          Why keep both SuperClaude and ECC?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
            <p className="text-sm font-semibold text-blue-900 mb-1">
              SuperClaude — the steering wheel
            </p>
            <p className="text-sm text-blue-800 leading-relaxed">
              You invoke it. Type{" "}
              <code className="bg-blue-100 px-1 rounded">/sc:implement</code> or{" "}
              <code className="bg-blue-100 px-1 rounded">/sc:analyze</code> and
              Claude follows a structured workflow for that task. It&apos;s
              explicit and deliberate.
            </p>
          </div>
          <div className="bg-violet-50 rounded-md p-4 border border-violet-100">
            <p className="text-sm font-semibold text-violet-900 mb-1">
              ECC — the engine
            </p>
            <p className="text-sm text-violet-800 leading-relaxed">
              You don&apos;t invoke it. It installs agents, hooks, and rules
              that make Claude smarter in the background — for your language,
              your platform, your project type. It just runs.
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          They operate at different layers and don&apos;t overlap. Both are
          recommended.
        </p>
      </div>

      {/* Marketplaces */}
      <div>
        <h2 className="font-semibold text-lg mb-2">Find more tools</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Browse community-built skills, agents, and plugins. Always evaluate
          token cost before adding anything.
        </p>
        <div className="space-y-2">
          {marketplaces.map((m) => (
            <a
              key={m.name}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-4 p-4 border border-border rounded-lg hover:bg-secondary/30 hover:border-foreground/20 transition-all group"
            >
              <div>
                <span className="text-sm font-semibold group-hover:underline">
                  {m.name}
                </span>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                  {m.description}
                </p>
              </div>
              <span className="text-muted-foreground text-sm shrink-0 mt-0.5">
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          See the{" "}
          <Link
            href="/concepts#skills"
            className="underline hover:text-foreground"
          >
            Skills concept page
          </Link>{" "}
          for guidance on how to evaluate and install skills safely.
        </p>
      </div>
    </div>
  );
}
