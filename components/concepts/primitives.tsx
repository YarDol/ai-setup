import { ReactNode } from "react";

interface ConceptProps {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  summary: string;
  children: ReactNode;
}

export function Concept({ id, title, tag, tagColor, summary, children }: ConceptProps) {
  return (
    <section id={id} className="scroll-mt-20 pt-10 pb-10 border-b border-border last:border-0">
      <div className="flex items-start gap-3 mb-3">
        <span className={`mt-0.5 text-sm font-semibold px-2 py-0.5 rounded-full border ${tagColor} shrink-0`}>
          {tag}
        </span>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{summary}</p>
      {children}
    </section>
  );
}

export function Diagram({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 p-4 font-mono text-sm leading-relaxed overflow-x-auto mb-4">
      {children}
    </div>
  );
}

export function TwoCol({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div className="p-4 border border-border rounded-lg bg-card">{left}</div>
      <div className="p-4 border border-border rounded-lg bg-card">{right}</div>
    </div>
  );
}

export function Do({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-muted-foreground">
      <span className="text-emerald-600 font-semibold shrink-0">✓</span>
      <span>{children}</span>
    </li>
  );
}

export function Dont({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-muted-foreground">
      <span className="text-destructive font-semibold shrink-0">✗</span>
      <span>{children}</span>
    </li>
  );
}
