export const mcpJson = `{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "\${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    },
    "figma": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "figma-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "\${FIGMA_ACCESS_TOKEN}"
      }
    }
  }
}`;

export const claudeMdTemplate = `# Project Name

## Commands
- Dev: \`bun dev\`
- Build: \`bun run build\`
- Test: \`bun test\`
- Lint: \`bun run lint\`

## Stack
- [Describe your stack here]

## Code style
- [Key rules that differ from defaults]

## Compaction Instructions
When compacting, preserve: current task, modified files list, recent errors.`;

export const globalSettingsJson = `{
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

export const existingRepoSteps = `# In your existing project folder:
claude                              # Open Claude Code
/init                               # Generate a CLAUDE.md starter
# Copy .mcp.json from this repo
# Copy .claude/settings.json from this repo`;
