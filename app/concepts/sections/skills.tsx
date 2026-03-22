import { CodeBlock } from "@/components/CodeBlock";
import { Concept, TwoCol, Do, Dont } from "@/components/concepts/primitives";

const skillExample = `---
name: review-pr
description: Review a pull request for quality and security. Use after implementing a feature.
tools: Read, Grep, Glob, Bash
model: haiku
---

When invoked:
1. Run \`git diff main\` to see changes
2. Check for: security issues, missing tests, unclear names
3. Report: Critical issues → Warnings → Suggestions`;

const marketplaces = [
  { href: "https://skills.sh", name: "skills.sh", desc: "Community skill registry" },
  { href: "https://skillsmp.com", name: "skillsmp.com", desc: "Skills marketplace" },
  {
    href: "https://github.com/hesreallyhim/awesome-claude-code",
    name: "awesome-claude-code",
    desc: "Curated list — 30k+ stars",
  },
];

export function SkillsSection() {
  return (
    <Concept
      id="skills"
      title="Skills & Slash Commands"
      tag="Extend"
      tagColor="bg-blue-50 text-blue-700 border-blue-200"
      summary="Reusable instruction packages. Unlike CLAUDE.md (always loaded), skills only activate when invoked or when their description matches your request — saving tokens."
    >
      <TwoCol
        left={
          <>
            <p className="text-sm font-semibold text-foreground mb-2">User-invoked skills</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You call them with <code className="bg-secondary px-1 rounded">/skill-name</code>.
              Examples: <code className="bg-secondary px-1 rounded">/review-pr</code>,{" "}
              <code className="bg-secondary px-1 rounded">/deploy</code>.
              Great for actions you initiate deliberately.
            </p>
          </>
        }
        right={
          <>
            <p className="text-sm font-semibold text-foreground mb-2">Auto-triggered skills</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Claude invokes them automatically when your request matches the skill&apos;s
              description. Example: a &quot;frontend-design&quot; skill activates when you ask to
              build a UI.
            </p>
          </>
        }
      />

      <CodeBlock code={skillExample} lang="markdown" filename=".claude/skills/review-pr/SKILL.md" />

      <div className="mt-4 p-4 border border-border rounded-lg bg-secondary/20">
        <p className="text-sm font-semibold mb-2">Skill marketplaces</p>
        <p className="text-sm text-muted-foreground mb-3">
          Browse community-built skills instead of writing from scratch:
        </p>
        <div className="space-y-2">
          {marketplaces.map((m) => (
            <a
              key={m.href}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 border border-border rounded-md bg-card hover:bg-secondary/30 transition-colors group"
            >
              <div>
                <span className="text-sm font-medium group-hover:underline">{m.name}</span>
                <span className="text-sm text-muted-foreground ml-2">{m.desc}</span>
              </div>
              <span className="text-muted-foreground text-sm">↗</span>
            </a>
          ))}
        </div>
      </div>

      <ul className="space-y-1.5 mt-4">
        <Do>Install skills only when you need them — each one adds tokens</Do>
        <Do>
          Set <code className="bg-secondary px-1 rounded text-sm">disable-model-invocation: true</code>{" "}
          for dangerous skills (deploy, force-push)
        </Do>
        <Dont>Put project-wide instructions in a skill — use CLAUDE.md instead</Dont>
      </ul>
    </Concept>
  );
}
