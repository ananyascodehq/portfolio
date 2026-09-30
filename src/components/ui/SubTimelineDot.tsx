"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SubTimelineDotProps {
  active?: boolean;
}

export default function SubTimelineDot({ active }: SubTimelineDotProps) {
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
          scale: isInView ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
