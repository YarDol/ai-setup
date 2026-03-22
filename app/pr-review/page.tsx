import { CodeBlock } from "@/components/CodeBlock";
import { compareRows } from "./data";
import { ToolCards } from "./sections/ToolCards";

const qodoWorkflow = `name: PR Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write
    steps:
      - uses: qodo-ai/pr-agent-action@latest
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
          CONFIG__AI__MODEL: claude-haiku-4-5-20251001
          CONFIG__PR_REVIEWER__REQUIRE_SCORE_LABEL: false`;

const recommendations = [
  {
    who: "Best free for private repos",
    ans: "Qodo PR-Agent on GitHub Actions + Claude Haiku. Under $5/month for 100 PRs.",
  },
  {
    who: "OSS / public repos",
    ans: "CodeRabbit free tier — install the GitHub App, unlimited reviews forever.",
  },
  {
    who: "Review before pushing",
    ans: "Kilo Code Review in VS Code. /local-review catches issues before the PR opens.",
  },
  {
    who: "Full control, any model",
    ans: "DIY GitHub Actions workflow. Write the prompt yourself, pay only for tokens used.",
  },
];

export default function PRReviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          PR Review
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          AI PR review — free and near-free setups
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Most PR review tools charge per developer seat. At 5 developers,
          that&apos;s $120/month before you even think about Claude Code. Here
          is what actually costs nothing (or close to it) for private repos.
        </p>
      </div>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">Quick comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold w-36" />
                {[
                  "CodeRabbit",
                  "Qodo PR-Agent",
                  "Kilo Code",
                  "DIY Actions",
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
                  <td className="py-2.5 pr-4 text-sm">{r.coderabbit}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.qodo}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.kilo}</td>
                  <td className="py-2.5 pr-4 text-sm">{r.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ToolCards />

      {/* Qodo GitHub Actions snippet */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2">
          Qodo PR-Agent — GitHub Actions setup
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Add this file at{" "}
          <code className="bg-secondary px-1 rounded">
            .github/workflows/pr-review.yml
          </code>
          , then add{" "}
          <code className="bg-secondary px-1 rounded">ANTHROPIC_API_KEY</code>{" "}
          to your repo secrets. Reviews start on the next PR.
        </p>
        <CodeBlock
          code={qodoWorkflow}
          lang="yaml"
          filename=".github/workflows/pr-review.yml"
        />
        <p className="text-sm text-muted-foreground mt-2">
          Swap{" "}
          <code className="bg-secondary px-1 rounded">
            claude-haiku-4-5-20251001
          </code>{" "}
          for{" "}
          <code className="bg-secondary px-1 rounded">claude-sonnet-4-6</code>{" "}
          if you want deeper reviews.
        </p>
      </section>

      {/* Recommended free setup */}
      <div className="mb-10 p-5 border border-emerald-300 bg-emerald-50 rounded-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">
          Recommended free setup
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {["Qodo PR-Agent (OSS)", "GitHub Actions", "Claude Haiku API"].map(
            (t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 rounded-full border border-emerald-300 bg-emerald-100 text-emerald-800 font-medium"
              >
                {t}
              </span>
            ),
          )}
        </div>
        <p className="text-sm text-emerald-800 leading-relaxed">
          Qodo PR-Agent is open source — run it on GitHub Actions with your own
          Anthropic API key. Cost: <strong>~$0.01–0.05 per PR review</strong>{" "}
          using Claude Haiku. A team doing 100 PRs/month pays under $5. See the
          workflow snippet below.
        </p>
      </div>

      {/* Bottom line */}
      <div className="p-5 border border-border rounded-lg bg-secondary/20">
        <h2 className="font-semibold mb-2">Which setup for which situation?</h2>
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
