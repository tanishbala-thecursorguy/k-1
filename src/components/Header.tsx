import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold uppercase tracking-wide"
          style={{ color: scrolled ? '#7B2FF7' : '#FFFFFF' }}
        >
          SEOUL STREET
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Menu', 'Gallery', 'Book', 'Contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative group py-2"
              style={{ color: scrolled ? '#1E1E1E' : '#FFFFFF' }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-[#FF4F9A] w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.button>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('book')}
            className="px-6 py-3 bg-gradient-to-r from-[#7B2FF7] to-[#9F6BFF] text-white rounded-full hover:shadow-lg transition-shadow duration-500"
          >
            Reserve Table
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: scrolled ? '#1E1E1E' : '#FFFFFF' }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg mt-4 py-6 px-6"
        >
          {['Menu', 'Gallery', 'Book', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left py-3 text-[#1E1E1E] hover:text-[#FF4F9A] transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('book')}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#7B2FF7] to-[#9F6BFF] text-white rounded-full"
          >
            Reserve Table
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
