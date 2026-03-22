export const androidClaude = `# Android Project

## Commands
- Build debug: \`./gradlew assembleDebug\`
- Run tests: \`./gradlew test\`
- Install on device: \`adb install build/outputs/apk/debug/app-debug.apk\`
- Lint: \`./gradlew lint\`
- List devices: \`adb devices\`

## Stack
- Language: Kotlin (use Java only for legacy code)
- Architecture: MVVM + Android Architecture Components (ViewModel, LiveData, Room)
- DI: Hilt
- Async: Coroutines + Flow

## Code style
- Follow Kotlin coding conventions
- Suspend functions for async work, not callbacks
- Use data classes for models
- ViewBinding over synthetic accessors

## Compaction Instructions
When compacting, preserve: current task, build errors, modified files list.`;

export const iosClaude = `# iOS Project

## Commands
- List simulators: \`xcrun simctl list devices\`
- Run tests: \`xcodebuild test -scheme <AppName> -destination 'platform=iOS Simulator,name=iPhone 16'\`
- Build: \`xcodebuild -scheme <AppName> -destination generic/platform=iOS\`
- Open simulator: \`xcrun simctl boot "iPhone 16" && open -a Simulator\`
- SPM update: \`xcodebuild -resolvePackageDependencies\`

## Stack
- Language: Swift (Objective-C for legacy only)
- UI: SwiftUI preferred, UIKit for complex custom views
- Async: async/await + Combine
- Architecture: MVVM or VIPER for larger modules

## Code style
- Follow Swift API design guidelines
- Prefer value types (structs) over classes
- Use guard for early returns
- Descriptive names over abbreviations

## Compaction Instructions
When compacting, preserve: current task, build errors, modified files list.`;

export const fsjsClaude = `# Full-Stack JavaScript

## Commands
- Install: \`bun install\`
- Dev (backend): \`bun run dev:backend\`
- Dev (frontend): \`bun dev\`
- Test: \`bun test\`
- Lint: \`bun run lint\`
- Type check: \`bunx tsc --noEmit\`
- Build: \`bun run build\`

## Stack
- Backend: Node.js + Express (or Fastify)
- Frontend: React + Next.js (App Router)
- Language: TypeScript everywhere
- Testing: Jest (backend), Vitest (frontend)
- Styling: Tailwind CSS

## Code style
- Prefer async/await over .then chains
- Use zod for runtime validation at system boundaries
- Named exports over default exports for non-pages
- Barrel files (index.ts) only at feature boundaries

## Context7
For React, Next.js, Tailwind, or any library: mention "use context7" in your prompt
to get accurate, up-to-date API docs instead of potentially outdated training data.

## Compaction Instructions
When compacting, preserve: current task, TypeScript errors, modified files list.`;

export const monorepoClaude = `# Monorepo

## Structure
- packages/frontend/   — React/Next.js app
- packages/backend/    — Node.js API
- packages/shared/     — Shared types and utilities

## Commands
- Install all: \`bun install\`
- Build all: \`bun run build --filter='*'\`
- Test all: \`bun run test --filter='*'\`
- Frontend only: \`cd packages/frontend && bun dev\`
- Backend only: \`cd packages/backend && bun dev\`

## Package-specific CLAUDE.md
Each package has its own CLAUDE.md in packages/<name>/CLAUDE.md
Claude auto-discovers these when working in that directory.

## Compaction Instructions
When compacting, preserve: current package context, modified files list, active task.`;

export interface Platform {
  id: string;
  title: string;
  subtitle: string;
  note: string;
  code: string;
  filename: string;
  lang: string;
}

export const platforms: Platform[] = [
  {
    id: "android",
    title: "Android",
    subtitle: "Kotlin + Gradle",
    note: "Works well with Context7 for Jetpack Compose and Android SDK docs. ECC includes kotlin-reviewer and kotlin-build-resolver agents.",
    code: androidClaude,
    filename: "CLAUDE.md",
    lang: "markdown",
  },
  {
    id: "ios",
    title: "iOS",
    subtitle: "Swift + Xcode",
    note: "SwiftUI docs change frequently — Context7 is especially valuable here. Use xcrun simctl for simulator control without leaving the terminal.",
    code: iosClaude,
    filename: "CLAUDE.md",
    lang: "markdown",
  },
  {
    id: "fullstack-js",
    title: "Full-Stack JavaScript",
    subtitle: "Node.js + React/Next.js",
    note: "Context7 is critical for Next.js — App Router APIs and React Server Components patterns have changed significantly. ECC includes typescript-reviewer.",
    code: fsjsClaude,
    filename: "CLAUDE.md",
    lang: "markdown",
  },
  {
    id: "monorepo",
    title: "Monorepo",
    subtitle: "Multi-package setup",
    note: "Place CLAUDE.md files in each package — Claude auto-discovers them when working in that directory. Path-specific rules in .claude/rules/ can target specific subdirectories.",
    code: monorepoClaude,
    filename: "CLAUDE.md",
    lang: "markdown",
  },
];
