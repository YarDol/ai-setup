import { prTools } from "../data";

export function ToolCards() {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold mb-5">Tool breakdown</h2>
      <div className="space-y-5">
        {prTools.map((tool) => (
          <div
            key={tool.id}
            className="border border-border rounded-xl p-5 bg-card"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold">{tool.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tool.badgeColor}`}
                  >
                    {tool.tagline}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{tool.price}</p>
              </div>
            </div>

            {tool.freeTierNote && (
              <div className="mb-3 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                {tool.freeTierNote}
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {tool.freeTier}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700 mb-1.5">
                  Strengths
                </p>
                <ul className="space-y-1">
                  {tool.strengths.map((s) => (
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
                  {tool.weaknesses.map((w) => (
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
    </section>
  );
}
