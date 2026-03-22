import type { IDE } from "@/app/ides/data";

export function IdeCard({ ide }: { ide: IDE }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="flex items-start gap-3 p-5 border-b border-border">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-semibold">{ide.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${ide.badgeColor}`}>
              {ide.tagline}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{ide.price} · {ide.platform}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Built-in AI</p>
          <p className="text-sm text-muted-foreground">{ide.builtInAI}</p>
        </div>
      </div>

      {ide.freeTierWarning && (
        <div className="px-5 py-3 bg-amber-50 border-b border-amber-200 flex gap-2">
          <span className="text-amber-600 shrink-0">⚠</span>
          <p className="text-sm text-amber-800 leading-relaxed">{ide.freeTierWarning}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
        <div className="p-4">
          <p className="text-sm font-semibold text-foreground mb-1.5">Free tier</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{ide.freeTier}</p>
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold text-foreground mb-1.5">Connect Claude Code</p>
          <ol className="space-y-1">
            {ide.claudeConnectSteps.map((s, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-1.5">
                <span className="shrink-0 font-semibold text-foreground">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <div className="p-4">
          <p className="text-sm font-semibold text-foreground mb-1.5">Free AI tools for this IDE</p>
          <ul className="space-y-1 mb-3">
            {ide.theirAIFeatures.map((f) => (
              <li key={f} className="text-sm text-muted-foreground flex gap-1.5">
                <span className="text-emerald-500 shrink-0">·</span>{f}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground border-t border-border pt-2 leading-relaxed">
            <strong className="text-foreground">Combined: </strong>{ide.combineWith}
          </p>
        </div>
      </div>
    </div>
  );
}
