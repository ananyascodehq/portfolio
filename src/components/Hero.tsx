"use client";

import { motion } from "framer-motion";
import InteractiveGrid from "./InteractiveGrid";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 w-full flex flex-col justify-center items-center bg-[#0A0A0A] text-[#EDEDED] overflow-hidden min-h-[90vh]">
      {/* Interactive Dot Grid Background - reduced opacity */}
      <InteractiveGrid color="rgba(237,237,237,0.15)" />
      
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto w-full gap-8 text-center mt-12">
        
        {/* Massive Typography & Professional Identity */}
        <motion.div 
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 border border-[#EDEDED]/20 bg-[#EDEDED]/5 rounded-full px-5 py-2 mb-10 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-pulse opacity-80" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-80">
              CSE · SOFTWARE · AI
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-sans font-bold leading-[0.85] tracking-tighter mb-8">
            Ananya <br />
            <span className="font-serif italic font-normal text-[#FAFAFA] pr-4">Kannan.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed tracking-tight mt-4">
            Computer Science student building software, 
            AI systems, and technical experiments.
          </p>

          {/* Availability Pill & CTAs */}
          <motion.div 
            className="mt-12 flex flex-col items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/10 px-4 py-2 rounded-full border border-[var(--color-accent)]/20">
              <span className="animate-pulse">●</span> ACTIVELY SEEKING SOFTWARE ENGINEERING / ML INTERNSHIPS
            </div>

            <div className="flex items-center gap-6 font-mono text-xs font-bold tracking-widest uppercase">
              <a 
                href="#work" 
                className="group flex items-center gap-2 px-6 py-3 border border-[#EDEDED]/20 rounded-full hover:bg-[#EDEDED] hover:text-[#0A0A0A] transition-all duration-300"
              >
                VIEW WORK 
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/ananyascodehq" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-2 px-6 py-3 border border-transparent rounded-full hover:border-[#EDEDED]/20 transition-all duration-300"
              >
                GITHUB
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
