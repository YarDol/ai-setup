import Link from "next/link";
import { ClaudeMdSection } from "./sections/claudemd";
import { SkillsSection } from "./sections/skills";
import { McpsSection } from "./sections/mcps";
import { RulesSection } from "./sections/rules";
import { IndexingSection } from "./sections/indexing";
import { SubagentsSection } from "./sections/subagents";
import { HooksSection } from "./sections/hooks";
import { PlanModeSection } from "./sections/planmode";

const nav = [
  { id: "claudemd", title: "CLAUDE.md" },
  { id: "skills", title: "Skills & Commands" },
  { id: "mcps", title: "MCPs" },
  { id: "rules", title: "Rules" },
  { id: "indexing", title: "Indexing" },
  { id: "subagents", title: "Subagents" },
  { id: "hooks", title: "Hooks" },
  { id: "planmode", title: "Plan Mode" },
];

export default function ConceptsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Concepts
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          How Claude Code works
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          These are the building blocks. Understanding them lets you configure
          Claude precisely — and avoid wasting tokens on things you don&apos;t
          need.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 rounded-lg">
        {nav.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="text-sm px-2.5 py-1 rounded-full border border-border bg-card hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            {c.title}
          </a>
        ))}
      </div>

      <ClaudeMdSection />
      <SkillsSection />
      <McpsSection />
      <RulesSection />
      <IndexingSection />
      <SubagentsSection />
      <HooksSection />
      <PlanModeSection />

      <div className="mt-10 pt-8 border-t border-border flex items-center justify-between text-sm">
        <Link href="/setup" className="hover:underline text-muted-foreground">
          ← Back to Setup
        </Link>
        <Link href="/tools" className="hover:underline text-muted-foreground">
          Tools reference →
        </Link>
      </div>
    </div>
  );
}
