import Link from "next/link";
import { layers, pages } from "./data";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          Claude Team · Best Practices 2026
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-[1.15] mb-4">
          Claude Code setup guide
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-7">
          From first install to advanced workflows — structured so interns can
          follow it and seniors can skip straight to what they need.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/setup"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start setup →
          </Link>
          <Link
            href="/concepts"
            className="px-5 py-2.5 border border-border rounded-lg text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Learn concepts
          </Link>
        </div>
      </div>

      {/* Token warning */}
      <div className="mb-12 flex gap-3 p-4 border border-amber-200 bg-amber-50 rounded-lg">
        <span className="text-amber-500 shrink-0 mt-0.5">⚠</span>
        <div>
          <p className="text-sm font-semibold text-amber-900 mb-0.5">
            Don&apos;t install everything
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Every tool, MCP, and skill consumes tokens from your context window
            — even when idle. This guide shows the{" "}
            <strong>minimum effective stack</strong>. Add more only when you
            have a concrete need.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-1">How it works</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Claude Code is the foundation. You layer tools on top of it — each
          layer adds capability without replacing the one below.
        </p>

        <div className="space-y-1">
          {layers.map((layer, i) => (
            <div key={layer.num}>
              <div
                className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${layer.color}`}
              >
                <div className="shrink-0 flex flex-col mt-1.5 items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${layer.dot}`} />
                  <span className="text-sm font-mono text-muted-foreground">
                    L{layer.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-semibold text-sm">{layer.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-0.5 text-muted-foreground/40 text-sm select-none">
                  ▾
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-3 text-center">
          Layer 1 (Claude Code) is the only required layer. Everything else is
          optional enhancement.
        </p>
      </div>

      {/* Guide index */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          What&apos;s in this guide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pages.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col gap-2 p-4 border border-border rounded-lg hover:border-foreground/30 hover:bg-secondary/20 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-muted-foreground/60">
                  {p.step}
                </span>
                <span className="font-semibold text-sm group-hover:underline">
                  {p.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
