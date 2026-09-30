"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Allow a brief moment for paint, then fade out
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A0A0A] pointer-events-none select-none"
        >
          {/* Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-sans font-bold text-[#EDEDED] text-4xl md:text-5xl tracking-tighter leading-none">
              Ananya{" "}
              <span className="font-serif italic font-normal text-[#EDEDED]/60">
                Kannan.
              </span>
            </span>

            {/* Animated loading bar */}
            <div className="w-48 h-[1px] bg-white/10 overflow-hidden mt-4">
              <motion.div
                className="h-full bg-[var(--color-accent)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
