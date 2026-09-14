"use client";

import InteractiveGrid from "./InteractiveGrid";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

export default function Currently() {

  return (
    <section id="lab" className="pt-16 md:pt-24 pb-24 md:pb-40 px-6 md:px-12 w-full bg-[#FAFAFA] text-[#0A0A0A] relative overflow-hidden border-t border-[#E5E5E5]">
      <InteractiveGrid color="rgba(10,10,10,0.05)" dotSize={1} spacing={40} />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10 flex flex-col items-start text-left mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          pillText="CURRENT_FOCUS"
          title={
            <>
              What's brewing in <span className="font-serif italic font-normal text-[var(--color-accent)]">the lab.</span>
            </>
          }
          theme="light"
          size="md"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12">
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="bg-white border border-[#E5E5E5] p-6 relative w-full lg:w-5/6 shadow-sm hover:shadow-xl transition-shadow cursor-default"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            data-cursor="→"
          >
            <motion.div 
              className="inline-block bg-[#F5F5F5] text-[#0A0A0A] font-mono text-xs font-bold px-2 py-1 mb-4 border border-[#E5E5E5]"
              whileHover={{ backgroundColor: "#0A0A0A", color: "#F5F5F5" }}
            >
              [ BUILD ]
            </motion.div>
            <h3 className="font-sans font-bold text-xl mb-2">End-to-End ML Pipelines</h3>
            <p className="font-sans text-sm opacity-60 leading-relaxed">
              Developing and deploying full-lifecycle systems including Customer Churn, Sales Forecasting, and Semantic Chat-bots.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white border border-[#E5E5E5] p-6 relative w-full lg:w-5/6 ml-auto shadow-sm hover:shadow-xl transition-shadow cursor-default"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            data-cursor="→"
          >
            <motion.div 
              className="inline-block bg-[#F5F5F5] text-[#0A0A0A] font-mono text-xs font-bold px-2 py-1 mb-4 border border-[#E5E5E5]"
              whileHover={{ backgroundColor: "#0A0A0A", color: "#F5F5F5" }}
            >
              [ EXPLORE ]
            </motion.div>
            <h3 className="font-sans font-bold text-xl mb-2">AI-Native Development</h3>
            <p className="font-sans text-sm opacity-60 leading-relaxed mb-4">
              Exploring agentic workflows, code-generation systems, MCP integrations, and AI-assisted software engineering.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <motion.span whileHover={{ scale: 1.05 }} className="font-mono text-[10px] bg-[#F5F5F5] border border-[#E5E5E5] px-2 py-1 uppercase tracking-widest text-black/70 cursor-pointer">Claude Code</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="font-mono text-[10px] bg-[#F5F5F5] border border-[#E5E5E5] px-2 py-1 uppercase tracking-widest text-black/70 cursor-pointer">Antigravity</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="font-mono text-[10px] bg-[#F5F5F5] border border-[#E5E5E5] px-2 py-1 uppercase tracking-widest text-black/70 cursor-pointer">Stitch MCP</motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
