import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#FFF6E5] py-16 border-t border-[#FF4F9A]/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="text-3xl font-bold uppercase tracking-wide text-[#7B2FF7] mb-2">
              SEOUL STREET
            </div>
            <p className="text-[#6B6B6B]">Korean Street Food, Reimagined</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-500"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#FF4F9A]/20 text-center text-[#6B6B6B] flex items-center justify-center gap-2 flex-wrap"
        >
          <span>© 2026 Seoul Street. Made with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={16} className="text-[#FF4F9A] fill-[#FF4F9A] inline" />
          </motion.span>
          <span>in Los Angeles</span>
        </motion.div>
      </div>
    </footer>
  );
}
