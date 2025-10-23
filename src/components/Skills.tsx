"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Skill = {
  name: string;
  level: number;
  colorVar: string; // CSS variable for bar color
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "IT",
    skills: [
      { name: "Computer Hardware", level: 80, colorVar: "--color-it-strong" },
      { name: "Cloudflare", level: 40, colorVar: "--color-it-medium" },
      { name: "GitHub", level: 60, colorVar: "--color-it-weak" },
      { name: "Windows", level: 90, colorVar: "--color-it-strong" },
      { name: "Linux", level: 30, colorVar: "--color-it-weak" },
      { name: "Troubleshooting", level: 80, colorVar: "--color-it-medium" },
    ],
  },
  {
    category: "Graphic",
    skills: [
      { name: "Davinci Resolve", level: 70, colorVar: "--color-graphic-strong" },
      { name: "Adobe Photoshop", level: 70, colorVar: "--color-graphic-medium" },
      { name: "Adobe Illastrator", level: 50, colorVar: "--color-graphic-weak" },
      { name: "Adobe Premiere Pro", level: 65, colorVar: "--color-graphic-medium" },
      { name: "Canva", level: 70, colorVar: "--color-graphic-strong" },
      { name: "mcpro24fps", level: 60, colorVar: "--color-graphic-medium" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "JavaScript", level: 80, colorVar: "--color-programming-strong" },
      { name: "TypeScript", level: 75, colorVar: "--color-programming-medium" },
      { name: "Python", level: 60, colorVar: "--color-programming-weak" },
      { name: "Java", level: 65, colorVar: "--color-programming-medium" },
      { name: "C++", level: 30, colorVar: "--color-programming-weak" },
    ],
  },
  {
    category: "Language",
    skills: [
      { name: "Thai", level: 100, colorVar: "--color-language-strong" },
      { name: "English", level: 60, colorVar: "--color-language-medium" },
      { name: "Chinese", level: 10, colorVar: "--color-language-weak" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = skillCategories[activeCategory];

  // fallback color
  const defaultBarColor = "#888";
  const defaultTextStrong = "#fafbfb";
  const defaultTextWeak = "#909194";

  const [colors, setColors] = useState<string[]>(
    currentCategory.skills.map(() => defaultBarColor)
  );
  const [legendColor, setLegendColor] = useState(defaultTextStrong);
  const [tooltipTitleColor, setTooltipTitleColor] = useState(defaultTextStrong);
  const [tooltipBodyColor, setTooltipBodyColor] = useState(defaultTextWeak);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      setColors(
        currentCategory.skills.map(
          (s) => getComputedStyle(root).getPropertyValue(s.colorVar) || defaultBarColor
        )
      );
      setLegendColor(getComputedStyle(root).getPropertyValue("--neutral-on-background-strong") || defaultTextStrong);
      setTooltipTitleColor(getComputedStyle(root).getPropertyValue("--neutral-on-background-strong") || defaultTextStrong);
      setTooltipBodyColor(getComputedStyle(root).getPropertyValue("--neutral-on-background-weak") || defaultTextWeak);
    }
  }, [activeCategory, currentCategory.skills]);

  const data = {
    labels: currentCategory.skills.map((s) => s.name),
    datasets: [
      {
        label: currentCategory.category + " Skills",
        data: currentCategory.skills.map((s) => s.level),
        backgroundColor: colors,
        borderRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: { color: legendColor },
      },
      tooltip: {
        enabled: true,
        titleColor: tooltipTitleColor,
        bodyColor: tooltipBodyColor,
        callbacks: {
          label: (ctx: TooltipItem<'bar'>) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: legendColor },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: legendColor,
          callback: (value) => `${value}%`,
        },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 w-full h-auto p-4">
      {/* Category buttons */}
      <div className="flex gap-4">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.category}
            className={`flex rounded-full min-w-0 w-full relative transition-all duration-300 hover:opacity-75 ${
              idx === activeCategory
                ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[var(--neutral-on-background-strong)]"
                : "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-[var(--neutral-alpha-medium)]"
            }`}
            onClick={() => setActiveCategory(idx)}
          >
            <span
              className={`w-full text-center py-2 ${
                idx === activeCategory
                  ? "text-[var(--neutral-on-background-strong)] font-semibold"
                  : "text-[var(--neutral-on-background-weak)]"
              }`}
            >
              {cat.category}
            </span>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 bg-[var(--surface-background)] p-6 rounded-2xl shadow-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
