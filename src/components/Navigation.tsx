"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // trigger when section is in middle of screen
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
    >
      <div className="flex items-center justify-between bg-[#0A0A0A]/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 pointer-events-auto shadow-2xl w-full max-w-2xl">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
          </div>
          <span className="font-sans font-bold text-[#EDEDED] tracking-tight">ANANYA</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
          <Link 
            href="#work" 
            className={`transition-all duration-300 ${activeSection === "work" ? "text-[var(--color-accent)] opacity-100" : "opacity-50 hover:opacity-100 hover:text-[var(--color-accent)]"}`}
          >
            Work
          </Link>
          <Link 
            href="#experience" 
            className={`transition-all duration-300 ${activeSection === "experience" ? "text-[var(--color-accent)] opacity-100" : "opacity-50 hover:opacity-100 hover:text-[var(--color-accent)]"}`}
          >
            Experience
          </Link>
        </nav>

        <a 
          href="mailto:ananyakannan1502@gmail.com" 
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#EDEDED] hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          Contact 
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </motion.header>
  );
}
