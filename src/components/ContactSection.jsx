import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import RevealOnScroll from "./RevealOnScroll";

export const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  return (
    <RevealOnScroll
      id="contact"
      direction="up"
      distance={30}
      delay={0.1}
      className="py-24 px-4 relative flex flex-col items-center z-10 w-full"
    >
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get in <span className="text-orange-500">Touch</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-[#a1a1aa] leading-relaxed">
          I'm open to{" "}
          <span className="text-orange-500 font-semibold">freelance work</span>,{" "}
          exciting{" "}
          <span className="text-orange-400 font-semibold">collaborations</span>,
          or{" "}
          <span className="text-orange-500 font-semibold">
            hiring opportunities
          </span>
          .
        </p>

        <div className="flex justify-center gap-6 items-center py-6">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/SamirKumar434"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20 group"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-neutral-800 dark:text-[#f4f4f5] group-hover:text-orange-500 transition-colors w-8 h-8" />
          </a>

          {/* X (Twitter) Icon Link */}
          <a
            href="https://x.com/Samir_kumar19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20 group"
            aria-label="X (Twitter) Profile"
          >
            <FaXTwitter className="text-neutral-800 dark:text-[#f4f4f5] group-hover:text-orange-500 transition-colors w-8 h-8" />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/samir-kumar-sahu-1726883a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20 group"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-[#0077B5] group-hover:text-orange-500 transition-colors w-8 h-8" />
          </a>
        </div>

        <p className="text-lg font-medium pt-4 italic text-slate-500 dark:text-neutral-400 opacity-80">
          Looking forward to connecting!
        </p>
      </div>
    </RevealOnScroll>
  );
};

export default ContactSection;
