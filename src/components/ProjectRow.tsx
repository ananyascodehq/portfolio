"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Play } from "lucide-react";

interface ProjectRowProps {
  id: string;
  title: string;
  description: string;
  architecture: string[];
  link: string;
  githubUrl: string;
  demoUrl?: string;
  index: number;
}

export default function ProjectRow({ id, title, description, architecture, link, githubUrl, demoUrl, index }: ProjectRowProps) {
  return (
    <motion.div 
      className="group flex flex-col md:flex-row py-12 px-6 md:px-8 border border-transparent hover:border-[#E5E5E5]/20 border-b-[#E5E5E5] hover:bg-[#111111] rounded-2xl hover:text-[#FAFAFA] transition-all duration-500 cursor-pointer relative overflow-hidden mb-4 hover:scale-[1.02] transform origin-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Index Number */}
      <div className="w-full md:w-1/6 mb-6 md:mb-0 md:pl-8 flex items-start">
        <span className="font-mono text-4xl md:text-6xl text-[#0A0A0A] opacity-20 font-bold tracking-tighter group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-all duration-500">
          {id}
        </span>
      </div>

      {/* Content block */}
      <div className="w-full md:w-5/12 pr-8 flex flex-col justify-start">
        <h3 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        
        <p className="font-sans opacity-70 text-base leading-relaxed max-w-md group-hover:opacity-90 transition-opacity duration-500 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tech Stack List & Links */}
      <div className="w-full md:w-5/12 mt-8 md:mt-0 flex flex-col justify-between md:pr-8">
        <div className="flex flex-wrap gap-2 items-start align-top mb-8 md:mb-0">
          {architecture.map((tech) => (
            <span key={tech} className="font-mono text-xs border border-[#E5E5E5] group-hover:border-white/20 hover:!border-white/50 hover:!bg-white/10 hover:!text-white bg-transparent px-3 py-1 uppercase tracking-wider transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Hover Action Links */}
        <div className="flex flex-wrap gap-6 font-mono text-xs font-bold uppercase tracking-widest mt-auto opacity-100 md:opacity-0 md:-translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
              <Play size={14} /> Live Demo
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
