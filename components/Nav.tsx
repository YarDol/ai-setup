"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/setup", label: "Setup" },
  { href: "/concepts", label: "Concepts" },
  { href: "/tools", label: "Tools" },
  { href: "/models", label: "Models" },
  { href: "/ides", label: "IDEs" },
  { href: "/platforms", label: "Platforms" },
  { href: "/security", label: "Security" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm tracking-tight shrink-0">
          Claude Code Setup
        </Link>
        <nav className="flex items-center gap-0.5 overflow-x-auto">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded text-sm whitespace-nowrap transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
