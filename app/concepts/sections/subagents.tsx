import {
  Concept,
  Diagram,
  TwoCol,
  Do,
  Dont,
} from "@/components/concepts/primitives";

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
            <div className="text-foreground text-sm font-semibold mb-1">
              Main session context
            </div>
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
              Fresh context · own tools · own model · returns result → main
              session
            </div>
          </div>
        </div>
      </Diagram>

      <TwoCol
        left={
          <>
            <p className="text-sm font-semibold mb-1">Built-in subagents</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Explore</strong> —
                read-only codebase search (uses Haiku, fast)
              </li>
              <li>
                <strong className="text-foreground">Plan</strong> — research
                before implementing
              </li>
              <li>
                <strong className="text-foreground">General</strong> — full
                access for complex tasks
              </li>
            </ul>
          </>
        }
        right={
          <>
            <p className="text-sm font-semibold mb-1">
              When to use a custom subagent
            </p>
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
        <code className="bg-secondary px-1 rounded">.claude/agents/name.md</code>
        . See the{" "}
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

      {/* Parallel execution */}
      <div className="mt-5 border-t border-border pt-5">
        <p className="text-sm font-semibold mb-2">
          Parallel agents — without conflicts
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Claude Code has built-in git worktree support. Each parallel agent
          works in its own isolated directory and branch — they share repository
          history but never touch the same files.
        </p>

        <div className="bg-secondary/30 rounded-lg p-3 font-mono text-xs mb-4 overflow-x-auto">
          <div className="text-muted-foreground mb-2 font-sans text-xs">
            One repo → isolated worktrees per agent:
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <span className="px-2 py-1 bg-background border border-border rounded">
              main
            </span>
            <span className="text-muted-foreground">→</span>
            <span className="px-2 py-1 bg-rose-50 border border-rose-200 rounded text-rose-700">
              ../project-auth · feature/auth
            </span>
            <span className="px-2 py-1 bg-rose-50 border border-rose-200 rounded text-rose-700">
              ../project-api · fix/api-timeout
            </span>
            <span className="px-2 py-1 bg-rose-50 border border-rose-200 rounded text-rose-700">
              ../project-tests · chore/add-tests
            </span>
          </div>
        </div>

        <TwoCol
          left={
            <>
              <p className="text-sm font-semibold mb-1 text-emerald-700">
                Run in parallel when
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>3+ unrelated tasks</li>
                <li>Clear file boundaries — no overlap</li>
                <li>No shared state between tasks</li>
                <li>Independent domains (auth, UI, tests)</li>
              </ul>
            </>
          }
          right={
            <>
              <p className="text-sm font-semibold mb-1 text-destructive">
                Keep sequential when
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Tasks share the same file(s)</li>
                <li>Task B depends on Task A&apos;s output</li>
                <li>Shared state (DB schema, API contract)</li>
              </ul>
            </>
          }
        />

        <p className="text-sm text-muted-foreground mt-4">
          <span className="font-semibold text-foreground">
            Create a worktree:
          </span>{" "}
          <code className="bg-secondary px-1 rounded">
            git worktree add ../project-agent-1 -b feature-auth
          </code>{" "}
          then open Claude Code in that directory. The Desktop app also has a
          built-in <code className="bg-secondary px-1 rounded">/worktree</code>{" "}
          command.
        </p>
      </div>

      <ul className="space-y-1.5 mt-4">
        <Do>
          Use the Explore subagent for read-only codebase research — it uses
          Haiku, saving cost
        </Do>
        <Do>
          Isolate parallel agents with git worktrees — one branch per agent,
          zero file overlap
        </Do>
        <Dont>
          Spawn a subagent for a two-line edit — overhead outweighs the benefit
        </Dont>
        <Dont>
          Run two agents on the same files in parallel — merge conflicts
          guaranteed
        </Dont>
      </ul>
    </Concept>
  );
}
