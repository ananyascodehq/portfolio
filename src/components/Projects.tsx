import ProjectRow from "./ProjectRow";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { flagshipRepos } from "../data/portfolio";
async function fetchProjectData(repoName: string) {
  try {
    const res = await fetch(`https://api.github.com/repos/ananyascodehq/${repoName}`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error(`Failed to fetch ${repoName}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Projects() {

  const projectsData = await Promise.all(
    flagshipRepos.map(async (item) => {
      let repoData = null;
      if (item.repo) {
        repoData = await fetchProjectData(item.repo);
      }
      
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        architecture: item.architecture, 
        link: repoData?.html_url || "#",
        githubUrl: repoData?.html_url || "#",
        demoUrl: repoData?.homepage || undefined,
      };
    })
  );

  return (
    <section id="work" className="pt-24 md:pt-40 pb-0 w-full bg-[#FAFAFA] text-[#0A0A0A] border-t border-[#E5E5E5] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-start mb-24 px-6 md:px-12">
        
        <SectionHeader 
          pillText="SYSTEM.ARCHIVES"
          title={
            <>
              Architecting systems, <br />
              <span className="font-serif italic font-normal text-[var(--color-accent)]">beyond</span> the prototype.
            </>
          }
          theme="light"
          size="lg"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col border-t border-[#E5E5E5] pt-4">
        {projectsData.map((project, index) => (
          <ProjectRow 
            key={project.id}
            index={index}
            id={project.id}
            title={project.title}
            description={project.description}
            architecture={project.architecture}
            link={project.link}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20 pt-10 pb-16 relative">
        {/* Subtle technical background grid just for this transition area */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,white)] pointer-events-none" />
        
        {/* Vertical connector line */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bottom-0 w-[1px] bg-gradient-to-b from-[#0A0A0A]/20 to-transparent pointer-events-none" />

        <a 
          href="https://github.com/ananyascodehq" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-2 px-6 py-3 border border-[#0A0A0A]/20 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition-all duration-300 bg-[#FAFAFA] relative z-10"
        >
          View More on GitHub
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
