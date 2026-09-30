import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Experience from "@/components/Experience";
import Hackathons from "@/components/Hackathons";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Projects />
      <Internships />
      <Experience />
      <Hackathons />

      <footer id="about" className="py-12 px-6 md:px-12 w-full bg-[#0A0A0A] text-[#EDEDED] border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-mono text-xs opacity-50 uppercase tracking-widest">
            © {new Date().getFullYear()} Ananya Kannan
          </div>
          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="https://github.com/ananyascodehq" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" data-cursor="↗">GitHub</a>
            <a href="https://linkedin.com/in/ananyakannan07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" data-cursor="↗">LinkedIn</a>
            <a href="https://leetcode.com/u/ananyakannan/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors" data-cursor="↗">LeetCode</a>
            <a href="mailto:ananyakannan1502@gmail.com" className="hover:text-[var(--color-accent)] transition-colors" data-cursor="↗">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
