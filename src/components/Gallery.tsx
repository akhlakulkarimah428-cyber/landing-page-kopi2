import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Gallery() {
  const { t, language } = useLanguage();
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((prev) => (prev! + 1) % galleryPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((prev) => (prev! - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-primary-green/10"
    >
      {/* Ambient background accent */}
      <div className="absolute top-1/3 right-12 w-96 h-96 bg-light-green/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
            {t('Dokumentasi Visual', 'Visual Documentation')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Aktivitas Perkebunan', 'Estate Activities')} <br />
            <span className="italic font-normal text-primary-green font-display">{t('& Galeri Ekspor Kami', '& Our Export Gallery')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* Masonry Columns Grid (Pinterest-style columns-1 md:columns-2 lg:columns-3) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryPhotos.map((photo, index) => {
            const photoTitle = language === 'en' ? (photo.titleEn || photo.title) : photo.title;
            const photoDesc = language === 'en' ? (photo.descEn || photo.desc) : photo.desc;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                key={index}
                onClick={() => setActivePhotoIdx(index)}
                className="break-inside-avoid relative rounded-[24px] overflow-hidden group shadow-luxury hover:shadow-luxury-hover border border-primary-green/5 cursor-pointer bg-white"
              >
                <img
                  src={photo.url}
                  alt={photoTitle}
                  loading="lazy"
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Luxury Text Cover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end text-white">
                  <span className="font-display text-[9px] uppercase tracking-widest text-accent-gold font-bold block mb-1">
                    {t('Klik untuk Memperbesar', 'Click to Zoom')}
                  </span>
                  <h3 className="font-display text-lg font-bold">{photoTitle}</h3>
                  <p className="text-xs text-white/80 mt-1 leading-normal">{photoDesc}</p>
                  
                  {/* Micro zoom indicators */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <ZoomIn size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {activePhotoIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIdx(null)}
              className="fixed inset-0 z-50 bg-[#1F1F1F]/95 flex items-center justify-center p-6 backdrop-blur-md"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActivePhotoIdx(null)}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-primary-green text-white p-3 rounded-full transition-colors duration-300 shadow-lg cursor-pointer"
                aria-label={t('Tutup Galeri', 'Close Gallery')}
              >
                <X size={18} />
              </button>

              {/* Slider Prev */}
              <button
                onClick={handlePrev}
                className="absolute left-6 w-14 h-14 bg-white/5 hover:bg-white/15 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md border border-white/10 cursor-pointer"
                aria-label={t('Foto Sebelumnya', 'Previous Photo')}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Lightbox Content Area */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center relative"
              >
                <img
                  src={galleryPhotos[activePhotoIdx].url}
                  alt={language === 'en' ? (galleryPhotos[activePhotoIdx].titleEn || galleryPhotos[activePhotoIdx].title) : galleryPhotos[activePhotoIdx].title}
                  className="max-w-full max-h-[70vh] rounded-[16px] object-contain border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                
                <div className="mt-6 text-center text-white space-y-1">
                  <h3 className="font-display text-xl font-bold">
                    {language === 'en' ? (galleryPhotos[activePhotoIdx].titleEn || galleryPhotos[activePhotoIdx].title) : galleryPhotos[activePhotoIdx].title}
                  </h3>
                  <p className="font-display text-[10px] uppercase tracking-wider text-accent-gold font-bold">
                    {language === 'en' ? (galleryPhotos[activePhotoIdx].descEn || galleryPhotos[activePhotoIdx].desc) : galleryPhotos[activePhotoIdx].desc}
                  </p>
                </div>
              </motion.div>

              {/* Slider Next */}
              <button
                onClick={handleNext}
                className="absolute right-6 w-14 h-14 bg-white/5 hover:bg-white/15 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md border border-white/10 cursor-pointer"
                aria-label={t('Foto Selanjutnya', 'Next Photo')}
              >
                <ChevronRight size={24} />
              </button>

              {/* Photo Counting tracker */}
              <div className="absolute bottom-6 font-display text-[10px] tracking-widest text-white/50 font-bold">
                0{activePhotoIdx + 1} / 0{galleryPhotos.length}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
