import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060d1f] to-navy-950" />
      <div className="ambient-blob ambient-blob-3" style={{ opacity: 0.08 }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex-1 lg:flex-[0_1_55%]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
            >
              <span className="gradient-text">{aboutData.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-blue-400 text-lg font-medium mb-6"
            >
              {aboutData.title}
            </motion.p>

            {aboutData.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-slate-300 text-base leading-[1.9] mb-5 text-justify"
              >
                {p}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l-[3px] border-blue-500 pl-5 mt-6 italic text-slate-400 text-base"
            >
              {aboutData.quote}
            </motion.blockquote>
          </motion.div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center"
          >
            <div className="relative w-[3px] h-[350px]">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-600 rounded-full blur-lg opacity-50" />
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

              {/* Animated border ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-navy-950" />
              </div>

              {/* Photo */}
              <img
                src={aboutData.photo}
                alt={aboutData.name}
                className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] object-cover rounded-full border-2 border-blue-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
