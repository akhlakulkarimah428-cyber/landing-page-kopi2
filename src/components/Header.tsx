import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeTab: string;
  onNavClick: (sectionId: string) => void;
  onShopClick: () => void;
}

export default function Header({ activeTab, onNavClick, onShopClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('Beranda', 'Home'), id: 'home' },
    { name: t('Katalog Ekspor', 'Export Catalog'), id: 'featured-coffee' },
    { name: t('Kisah Kami', 'Our Story'), id: 'brand-story' },
    { name: t('Wawasan Dagang', 'Trade Insights'), id: 'articles' },
    { name: t('FAQ Ekspor', 'Export FAQ'), id: 'faq' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-primary-green/10 shadow-luxury py-4'
            : 'bg-white/40 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick('home');
            }}
            className="flex items-center space-x-2 select-none group"
          >
            <div className="flex flex-col items-start leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-primary-green transition-colors duration-300">
                Nayaka Export
              </span>
              <span className="font-mono text-[8px] tracking-[0.25em] text-accent-gold uppercase mt-0.5 font-bold">
                Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.id);
                }}
                className={`font-display text-xs uppercase tracking-widest font-semibold transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-accent-gold after:transition-all after:duration-300 ${
                  activeTab === item.id
                    ? 'text-primary-green after:w-full'
                    : 'text-brand-gray hover:text-primary-green after:w-0 hover:after:w-full'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Elegant Language Switcher Pill */}
            <div className="flex bg-primary-green/5 border border-primary-green/10 rounded-full p-0.5 text-[9px] font-mono font-bold select-none relative">
              <button
                onClick={() => setLanguage('id')}
                className={`px-2 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'id'
                    ? 'bg-primary-green text-white shadow-sm'
                    : 'text-brand-gray hover:text-primary-green'
                }`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'en'
                    ? 'bg-primary-green text-white shadow-sm'
                    : 'text-brand-gray hover:text-primary-green'
                }`}
                aria-label="English Language"
              >
                EN
              </button>
            </div>

            {/* Shop CTA Button */}
            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                t(
                  'Halo Nayaka Export Atelier, saya tertarik dengan kopi ekspor Anda. Bisa berdiskusi lebih lanjut?',
                  'Hello Nayaka Export Atelier, I am interested in your export coffee. Can we discuss further?'
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-primary-green hover:bg-coffee-brown text-white px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-luxury group cursor-pointer border border-primary-green/10 font-semibold"
            >
              <span>{t('Hubungi Kami', 'Contact Us')}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-green hover:text-accent-gold transition-colors duration-300 cursor-pointer"
              aria-label="Alihkan menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="stroke-[2]" />
              ) : (
                <Menu size={20} className="stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 bg-white lg:hidden flex flex-col justify-between p-8 border-t border-primary-green/10 shadow-luxury"
          >
            <div className="flex flex-col space-y-5 mt-4">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.id);
                  }}
                  className={`font-display text-xl font-bold transition-colors duration-300 ${
                    activeTab === item.id ? 'text-accent-gold' : 'text-primary-green hover:text-accent-gold'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-5 pb-12">
              <div className="h-[1px] bg-primary-green/10" />
              <div className="flex flex-col space-y-3">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    t(
                      'Halo Nayaka Export Atelier, saya tertarik dengan kopi ekspor Anda. Bisa berdiskusi lebih lanjut?',
                      'Hello Nayaka Export Atelier, I am interested in your export coffee. Can we discuss further?'
                    )
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 text-center bg-primary-green hover:bg-coffee-brown text-white rounded-xl text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 shadow-luxury cursor-pointer font-semibold block"
                >
                  {t('Hubungi Kami via WhatsApp', 'Contact Us via WhatsApp')}
                </a>
                <div className="flex justify-between items-center px-2 text-[10px] text-brand-gray font-mono">
                  <span>© 2026 Nayaka Export Atelier</span>
                  <span>SCA Certified Specialty</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
