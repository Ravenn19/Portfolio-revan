import { motion } from 'framer-motion';
import { Code2, Server, Brain, MessageCircle, Globe, Flame } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { skillsData } from '../../data/portfolioData';

const iconComponents: Record<string, React.ReactNode> = {
  '🎨': <Code2 size={28} />,
  '⚙️': <Server size={28} />,
  '🤖': <Brain size={28} />,
  '💬': <MessageCircle size={28} />,
  '🌐': <Globe size={28} />,
  '🔥': <Flame size={28} />,
};

const categoryColors: Record<string, { from: string; to: string; bg: string; border: string }> = {
  Frontend: { from: '#3b82f6', to: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
  Backend: { from: '#06b6d4', to: '#22d3ee', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)' },
  'Artificial Intelligence': { from: '#8b5cf6', to: '#a78bfa', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)' },
  'Soft Skills': { from: '#f59e0b', to: '#fbbf24', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  Languages: { from: '#10b981', to: '#34d399', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)' },
  Hobbies: { from: '#ef4444', to: '#f87171', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)' },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader title="My Skills & Expertise" subtitle="Showcasing skills shaped by logic, creativity, and innovation" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsData.map((skill, index) => {
            const colors = categoryColors[skill.category] || categoryColors.Frontend;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                  style={{
                    background: `linear-gradient(135deg, ${colors.bg}, rgba(13,27,42,0.5))`,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` }}
                    >
                      {iconComponents[skill.icon] || <Code2 size={28} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                      <p className="text-slate-500 text-xs">{skill.items.length} skills</p>
                    </div>
                  </div>

                  {/* Skill items as tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: colors.bg,
                          border: `1px solid ${colors.border}`,
                          color: colors.to,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
