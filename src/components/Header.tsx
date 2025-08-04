"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { LuGrid2X2, LuImage } from "react-icons/lu";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { usePathname } from "next/navigation";

// ฟังก์ชั่นสำหรับดึง initial theme
const getInitialTheme = (): "light" | "dark" => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  }
  return "dark";
};

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: "Asia/Bangkok",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Helper function สำหรับเช็ค active
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-0 flex flex-col items-center min-w-0 w-full relative z-30 backdrop-blur">
      <header className="flex p-2 justify-center items-center min-w-0 w-full relative">
        {/* Left section - hide on mobile */}
        <div className="hidden sm:flex pl-3 items-center min-w-0 w-full relative font-body font-s text-sm">
          <div className="flex relative text-[var(--neutral-on-background)]">
            Asia/Thailand
          </div>
        </div>

        {/* Center navigation */}
        <div className="flex justify-center min-w-0 w-full relative">
          <div
            className="flex p-1 items-center justify-center shadow-lg relative z-10 rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: "var(--surface-background)",
              border: "1px solid var(--neutral-border-alpha-medium)"
            }}
          >
            <div className="flex gap-2 items-center relative font-body text-sm">
              {/* Home */}
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 px-6 rounded-full ${
                  isActive("/") ? "bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-strong)]" : "hover:bg-[var(--neutral-alpha-medium)]"
                }`}
                asChild
                style={{
                  border: "1px solid var(--neutral-border-alpha-medium)"
                }}
              >
                <Link href="/">
                  <GoHome className="w-4 h-4" />
                </Link>
              </Button>

              {/* Divider */}
              <div className="w-px h-6 bg-[var(--neutral-background-alpha-medium)]" />

              {/* About */}
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-3 rounded-full ${
                  isActive("/about") ? "bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-strong)]" : "hover:bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-weak)]"
                }`}
                asChild
              >
                <Link href="/about" className="flex items-center gap-2">
                  <FaRegUserCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">About</span>
                </Link>
              </Button>

              {/* Projects */}
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-3 rounded-full ${
                  isActive("/project") ? "bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-strong)]" : "hover:bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-weak)]"
                }`}
                asChild
              >
                <Link href="/project" className="flex items-center gap-2">
                  <LuGrid2X2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Projects</span>
                </Link>
              </Button>

              {/* Gallery */}
              <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-3 rounded-full ${
                  isActive("/gallery") ? "bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-strong)]" : "hover:bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-weak)]"
                }`}
                asChild
              >
                <Link href="/gallery" className="flex items-center gap-2">
                  <LuImage className="w-4 h-4" />
                  <span className="hidden sm:inline">Gallery</span>
                </Link>
              </Button>

              {/* Divider */}
              <div className="w-px h-6 bg-[var(--neutral-background-alpha-medium)]" />

              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 px-6 rounded-full hover:bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-weak)]"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <MdDarkMode className="w-4 h-4" />
                ) : (
                  <MdLightMode className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Right section - hide on mobile */}
        <div className="hidden sm:flex justify-end items-center min-w-0 w-full relative">
          <div className="flex pr-3 gap-5 justify-end items-center relative font-body text-sm">
            <div className="flex relative text-[var(--neutral-on-background-weak)]">
              {currentTime}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile time display */}
      <div className="flex sm:hidden justify-center items-center gap-2 p-1 text-sm text-[var(--neutral-on-background-weak)]">
        <span>Asia/Thailand</span>
        <span>•</span>
        <span>{currentTime}</span>
      </div>
    </div>
  );
}
