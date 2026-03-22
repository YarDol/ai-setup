import { CodeBlock } from "@/components/CodeBlock";
import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const rulesExample = `---
paths:
  - "src/components/**/*.{ts,tsx}"
---

# Frontend Component Rules
- Use functional components with hooks only
- Co-locate tests next to components (Component.test.tsx)
- Export component as named export, not default`;

export function RulesSection() {
  return (
    <Concept
      id="rules"
      title="Rules"
      tag="Guide"
      tagColor="bg-violet-50 text-violet-700 border-violet-200"
      summary="Path-specific instructions that only activate when Claude is working in matching files. More precise than CLAUDE.md — the rules load on demand, not always."
    >
      <Diagram>
        <div className="text-muted-foreground mb-2">File structure:</div>
        <div className="space-y-0.5">
          <div><span className="text-foreground">.claude/rules/</span></div>
          <div className="ml-4">
            <span className="text-foreground">frontend.md</span>{" "}
            <span className="text-muted-foreground">← applies to src/components/**</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">backend.md</span>{" "}
            <span className="text-muted-foreground">← applies to src/api/**</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">tests.md</span>{" "}
            <span className="text-muted-foreground">← applies to **/*.test.ts</span>
          </div>
        </div>
        <div className="mt-3 text-muted-foreground">
          Each rule file starts with a frontmatter{" "}
          <span className="text-foreground">paths:</span> field.
        </div>
      </Diagram>

      <CodeBlock code={rulesExample} lang="markdown" filename=".claude/rules/frontend.md" />

      <ul className="space-y-1.5 mt-4">
        <Do>Use rules for team-specific conventions that differ by area of the codebase</Do>
        <Do>Keep each rule file focused — one concern per file</Do>
        <Dont>Duplicate rules that are already in CLAUDE.md — pick one place</Dont>
      </ul>
    </Concept>
  );
}
