import type { FreeTool } from "@/app/ides/free-tools";

export function FreeToolCard({ tool }: { tool: FreeTool }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-card">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-sm">{tool.name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${tool.badgeColor}`}>
          {tool.cost}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{tool.works}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tool.what}</p>
      <div className="border-t border-border pt-3">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Install</p>
        <p className="text-sm text-muted-foreground font-mono whitespace-pre-line">{tool.install}</p>
      </div>
      <div className="mt-3 pt-3 border-t border-border">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Why use it</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{tool.why}</p>
      </div>
    </div>
  );
}
