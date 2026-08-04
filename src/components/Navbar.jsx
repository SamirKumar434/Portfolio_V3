import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state threshold (80px - 100px)
      if (window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section detection
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isScrolled ? (
        /* 1. DEFAULT STATE NAVBAR (Top of the page) */
        <motion.nav
          key="default-navbar"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full bg-transparent absolute top-0 left-0 z-50"
        >
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
            {/* Theme Toggle Button - Aligned with content left edge */}
            <button
              onClick={toggleTheme}
              className="text-neutral-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-200 p-1 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              )}
            </button>

            {/* Navigation Links Group - Aligned with content right edge */}
            <div className="flex items-center gap-6 sm:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                      isActive
                        ? "text-orange-500 font-bold"
                        : "text-neutral-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="default-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      ) : (
        /* 2. SCROLLED STATE NAVBAR (Floating Capsule / Pill Navbar) */
        <motion.nav
          key="scrolled-floating-navbar"
          initial={{ y: -50, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] sm:max-w-max"
        >
          <div
            className="flex items-center gap-1 sm:gap-3 px-3 sm:px-5 py-2 rounded-full shadow-2xl shadow-black/20 dark:shadow-orange-500/5 transition-all duration-300"
            style={{
              background: isDark
                ? "rgba(18, 18, 20, 0.75)"
                : "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: isDark
                ? "1px solid rgba(255, 255, 255, 0.12)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full text-neutral-800 dark:text-neutral-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-all duration-200 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Vertical Divider */}
            <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700/60 my-auto" />

            {/* Navigation Links inline (Home, Projects, Contact) */}
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-orange-500 dark:text-orange-400 font-bold"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-orange-500 dark:hover:text-orange-400"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="floating-pill-active"
                        className="absolute inset-0 bg-orange-500/15 dark:bg-orange-500/20 rounded-full border border-orange-500/30"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;


