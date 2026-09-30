"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { hackathons } from "../data/portfolio";

const CARD_WIDTH = 400 + 24; // card width + gap-6

export default function Hackathons() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Convert vertical mouse-wheel delta → horizontal scroll
  const handleWheel = useCallback((e: React.WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    // Only hijack if there's horizontal overflow to consume
    const canScrollLeft  = el.scrollLeft > 0;
    const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth;
    if ((e.deltaY < 0 && !canScrollLeft) || (e.deltaY > 0 && !canScrollRight)) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <section
      id="hackathons"
      className="pt-16 pb-24 w-full bg-[#0A0A0A] text-[#EDEDED] border-t border-white/10 relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header row + arrow buttons */}
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            pillText="COMPETITIVE.RECORDS"
            title={
              <>
                Hackathons & <br />
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  Competitions.
                </span>
              </>
            }
            theme="dark"
            size="lg"
          />

          {/* Scroll hint + arrows */}
          <div className="hidden md:flex flex-col items-end gap-3 shrink-0 pb-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              scroll to explore
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Scroll track — bleeds off the right edge */}
        <div
          ref={scrollRef}
          onWheel={handleWheel}
          className="hide-scrollbar overflow-x-auto flex gap-6 pb-4 -mr-6 md:-mr-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="shrink-0 w-[85vw] md:w-[400px] flex flex-col bg-white/5 border border-white/10 p-8 group hover:border-white/20 transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col h-full">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  {hackathon.name}
                </span>

                <h3 className="font-sans font-bold text-2xl tracking-tight mb-4 text-[#EDEDED]">
                  {hackathon.project}
                </h3>

                <p className="font-sans text-[15px] text-[#EDEDED]/60 leading-relaxed mb-6 flex-grow">
                  {hackathon.description}
                </p>

                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#EDEDED]/70">
                      {hackathon.achievement}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {hackathon.architecture.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] font-semibold bg-white/5 border border-white/10 text-[#EDEDED]/70 px-2 py-1 uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Right breathing room */}
          <div className="shrink-0 w-6 md:w-12" />
        </div>

        {/* Mobile scroll hint */}
        <p className="md:hidden font-mono text-[10px] uppercase tracking-widest text-white/30 mt-4">
          ← swipe to explore →
        </p>

      </div>
    </section>
  );
}
