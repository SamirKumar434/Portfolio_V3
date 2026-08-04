import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const projects = [
  // Card 1 - Social Media AI SaaS
  {
    id: 1,
    title: "Scheduler",
    year: "2026",
    description:
      "A complete AI SaaS application where users can connect multiple social media accounts, schedule posts across different platforms, and generate engaging social media content using AI.",
    tags: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT Authentication",
      "OpenAI API",
      "Tailwind CSS",
      "MERN Stack",
      "Zernio API",
    ],
    image: "/Screenshot (432).png",
    demoUrl: "",
    githubUrl: "https://github.com/SamirKumar434/social-media-automation",
  },
  // Card 2 - AI SEO Tracker
  {
    id: 2,
    title: "Rank Pilot",
    year: "2026",
    description:
      "Full-stack application using MongoDB, Express.js, React.js and Node.js. Incorporates Browserbase for browser automation and website scraping, and Gemini AI for intelligent SEO analysis and report creation.",
    tags: ["MERN", "Rest API", "Gemini API", "Browserbase"],
    image: "/Screenshot (431).png",
    demoUrl: "ai-seo-rank-tracker-frontend.vercel.app",
    githubUrl: "https://github.com/SamirKumar434/AI_SEO_Rank_Tracker",
  },
  // Card 3 - AlgoNest
  {
    id: 3,
    title: "AlgoNest",
    year: "2025",
    description:
      "A comprehensive platform for developers to host, share, and collaborate on algorithm implementations. Features a structured repository system and community-driven performance benchmarks.",
    tags: ["MERN Stack", "Redux", "Express"],
    image: "/Screenshot (189).png",
    demoUrl: "https://algonest-dev.netlify.app",
    githubUrl: "https://github.com/SamirKumar434/AlgoNest",
  },
  // Card 4 - Swiggy Clone
  {
    id: 4,
    title: "Swiggy Clone",
    year: "2025",
    description:
      "A full-stack food delivery application featuring real-time restaurant browsing, cart management, and a mock checkout flow. Built to master system design and complex user workflows.",
    tags: ["HTML", "React", "Redux", "Tailwind"],
    image: "/Screenshot (135).png",
    demoUrl: "https://swiggy-frontened-reactjs.vercel.app/",
    githubUrl: "https://github.com/SamirKumar434/Swiggy_Clone",
  },
  // Card 5 - AlgoFlick
  {
    id: 5,
    title: "AlgoFlick",
    year: "2025",
    description:
      "DSA visualizer that demonstrates algorithms like Sorting, Searching, Stack, Queue, etc., all in real-time with interactive animations. This project emphasizes frontend logic and state management.",
    tags: ["React", "Tailwind", "JS", "HTML"],
    image: "/Screenshot (233).png",
    demoUrl: "https://algoflickv2.netlify.app/",
    githubUrl: "https://github.com/SamirKumar434/AlgoFlickv2",
  },
];

// Grid Stagger Container Variants
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Card Entry Variants
const cardEntryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const ProjectSections = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <RevealOnScroll
      id="projects"
      direction="up"
      distance={30}
      delay={0.1}
      className="w-full pt-12 relative"
    >
      {/* Floating Ambient Background Glow */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 sm:w-[32rem] h-64 bg-orange-500/5 dark:bg-orange-500/8 rounded-full blur-3xl pointer-events-none -z-10"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-12, 12, -12],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Section Header with Subtle Animations */}
      <div className="mb-8 space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 18, letterSpacing: "0.02em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2"
        >
          Featured <span className="text-orange-500 font-bold">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-sm text-slate-500 dark:text-[#71717a] max-w-2xl font-medium"
        >
          A selection of recent applications built with attention to
          performance, system design, and functional user workflows.
        </motion.p>
      </div>

      {/* Projects Grid - Staggered Container */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardEntryVariants}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    y: -6,
                    transition: { type: "spring", stiffness: 350, damping: 25 },
                  }
            }
            className="group bg-white dark:bg-[#121212] rounded-xl overflow-hidden border border-neutral-200 dark:border-[#2a2a2a] border-t-2 border-t-orange-500/20 dark:border-t-orange-500/30 hover:border-t-orange-500 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(249,115,22,0.12)] flex flex-col"
          >
            {/* Card Image - Smooth zoom on hover */}
            <div className="relative h-40 bg-[#f4f4f5] dark:bg-[#1a1a1a] overflow-hidden">
              {project.image ? (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:brightness-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center">
                  <Layers className="w-10 h-10 text-slate-500 dark:text-[#71717a] group-hover:text-orange-500 transition-colors duration-300" />
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Title and Year */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-[#f4f4f5] group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded border border-orange-500/30 dark:border-orange-500/50 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-black transition-all duration-300 group-hover:border-orange-500/60 group-hover:shadow-[0_0_8px_rgba(249,115,22,0.2)]">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-[#a1a1aa] leading-relaxed mb-3 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags - Micro-hover feedback */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    className="text-[10px] font-medium px-2 py-0.5 bg-neutral-955/90 backdrop-blur-sm border border-orange-500/30 text-orange-400 rounded-md transition-colors duration-200 hover:border-orange-500/60 hover:text-orange-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Card Footer - Animated Links */}
              <div className="flex items-center gap-4 pt-3 border-t border-neutral-100 dark:border-[#2a2a2a] mt-auto">
                <motion.a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion || !project.githubUrl ? {} : { x: 2, y: -1 }}
                  transition={{ duration: 0.2 }}
                  className={`text-slate-500 dark:text-[#71717a] hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 flex items-center gap-1.5 text-sm ${
                    !project.githubUrl ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={(e) => !project.githubUrl && e.preventDefault()}
                >
                  <FaGithub size={16} className="transition-transform duration-200 group-hover/link:scale-110" />
                  <span>Source</span>
                </motion.a>

                <motion.a
                  href={project.demoUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion || !project.demoUrl ? {} : { x: 2, y: -1 }}
                  transition={{ duration: 0.2 }}
                  className={`text-slate-500 dark:text-[#71717a] hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 flex items-center gap-1.5 text-sm ${
                    !project.demoUrl ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={(e) => !project.demoUrl && e.preventDefault()}
                >
                  <ExternalLink size={16} className="transition-transform duration-200 group-hover/link:scale-110" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </RevealOnScroll>
  );
};

export default ProjectSections;
