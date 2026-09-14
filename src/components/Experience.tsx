"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, animate } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";

// --- Subcomponents ---

function AnimatedCounter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 0.8,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + "+";
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView]);

  return <span ref={nodeRef} className="text-[40px] font-bold font-sans mb-1 leading-none group-hover:text-[var(--color-accent)] transition-colors duration-300">{from}+</span>;
}

function FeaturedInitiative() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="group relative flex flex-col mt-12 cursor-pointer w-full md:w-3/4 border border-transparent hover:border-black/5 bg-black/5 md:bg-transparent md:hover:bg-black/5 p-6 rounded-sm transition-colors"
      onHoverStart={() => { if (typeof window !== 'undefined' && window.innerWidth >= 768) setIsExpanded(true); }}
      onHoverEnd={() => { if (typeof window !== 'undefined' && window.innerWidth >= 768) setIsExpanded(false); }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
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
          <h4 className="font-sans font-bold text-xl text-[#0A0A0A] group-hover:text-[var(--color-accent)] transition-colors duration-300">NEURONEXUS '26</h4>
          <span className="font-sans text-sm opacity-60 block">Intercollegiate ML Hackathon</span>
        </div>
        
        <motion.div 
          animate={{ 
            x: isExpanded ? 2 : 0, 
            y: isExpanded ? -2 : 0,
            color: isExpanded ? "var(--color-accent)" : "rgba(10,10,10,0.5)"
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>
      
      {/* Expandable Tags and Description */}
      <motion.div 
        initial={{ height: 0, opacity: 0, marginBottom: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0, 
          opacity: isExpanded ? 1 : 0,
          marginBottom: isExpanded ? 16 : 0
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
          Contributing to marketing and outreach efforts toward the successful execution of Neuronexus '26.
        </p>
      </motion.div>

      {/* The Animated Line */}
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

// --- Main Timeline ---

export default function Experience() {
  const foreseRef = useRef<HTMLDivElement>(null);
  
  // Track scroll only for the FORESE block
  const { scrollYProgress: foreseScroll } = useScroll({
    target: foreseRef,
    offset: ["start center", "end center"]
  });

  const foreseScaleY = useSpring(foreseScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 md:py-40 px-6 md:px-12 w-full bg-[#F5F4EF] text-[#0A0A0A] border-t border-black/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-start mb-20">
        <SectionHeader 
          pillText="EXPERIENCE.LOG"
          title={
            <>
              Leadership & <br />
              <span className="font-serif italic font-normal text-[var(--color-accent)]">Impact.</span>
            </>
          }
          theme="light"
          size="lg"
        />
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col gap-24 md:gap-40">
        
        {/* ---- FORESE Experience (Has Animated Timeline) ---- */}
        <div ref={foreseRef} className="relative w-full">
          <TimelineNode>
            <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 pl-10 md:pl-0">
              
              {/* Left: Organization & Role */}
              <div className="w-full md:w-1/3 flex flex-col relative text-left">
                
                <h3 className="font-sans font-bold text-[32px] tracking-tight mb-4 text-[#0A0A0A] leading-none">
                  FORESE<br/>
                  <span className="text-[17px] font-normal opacity-60 block mt-2 leading-snug">FORum for Economic Studies by<br/>Engineers, SVCE</span>
                </h3>
                <div className="flex flex-col gap-1 items-start mt-2">
                  <div className="inline-flex font-mono text-[11px] font-bold uppercase tracking-widest bg-black/5 text-[#0A0A0A] px-3 py-1.5 rounded-sm w-fit">
                    Executive Director
                  </div>
                </div>
              </div>

              {/* Right: Progression & Metrics */}
              <div className="w-full md:w-2/3 flex flex-col md:pl-16">
                
                {/* Progression Sub-Timeline */}
                <div className="flex flex-col relative space-y-12 mb-10">
                  
                  {/* The animated sub-timeline line */}
                  <div className="absolute top-3 bottom-0 left-[7px] w-[1px] bg-black/10">
                    <motion.div 
                      className="absolute top-0 w-full bg-[var(--color-accent)] origin-top"
                      style={{ scaleY: foreseScaleY, bottom: 0 }}
                    />
                  </div>

                  {/* 2025 - Member */}
                  <div className="relative flex items-start group">
                    <SubTimelineDot active={false} />
                    
                    <div className="w-full pl-8 text-left">
                      <div className="flex flex-col mb-3">
                        <span className="font-mono text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-1">Member</span>
                        <span className="font-mono text-xs font-medium uppercase tracking-widest opacity-50">2025–26</span>
                      </div>
                      <p className="font-sans text-base md:text-[17px] opacity-70 leading-[1.65] mb-4">
                        Worked across HR outreach, candidate allocation, transport coordination, and on-ground event operations. Executed assigned operational responsibilities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["HR Outreach", "Candidate Allocation", "Logistics", "Floor Operations"].map(tag => (
                          <motion.span 
                            key={tag}
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", borderColor: "rgba(0,0,0,0.2)" }}
                            className="font-mono text-[10px] font-semibold bg-white border border-black/10 px-2 py-1 uppercase tracking-widest opacity-80 cursor-default transition-colors text-[#0A0A0A]"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2026 - Executive Director */}
                  <div className="relative flex items-start group">
                    <SubTimelineDot active={true} />
                    
                    <div className="w-full pl-8 text-left">
                      <div className="flex flex-col mb-3">
                        <span className="font-mono text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1">Executive Director</span>
                        <span className="font-mono text-xs font-medium uppercase tracking-widest opacity-80">2026–27</span>
                      </div>
                      <p className="font-sans text-base md:text-[17px] opacity-90 leading-[1.65] mb-4 text-[#0A0A0A]">
                        Leading a 14-member team in planning and executing FORESE's flagship Mock Placements initiative, coordinating recruiter outreach, candidate allocation, logistics, and on-ground operations for 900+ students.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Team of 14", "Strategy", "Delegation", "Operations"].map((tag, i) => (
                          <motion.span 
                            key={tag}
                            whileHover={{ backgroundColor: "rgba(255,69,0,0.15)", borderColor: "rgba(255,69,0,0.4)" }}
                            className={`font-mono text-[10px] font-semibold px-2 py-1 uppercase tracking-widest cursor-default transition-colors ${
                              i === 0 
                                ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20" 
                                : "bg-white border border-black/10 text-[#0A0A0A]"
                            }`}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="flex flex-col gap-4 border-t border-black/10 pt-8">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest opacity-50">Mock Placements · 2026</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-black/10 bg-white hover:border-[var(--color-accent)] transition-colors group cursor-default p-6 rounded-sm flex flex-col items-center justify-center text-center">
                      <AnimatedCounter from={0} to={100} />
                      <span className="font-mono text-[10px] font-semibold opacity-60 uppercase tracking-wider mt-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">Companies</span>
                    </div>
                    <div className="border border-black/10 bg-white hover:border-[var(--color-accent)] transition-colors group cursor-default p-6 rounded-sm flex flex-col items-center justify-center text-center">
                      <AnimatedCounter from={0} to={120} />
                      <span className="font-mono text-[10px] font-semibold opacity-60 uppercase tracking-wider mt-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">HR Professionals</span>
                    </div>
                    <div className="border border-black/10 bg-white hover:border-[var(--color-accent)] transition-colors group cursor-default p-6 rounded-sm flex flex-col items-center justify-center text-center">
                      <AnimatedCounter from={0} to={900} />
                      <span className="font-mono text-[10px] font-semibold opacity-60 uppercase tracking-wider mt-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">Students</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </TimelineNode>
        </div>

        {/* ---- KNOW-I Experience (Independent Block) ---- */}
        <TimelineNode>
          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 pl-10 md:pl-0 border-t border-black/10 pt-16">
            
            {/* Left: Organization & Role */}
            <div className="w-full md:w-1/3 flex flex-col relative text-left">
              <h3 className="font-sans font-bold text-[32px] tracking-tight mb-4 text-[#0A0A0A] leading-none">
                Know-I, SVCE<br/>
                <span className="text-[17px] font-normal opacity-60 block mt-2 leading-snug">ML RESEARCH CLUB</span>
              </h3>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest opacity-40 block mb-4">
                AI · ML · Deep Learning · Computer Vision
              </span>
              <div className="flex flex-col gap-1 items-start mt-2">
                <div className="inline-flex font-mono text-[11px] font-bold uppercase tracking-widest bg-black/5 text-[#0A0A0A] px-3 py-1.5 rounded-sm w-fit">
                  Senior Marketing Executive
                </div>
              </div>
            </div>

            {/* Right: Details & Featured Initiative */}
            <div className="w-full md:w-2/3 flex flex-col md:pl-16">
              <p className="font-sans text-base md:text-[17px] opacity-80 leading-[1.65]">
                Supporting marketing and outreach initiatives for KNOW-I, SVCE's ML research club, with a focus on building awareness and engagement around its technical initiatives.
              </p>

              <FeaturedInitiative />
            </div>
          </div>
        </TimelineNode>

      </div>
    </section>
  );
}

// Wrapper to animate elements as they enter viewport
function TimelineNode({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full relative"
    >
      {children}
    </motion.div>
  );
}

// Sub-timeline dot that lights up when in view
function SubTimelineDot({ active }: { active?: boolean }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(dotRef, { once: false, margin: "-40% 0px -40% 0px" });

  return (
    <div className="absolute left-0 mt-1 w-4 h-4 flex items-center justify-center z-10 pointer-events-none">
      <motion.div 
        ref={dotRef}
        className="w-3 h-3 rounded-full bg-[#F5F4EF] border-2"
        animate={{ 
          borderColor: active || isInView ? "var(--color-accent)" : "rgba(0,0,0,0.15)",
          backgroundColor: active || isInView ? "var(--color-accent)" : "#F5F4EF",
          scale: isInView ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
