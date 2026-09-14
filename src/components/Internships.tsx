"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { internships } from "../data/portfolio";
export default function Internships() {
  return (
    <section id="internships" className="pt-16 md:pt-24 pb-12 px-6 md:px-12 w-full bg-[#0A0A0A] text-[#FAFAFA] relative z-20">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col items-start mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          pillText="EXPERIENCE.INDUSTRY"
          title="Industry Exposure."
          theme="dark"
          size="md"
        />
        
        <div className="mt-4 flex flex-col gap-6">
          <p className="font-sans text-lg opacity-70 max-w-2xl">
            Building experience at the intersection of software, AI, and industry.
          </p>
          <a 
            href="mailto:ananyakannan1502@gmail.com" 
            className="group flex items-center gap-2 text-[var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/10 px-4 py-2 rounded-full border border-[var(--color-accent)]/20 w-fit hover:bg-[var(--color-accent)]/20 transition-colors"
          >
            <span className="animate-pulse">●</span> ACTIVELY SEEKING SOFTWARE ENGINEERING / ML INTERNSHIPS
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 border-l border-white/10 ml-2 md:ml-4 pl-8 md:pl-12 relative">
        {internships.map((internship, index) => (
          <motion.div 
            key={internship.id}
            className="flex flex-col relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline Node */}
            <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-[#0A0A0A] border-2 border-[var(--color-accent)] rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-white">
                {internship.company}
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest opacity-50 mt-1 md:mt-0">
                {internship.duration}
              </span>
            </div>
            
            <div className="flex flex-col gap-2 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50">COMPLETED · 2026</span>
              <div className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest bg-white/10 text-white px-3 py-1.5 rounded-sm w-fit">
                {internship.role}
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {internship.bullets.map((bullet, i) => (
                <li key={i} className="font-sans text-sm md:text-base opacity-70 leading-relaxed max-w-3xl flex items-start gap-3">
                  <span className="text-[var(--color-accent)] opacity-80 mt-1">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
