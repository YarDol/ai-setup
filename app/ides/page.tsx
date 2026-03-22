import { ides } from "./data";
import { compareRows } from "./compare-rows";
import { freeTools } from "./free-tools";
import { IdeCard } from "@/components/IdeCard";
import { FreeToolCard } from "@/components/FreeToolCard";

const freeStackTags = [
  "VS Code (free)",
  "Supermaven (free autocomplete)",
  "Kilo Code (free extension)",
  "OpenRouter (free/cheap models)",
  "Claude Code (terminal)",
];
const recommendations = [
  {
    who: "Zero budget",
    ans: "VS Code + Supermaven + Kilo Code + OpenRouter free models. Full agentic stack for $0.",
  },
  {
    who: "Best all-around free",
    ans: "Google Antigravity (preview) — Claude + Gemini + GPT all built-in, async multi-agent, completely free.",
  },
  {
    who: "Best autocomplete quality (willing to pay)",
    ans: "Cursor Pro + Claude Code in terminal. Expect $40+/month.",
  },
  {
    who: "JS/TS professional (non-commercial)",
    ans: "WebStorm (free) + Codeium plugin + Claude Code in terminal.",
  },
  {
    who: "Unlimited autocomplete + occasional agent",
    ans: "Windsurf free tier — Codeium unlimited + Cascade credits + Claude Code in terminal.",
  },
  {
    who: "Best easy-setup & productive",
    ans: "VS Code + Supermaven + Claude Code in terminal. Simple, fast, and powerful.",
  },
];

export default function IDEsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          IDE Guide
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          IDEs — how to get everything for free
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Which IDE to use, how to connect Claude Code, and which free tools
          replace expensive subscriptions. As of March 2026.
        </p>
      </div>

      {/* Comparison table */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-4">Quick comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold w-36" />
                {[
                  "VS Code",
                  "Cursor",
                  "Windsurf",
                  "WebStorm",
                  "Antigravity",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left py-2 pr-4 font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {compareRows.map((r) => (
                <tr key={r.label} className="border-b border-border/40">
                  <td className="py-2.5 pr-4 text-sm font-semibold text-foreground whitespace-nowrap">
                    {r.label}
                  </td>
                  <td className="py-2.5 pr-4 text-sm">{r.vscode}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.cursor}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.windsurf}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.webstorm}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.antigravity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Per-IDE cards */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold mb-5">Setup and tips per IDE</h2>
        <div className="space-y-6">
          {ides.map((ide) => (
            <IdeCard key={ide.id} ide={ide} />
          ))}
        </div>
      </section>

      {/* Free tools */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2">Free tools worth knowing</h2>
        <p className="text-sm text-muted-foreground mb-5">
          These four tools together replace most paid IDE AI subscriptions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {freeTools.map((t) => (
            <FreeToolCard key={t.id} tool={t} />
          ))}
        </div>
      </section>

      {/* Cost reality */}
      <div className="mb-8 p-4 border border-destructive/30 bg-destructive/5 rounded-lg flex gap-3">
        <span className="text-destructive shrink-0 -mt-0.75 font-bold">!</span>
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">
            Watch the combined cost
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Cursor free tier became nearly unusable after Jan 2026 restrictions.
            Cursor Pro ($20/month) + Claude Code subscription ($20–30/month) ={" "}
            <strong className="text-foreground">$40–50/month</strong>.
            That&apos;s before team seats. VS Code + Supermaven + Kilo Code
            delivers comparable features for{" "}
            <strong className="text-foreground">$0</strong>.
          </p>
        </div>
      </div>

      {/* Recommended free stack */}
      <div className="mb-10 p-5 border border-emerald-300 bg-emerald-50 rounded-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">
          Recommended free stack
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {freeStackTags.map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1 rounded-full border border-emerald-300 bg-emerald-100 text-emerald-800 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-sm text-emerald-800 leading-relaxed">
          Total cost: <strong>$0</strong> for most teams. Add Claude Code
          subscription only when you need skills, hooks, and plan mode. Use
          OpenRouter free models (Llama 3.1, Mistral) via Kilo Code for agentic
          tasks — or pay per token at API rates cheaper than any subscription at
          moderate usage.
        </p>
      </div>

      {/* Recommendations */}
      <div className="p-5 border border-border rounded-lg bg-secondary/20">
        <h2 className="font-semibold mb-3">Which setup for which situation?</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {recommendations.map((r) => (
            <li key={r.who} className="flex gap-2">
              <span className="text-muted-foreground/40 shrink-0">—</span>
              <span>
                <strong className="text-foreground">{r.who}:</strong> {r.ans}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
