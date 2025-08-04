import type { Metadata } from "next";
import "./globals.css";
import MouseEffect from "@/components/MouseEffect";

export const metadata: Metadata = {
  title: "zPleum - Full Stack Developer",
  description: "Portfolio showcasing my work as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-body">
        <MouseEffect />
        <div className="relative min-h-screen flex flex-col">
          {/* Background pattern */}
          <div className="fixed inset-0 dots-background pointer-events-none z-0" />

          {/* Gradient mask at top */}
          <div className="fixed top-0 left-0 right-0 h-20 gradient-mask pointer-events-none z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
