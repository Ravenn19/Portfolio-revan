import { motion } from 'framer-motion';
import { Trophy, Award, Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { achievementsData } from '../../data/portfolioData';

const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('ambassador')) return <Award size={22} className="text-blue-400" />;
  if (t.includes('teamwork')) return <Users size={22} className="text-cyan-400" />;
  return <Trophy size={22} className="text-amber-400" />;
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060d1f] to-navy-950" />
      <div className="ambient-blob ambient-blob-1" style={{ opacity: 0.06 }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          title="Achievements & Honors"
          subtitle="Key recognitions, competition winnings, and leadership positions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="glass-card glass-card-hover p-6 flex gap-5 items-start relative h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/5">
                  {getIcon(item.title)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full whitespace-nowrap w-fit">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
