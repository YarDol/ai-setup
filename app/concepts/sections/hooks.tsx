import { CodeBlock } from "@/components/CodeBlock";
import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const hookExample = `// ~/.claude/settings.json
{
  "hooks": {
    "Notification": [{
      "hooks": [{
        "type": "command",
        "command": "osascript -e 'display notification \\"Claude needs you\\" with title \\"Claude Code\\"'"
      }]
    }],
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "prettier --write \\"$CLAUDE_TOOL_INPUT_FILE_PATH\\" 2>/dev/null || true"
      }]
    }]
  }
}`;

const events = [
  { name: "SessionStart", desc: "inject context, load env vars" },
  { name: "PreToolUse", desc: "validate or block before Claude acts (exit 2 = block)" },
  { name: "PostToolUse", desc: "auto-format after edits, run linter" },
  { name: "Notification", desc: "desktop alert when Claude needs attention" },
  { name: "Stop", desc: "verify quality, run tests, cleanup" },
];

export function HooksSection() {
  return (
    <Concept
      id="hooks"
      title="Hooks"
      tag="Automate"
      tagColor="bg-cyan-50 text-cyan-700 border-cyan-200"
      summary="Shell commands that run automatically at lifecycle events — before or after Claude uses a tool, when a session starts, when Claude finishes. Unlike CLAUDE.md suggestions, hooks always execute."
    >
      <Diagram>
        <div className="text-muted-foreground mb-2">Key lifecycle events:</div>
        <div className="space-y-1 text-sm">
          {events.map((e) => (
            <div key={e.name} className="flex gap-2">
              <span className="text-cyan-600 w-28 shrink-0">{e.name}</span>
              <span className="text-muted-foreground">{e.desc}</span>
            </div>
          ))}
        </div>
      </Diagram>

      <CodeBlock code={hookExample} lang="json" filename="~/.claude/settings.json — hook examples" />

      <ul className="space-y-1.5 mt-4">
        <Do>
          Use hooks for things that must happen <em>every time</em> — formatting, notifications
        </Do>
        <Do>
          Use <code className="bg-secondary px-1 rounded text-sm">exit 2</code> from a PreToolUse
          hook to block dangerous operations
        </Do>
        <Dont>
          Use hooks for things Claude can just be told in CLAUDE.md — hooks run code, cost latency
        </Dont>
      </ul>
    </Concept>
  );
}
