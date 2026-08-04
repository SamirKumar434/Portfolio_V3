import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { AboutContent } from "../content/AboutContent";
import RevealOnScroll from "./RevealOnScroll";

export const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  // Requirement 6: Subtle mouse parallax (3-4px max, disabled on mobile/reduced motion)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || typeof window === "undefined" || window.innerWidth < 768) {
      return;
    }
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    rawX.set(Math.max(-1, Math.min(1, deltaX)) * 4); // Max 4px
    rawY.set(Math.max(-1, Math.min(1, deltaY)) * 4); // Max 4px
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  // Requirement 3: Paragraph sentence staggering variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const sentenceVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Target words for requirement 7 text highlights
  const highlightedWords = {
    scalable: "scalable",
    aiPowered: "AI-powered",
    backend: "backend engineering",
    systemDesign: "system design",
  };

  return (
    <RevealOnScroll
      id="about"
      direction="up"
      distance={25}
      duration={0.8}
      delay={0.1}
      className="w-full pt-2 relative"
    >
      {/* Requirement 5: Floating Background Glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-44 sm:h-52 bg-orange-500/5 dark:bg-orange-500/8 rounded-full blur-3xl pointer-events-none -z-10"
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-10, 10, -10],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Requirement 9: Hover Interaction & Requirement 6 Mouse Parallax Wrapper */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={shouldReduceMotion ? {} : { y: -2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={
          shouldReduceMotion
            ? {}
            : {
                x: mouseX,
                y: mouseY,
              }
        }
        className="relative p-3 -mx-3 sm:p-4 sm:-mx-4 rounded-2xl transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.06)] dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.1)]"
      >
        {/* Requirement 2: Heading Animation ("About Me") */}
        <motion.h2
          initial={{ opacity: 0, y: 20, letterSpacing: "0.02em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          About <span className="text-orange-500 font-bold">Me</span>
        </motion.h2>

        {/* Paragraph & Left Border Accent Container */}
        <div className="relative flex items-stretch gap-3.5 sm:gap-4.5">
          {/* Requirement 4: Left Border Accent Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="w-[2.5px] bg-gradient-to-b from-orange-500 via-orange-400 to-amber-500 shadow-[0_0_8px_rgba(249,115,22,0.4)] rounded-full flex-shrink-0"
          />

          {/* Requirement 3: Paragraph Animation & Requirement 7: Text Highlight */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 dark:text-[#a1a1aa] leading-relaxed font-normal space-y-2"
          >
            {/* Sentence 1 */}
            <motion.p variants={sentenceVariants}>
              I am a Full Stack Developer passionate about building{" "}
              <motion.span
                initial={{ color: "inherit" }}
                whileInView={{ color: "#f97316" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-medium dark:text-orange-400/90 transition-colors"
              >
                {highlightedWords.scalable}
              </motion.span>{" "}
              web applications, developer tools, and{" "}
              <motion.span
                initial={{ color: "inherit" }}
                whileInView={{ color: "#f97316" }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-medium dark:text-orange-400/90 transition-colors"
              >
                {highlightedWords.aiPowered}
              </motion.span>{" "}
              products.
            </motion.p>

            {/* Sentence 2 */}
            <motion.p variants={sentenceVariants}>
              I enjoy solving real-world problems through software, with a strong interest in{" "}
              <motion.span
                initial={{ color: "inherit" }}
                whileInView={{ color: "#f97316" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-medium dark:text-orange-400/90 transition-colors"
              >
                {highlightedWords.backend}
              </motion.span>
              , modern web technologies, and{" "}
              <motion.span
                initial={{ color: "inherit" }}
                whileInView={{ color: "#f97316" }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="font-medium dark:text-orange-400/90 transition-colors"
              >
                {highlightedWords.systemDesign}
              </motion.span>
              .
            </motion.p>

            {/* Sentence 3 */}
            <motion.p variants={sentenceVariants}>
              Currently, I'm exploring AI integrations and continuously improving my skills by building projects that combine functionality, performance, and great user experiences.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </RevealOnScroll>
  );
};

export default About;
