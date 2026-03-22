import { CodeBlock } from "@/components/CodeBlock";
import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const claudeMdExample = `# My Project

## Commands
- Dev: \`bun dev\`
- Test: \`bun test\`
- Build: \`bun run build\`

## Stack
- Next.js 15 App Router + TypeScript + Tailwind

## Code style
- Named exports for all non-page components
- Use zod at system boundaries (API routes, form input)

## Compaction Instructions
When compacting, preserve: current task, modified files, TypeScript errors.`;

export function ClaudeMdSection() {
  return (
    <Concept
      id="claudemd"
      title="CLAUDE.md"
      tag="Foundation"
      tagColor="bg-foreground/5 text-foreground border-foreground/20"
      summary="A markdown file Claude reads at the start of every session. It tells Claude what project it's in, what commands to run, what style to follow, and what to preserve when context compresses."
    >
      <Diagram>
        <div className="text-muted-foreground mb-2">Loading order (highest priority first):</div>
        <div className="space-y-1">
          <div className="flex gap-3">
            <span className="text-amber-600 font-semibold">1</span>
            <span><span className="text-foreground">~/.claude/CLAUDE.md</span> — your personal global rules (machine-wide)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-amber-600 font-semibold">2</span>
            <span><span className="text-foreground">./CLAUDE.md</span> — project root (shared with team via git)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-amber-600 font-semibold">3</span>
            <span><span className="text-foreground">./packages/x/CLAUDE.md</span> — auto-discovered in subdirs</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-border/40 text-muted-foreground">
          All three load simultaneously. Lower levels can override higher ones.
        </div>
      </Diagram>

      <CodeBlock code={claudeMdExample} lang="markdown" filename="./CLAUDE.md — example" />

      <ul className="space-y-1.5 mt-4">
        <Do>Keep under 200 lines — Claude reads every word, every session</Do>
        <Do>Always add a <strong>Compaction Instructions</strong> section</Do>
        <Do>Run <code className="bg-secondary px-1 rounded text-sm">/init</code> in any project to auto-generate a starter</Do>
        <Dont>Put API documentation in CLAUDE.md — use Context7 or link instead</Dont>
        <Dont>Add rules that change frequently — they make CLAUDE.md stale</Dont>
      </ul>
    </Concept>
  );
}
