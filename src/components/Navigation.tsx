"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !mobileOpen) {
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
      { rootMargin: "-40% 0px -40% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
      >
        <div className="flex items-center justify-between bg-[#0A0A0A]/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 pointer-events-auto shadow-2xl w-full max-w-3xl">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
            </div>
            <span className="font-sans font-bold text-[#EDEDED] tracking-tight">ANANYA</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-widest uppercase">
            {NAV_LINKS.map(({ href, label, id }) => (
              <Link
                key={id}
                href={href}
                className={`transition-all duration-300 ${
                  activeSection === id
                    ? "text-[var(--color-accent)] opacity-100"
                    : "opacity-50 hover:opacity-100 hover:text-[var(--color-accent)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop contact + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:ananyakannan1502@gmail.com"
              className="hidden md:flex group items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#EDEDED] hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              Contact
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-[#EDEDED] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-xl px-8 pt-32 pb-12"
          >
            <nav className="flex flex-col gap-2 flex-grow">
              {NAV_LINKS.map(({ href, label, id }, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-sans font-bold text-4xl tracking-tight py-3 border-b border-white/10 transition-colors duration-200 ${
                      activeSection === id ? "text-[var(--color-accent)]" : "text-[#EDEDED] hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.a
              href="mailto:ananyakannan1502@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-[#EDEDED]/60 hover:text-[var(--color-accent)] transition-colors mt-8"
            >
              ananyakannan1502@gmail.com
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
