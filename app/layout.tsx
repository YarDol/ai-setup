import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Code — Best Team Setup",
  description:
    "Curated Claude Code setup guide: recommended tools, MCPs, skills, and configurations for development teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border py-6">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
            <span>Claude Code Best Setup — Team Guide</span>
            <a
              href="https://github.com/YarDol/ai-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
