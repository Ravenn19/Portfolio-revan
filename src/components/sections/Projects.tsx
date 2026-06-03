import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { projectsData } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060d1f] to-navy-950" />
      <div className="ambient-blob ambient-blob-2" style={{ opacity: 0.06 }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          title="Projects & Innovations"
          subtitle="Building intelligent systems and modern web platforms that merge innovation and practicality"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="glass-card glass-card-hover overflow-hidden group h-full flex flex-col relative">
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-400/10 group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none" />
                <div className="h-[200px] sm:h-[220px] overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 gradient-text-static">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-[1.7] mb-5 flex-1 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (<span key={t} className="tech-badge text-xs">{t}</span>))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 w-fit text-sm py-2.5 px-6">
                    Explore Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
