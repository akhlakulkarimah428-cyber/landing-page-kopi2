import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-white overflow-hidden relative border-t border-primary-green/10"
    >
      {/* Decorative Blur Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-light-green/25 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
              {t('Testimoni Mitra', 'Partner Testimonials')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
              {t('Kualitas Ekspor', 'Export Quality')} <br />
              <span className="italic font-normal text-primary-green font-display">{t('Yang Dipercaya di Seluruh Dunia', 'Trusted Around the Globe')}</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed max-w-md">
              {t(
                'Jangan hanya percaya kata-kata kami. Simak bagaimana para juara sangrai kopi, penilai cita rasa (Q-Grader), dan pemilik kedai kopi gelombang ketiga global mengapresiasi keandalan pasokan ekspor kami.',
                'Do not just take our word for it. Hear how coffee roasting champions, sensory Q-Graders, and global third-wave cafe owners appreciate our absolute export reliability.'
              )}
            </p>

            {/* Slider Controls */}
            <div className="flex items-center space-x-3 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-primary-green/15 flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 cursor-pointer"
                aria-label={t('Ulasan sebelumnya', 'Previous review')}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-primary-green/15 flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 cursor-pointer"
                aria-label={t('Ulasan berikutnya', 'Next review')}
              >
                <ChevronRight size={16} />
              </button>
              
              <div className="flex space-x-2 pl-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === i ? 'w-6 bg-accent-gold' : 'w-1.5 bg-primary-green/10'
                    }`}
                    aria-label={t('Buka slide ', 'Open slide ') + (i + 1)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Card Overlapping Stack Deck */}
          <div className="lg:col-span-7 relative h-[420px] md:h-[380px] flex items-center justify-center mt-8 lg:mt-0">
            
            <div className="relative w-full max-w-xl h-full flex items-center justify-center">
              {testimonials.map((item, idx) => {
                // Calculate overlapping indices
                let position = idx - activeIndex;
                if (position < 0) {
                  position = position + testimonials.length;
                }

                // Standard deck visualization
                const isTop = position === 0;
                const isMiddle = position === 1;
                const isBottom = position === 2 || position > 2;

                const zIndex = 30 - position;
                const scale = isTop ? 1 : isMiddle ? 0.94 : 0.88;
                const translateY = isTop ? 0 : isMiddle ? 24 : 48;
                const opacity = isTop ? 1 : isMiddle ? 0.6 : 0.15;

                const itemQuote = language === 'en' ? (item.quoteEn || item.quote) : item.quote;
                const itemRole = language === 'en' ? (item.roleEn || item.role) : item.role;

                return (
                  <motion.div
                    key={item.id}
                    animate={{
                      scale,
                      y: translateY,
                      opacity,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 22,
                    }}
                    className="absolute w-full bg-white border border-primary-green/5 p-8 md:p-10 rounded-[24px] shadow-luxury pointer-events-none"
                    style={{
                      zIndex,
                      boxShadow: isTop
                        ? '0 25px 50px -12px rgba(47, 93, 80, 0.08)'
                        : '0 4px 6px -1px rgba(0,0,0,0.01)',
                    }}
                  >
                    
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-accent-gold/15">
                      <Quote size={56} className="fill-current" />
                    </div>

                    <div className="space-y-6 relative z-10">
                      {/* Rating */}
                      <div className="flex text-accent-gold space-x-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-current" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="font-display italic text-base md:text-lg text-brand-text leading-relaxed font-semibold">
                        "{itemQuote}"
                      </p>

                      {/* Divider */}
                      <div className="w-8 h-[1px] bg-accent-gold/40" />

                      {/* Author Details */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-accent-gold/20 shadow-sm"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="text-left">
                          <h4 className="font-display text-sm font-bold text-brand-text">{item.name}</h4>
                          <p className="font-display text-[9px] uppercase tracking-wider text-brand-gray mt-0.5 font-bold">{itemRole}</p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
