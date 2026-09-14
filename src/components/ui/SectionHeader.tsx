import React from "react";

interface SectionHeaderProps {
  pillText: string;
  title: React.ReactNode;
  theme?: "light" | "dark";
  size?: "md" | "lg";
}

export default function SectionHeader({ 
  pillText, 
  title, 
  theme = "light",
  size = "lg"
}: SectionHeaderProps) {
  const isDark = theme === "dark";
  
  const borderColor = isDark ? "border-[#FAFAFA]/20" : "border-[#0A0A0A]/20";
  const bgColor = isDark ? "bg-[#FAFAFA]/5" : "bg-[#0A0A0A]/5";

  const titleSizeClass = size === "lg" 
    ? "text-5xl md:text-7xl mb-6" 
    : "text-4xl md:text-6xl mb-6"; // adjusting this slightly to keep spacing consistent unless explicitly needed

  return (
    <>
      <div className={`flex items-center gap-2 border ${borderColor} ${bgColor} rounded-sm px-4 py-1.5 mb-8`}>
        <div className="w-1.5 h-1.5 bg-[var(--color-accent)] opacity-100" />
        <span className="font-mono text-xs uppercase tracking-[0.15em] font-medium opacity-80">
          {pillText}
        </span>
      </div>

      <h2 className={`font-sans font-bold tracking-tight max-w-4xl ${titleSizeClass}`}>
        {title}
      </h2>
    </>
  );
}
