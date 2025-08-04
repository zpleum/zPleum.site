"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub, FaDiscord, FaEnvelope, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-transparent">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 w-64 px-6 py-12 border-r border-[var(--neutral-border-alpha-medium)] text-[var(--neutral-on-background-weak)]">
          <nav className="flex flex-col gap-4 text-lg sticky top-12">
            <a href="#introduction" className="hover:text-[var(--accent)] transition-all hover:translate-x-2">— Introduction</a>
            <a href="#work" className="hover:text-[var(--accent)] transition-all hover:translate-x-2">— Projects</a>
            <a href="#education" className="hover:text-[var(--accent)] transition-all hover:translate-x-2">— Education</a>
            <a href="#skills" className="hover:text-[var(--accent)] transition-all hover:translate-x-2">— Technical Skills</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center px-4 sm:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            {/* Profile */}
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 mb-12"
            >
              <div className="relative group">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={140}
                  height={140}
                  className="rounded-full object-cover border-4 border-[var(--surface-background)] shadow-lg transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-bold text-[var(--neutral-on-background-strong)] mb-2">zPleum</h1>
                <div className="text-2xl text-[var(--neutral-on-background-weak)] mb-3">Full Stack Developer</div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-sm flex items-center gap-2 bg-[var(--neutral-background-alpha-medium)] px-3 py-1 rounded-full">
                    <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                    Asia/Thailand
                  </span>
                  <span className="text-sm px-3 py-1 rounded-full bg-[var(--neutral-background-alpha-medium)]">Thai</span>
                  <span className="text-sm px-3 py-1 rounded-full bg-[var(--neutral-background-alpha-medium)]">English</span>
                </div>
                <div className="flex gap-4 justify-center">
                  <motion.a 
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.zpleum.site/" 
                    target="_blank" 
                    rel="noopener" 
                    className="btn-primary p-3 rounded-full hover:bg-[var(--accent)] transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://facebook.zpleum.site/" 
                    target="_blank" 
                    rel="noopener" 
                    className="btn-primary p-3 rounded-full hover:bg-[var(--accent)] transition-colors"
                  >
                    <FaFacebook size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://discord.zpleum.site/" 
                    target="_blank" 
                    rel="noopener" 
                    className="btn-primary p-3 rounded-full hover:bg-[var(--accent)] transition-colors"
                  >
                    <FaDiscord size={24} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://mail.zpleum.site/" 
                    className="btn-primary p-3 rounded-full hover:bg-[var(--accent)] transition-colors"
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Sections */}
            {['introduction', 'work', 'education', 'skills'].map((section, index) => (
              <motion.section
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: index * 0.2 }}
                id={section}
                className="w-full mb-12 p-6 rounded-lg bg-[var(--neutral-background-alpha-weak)] backdrop-blur-sm"
              >
                {section === 'introduction' && (
                  <>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--neutral-on-background-strong)]">Introduction</h2>
                    <p className="text-lg text-[var(--neutral-on-background-weak)] leading-relaxed">
                      I’m zPleum, a developer passionate about crafting systems that actually work — from Minecraft server security tools to web services. I specialize in building real-world solutions with performance and stability in mind.
                    </p>
                  </>
                )}

                {section === 'work' && (
                  <>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--neutral-on-background-strong)]">Projects</h2>
                    <div className="border-l-2 border-[var(--accent)] pl-4">
                      <div className="mb-4">
                        <div className="font-semibold text-xl">zPleumCORE</div>
                        <div className="text-[var(--accent)]">Minecraft Server Security</div>
                        <ul className="list-disc ml-6 mt-2 text-[var(--neutral-on-background-weak)] space-y-2">
                          <li>Advanced OP-hack protection & access control system</li>
                          <li>Real-time monitoring, detection, and blocking for Minecraft exploits</li>
                          <li>Ensures secure and stable gameplay across all server operations</li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="font-semibold text-xl">Bonniecraft</div>
                        <div className="text-[var(--accent)]">E-Commerce for Minecraft Servers</div>
                        <ul className="list-disc ml-6 mt-2 text-[var(--neutral-on-background-weak)] space-y-2">
                          <li>Custom storefronts with integrated payment & role delivery</li>
                          <li>Seamless backend management for server owners</li>
                          <li>Fast, secure, mobile-ready platform</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {section === 'education' && (
                  <>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--neutral-on-background-strong)]">Education</h2>
                    <div className="p-4 rounded-lg bg-[var(--neutral-background-alpha-medium)]">
                      <div className="font-semibold text-xl mb-1">Self-taught Developer</div>
                      <div className="text-[var(--neutral-on-background-weak)]">Specializing in Minecraft ecosystems, web technologies, and system architecture.</div>
                    </div>
                  </>
                )}

                {section === 'skills' && (
                  <>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--neutral-on-background-strong)]">Technical Skills</h2>
                    <div className="flex flex-wrap gap-3">
                    {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MySQL', 'JavaScript', 'Vercel', 'GitHub', 'Java', 'Yaml'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="px-4 py-2 rounded-full bg-[var(--neutral-background-alpha-medium)] text-[var(--neutral-on-background-strong)] hover:bg-[var(--accent-medium)] hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </>
                )}
              </motion.section>
            ))}
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
}