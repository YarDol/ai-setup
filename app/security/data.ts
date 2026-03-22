export const settingsJson = `{
  "permissions": {
    "allow": [
      "Bash(bun *)",
      "Bash(bunx *)",
      "Bash(npx *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(git add *)",
      "Bash(git commit *)"
    ],
    "deny": [
      "Read(.env*)",
      "Read(*.key)",
      "Read(*.pem)",
      "Bash(rm -rf *)",
      "Bash(* | bash)",
      "Bash(* | sh)",
      "Bash(curl * | *)"
    ]
  }
}`;

export const envExample = `# Copy this file to .env.local and fill in values
# .env.local is gitignored and never shared with Claude

GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
FIGMA_ACCESS_TOKEN=figd_your_token_here
DATABASE_URL=postgres://user:pass@localhost/mydb`;

export const gitignore = `# Claude should not read these
.env
.env.local
.env.*.local
*.key
*.pem
*.p12
credentials.json`;

export interface ChecklistItem {
  item: string;
  detail: string;
}

export const checklist: ChecklistItem[] = [
  {
    item: "settings.json has deny rules",
    detail:
      "Blocks .env reads, rm -rf, and pipe-to-shell attacks. Copy from this repo.",
  },
  {
    item: ".env.local is in .gitignore",
    detail:
      "Token env vars must never be committed. Use .env.example with placeholder values.",
  },
  {
    item: "MCP tokens use env vars",
    detail:
      "Never hardcode tokens in .mcp.json. Use ${VAR_NAME} syntax — Claude expands these at runtime.",
  },
  {
    item: "CLAUDE.md says to never read .env*",
    detail:
      "Belt and suspenders — even if the deny rule is misconfigured, Claude won't try.",
  },
  {
    item: "Reviewed MCP sources",
    detail:
      "MCPs run code on your machine. Only add MCPs from sources you trust. Check for open-source audits.",
  },
];

export const permissionModes = [
  {
    mode: "default",
    what: "Prompts before each write/run action",
    when: "Most sessions",
  },
  {
    mode: "acceptEdits",
    what: "Auto-accepts file edits, prompts for commands",
    when: "Trusted projects, faster editing",
  },
  {
    mode: "plan",
    what: "Read-only. Explore and plan before execution",
    when: "Complex changes, unfamiliar repos",
  },
  {
    mode: "bypassPermissions",
    what: "Skips all prompts — no confirmation",
    when: "Sandboxed CI only",
    danger: true,
  },
];
