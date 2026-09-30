"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedInitiative() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="group relative flex flex-col mt-12 cursor-pointer w-full md:w-3/4 border border-transparent hover:border-black/5 bg-black/5 md:bg-transparent md:hover:bg-black/5 p-6 rounded-sm transition-colors"
      onHoverStart={() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) setIsExpanded(true);
      }}
      onHoverEnd={() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) setIsExpanded(false);
      }}
      onClick={() => setIsExpanded((v) => !v)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-mono text-[9px] uppercase tracking-widest opacity-80 text-[var(--color-accent)]">
          Current Initiative
        </span>
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-sans font-bold text-xl text-[#0A0A0A] group-hover:text-[var(--color-accent)] transition-colors duration-300">
            NEURONEXUS &apos;26
          </h4>
          <span className="font-sans text-sm opacity-60 block">Intercollegiate ML Hackathon</span>
        </div>
        <motion.div
          animate={{
            x: isExpanded ? 2 : 0,
            y: isExpanded ? -2 : 0,
            color: isExpanded ? "var(--color-accent)" : "rgba(10,10,10,0.5)",
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>

      {/* Expandable section */}
      <motion.div
        initial={{ height: 0, opacity: 0, marginBottom: 0 }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? 16 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col gap-4 overflow-hidden"
      >
        <div className="flex flex-wrap gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">AI / ML</span>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">Research</span>
          <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">Marketing & Outreach</span>
        </div>
        <p className="font-sans text-sm opacity-70 leading-relaxed">
          Contributing to marketing and outreach efforts toward the successful execution of Neuronexus &apos;26.
        </p>
      </motion.div>

      {/* Animated underline */}
      <div className="relative h-[1px] w-full bg-transparent overflow-hidden mt-2">
        <motion.div
          className="absolute inset-0 bg-[var(--color-accent)] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
