"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import { motion } from "framer-motion";

export default function Home() {
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
            {/* Hero Section with Animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <HeroSection />
            </motion.div>

            {/* Project Showcase with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full mt-24"
            >
              <ProjectShowcase />
            </motion.div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
}