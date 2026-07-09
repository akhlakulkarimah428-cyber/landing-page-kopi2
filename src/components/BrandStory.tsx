import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Leaf, Award, Compass, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Simple Hook for smooth numeric count-up animation
function useCountUp(target: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}

export default function BrandStory() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Custom Counters triggered when section comes into view
  const years = useCountUp(15, 1500, isInView);
  const farmers = useCountUp(100, 1500, isInView);
  const customers = useCountUp(20, 1500, isInView); // displayed as k+
  const satisfaction = useCountUp(98, 1500, isInView);

  return (
    <section
      id="brand-story"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white overflow-hidden relative border-t border-primary-green/10"
    >
      {/* Soft Decorative Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-light-green/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header - Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
              {t('Cerita Nayaka Export', 'The Nayaka Export Story')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight max-w-lg">
              {t('Tanah Vulkanik Indonesia,', 'Indonesian Volcanic Soil,')} <br />
              <span className="italic font-normal text-primary-green font-display">{t('Untuk Seluruh Dunia', 'For the Whole World')}</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-12">
            <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed max-w-xl">
              {t(
                'Kami mencari, menilai, dan mengekspor lot mikro kopi terbaik dari Sumatra, Jawa Barat, dan Bali — bekerja langsung dengan pengelola kebun dan koperasi petani. Transparan, berkelanjutan, dan selalu dalam standar mutu kelas kompetisi.',
                'We source, grade, and export the finest coffee micro-lots from Sumatra, West Java, and Bali — working directly with estate managers and farmer cooperatives. Transparent, sustainable, always competition-grade quality.'
              )}
            </p>
          </div>
        </div>

        {/* Asymmetrical Images and Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Overlapping Images Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background Light Green Tinted Block */}
            <div className="absolute top-12 left-12 w-full h-full bg-light-green rounded-[24px] pointer-events-none" />

            {/* Left Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-4/5 aspect-[3/4] rounded-[24px] overflow-hidden shadow-luxury border border-primary-green/5 relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=800"
                alt="Coffee farm mist-shrouded mountain landscape"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </motion.div>

            {/* Small Overlapping Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 -bottom-8 w-1/2 aspect-square rounded-[24px] overflow-hidden shadow-luxury-hover border-4 border-white z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500"
                alt="Farmers select perfect red cherries"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Philosophy Narrative Column */}
          <div className="lg:col-span-6 lg:pl-16 space-y-10 mt-12 lg:mt-0">
            
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl text-brand-text font-bold">
                {t('Standar Kopi Ekspor Kelas Dunia', 'World-Class Export Standards')}
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed">
                {t(
                  'Kopi spesialti yang luar biasa lahir dari kontrol kualitas yang ketat — dari mengukur kadar gula ceri, pengeringan di para-para, sortasi densitas, hingga pengemasan hermetis GrainPro. Semua demi memastikan karakter asli daerah asal tetap utuh sampai di tangan Anda.',
                  'Great specialty coffee is born from rigorous quality control — from measuring cherry sugar content, drying on raised beds, density sorting, to hermetic GrainPro packaging. All to ensure the authentic character of the origin stays intact until it reaches you.'
                )}
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-light-green text-primary-green rounded-xl">
                  <Leaf size={18} className="stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-text">{t('Tanah Vulkanik Subur', 'Volcanic Fertile Soil')}</h4>
                  <p className="text-[11px] text-brand-gray mt-1 leading-normal">
                    {t(
                      'Ditanam di bawah naungan pohon pelindung di pegunungan vulkanik yang kaya nutrisi.',
                      'Shade-grown on nutrient-rich volcanic mountains.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-light-green text-primary-green rounded-xl">
                  <Award size={18} className="stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-text">{t('Jejak Asal-Usul', 'Origin Traceability')}</h4>
                  <p className="text-[11px] text-brand-gray mt-1 leading-normal">
                    {t(
                      'Setiap karung bisa dilacak hingga ke kebun dan ketinggian asalnya.',
                      'Every bag can be traced back to its farm of origin and海拔 coordinates.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-light-green text-primary-green rounded-xl">
                  <Compass size={18} className="stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-text">{t('Kesejahteraan Petani', 'Farmer Welfare')}</h4>
                  <p className="text-[11px] text-brand-gray mt-1 leading-normal">
                    {t(
                      'Kami membayar hingga 4 kali lipat standar pasar — karena petani yang sejahtera menghasilkan kopi terbaik.',
                      'We pay up to 4x market standards — because thriving farmers grow the best coffee.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-light-green text-primary-green rounded-xl">
                  <Heart size={18} className="stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-brand-text">{t('Sangrai Bersih', 'Clean Roasting')}</h4>
                  <p className="text-[11px] text-brand-gray mt-1 leading-normal">
                    {t(
                      'Mesin konveksi Loring menjaga aroma kopi tetap murni — tanpa bekas gosong.',
                      'Loring convection roasters keep the coffee aromatics pure — no scorch marks.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Statistics Panel */}
        <div className="bg-primary-green rounded-[24px] p-8 md:p-12 lg:p-16 text-white grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center relative overflow-hidden shadow-luxury border border-primary-green/10">
          {/* Subtle graphic accent background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(199,167,108,0.1),transparent_60%)] pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-gold">
              {years}
            </div>
            <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">
              {t('Tahun Sourcing & Ekspor', 'Years Sourcing & Exporting')}
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-gold">
              {farmers}
            </div>
            <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">
              {t('Mitra Petani', 'Farm Partners')}
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-gold">
              {customers}+
            </div>
            <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">
              {t('Negara Tujuan', 'Export Destinations')}
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent-gold">
              {satisfaction}%
            </div>
            <div className="font-display text-[9px] uppercase tracking-[0.2em] text-white/60 font-semibold">
              {t('Skor Rata-Rata', 'Average Cupping Score')}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
