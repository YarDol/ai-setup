import { CodeBlock } from "@/components/CodeBlock";
import { platforms } from "./data";

export default function PlatformsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Platform Guides
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Copy-ready configs per platform</h1>
        <p className="text-muted-foreground leading-relaxed">
          Each block below is a CLAUDE.md template for that platform. Copy it into your project
          root, then customize the Stack and Commands sections.
        </p>
      </div>

      <div className="space-y-12">
        {platforms.map((p) => (
          <div key={p.id} id={p.id}>
            <div className="flex items-baseline gap-3 mb-1">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <span className="text-sm text-muted-foreground">{p.subtitle}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.note}</p>
            <CodeBlock code={p.code} lang={p.lang} filename={p.filename} />
          </div>
        ))}
      </div>

      <div className="mt-12 p-5 border border-border rounded-lg">
        <h2 className="font-semibold mb-2">General CLAUDE.md tips</h2>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-muted-foreground/50">—</span>
            <span>Keep under 200 lines. Longer files reduce adherence — Claude skims rather than reads.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground/50">—</span>
            <span>Always include Compaction Instructions so Claude knows what to preserve when context fills.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground/50">—</span>
            <span>
              Use <code className="bg-secondary px-1 rounded text-sm">@path/to/file</code> to
              import other docs inline, e.g.{" "}
              <code className="bg-secondary px-1 rounded text-sm">@docs/api-conventions.md</code>.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground/50">—</span>
            <span>Put project-wide rules in root CLAUDE.md. Package-specific rules in each package&apos;s CLAUDE.md.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground/50">—</span>
            <span>
              Run <code className="bg-secondary px-1 rounded text-sm">/init</code> in any existing
              project to auto-generate a starter CLAUDE.md from your codebase.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
