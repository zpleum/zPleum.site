"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectShowcaseBlock from "@/components/ProjectShowcaseBlock";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-transparent">
        <main className="flex-1 flex flex-col items-center px-4 sm:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl flex flex-col items-center"
          >
            {/* Project Showcase Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full"
            >
              <ProjectShowcaseBlock />
            </motion.div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
}