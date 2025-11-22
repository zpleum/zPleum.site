import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sovRangBab = localFont({
  src: [
    {
      path: "../fonts/SOV_RangBab.ttf",
    }
  ],
  variable: "--font-sov-rangbab",
});

const sovKhongKhanad = localFont({
  src: [
    {
      path: "../fonts/SOV_KhongKhanad.ttf",
    }
  ],
  variable: "--font-sov-khongkhanad",
});

export const metadata: Metadata = {
  title: "zPleum - Full Stack Developer",
  description: "Portfolio of Wiraphat Makwong, aka Pleum, Full Stack Developer",
  keywords: [
    "zPleum",
    "Wiraphat",
    "Makwong",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer"
  ],
  authors: [{ name: "Wiraphat Makwong" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${sovRangBab.variable} ${sovKhongKhanad.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased selection:bg-[var(--primary)] selection:text-white">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
