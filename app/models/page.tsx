import { CodeBlock } from "@/components/CodeBlock";
import { ModelCards } from "./sections/ModelCards";
import { ComparisonTable } from "./sections/ComparisonTable";
import { CodingTools } from "./sections/CodingTools";

const skillModelSnippet = `---
name: my-skill
description: Example skill
model: haiku        # haiku | sonnet | opus
---

When invoked, do the thing.`;

const modelSelectionCards = [
  {
    label: "Per skill",
    desc: "Set model: in SKILL.md frontmatter. Use haiku for frequent lightweight skills, opus for deep-analysis skills.",
  },
  {
    label: "Per subagent",
    desc: "Explore defaults to haiku (fast, cheap). General defaults to sonnet. Override in the agent's AGENTS.md.",
  },
  {
    label: "Mid-session",
    desc: "Use /model to switch during a conversation. Useful when a task suddenly requires deeper reasoning.",
  },
];

export default function ModelsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Models</p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Which model to use, and when</h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Not all tasks need the same model. Using Opus for a quick file read is like taking a taxi
          for a 100m walk. Pick the right tool.
        </p>
      </div>

      <ModelCards />

      {/* Model selection in Claude Code */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-1">Setting models in Claude Code</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Claude Code defaults to Sonnet. You can override per-skill, per-subagent, or mid-session.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {modelSelectionCards.map((item) => (
            <div key={item.label} className="p-4 border border-border rounded-lg bg-card">
              <p className="text-sm font-semibold mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <CodeBlock code={skillModelSnippet} lang="markdown" filename=".claude/skills/my-skill/SKILL.md" />
      </section>

      <ComparisonTable />
      <CodingTools />
    </div>
  );
}
