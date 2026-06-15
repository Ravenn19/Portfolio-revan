import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const id = el.getAttribute('id') || '';
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const headerH = document.getElementById('header')?.offsetHeight || 80;
      window.scrollTo({ top: el.offsetTop - headerH, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 no-underline group">
          <img src="/images/logorevan_1.png" alt="Logo" className="w-[50px] sm:w-[60px] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg sm:text-xl font-bold tracking-wide gradient-text-static hidden sm:inline">
            Nanda Revan Saputro
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition-all duration-300 no-underline ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-blue-500/15 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 transition-all duration-300 ml-2 shadow-[0_0_15px_rgba(59,130,246,0.05)]"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-blue-500/15 bg-blue-500/5 text-blue-400 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.05)]"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-300 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-t border-blue-500/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-8 py-3 text-base font-medium uppercase tracking-wider transition-all duration-300 no-underline rounded-lg ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
