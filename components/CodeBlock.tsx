"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export function CodeBlock({ code, lang = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden text-sm">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary">
          <span className="text-muted-foreground font-mono text-sm">
            {filename}
          </span>
          <span className="text-muted-foreground text-sm uppercase tracking-wide">
            {lang}
          </span>
        </div>
      )}
      <div className="relative group">
        <pre className="p-4 overflow-x-auto bg-secondary/40 font-mono text-sm leading-relaxed">
          <code>{code.trim()}</code>
        </pre>
        <button
          onClick={copy}
          className="absolute top-2.5 right-2.5 px-2 py-1 rounded text-sm bg-card border border-border text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
