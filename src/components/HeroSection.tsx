import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="flex py-12 gap-8 flex-col min-w-0 w-full relative">
      <div
        className="flex flex-col w-full relative mx-auto"
        style={{ maxWidth: "var(--responsive-width-m)" }}
      >
        {/* Badge */}
        <div className="flex pl-3 pt-6 pb-12 justify-start min-w-0 w-full relative reveal-animation">
          <div
            className="flex px-4 py-2 items-center w-fit shadow-lg relative font-medium text-sm rounded-full backdrop-blur-sm"
            style={{
              backgroundColor: "var(--brand-background-weak)",
              border: "1px solid var(--brand-border-medium)",
              color: "var(--neutral-on-background-strong)"
            }}
          >
            I&apos;m: <strong className="ml-1">Full Stack Developer</strong>
          </div>
        </div>

        {/* Main Heading */}
        <div className="flex pb-6 justify-start min-w-0 w-full relative reveal-animation">
          <div className="relative w-full flex items-center">
            <h1
              className="font-bold leading-tight tracking-tight z-10"
              style={{
                color: "var(--neutral-on-background-strong)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.1"
              }}
            >
              Crafting Bold Systems & Meaningful Web Experiences
            </h1>
            <Image
              src="/profile.png"
              alt="Profile"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-100 rounded-full object-cover opacity-80 pointer-events-none select-none ring-4 ring-white/20 hidden sm:block"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className="flex pb-12 justify-start min-w-0 w-full relative reveal-animation">
          <p
            className="text-xl leading-relaxed gradient-text bg-[#34D5E3]/10"
            style={{
              color: "var(--neutral-on-background-weak)"
            }}
          >
            I&apos;m zPleum, a developer who designs systems that work because I make them work.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex pl-3 pt-4 justify-start min-w-0 w-full relative reveal-animation">
          <Button
            size="lg"
            className="px-6 py-3 text-base font-medium rounded-full relative group transition-all duration-200"
            style={{
              backgroundColor: "var(--surface-background)",
              border: "1px solid var(--neutral-border-alpha-medium)",
              color: "var(--neutral-on-background-strong)"
            }}
            asChild
          >
            <Link href="/about">
              <span className="flex items-center gap-2">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  className="w-7 h-7 rounded-full object-cover"
                  width={28}
                  height={28}
                />
                About – zPleum
                <div className="group-hover:pl-2 transition-all duration-200">
                  <FaLongArrowAltRight />
                </div>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}