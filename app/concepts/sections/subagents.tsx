import { Concept, Diagram, TwoCol, Do, Dont } from "@/components/concepts/primitives";

export function SubagentsSection() {
  return (
    <Concept
      id="subagents"
      title="Subagents"
      tag="Delegate"
      tagColor="bg-rose-50 text-rose-700 border-rose-200"
      summary="Specialized AI workers that run in their own isolated context window. Use them to offload verbose or independent tasks without polluting your main conversation."
    >
      <Diagram>
        <div className="text-muted-foreground mb-2">Your session vs. subagent:</div>
        <div className="space-y-2">
          <div className="p-2 border border-border/40 rounded">
            <div className="text-foreground text-sm font-semibold mb-1">Main session context</div>
            <div className="text-muted-foreground text-sm">
              Your conversation + CLAUDE.md + MCPs + current task
            </div>
          </div>
          <div className="text-center text-muted-foreground">spawns ↓</div>
          <div className="p-2 border border-rose-200 rounded bg-rose-50/30">
            <div className="text-rose-700 text-sm font-semibold mb-1">
              Subagent context (isolated)
            </div>
            <div className="text-muted-foreground text-sm">
              Fresh context · own tools · own model · returns result → main session
            </div>
          </div>
        </div>
      </Diagram>

      <TwoCol
        left={
          <>
            <p className="text-sm font-semibold mb-1">Built-in subagents</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Explore</strong> — read-only codebase search (uses Haiku, fast)</li>
              <li><strong className="text-foreground">Plan</strong> — research before implementing</li>
              <li><strong className="text-foreground">General</strong> — full access for complex tasks</li>
            </ul>
          </>
        }
        right={
          <>
            <p className="text-sm font-semibold mb-1">When to use a custom subagent</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Running long test suites or log analysis</li>
              <li>Code review after every feature</li>
              <li>Language-specific tasks (e.g. Kotlin only)</li>
            </ul>
          </>
        }
      />

      <p className="text-sm text-muted-foreground mt-2">
        Create custom subagents at{" "}
        <code className="bg-secondary px-1 rounded">.claude/agents/name.md</code>. See the{" "}
        <a
          href="https://github.com/VoltAgent/awesome-claude-code-subagents"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          awesome-claude-code-subagents
        </a>{" "}
        repo for 100+ ready-made examples.
      </p>

      <ul className="space-y-1.5 mt-4">
        <Do>Use the Explore subagent for read-only codebase research — it uses Haiku, saving cost</Do>
        <Dont>Spawn a subagent for a two-line edit — overhead outweighs the benefit</Dont>
      </ul>
    </Concept>
  );
}
