import React, { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiMongoose,
  SiPostman,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { IoIosInfinite } from "react-icons/io";

const skills = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "WebSocket", category: "backend" },
  { name: "Mongoose", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Netlify", category: "tools" },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const categories = ["all", "frontend", "backend", "tools"];

  const getSkillConfig = (skill) => {
    switch (skill.toUpperCase()) {
      case "HTML":
        return {
          icon: FaHtml5,
          color: "text-orange-500",
          border: "border-orange-500/20 dark:border-orange-500/20",
          hoverBg: "hover:bg-orange-500/10 dark:hover:bg-orange-500/20",
          hoverBorder: "hover:border-orange-500/50",
        };
      case "CSS":
        return {
          icon: FaCss3Alt,
          color: "text-blue-500",
          border: "border-blue-500/20 dark:border-blue-500/20",
          hoverBg: "hover:bg-blue-500/10 dark:hover:bg-blue-500/20",
          hoverBorder: "hover:border-blue-500/50",
        };
      case "JAVASCRIPT":
        return {
          icon: FaJs,
          color: "text-yellow-600 dark:text-yellow-400",
          border: "border-yellow-500/20 dark:border-yellow-400/20",
          hoverBg: "hover:bg-yellow-500/10 dark:hover:bg-yellow-400/20",
          hoverBorder: "hover:border-yellow-500/50 dark:hover:border-yellow-400/50",
        };
      case "TYPESCRIPT":
        return {
          icon: SiTypescript,
          color: "text-blue-600 dark:text-blue-400",
          border: "border-blue-600/20 dark:border-blue-400/20",
          hoverBg: "hover:bg-blue-600/10 dark:hover:bg-blue-400/20",
          hoverBorder: "hover:border-blue-600/50 dark:hover:border-blue-400/50",
        };
      case "REACT":
        return {
          icon: FaReact,
          color: "text-cyan-600 dark:text-cyan-400",
          border: "border-cyan-600/20 dark:border-cyan-400/20",
          hoverBg: "hover:bg-cyan-600/10 dark:hover:bg-cyan-400/20",
          hoverBorder: "hover:border-cyan-600/50 dark:hover:border-cyan-400/50",
        };
      case "NEXT.JS":
        return {
          icon: SiNextdotjs,
          color: "text-neutral-800 dark:text-white",
          border: "border-neutral-800/20 dark:border-white/20",
          hoverBg: "hover:bg-neutral-800/10 dark:hover:bg-white/10",
          hoverBorder: "hover:border-neutral-500 dark:hover:border-neutral-400",
        };
      case "TAILWIND CSS":
        return {
          icon: SiTailwindcss,
          color: "text-sky-500",
          border: "border-sky-500/20 dark:border-sky-500/20",
          hoverBg: "hover:bg-sky-500/10 dark:hover:bg-sky-500/20",
          hoverBorder: "hover:border-sky-500/50",
        };
      case "NODE":
        return {
          icon: FaNodeJs,
          color: "text-green-600 dark:text-green-500",
          border: "border-green-600/20 dark:border-green-500/20",
          hoverBg: "hover:bg-green-600/10 dark:hover:bg-green-500/20",
          hoverBorder: "hover:border-green-600/50 dark:hover:border-green-500/50",
        };
      case "EXPRESS":
        return {
          icon: FaServer,
          color: "text-neutral-800 dark:text-white",
          border: "border-neutral-800/20 dark:border-white/20",
          hoverBg: "hover:bg-neutral-800/10 dark:hover:bg-white/10",
          hoverBorder: "hover:border-neutral-500 dark:hover:border-neutral-400",
        };
      case "MONGODB":
        return {
          icon: SiMongodb,
          color: "text-green-700 dark:text-green-600",
          border: "border-green-700/20 dark:border-green-600/20",
          hoverBg: "hover:bg-green-700/10 dark:hover:bg-green-600/20",
          hoverBorder: "hover:border-green-700/50 dark:hover:border-green-600/50",
        };
      case "POSTGRESQL":
        return {
          icon: SiPostgresql,
          color: "text-sky-600 dark:text-sky-400",
          border: "border-sky-600/20 dark:border-sky-400/20",
          hoverBg: "hover:bg-sky-600/10 dark:hover:bg-sky-400/20",
          hoverBorder: "hover:border-sky-600/50 dark:hover:border-sky-400/50",
        };
      case "PRISMA":
        return {
          icon: SiPrisma,
          color: "text-teal-600 dark:text-teal-300",
          border: "border-teal-600/20 dark:border-teal-300/20",
          hoverBg: "hover:bg-teal-600/10 dark:hover:bg-teal-300/20",
          hoverBorder: "hover:border-teal-600/50 dark:hover:border-teal-300/50",
        };
      case "REDIS":
        return {
          icon: SiRedis,
          color: "text-red-600",
          border: "border-red-600/20 dark:border-red-600/20",
          hoverBg: "hover:bg-red-600/10 dark:hover:bg-red-600/20",
          hoverBorder: "hover:border-red-600/50",
        };
      case "WEBSOCKET":
        return {
          icon: IoIosInfinite,
          color: "text-teal-600 dark:text-teal-400",
          border: "border-teal-600/20 dark:border-teal-400/20",
          hoverBg: "hover:bg-teal-600/10 dark:hover:bg-teal-400/20",
          hoverBorder: "hover:border-teal-600/50 dark:hover:border-teal-400/50",
        };
      case "MONGOOSE":
        return {
          icon: SiMongoose,
          color: "text-green-600 dark:text-green-400",
          border: "border-green-600/20 dark:border-green-400/20",
          hoverBg: "hover:bg-green-600/10 dark:hover:bg-green-400/20",
          hoverBorder: "hover:border-green-600/50 dark:hover:border-green-400/50",
        };
      case "GIT/GITHUB":
        return {
          icon: FaGithub,
          color: "text-neutral-800 dark:text-white",
          border: "border-neutral-800/20 dark:border-white/20",
          hoverBg: "hover:bg-neutral-800/10 dark:hover:bg-white/10",
          hoverBorder: "hover:border-neutral-500 dark:hover:border-neutral-400",
        };
      case "POSTMAN":
        return {
          icon: SiPostman,
          color: "text-orange-600 dark:text-orange-500",
          border: "border-orange-600/20 dark:border-orange-500/20",
          hoverBg: "hover:bg-orange-600/10 dark:hover:bg-orange-500/20",
          hoverBorder: "hover:border-orange-600/50 dark:hover:border-orange-500/50",
        };
      case "NETLIFY":
        return {
          icon: SiNetlify,
          color: "text-teal-600 dark:text-teal-500",
          border: "border-teal-600/20 dark:border-teal-500/20",
          hoverBg: "hover:bg-teal-600/10 dark:hover:bg-teal-500/20",
          hoverBorder: "hover:border-teal-600/50 dark:hover:border-teal-500/50",
        };
      default:
        return {
          icon: FaTerminal,
          color: "text-slate-600 dark:text-neutral-300",
          border: "border-neutral-300 dark:border-neutral-700/20",
          hoverBg: "hover:bg-neutral-500/10",
          hoverBorder: "hover:border-neutral-500",
        };
    }
  };

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <RevealOnScroll 
      id="skills" 
      direction="up"
      distance={30}
      delay={0.1}
      className="pt-12 pb-20 text-left w-full"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 text-left">
        Stacks & <span className="text-orange-500">Tools I Use</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-start gap-2.5 mb-10 text-left">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium border transition-all duration-200 capitalize ${
              activeTab === tab
                ? "bg-slate-900 border-slate-900 text-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-white shadow-sm"
                : "bg-transparent border-neutral-200 text-slate-500 hover:text-slate-900 hover:border-neutral-300 dark:border-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:border-neutral-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Badges Flow Container */}
      <motion.div 
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-start gap-x-3 gap-y-4 max-w-4xl w-full text-left"
      >
        {filteredSkills.map((skill) => {
          const config = getSkillConfig(skill.name);
          const IconComponent = config.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`group flex items-center gap-2 px-4 py-2 rounded-lg border bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md cursor-default ${config.border} ${config.hoverBg} ${config.hoverBorder}`}
            >
              <IconComponent
                className={`w-4 h-4 ${config.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
              />
              <span className="text-sm font-medium text-slate-700 dark:text-neutral-200 tracking-wide select-none transition-colors duration-300 group-hover:text-slate-950 dark:group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </RevealOnScroll>
  );
};

export default SkillsSection;
