import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="w-fit mx-auto mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
