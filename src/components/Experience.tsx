"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedCounter from "./ui/AnimatedCounter";
import SubTimelineDot from "./ui/SubTimelineDot";
import FeaturedInitiative from "./ui/FeaturedInitiative";

// ─── TimelineNode ─────────────────────────────────────────────────────────────
// Wraps each experience block with a viewport-triggered entrance animation.
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

// ─── Shared layout shell for each organisation block ─────────────────────────
function OrgBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 pl-10 md:pl-0 border-t border-black/10 pt-16">
      {children}
    </div>
  );
}

// ─── Role badge ───────────────────────────────────────────────────────────────
function RoleBadge({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`inline-flex font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm w-fit ${
        accent
          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20"
          : "bg-black/5 text-[#0A0A0A]"
      }`}
    >
      {label}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Experience() {
  const foreseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: foreseScroll } = useScroll({
    target: foreseRef,
    offset: ["start center", "end center"],
  });

  const foreseScaleY = useSpring(foreseScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6 md:px-12 w-full bg-[#F5F4EF] text-[#0A0A0A] border-t border-black/10 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start mb-12">
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

      <div className="max-w-7xl mx-auto relative flex flex-col gap-24 md:gap-32">

        {/* ── FORESE ──────────────────────────────────────────────────────── */}
        <div ref={foreseRef} className="relative w-full">
          <TimelineNode>
            <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0 pl-10 md:pl-0">

              {/* Left */}
              <div className="w-full md:w-1/3 flex flex-col relative text-left">
                <h3 className="font-sans font-bold text-[32px] tracking-tight mb-4 text-[#0A0A0A] leading-none">
                  FORESE<br />
                  <span className="text-[17px] font-normal opacity-60 block mt-2 leading-snug">
                    FORum for Economic Studies by<br />Engineers, SVCE
                  </span>
                </h3>
                <div className="flex flex-col gap-1 items-start mt-2">
                  <RoleBadge label="Executive Director" />
                </div>
              </div>

              {/* Right */}
              <div className="w-full md:w-2/3 flex flex-col md:pl-16">

                {/* Animated sub-timeline */}
                <div className="flex flex-col relative space-y-12 mb-10">
                  <div className="absolute top-3 bottom-0 left-[7px] w-[1px] bg-black/10">
                    <motion.div
                      className="absolute top-0 w-full bg-[var(--color-accent)] origin-top"
                      style={{ scaleY: foreseScaleY, bottom: 0 }}
                    />
                  </div>

                  {/* Executive Director entry */}
                  <div className="relative flex items-start group">
                    <SubTimelineDot active={true} />
                    <div className="w-full pl-8 text-left">
                      <div className="flex flex-col mb-3">
                        <span className="font-mono text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1">
                          Executive Director
                        </span>
                        <span className="font-mono text-xs font-medium uppercase tracking-widest opacity-80">
                          2026–27
                        </span>
                      </div>
                      <p className="font-sans text-base md:text-[17px] opacity-90 leading-[1.65] mb-4 text-[#0A0A0A]">
                        Leading a 14-member team in planning and executing FORESE&apos;s flagship Mock Placements
                        initiative, coordinating recruiter outreach, candidate allocation, logistics, and
                        on-ground operations for 900+ students.
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

                  {/* Member entry */}
                  <div className="relative flex items-start group">
                    <SubTimelineDot active={false} />
                    <div className="w-full pl-8 text-left">
                      <div className="flex flex-col mb-3">
                        <span className="font-mono text-sm font-bold uppercase tracking-widest text-[#0A0A0A] mb-1">
                          Member
                        </span>
                        <span className="font-mono text-xs font-medium uppercase tracking-widest opacity-50">
                          2025–26
                        </span>
                      </div>
                      <p className="font-sans text-base md:text-[17px] opacity-70 leading-[1.65] mb-4">
                        Worked across HR outreach, candidate allocation, transport coordination, and on-ground
                        event operations. Executed assigned operational responsibilities.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["HR Outreach", "Candidate Allocation", "Logistics", "Floor Operations"].map((tag) => (
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
                </div>

                {/* Metrics */}
                <div className="flex flex-col gap-4 border-t border-black/10 pt-8">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest opacity-50">
                    Mock Placements · 2026
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { value: 100, label: "Companies" },
                      { value: 120, label: "HR Professionals" },
                      { value: 900, label: "Students" },
                    ].map(({ value, label }) => (
                      <div
                        key={label}
                        className="border border-black/10 bg-white hover:border-[var(--color-accent)] transition-colors group cursor-default p-6 rounded-sm flex flex-col items-center justify-center text-center"
                      >
                        <AnimatedCounter from={0} to={value} />
                        <span className="font-mono text-[10px] font-semibold opacity-60 uppercase tracking-wider mt-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </TimelineNode>
        </div>

        {/* ── Know-I ──────────────────────────────────────────────────────── */}
        <TimelineNode>
          <OrgBlock>
            <div className="w-full md:w-1/3 flex flex-col relative text-left">
              <h3 className="font-sans font-bold text-[32px] tracking-tight mb-4 text-[#0A0A0A] leading-none">
                Know-I, SVCE<br />
                <span className="text-[17px] font-normal opacity-60 block mt-2 leading-snug">ML RESEARCH CLUB</span>
              </h3>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest opacity-40 block mb-4">
                AI · ML · Deep Learning · Computer Vision
              </span>
              <div className="flex flex-col gap-1 items-start mt-2">
                <RoleBadge label="Senior Marketing Executive" />
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col md:pl-16">
              <p className="font-sans text-base md:text-[17px] opacity-80 leading-[1.65]">
                Supporting marketing and outreach initiatives for KNOW-I, SVCE&apos;s ML research club, with a
                focus on building awareness and engagement around its technical initiatives.
              </p>
              <FeaturedInitiative />
            </div>
          </OrgBlock>
        </TimelineNode>

        {/* ── Class Representative ─────────────────────────────────────────── */}
        <TimelineNode>
          <OrgBlock>
            <div className="w-full md:w-1/3 flex flex-col relative text-left">
              <h3 className="font-sans font-bold text-[32px] tracking-tight mb-4 text-[#0A0A0A] leading-none">
                SVCE<br />
                <span className="text-[17px] font-normal opacity-60 block mt-2 leading-snug">
                  Sri Venkateswara College of Engineering
                </span>
              </h3>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest opacity-40 block mb-4">
                Liaison · Coordination · Leadership
              </span>
              <div className="flex flex-col gap-1 items-start mt-2">
                <RoleBadge label="Class Representative" accent />
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col md:pl-16">
              <p className="font-sans text-base md:text-[17px] opacity-80 leading-[1.65]">
                Serving as the primary liaison between students and faculty, coordinating academic activities,
                communicating class needs, and facilitating smooth day-to-day operations for the department.
              </p>
            </div>
          </OrgBlock>
        </TimelineNode>

      </div>
    </section>
  );
}
