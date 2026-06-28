import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Music2, Mail, Phone, Heart } from 'lucide-react';
import { socialLinks, footerServices, footerQuickLinks, footerTechnologies } from '../../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={16} />,
  Github: <Github size={16} />,
  Instagram: <Instagram size={16} />,
  Music2: <Music2 size={16} />,
  Mail: <Mail size={16} />,
  Phone: <Phone size={16} />,
};

interface FooterProps {
  theme: 'light' | 'dark';
}

export default function Footer({ theme }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        const headerH = document.getElementById('header')?.offsetHeight || 80;
        window.scrollTo({ top: el.offsetTop - headerH, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-[#020410]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* Footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={theme === 'light' ? '/images/logorevan_3.png' : '/images/logorevan_1.png'} alt="Logo" className="w-[60px]" />
              <span className="text-lg font-bold gradient-text-static">Nanda Revan Saputro</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-[300px]">
              AI & Full Stack Developer passionate about creating intelligent solutions that bridge technology and creativity. Turning complex challenges into innovative digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} title={link.name} className="w-9 h-9 rounded-full bg-navy-800/50 border border-blue-500/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all duration-300 no-underline">
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-white font-semibold mb-5 relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded" />
            </h4>
            <div className="flex flex-col gap-3">
              {footerServices.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-slate-400 text-sm hover:text-blue-400 hover:pl-3 transition-all duration-300 no-underline">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="text-white font-semibold mb-5 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded" />
            </h4>
            <div className="flex flex-col gap-3">
              {footerQuickLinks.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-slate-400 text-sm hover:text-blue-400 hover:pl-3 transition-all duration-300 no-underline">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="text-white font-semibold mb-5 relative pb-2">
              Technologies
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded" />
            </h4>
            <div className="flex flex-col gap-3">
              {footerTechnologies.map((item) => (
                <a key={item.label} href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-slate-400 text-sm hover:text-blue-400 hover:pl-3 transition-all duration-300 no-underline">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>&copy; 2024 Nanda Revan Saputro. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with passion and <Heart size={14} className="text-blue-400 fill-blue-400" />
          </span>
        </div>
      </div>
    </footer>
  );
}
