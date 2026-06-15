import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          title="Professional Experience"
          subtitle="Exploring innovation through collaboration and real-world impact"
        />

        {/* Simple stacked cards — no timeline to avoid layout bugs */}
        <div className="flex flex-col gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="glass-card overflow-hidden group transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row">
                  {/* Image — uses object-contain on white bg for logos, object-cover for photos */}
                  <div className="md:w-[280px] lg:w-[320px] flex-shrink-0 overflow-hidden relative bg-slate-900/80">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-[200px] md:h-full object-contain md:object-cover p-4 md:p-0 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={16} className="text-white" />
                      </div>
                      <span className="text-blue-400 text-sm font-mono font-medium">{exp.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role} — {exp.company}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-[1.8] text-justify mt-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
