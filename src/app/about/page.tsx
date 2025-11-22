"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, Facebook, MessageCircle, Mail, Code, Briefcase, Award, MapPin, Languages } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Tailwind CSS", level: 90 },
  { name: "MySQL", level: 75 },
  { name: "JavaScript", level: 92 },
  { name: "Java", level: 64 },
  { name: "Python", level: 59 },
  { name: "C++", level: 54 }
];

const experiences = [
  {
    title: "zPleumCORE",
    role: "Minecraft Server Security",
    period: "2023 - Present",
    description: "Advanced OP-hack protection & access control system with real-time monitoring and detection.",
    highlights: [
      "Real-time threat detection and blocking",
      "Advanced access control system",
      "Comprehensive security analytics"
    ]
  },
  {
    title: "Bonniecraft",
    role: "E-Commerce Platform",
    period: "2023 - Present",
    description: "Full-stack e-commerce solution for Minecraft servers with integrated payments.",
    highlights: [
      "Secure payment processing with Stripe",
      "Automated item delivery system",
      "Mobile-responsive design"
    ]
  },
  {
    title: "zPleumVerify",
    role: "Verification System",
    period: "2023 - Present",
    description: "Smart team verification system with Discord API integration.",
    highlights: [
      "Discord API integration",
      "Role-based access control",
      "Automated verification workflows"
    ]
  }
];

export default function About() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          />
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-24 py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 mb-20"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-bold">Available for Work</span>
              </div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
              >
                Wiraphat Makwong
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl text-gray-600 mb-6"
              >
                Full Stack Developer & Creative Problem Solver
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl"
              >
                Passionate about creating elegant solutions to complex problems.
                I specialize in building modern web applications with cutting-edge technologies.
              </motion.p>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <MapPin size={18} className="text-blue-600" />
                  <span className="text-gray-700">Thailand</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <Briefcase size={18} className="text-purple-600" />
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
                  <Languages size={18} className="text-pink-600" />
                  <span className="text-gray-700">Thai, English</span>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-3 mt-6 justify-center md:justify-start"
              >
                <a
                  href="https://github.com/zPleum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-gray-900 hover:text-white transition-all hover:scale-110 shadow-md"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.facebook.com/wiraphat.makwong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110 shadow-md"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://discord.com/users/837918998242656267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-[#5865F2] hover:text-white transition-all hover:scale-110 shadow-md"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:wiraphat.makwong@gmail.com"
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-md"
                >
                  <Mail size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="text-blue-600" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-600" size={32} />
              <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.role}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Award size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
}