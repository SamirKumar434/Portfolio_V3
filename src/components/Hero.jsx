import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import SkillsSection from "./SkillsSection";
import ProjectSections from "./Projects";
import { ContactSection } from "./ContactSection";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["Samir Kumar", "Full-Stack Dev"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Changes text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen bg-[#f8fafc] dark:bg-[#09090b] text-slate-900 dark:text-white font-sans antialiased selection:bg-neutral-800 selection:text-white transition-colors duration-300"
    >
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-20 sm:px-8 lg:px-12 text-left flex flex-col items-start">
        {/* 1. Hero Section Grid */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
        >
          <div className="md:col-span-2 space-y-3 text-left">
            {/* Kept header tracking tight, added a fixed height to prevent structural layout layout shifts */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-none text-left h-[48px] sm:h-[60px] flex items-center flex-wrap gap-x-3">
              <span>Hi, I'm</span>
              {/* Task 1 & 2: Inline block container managing the orange color swipe transitions */}
              <span className="inline-flex items-center h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 15, opacity: 0, filter: "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -15, opacity: 0, filter: "blur(5px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="inline-block text-orange-500 font-bold"
                  >
                    {phrases[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#a1a1aa] leading-relaxed font-normal text-left">
              Full-Stack Developer focused on building and shipping real-world
              AI features using the MERN stack, actively sharing the build
              journey on X.
            </p>
          </div>

          <div className="flex md:justify-end order-first md:order-last">
            <img
              src="hinataImage.jpeg"
              alt="Samir Kumar"
              className="w-28 h-28 sm:w-48 sm:h-48 rounded-2xl sm:rounded-full object-cover brightness-95 border-4 border-orange-500 shadow-lg shadow-orange-500/20 transition-all duration-300"
            />
          </div>
        </motion.section>

        {/* 2. Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full flex items-center justify-start gap-2 mt-4 mb-2"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
            </span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-[#71717a] font-medium">
              Available · I'm open to work, freelance, or collaborate.{" "}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactElement = document.getElementById("contact");
                  if (contactElement) {
                    const yOffset = -80;
                    const y =
                      contactElement.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-semibold cursor-pointer underline-offset-2 hover:underline transition-colors duration-200"
              >
                Contact Me
              </a>
            </span>
          </motion.div>
        </motion.div>

        {/* 3. Portfolio Text Subcomponents */}
        <About />
        <SkillsSection />
        <ProjectSections />
        <ContactSection />
      </main>
    </div>
  );
};

export default Hero;
