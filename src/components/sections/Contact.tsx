import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Send, CheckCircle, XCircle, X } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { contactInfo } from '../../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={22} />,
  Mail: <Mail size={22} />,
  Phone: <Phone size={22} />,
  Linkedin: <Linkedin size={22} />,
};

// Modal Component
function Modal({ isOpen, onClose, title, message, type = 'success' }: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  message: string; 
  type?: 'success' | 'error';
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full"
            >
              {/* Glass morphism effect */}
              <div className="relative bg-gradient-to-br from-navy-900/95 to-navy-950/95 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl overflow-hidden">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header with icon */}
                <div className="relative p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    className="flex justify-center mb-4"
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                      type === 'success' 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-br from-red-500 to-orange-500'
                    } shadow-lg shadow-green-500/30`}>
                      {type === 'success' ? (
                        <CheckCircle size={40} className="text-white" />
                      ) : (
                        <XCircle size={40} className="text-white" />
                      )}
                    </div>
                  </motion.div>

                  <motion.h3 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-300 text-sm leading-relaxed"
                  >
                    {message}
                  </motion.p>
                </div>

                {/* Action buttons */}
                <div className="relative p-6 pt-0 flex gap-3">
                  <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={onClose}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 ${
                      type === 'success'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                        : 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500'
                    } transform hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    {type === 'success' ? 'Continue' : 'Try Again'}
                  </motion.button>
                </div>

                {/* Close button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', message: '', type: 'success' as 'success' | 'error' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate checking if email client can be opened
      const mailtoUrl = `mailto:iceprince1964@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoUrl;
      
      // Show success modal
      setModalConfig({
        isOpen: true,
        title: 'Message Ready! 🎉',
        message: `Thank you ${formData.name}! Your email client has been opened. Please review and send the message to complete.`,
        type: 'success'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      // Show error modal if something goes wrong
      setModalConfig({
        isOpen: true,
        title: 'Oops! Something went wrong',
        message: 'Unable to open email client. Please check your email configuration or try again later.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalConfig({ ...modalConfig, isOpen: false });
  };

  return (
    <>
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#060d1f] to-navy-950" />
        <div className="ambient-blob ambient-blob-3" style={{ opacity: 0.06 }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader title="Let's Connect" subtitle="Have a project, idea, or collaboration in mind? I'd love to hear from you." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
              {contactInfo.map((info, i) => {
                const Wrapper = info.href ? 'a' : 'div';
                const props = info.href ? { href: info.href, ...(info.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {};
                return (
                  <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                    <Wrapper {...props} className="glass-card p-5 flex items-center gap-5 group cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:translate-x-2 no-underline">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-500/20">
                        {iconMap[info.icon]}
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold text-sm mb-0.5">{info.label}</h4>
                        <p className="text-slate-300 text-sm">{info.value}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Contact form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <form onSubmit={handleSubmit} className="glass-card p-7 sm:p-8 space-y-5">
                {[
                  { label: 'Your Name', id: 'name', type: 'text', placeholder: 'Enter your name' },
                  { label: 'Your Email', id: 'email', type: 'email', placeholder: 'Enter your email' },
                  { label: 'Subject', id: 'subject', type: 'text', placeholder: 'Enter subject' },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-blue-400 text-sm font-medium mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-blue-500/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-blue-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Type your message..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-900/50 border border-blue-500/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 resize-vertical min-h-[120px]"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />
    </>
  );
}