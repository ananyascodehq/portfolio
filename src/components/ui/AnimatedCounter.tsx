"use client";

import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
}

export default function AnimatedCounter({ from, to }: AnimatedCounterProps) {
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

  return (
    <span
      ref={nodeRef}
      className="text-[40px] font-bold font-sans mb-1 leading-none group-hover:text-[var(--color-accent)] transition-colors duration-300"
    >
      {from}+
    </span>
  );
}
