import { CodeBlock } from "@/components/CodeBlock";
import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const mcpConfig = `{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}`;

export function McpsSection() {
  return (
    <Concept
      id="mcps"
      title="MCPs — Model Context Protocol"
      tag="Connect"
      tagColor="bg-emerald-50 text-emerald-700 border-emerald-200"
      summary="An open standard for connecting Claude to external tools and data sources. MCPs let Claude query GitHub, read Figma files, fetch live library docs, or talk to any API — without you copy-pasting anything."
    >
      <Diagram>
        <div className="text-muted-foreground mb-3">Without MCPs vs. with MCPs:</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-red-500 mb-1">✗ Without</div>
            <div className="text-muted-foreground space-y-0.5">
              <div>You → copy docs from browser</div>
              <div>You → paste into prompt</div>
              <div>You → copy GitHub issue</div>
              <div>You → paste into prompt</div>
              <div className="text-red-400 mt-1">Slow. Error-prone. More tokens.</div>
            </div>
          </div>
          <div>
            <div className="text-emerald-500 mb-1">✓ With MCPs</div>
            <div className="text-muted-foreground space-y-0.5">
              <div>Claude → asks context7 for docs</div>
              <div>Claude → reads GitHub issue</div>
              <div>Claude → reads Figma frame</div>
              <div className="text-emerald-400 mt-1">Fast. Accurate. Automatic.</div>
            </div>
          </div>
        </div>
      </Diagram>

      <CodeBlock code={mcpConfig} lang="json" filename=".mcp.json" />

      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
        <span className="text-amber-600 shrink-0">⚠</span>
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Token cost:</strong> Every MCP you add loads its tool definitions into your
          context window on every session — whether you use it or not. Only add MCPs you actively
          use. Disable idle ones with <code className="bg-amber-100 px-1 rounded">/mcp</code>.
        </p>
      </div>

      <ul className="space-y-1.5 mt-4">
        <Do>Use Context7 for any library with fast-moving APIs (Next.js, React, Flutter)</Do>
        <Do>Use CLI tools (gh, aws) instead of MCPs when they do the same thing — cheaper</Do>
        <Dont>Add GitHub MCP if you only use it once a week — just use the gh CLI</Dont>
        <Dont>Add Figma MCP globally — only add it per-project when doing frontend work</Dont>
      </ul>
    </Concept>
  );
}
