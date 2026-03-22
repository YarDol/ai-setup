import { competitorRows } from "../data";

function Rating({ level }: { level: "excellent" | "good" | "fair" }) {
  const map = {
    excellent: "bg-emerald-100 text-emerald-700",
    good: "bg-blue-50 text-blue-700",
    fair: "bg-secondary text-muted-foreground",
  };
  return (
    <span className={`text-sm font-medium px-1.5 py-0.5 rounded ${map[level]}`}>{level}</span>
  );
}

export function ComparisonTable() {
  return (
    <section className="mb-14">
      <h2 className="text-lg font-semibold mb-1">Model family comparison</h2>
      <p className="text-sm text-muted-foreground mb-4">
        How the major AI model families compare across dimensions relevant to software development.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold">Provider</th>
              <th className="text-left py-2 pr-4 font-semibold">Models</th>
              <th className="text-left py-2 pr-4 font-semibold">Coding</th>
              <th className="text-left py-2 pr-4 font-semibold">Reasoning</th>
              <th className="text-left py-2 pr-4 font-semibold">Speed</th>
              <th className="text-left py-2 pr-4 font-semibold">Context</th>
              <th className="text-left py-2 pr-4 font-semibold">Cost range</th>
              <th className="text-left py-2 font-semibold">Free tier</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {competitorRows.map((r) => (
              <tr key={r.vendor} className="border-b border-border/50">
                <td className="py-3 pr-4 font-medium text-foreground">{r.vendor}</td>
                <td className="py-3 pr-4">{r.models}</td>
                <td className="py-3 pr-4"><Rating level={r.coding} /></td>
                <td className="py-3 pr-4"><Rating level={r.reasoning} /></td>
                <td className="py-3 pr-4">{r.speed}</td>
                <td className="py-3 pr-4 font-mono text-sm">{r.context}</td>
                <td className="py-3 pr-4">{r.cost}</td>
                <td className="py-3">{r.free ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Benchmarks change frequently. These ratings reflect mid-2026 SWE-bench and reasoning evaluations.
      </p>
    </section>
  );
}
