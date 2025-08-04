"use client";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image'

type Project = {
  title: string;
  description: string;
  caseStudyUrl: string;
  projectUrl: string;
  image: string;
};

const projects: Project[] = [
    {
      title: "Bonniecraft Minecraft Store",
      description:
        "A full-stack e-commerce platform tailored for Minecraft servers, delivering secure payments, robust user authentication, and seamless automated in-game item delivery.",
      caseStudyUrl: "/project/bonniecraft",
      projectUrl: "https://bonniecraft.zpleum.site/",
      image: "/projects/bonniecraft.png",
    },
    {
      title: "zPleumVerify Minecraft Team Verification",
      description:
        "zPleumVerify — The Smart & Secure Minecraft Team Verification System with Discord API.",
      caseStudyUrl: "/project/zpleumverify",
      projectUrl: "https://zpleumverify.zpleum.site/",
      image: "/projects/zpleumverify.png",
    },
    {
      title: "zPleumCORE Minecraft Team Verification",
      description:
        "zPleumCORE — The Ultimate OP Hacker Shield & Advanced Security for Minecraft Servers The core system built to protect your Minecraft server from OP hackers with real-time detection and blocking, delivering top-tier security so your server stays safe 24/7.",
      caseStudyUrl: "/project/zpleumcore",
      projectUrl: "https://zpleumcore.zpleum.site/",
      image: "/projects/zpleumcore.png",
    },
];

function ProgressIndicators({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="flex px-4 gap-2 justify-center min-w-0 w-full relative">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show project ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`flex rounded-full min-w-0 w-full relative cursor-pointer transition-all duration-300 hover:opacity-75 focus:outline-none`}
          style={{
            height: "3px",
            backgroundColor:
              index === active
                ? "var(--neutral-on-background-strong)"
                : "var(--neutral-alpha-medium)",
          }}
        />
      ))}
    </div>
  );
}

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate logic
  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      handleSetActive((active + 1) % projects.length, "up");
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, [paused, active]);

  // Animation logic
  function handleSetActive(idx: number, dir: "up" | "down" = "up") {
    if (idx === active) return;
    setDirection(dir);
    setActive(idx);
    setAnimating(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayed(idx);
      setAnimating(false);
    }, 600); // 600ms = duration
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const current = projects[displayed];
  const next = projects[active];

  // Custom transition classes
  const transitionBase =
    "absolute inset-0 w-full h-full rounded-2xl shadow-lg object-cover transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform will-change-opacity";

  return (
    <div
      className="flex pb-12 gap-8 flex-col min-w-0 w-full relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex justify-center min-w-0 w-full relative reveal-animation">
        <div className="flex px-8 mb-16 gap-12 flex-col min-w-0 w-full relative">
          <div className="flex gap-8 flex-col min-w-0 w-full relative">
            {/* รูปภาพ transition */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] overflow-hidden">
              {/* รูปเก่า */}
              <Image
                key={current.title + "-current"}
                width={500}
                height={500}
                src={current.image}
                alt={current.title}
                className={
                  transitionBase +
                  " z-10 " +
                  (animating
                    ? direction === "up"
                      ? "opacity-0 translate-y-12 scale-95"
                      : "opacity-0 -translate-y-12 scale-95"
                    : "opacity-100 translate-y-0 scale-100")
                }
                style={{
                  pointerEvents: "none",
                }}
              />
              {/* รูปใหม่ (ถ้าเปลี่ยน) */}
              {animating && (
                <Image
                  key={next.title + "-next"}
                  width={500}
                  height={500}
                  src={next.image}
                  alt={next.title}
                  className={
                    transitionBase +
                    " z-20 " +
                    (direction === "up"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-100 translate-y-0 scale-100")
                  }
                  style={{
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-4 flex-col min-w-0 w-full relative">
              <ProgressIndicators
                count={projects.length}
                active={active}
                onSelect={(idx) =>
                  handleSetActive(
                    idx,
                    idx > active || (active === projects.length - 1 && idx === 0)
                      ? "up"
                      : "down"
                  )
                }
              />
            </div>

            {/* Project Content */}
            <div className="flex pt-6 pb-8 px-4 gap-12 flex-col lg:flex-row min-w-0 w-full relative">
              <div className="flex flex-1 flex-col items-start relative">
                <h2
                  className="font-semibold text-2xl lg:text-3xl leading-tight"
                  style={{
                    color: "var(--neutral-on-background-strong)",
                  }}
                >
                  {next.title}
                </h2>
              </div>

              <div className="flex gap-6 flex-col flex-1 relative">
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "var(--neutral-on-background-weak)",
                  }}
                >
                  {next.description}
                </p>

                <div className="flex gap-8 flex-wrap relative">
                  <a
                    href={next.caseStudyUrl}
                    className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:text-[var(--neutral-on-background-strong)]"
                    style={{
                      color: "var(--neutral-on-background-weak)",
                    }}
                  >
                    Read case study
                  </a>

                  <a
                    href={next.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-200 hover:text-[var(--neutral-on-background-strong)]"
                    style={{
                      color: "var(--neutral-on-background-weak)",
                    }}
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}