import { CodeBlock } from "@/components/CodeBlock";
import {
  settingsJson,
  envExample,
  gitignore,
  checklist,
  permissionModes,
} from "./data";

export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Security
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Security setup and best practices
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Claude Code is powerful. A misconfigured setup can expose secrets or
          allow destructive operations. Apply this in every project.
        </p>
      </div>

      {/* Checklist */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg mb-4">Security checklist</h2>
        <div className="space-y-3">
          {checklist.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 p-4 border border-border rounded-lg"
            >
              <div className="shrink-0 w-4 h-4 rounded-full border-2 border-border mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{c.item}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended settings.json */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg mb-2">
          Recommended settings.json
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Place at{" "}
          <code className="bg-secondary px-1 rounded">
            .claude/settings.json
          </code>{" "}
          in your project, or{" "}
          <code className="bg-secondary px-1 rounded">
            ~/.claude/settings.json
          </code>{" "}
          globally. Project settings merge with global — both apply.
        </p>
        <CodeBlock
          code={settingsJson}
          lang="json"
          filename=".claude/settings.json"
        />
        <p className="text-sm text-muted-foreground mt-2">
          Adjust the <code className="bg-secondary px-1 rounded">allow</code>{" "}
          list to match your project&apos;s actual commands. Add{" "}
          <code className="bg-secondary px-1 rounded">Bash(./gradlew *)</code>{" "}
          for Android,{" "}
          <code className="bg-secondary px-1 rounded">Bash(xcodebuild *)</code>{" "}
          for iOS, etc.
        </p>
      </div>

      {/* .env pattern */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg mb-2">Secrets pattern</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Always use{" "}
          <code className="bg-secondary px-1 rounded">.env.example</code> for
          documentation and{" "}
          <code className="bg-secondary px-1 rounded">.env.local</code> for real
          values. Add deny rules so Claude can&apos;t read either by accident.
        </p>
        <div className="space-y-3">
          <CodeBlock
            code={envExample}
            lang="bash"
            filename=".env.example (commit this)"
          />
          <CodeBlock
            code={gitignore}
            lang="bash"
            filename=".gitignore (add these)"
          />
        </div>
      </div>

      {/* Permission modes */}
      <div className="mb-10">
        <h2 className="font-semibold text-lg mb-2">Permission modes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold w-36">Mode</th>
                <th className="text-left py-2 pr-4 font-semibold">
                  What it does
                </th>
                <th className="text-left py-2 font-semibold w-40">
                  When to use
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-muted-foreground">
              {permissionModes.map((m) => (
                <tr key={m.mode} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-mono text-sm">{m.mode}</td>
                  <td className="py-3 pr-4">{m.what}</td>
                  <td className={`py-3 ${m.danger ? "text-destructive" : ""}`}>
                    {m.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Switch modes with{" "}
          <kbd className="bg-secondary border border-border px-1 rounded text-sm">
            Shift+Tab
          </kbd>{" "}
          during a session. Start in plan mode:{" "}
          <code className="bg-secondary px-1 rounded text-sm">
            claude --permission-mode plan
          </code>
        </p>
      </div>
    </div>
  );
}
