import { claudeModels } from "../data";

function Dots({ filled, total }: { filled: number; total: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`w-2 h-2 rounded-full ${i < filled ? "bg-foreground" : "bg-border"}`} />
      ))}
    </span>
  );
}

export function ModelCards() {
  return (
    <section className="mb-14">
      <h2 className="text-lg font-semibold mb-1">Claude model families</h2>
      <p className="text-sm text-muted-foreground mb-5">
        All three models share the same 200K context window. The differences are speed, cost, and reasoning depth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {claudeModels.map((m) => (
          <div key={m.id} className="border border-border rounded-xl p-5 bg-card flex flex-col gap-4">
            <div>
              <span className={`text-sm font-semibold px-2 py-0.5 rounded-full border ${m.tierColor}`}>
                {m.tier}
              </span>
              <h3 className="font-semibold mt-2 mb-0.5">{m.name}</h3>
              <code className="text-sm text-muted-foreground">{m.apiId}</code>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <div>
                <div className="mb-1">Speed</div>
                <Dots filled={m.speed} total={3} />
              </div>
              <div>
                <div className="mb-1">Cost</div>
                <Dots filled={m.cost} total={4} />
              </div>
              <div>
                <div className="mb-1">Context</div>
                <div className="font-medium text-foreground">{m.context}</div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1.5">Best for</p>
              <ul className="space-y-1">
                {m.bestFor.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground flex gap-1.5">
                    <span className="text-emerald-600 shrink-0">·</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground border-t border-border pt-3 leading-relaxed">{m.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
