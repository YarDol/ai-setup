import { Concept, Diagram, Do, Dont } from "@/components/concepts/primitives";

const modes = [
  {
    label: "Default",
    desc: "Prompts before each write or command",
    style: "border-border bg-card",
    textStyle: "text-foreground",
  },
  {
    label: "Plan Mode",
    desc: "Read-only — explore + plan first, then execute",
    style: "border-orange-300 bg-orange-50",
    textStyle: "text-orange-700",
  },
  {
    label: "Accept Edits",
    desc: "Auto-accepts file edits, prompts for commands",
    style: "border-border bg-card",
    textStyle: "text-foreground",
  },
];

export function PlanModeSection() {
  return (
    <Concept
      id="planmode"
      title="Plan Mode"
      tag="Careful"
      tagColor="bg-orange-50 text-orange-700 border-orange-200"
      summary="A read-only mode where Claude explores and plans without making any changes. Use it before touching unfamiliar code or implementing large features."
    >
      <Diagram>
        <div className="grid grid-cols-3 gap-2 text-sm text-center">
          {modes.map((m) => (
            <div key={m.label} className={`p-2 border rounded ${m.style}`}>
              <div className={`font-semibold mb-1 ${m.textStyle}`}>{m.label}</div>
              <div className="text-muted-foreground">{m.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-center text-muted-foreground">
          Switch with <span className="text-foreground">Shift+Tab</span> · or start with{" "}
          <span className="text-foreground">claude --permission-mode plan</span>
        </div>
      </Diagram>

      <ul className="space-y-1.5 mt-2">
        <Do>Use plan mode for multi-file refactors or unfamiliar codebases</Do>
        <Do>
          Review and edit the plan before approving — Claude writes it to a file you can modify
        </Do>
        <Dont>Use plan mode for simple single-file edits — it adds friction for no benefit</Dont>
      </ul>
    </Concept>
  );
}
