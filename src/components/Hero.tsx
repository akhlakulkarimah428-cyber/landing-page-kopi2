import { useState, useEffect } from 'react';
import { Play, Star, ArrowRight, X, Volume2, VolumeX, Compass, ShieldCheck, ChevronLeft, ChevronRight, Anchor, Activity, Leaf, Box, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { HERO_IMAGE, PREMIUM_BAG_IMAGE, BREWING_POUR_OVER_IMAGE } from '../data';

interface HeroProps {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slideshowImages = [
    {
      url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800',
      title: t('Kebun Kopi di Ketinggian', 'High-Altitude Coffee Gardens'),
      subtitle: t('Ceri merah ranum dipetik satu per satu dari lereng vulkanik terbaik Nusantara.', 'Ripe red cherries handpicked one by one from the finest volcanic slopes of Indonesia.')
    },
    {
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800',
      title: t('Sortasi Manual Setiap Lot', 'Hand-Sorted Every Lot'),
      subtitle: t('Setiap biji diperiksa satu per satu — tiga kali — untuk memastikan hanya yang terbaik.', 'Every bean is checked one by one — three times over — to ensure only the finest make the cut.')
    },
    {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800',
      title: t('Kemasan Kedap Udara', 'Airtight Packaging'),
      subtitle: t('Dibungkus karung rami dengan lapisan GrainPro — kadar air terjaga selama perjalanan laut.', 'Jute bags with GrainPro liners — stable moisture all the way across the ocean.')
    },
    {
      url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
      title: t('Uji Rasa di Laboratorium', 'Cupping Lab Certified'),
      subtitle: t('Setiap lot diuji oleh Q-Grader bersertifikat — memastikan cita rasa konsisten di atas skor 88+.', 'Every lot is tested by a certified Q-Grader — ensuring consistent flavor profiles above 88+.')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const trustStats = [
    { 
      label: t('Pengalaman Ekspor', 'Export Experience'), 
      value: t('12+ Tahun', '12+ Years'), 
      detail: t('Melayani Jepang, AS & Uni Eropa', 'Serving Japan, US & EU') 
    },
    { 
      label: t('Mitra Penyangrai', 'Roasting Partners'), 
      value: t('85+ Brand', '85+ Brands'), 
      detail: t('Hubungan dagang langsung', 'Direct-trade relationships') 
    },
    { 
      label: t('Kebun Premium', 'Premium Estates'), 
      value: t('18+ Origin', '18+ Origins'), 
      detail: t('Tanah vulkanik teduh organik', 'Shade-grown organic volcanic soil') 
    },
    { 
      label: t('Kargo Terkirim', 'Shipped Cargo'), 
      value: t('450+ Ton', '450+ Tons'), 
      detail: t('100% kemasan GrainPro hermetis', '100% hermetic GrainPro packaging') 
    },
    { 
      label: t('Skor Kualitas SCA', 'SCA Quality Score'), 
      value: '88.5+', 
      detail: t('Lulus sertifikasi Q-G', 'Licensed Q-Grader certified') 
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-brand-text flex flex-col justify-between overflow-hidden"
    >
      {/* Full-screen background slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slideshowImages[currentSlide].url}
            alt={slideshowImages[currentSlide].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Soft elegant gradient overlays for perfect contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/30 hidden lg:block" />
        <div className="absolute inset-0 bg-black/65 lg:hidden" />
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 flex-1 py-12 lg:py-4">
        
        {/* Left Side: Sourcing Philosophy & Call to Action */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Quality Badge */}
         
         

          {/* Elegant Heavy Title in Indonesian */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl xl:text-5xl text-white leading-[1.1] tracking-tight font-extrabold mt-8 md:mt-16"
          >
            {t('Kopi Nusantara', 'Indonesian coffee')}<br />
            <span className="text-accent-gold font-normal italic font-serif">{t('spesialti murni,', 'pure origins,')}</span> <br />
            {t('siap ke seluruh dunia.', 'ready for the world.')}
          </motion.h1>

          {/* Sourcing Narrative Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xs md:text-sm text-white/90 max-w-lg leading-relaxed"
          >
            {t(
              'Kami mendampingi roastery dan importir kopi di seluruh dunia — menghadirkan lot mikro pilihan langsung dari perkebunan Gayo, lereng vulkanik Batur, dan dataran tinggi Jawa Barat. Setiap biji melewati seleksi ketat, dikemas hermetis, dan teruji dengan skor SCA 88+.',
              'We partner with roasteries and importers worldwide — bringing selected micro-lots straight from the estates of Gayo, the volcanic slopes of Batur, and the highlands of West Java. Every bean is carefully sorted, hermetically sealed, and cupped at SCA 88+.'
            )}
          </motion.p>

          {/* Interactive B2B Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 w-full"
          >
            <button
              onClick={onShopClick}
              className="bg-accent-gold hover:bg-white text-white hover:text-primary-green px-7 py-4 rounded-full text-[11px] font-display font-bold uppercase tracking-widest transition-all duration-300 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer border border-accent-gold/20"
            >
              <span>{t('Lihat Katalog & Penawaran', 'View Catalog & Offers')}</span>
            </button>

            <button
              onClick={() => setIsStoryOpen(true)}
              className="border border-white/20 hover:border-accent-gold text-white hover:text-accent-gold bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full text-[11px] font-display font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer shadow-sm"
            >
              <div className="w-4 h-4 flex items-center justify-center rounded-full bg-accent-gold text-white mr-1 group-hover:scale-110 transition-transform duration-300">
                <Play size={6} className="fill-current ml-0.5" />
              </div>
              <span>{t('Video Proses Roasting', 'Roasting Process Video')}</span>
            </button>
          </motion.div>

          {/* B2B Sourcing Parameters Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3 pt-5 border-t border-white/10 w-full"
          >
            <div className="flex items-center space-x-2.5 text-xs text-white/90">
              <ShieldCheck size={14} className="text-accent-gold shrink-0" />
              <span className="font-sans">{t('Kedap Udara GrainPro', 'GrainPro Airtight Seal')}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-xs text-white/90">
              <Compass size={14} className="text-accent-gold shrink-0" />
              <span className="font-sans">{t('Kadar Air Terjaga', 'Stable Moisture Level')}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-xs text-white/90">
              <Leaf size={14} className="text-accent-gold shrink-0" />
              <span className="font-sans">{t('Ditanam di Bawah Naungan', 'Shade-Grown Coffee')}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-xs text-white/90">
              <Box size={14} className="text-accent-gold shrink-0" />
              <span className="font-sans">{t('Sampel DHL ke Seluruh Dunia', 'Worldwide DHL Samples')}</span>
            </div>
          </motion.div>



        </div>

        {/* Right Side: Elegant Glassmorphism Slideshow Info Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-6">
          
          <div className="bg-black/35 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl text-white space-y-6 relative overflow-hidden shadow-luxury">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full filter blur-xl pointer-events-none" />
            
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
              {t('Galeri Ekspor Nayaka', 'Nayaka Export Gallery')}
            </span>

            {/* Slider Text Information with smooth transitions */}
            <div className="min-h-[140px] flex flex-col justify-center space-y-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
                    {slideshowImages[currentSlide].title}
                  </h3>
                  <p className="font-sans text-xs text-white/80 leading-relaxed">
                    {slideshowImages[currentSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Navigation and Page Tracker */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              
              {/* Slide Indicators (Dots) */}
              <div className="flex space-x-1.5">
                {slideshowImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? 'bg-accent-gold w-4' : 'bg-white/45 hover:bg-white/75'
                    }`}
                    aria-label={t(`Lihat slide ${idx + 1}`, `View slide ${idx + 1}`)}
                  />
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-300 cursor-pointer border border-white/10"
                  aria-label={t('Slide sebelumnya', 'Previous slide')}
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-300 cursor-pointer border border-white/10"
                  aria-label={t('Slide berikutnya', 'Next slide')}
                >
                  <ChevronRight size={14} />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Global Trust Section (Section 2 of Homepage Structure) */}
      <div className="border-t border-primary-green/10 bg-white py-16 relative z-10 w-full mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className={`p-6 rounded-[24px] border shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-transform duration-300 text-center md:text-left space-y-2 flex flex-col justify-between ${
                  i === 0 ? 'bg-amber-50/70 border-amber-200/50 text-amber-900' :
                  i === 1 ? 'bg-emerald-50/60 border-emerald-200/40 text-emerald-950' :
                  i === 2 ? 'bg-stone-50 border-stone-200/60 text-stone-900' :
                  i === 3 ? 'bg-teal-50/60 border-teal-200/40 text-teal-950' :
                  'bg-[#FCFAF2] border-accent-gold/20 text-[#5C4033]'
                }`}
              >
                <div>
                  <span className={`font-display text-3xl md:text-4xl font-black block leading-none ${
                    i === 0 ? 'text-amber-800' :
                    i === 1 ? 'text-primary-green' :
                    i === 2 ? 'text-stone-800' :
                    i === 3 ? 'text-teal-800' :
                    'text-accent-gold'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="font-display text-[10px] font-bold uppercase tracking-wider block mt-2 text-[#202020]/90">
                    {stat.label}
                  </span>
                </div>
                <span className="font-sans text-[11px] text-brand-gray block pt-1 border-t border-[#202020]/5">
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic Watch Story Modal */}
      <AnimatePresence>
        {isStoryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-text/95 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[24px] overflow-hidden max-w-4xl w-full aspect-video relative shadow-2xl border border-primary-green/10 flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsStoryOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/85 hover:bg-primary-green text-primary-green hover:text-white p-2.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
                aria-label={t('Tutup video', 'Close video')}
              >
                <X size={16} />
              </button>

              {/* YouTube Video Embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/N6BJVM5tvnw?autoplay=1&rel=0&modestbranding=1"
                title="Coffee Roasting Explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
