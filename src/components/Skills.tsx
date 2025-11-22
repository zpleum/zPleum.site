"use client";

import React from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Languages";
};

const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "C++", category: "Backend" },
  { name: "GitHub", category: "Tools" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--foreground)]">Skills & Technologies</h2>
          <p className="text-center text-[var(--foreground)]/60 mb-12 max-w-2xl mx-auto">
            My technical toolkit that I use to build scalable and efficient applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--primary)] hover:shadow-md transition-all duration-300 flex items-center justify-center text-center group"
              >
                <span className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
