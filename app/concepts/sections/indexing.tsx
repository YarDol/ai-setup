import { CodeBlock } from "@/components/CodeBlock";
import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const indexExample = `# Run in Claude Code to generate a compact repo index:
/sc:index-repo

# Result: .claude/index.md (~3,000 tokens instead of reading 50 files)
# Claude reads the index first, then drills into specific files only when needed`;

export function IndexingSection() {
  return (
    <Concept
      id="indexing"
      title="Indexing"
      tag="Optimize"
      tagColor="bg-amber-50 text-amber-700 border-amber-200"
      summary="Compress your entire repository into a compact reference file. Instead of Claude reading 50 files to understand the codebase, it reads one index — cutting context usage by ~94%."
    >
      <Diagram>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-red-400 mb-1">Without index</div>
            <div className="text-muted-foreground space-y-0.5 text-sm">
              <div>Claude reads: layout.tsx (80 lines)</div>
              <div>Claude reads: Nav.tsx (45 lines)</div>
              <div>Claude reads: ToolTable.tsx (145 lines)</div>
              <div>Claude reads: page.tsx × 5 files…</div>
              <div className="text-red-400 mt-1">~58,000 tokens per exploration</div>
            </div>
          </div>
          <div>
            <div className="text-emerald-400 mb-1">With index</div>
            <div className="text-muted-foreground space-y-0.5 text-sm">
              <div>Claude reads: .claude/index.md</div>
              <div className="text-muted-foreground">(one file, all structure)</div>
              <div className="text-muted-foreground">Drills into files only as needed</div>
              <div className="text-emerald-400 mt-1">~3,000 tokens per exploration</div>
            </div>
          </div>
        </div>
      </Diagram>

      <CodeBlock code={indexExample} lang="bash" />

      <ul className="space-y-1.5 mt-4">
        <Do>
          Run <code className="bg-secondary px-1 rounded text-sm">/sc:index-repo</code> at the
          start of sessions on large codebases
        </Do>
        <Do>Regenerate the index after major structural changes</Do>
        <Dont>Index tiny projects (&lt;10 files) — not worth the overhead</Dont>
      </ul>
    </Concept>
  );
}
