import { SetupStep } from "@/components/SetupStep";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";
import { mcpJson, claudeMdTemplate, globalSettingsJson, existingRepoSteps } from "./data";

const TOTAL = 9;

export default function SetupPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Setup Guide
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Complete setup, step by step</h1>
        <p className="text-muted-foreground leading-relaxed">
          Follow this order. Each step builds on the previous one.
        </p>
      </div>

      <div>
        <SetupStep
          step={1}
          total={TOTAL}
          title="Install Claude Code"
          description="The CLI that powers everything. Auto-updates in the background. Requires a Claude Pro, Max, or Team account."
          gain="The claude command in your terminal. Run it inside any project folder."
        >
          <CodeBlock code="curl -fsSL https://claude.ai/install.sh | bash" />
          <p className="text-sm text-muted-foreground mt-2">
            Windows: use PowerShell —{" "}
            <code className="bg-secondary px-1 rounded">irm https://claude.ai/install.ps1 | iex</code>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            After install, run{" "}
            <code className="bg-secondary px-1 rounded">claude doctor</code> to verify everything works.
          </p>
        </SetupStep>

        <SetupStep
          step={2}
          total={TOTAL}
          title="Copy global configs"
          description="Create your personal ~/.claude/CLAUDE.md and settings.json. These apply to every project on your machine — not just this one."
          gain="Consistent behavior and safety rules across all your repos."
        >
          <div className="space-y-3">
            <CodeBlock code={claudeMdTemplate} lang="markdown" filename="~/.claude/CLAUDE.md" />
            <p className="text-sm text-muted-foreground">
              Keep this under 200 lines. Add compaction instructions so Claude preserves what
              matters when context fills.
            </p>
            <CodeBlock code={globalSettingsJson} lang="json" filename="~/.claude/settings.json" />
            <p className="text-sm text-muted-foreground">
              The deny rules protect you from accidental secret exposure and destructive commands.
              Never remove them.
            </p>
          </div>
        </SetupStep>

        <SetupStep
          step={3}
          total={TOTAL}
          title="Install SuperClaude"
          description="Adds 31 structured slash commands that give Claude explicit, repeatable workflows for common tasks. Instead of a vague 'help me implement this', you get a command that follows a proven process."
          gain="Commands like /sc:implement, /sc:analyze, /sc:troubleshoot, /sc:git, /sc:test, and 26 more."
        >
          <CodeBlock code="npx superclaude@latest install" />
          <p className="text-sm text-muted-foreground mt-2">
            Verify: open Claude Code and type{" "}
            <code className="bg-secondary px-1 rounded">/sc:help</code> — you should see the full
            command list.
          </p>
        </SetupStep>

        <SetupStep
          step={4}
          total={TOTAL}
          title="Install everything-claude-code (ECC)"
          description="Won the Anthropic hackathon. Installs language-specific agents, memory hooks, and security rules that run silently in the background. You don't invoke it — it just makes Claude smarter for your specific tech stack."
          gain="Agents, hooks, and rules for 12 language ecosystems. Works automatically once installed."
        >
          <CodeBlock code="bun add -g ecc-universal && ecc-universal install" />
          <p className="text-sm text-muted-foreground mt-2">
            SuperClaude gives you commands you invoke explicitly. ECC makes the underlying model
            smarter without any extra effort. Keep both — they operate at different layers.
          </p>
        </SetupStep>

        <SetupStep
          step={5}
          total={TOTAL}
          title="Configure MCPs"
          description="MCPs connect Claude to external services. Context7 gives live library docs (no more stale GPT-4 knowledge), GitHub lets Claude read issues and search code, and Figma lets you share a frame URL and ask Claude to implement it."
          gain="Live docs for any library, GitHub access, and Figma-to-code — all injected on demand."
        >
          <CodeBlock code={mcpJson} lang="json" filename=".mcp.json" />
          <p className="text-sm text-muted-foreground mt-2">
            Copy <code className="bg-secondary px-1 rounded">.env.example</code> to{" "}
            <code className="bg-secondary px-1 rounded">.env.local</code> and add your tokens.
            Never commit <code className="bg-secondary px-1 rounded">.env.local</code>.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Usage: add <code className="bg-secondary px-1 rounded">use context7</code> to any
            prompt to get live, version-accurate docs. Share a Figma frame URL and Claude can
            implement the design directly.
          </p>
        </SetupStep>

        <SetupStep
          step={6}
          total={TOTAL}
          title="Install Superpowers plugin"
          description="A battle-tested skill collection for TDD, debugging, and structured planning. These are workflows proven on real projects, not demos."
          gain="Commands /brainstorm, /write-plan, and /execute-plan — structured workflows for planning and debugging."
        >
          <CodeBlock
            code={`/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace`}
          />
        </SetupStep>

        <SetupStep
          step={7}
          total={TOTAL}
          title="Install claude-mem"
          description="Persistent memory across sessions. Claude remembers what it worked on, what decisions were made, and what errors occurred — and injects that context back at the start of the next session automatically."
          gain="Claude that remembers your project across sessions. No more re-explaining context every time you open it."
        >
          <CodeBlock code="bun add -g claude-mem" />
          <p className="text-sm text-muted-foreground mt-2">
            After install, follow the plugin setup instructions shown in the terminal.
          </p>
        </SetupStep>

        <SetupStep
          step={8}
          total={TOTAL}
          title="Install BMAD Method"
          description="Optional — use when starting a new feature or project that needs structured planning. Provides 12+ specialized agents: PM, Architect, Developer, UX, QA, Scrum Master. Overkill for small tasks, excellent for large features."
          tag="Optional"
          tagColor="bg-secondary text-muted-foreground border-border"
          gain="Structured agile planning with specialized AI agents for each role."
        >
          <CodeBlock code="npx bmad-method install" />
          <p className="text-sm text-muted-foreground mt-2">
            Invoke <code className="bg-secondary px-1 rounded">bmad-help</code> at any point to
            get guidance on what to do next.
          </p>
        </SetupStep>

        <SetupStep
          step={9}
          total={TOTAL}
          title="Connect existing repos"
          description="Apply this full setup to any existing project in about 2 minutes. You don't need to start from scratch — just run /init inside the project to generate a CLAUDE.md, then copy the config files from this repo."
          gain="Any existing project gets the full stack: structured commands, live docs, memory, and safety rules."
        >
          <CodeBlock code={existingRepoSteps} />
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>1. <code className="bg-secondary px-1 rounded">claude</code> in the project folder to open Claude Code</li>
            <li>2. <code className="bg-secondary px-1 rounded">/init</code> to generate a starter CLAUDE.md</li>
            <li>3. Copy <code className="bg-secondary px-1 rounded">.mcp.json</code> from this repo into your project root</li>
            <li>4. Copy <code className="bg-secondary px-1 rounded">.claude/settings.json</code> from this repo</li>
            <li>
              5. See <Link href="/platforms" className="underline">Platform Guides</Link> for
              Android / iOS / JS-specific CLAUDE.md templates
            </li>
          </ul>
        </SetupStep>
      </div>

      <div className="mt-12 p-5 border border-border rounded-lg bg-secondary/20">
        <h2 className="font-semibold mb-2">Token efficiency — 10 rules</h2>
        <ol className="space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
          <li>Keep CLAUDE.md under 200 lines — longer files reduce adherence</li>
          <li>Add compaction instructions to every CLAUDE.md</li>
          <li>Use <code className="bg-secondary px-1 rounded">/clear</code> between unrelated tasks</li>
          <li>Use <code className="bg-secondary px-1 rounded">/compact</code> when context fills</li>
          <li>Use subagents for verbose operations (tests, logs, large reads)</li>
          <li>Use Context7 instead of pasting library docs into prompts</li>
          <li>
            Use Plan mode (
            <kbd className="bg-secondary border border-border px-1 rounded text-sm">Shift+Tab</kbd>
            ) before complex multi-file changes
          </li>
          <li>Specific prompts save tokens — vague prompts waste them</li>
          <li>Disable unused MCPs with <code className="bg-secondary px-1 rounded">/mcp</code></li>
          <li>Prefer CLI tools over MCPs when both do the same thing</li>
        </ol>
      </div>
    </div>
  );
}
