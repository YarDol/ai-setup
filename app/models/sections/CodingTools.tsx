import { codingTools } from "../data";

export function CodingTools() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-1">
        Terminal AI coding assistants
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        Claude Code, GPT Codex CLI, and Gemini CLI are all terminal-first
        agentic tools. For IDE-embedded AI (Cursor, Windsurf, VS Code…) see the{" "}
        <a href="/ides" className="underline hover:text-foreground">
          IDE guide
        </a>
        .
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {codingTools.map((t) => (
          <div
            key={t.name}
            className="border border-border rounded-xl p-5 bg-card"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">{t.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{t.cost}</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-sm font-semibold text-emerald-700 mb-1.5">
                  Strengths
                </p>
                <ul className="space-y-1">
                  {t.strengths.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-muted-foreground flex gap-1.5"
                    >
                      <span className="text-emerald-600 shrink-0">+</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-destructive mb-1.5">
                  Weaknesses
                </p>
                <ul className="space-y-1">
                  {t.weaknesses.map((w) => (
                    <li
                      key={w}
                      className="text-sm text-muted-foreground flex gap-1.5"
                    >
                      <span className="text-destructive shrink-0">−</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-5 p-4 border border-border rounded-lg bg-secondary/20">
        <strong className="text-foreground">Bottom line: </strong> Use Claude
        Code for serious multi-file development. Use Gemini CLI when you need a
        free tier or a 1M context window. Use GPT Codex CLI when you want
        open-source + OpenAI&apos;s o3 reasoning. All three run inside your
        IDE&apos;s terminal — they complement IDE AI tools, not replace them.
      </p>
    </section>
  );
}
