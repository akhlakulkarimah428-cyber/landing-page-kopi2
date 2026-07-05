import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Thermometer, Clock, Activity } from 'lucide-react';
import { brewGuides } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function BrewingGuide() {
  const { t, language } = useLanguage();
  const [activeGuideId, setActiveGuideId] = useState<string>(brewGuides[0].id);

  const activeGuide = brewGuides.find((g) => g.id === activeGuideId) || brewGuides[0];

  return (
    <section
      id="brewing-guide"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-primary-green/10"
    >
      {/* Soft Ambient Vector Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-light-green/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
<<<<<<< HEAD
            {t('Edukasi Seduh Nayaka', 'Nayaka Brewing Education')}
=======
            {t('Edukasi Seduh Kaffa', 'Kaffa Brewing Education')}
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Ritual Ekstraksi:', 'Extraction Ritual:')}<br />
            <span className="italic font-normal text-primary-green font-display">{t('Menyeduh dengan Standar Barista', 'Brewing with Barista Standards')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Editorial tab navigation */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5">
            <span className="font-display text-[10px] uppercase tracking-wider text-brand-gray font-bold block px-2 mb-2">
              {t('Pilih Metode Ekstraksi Anda', 'Select Your Extraction Method')}
            </span>

            {brewGuides.map((guide, idx) => (
              <button
                key={guide.id}
                onClick={() => setActiveGuideId(guide.id)}
                className={`w-full text-left p-6 rounded-[24px] transition-all duration-500 relative flex items-center justify-between group border cursor-pointer ${
                  activeGuideId === guide.id
                    ? 'bg-white border-primary-green/5 shadow-luxury text-primary-green'
                    : 'bg-transparent border-transparent text-[#202020]/60 hover:text-primary-green hover:bg-light-green/30'
                }`}
              >
                <div className="space-y-1">
                  <span className="font-display text-[9px] uppercase tracking-wider text-accent-gold font-bold">
                    {t('Metode', 'Method')} 0{idx + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {language === 'en' ? (guide.nameEn || guide.name) : guide.name}
                  </h3>
                </div>

                {/* Arrow Indicator active */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeGuideId === guide.id
                    ? 'bg-primary-green text-white'
                    : 'bg-light-green text-primary-green group-hover:bg-primary-green group-hover:text-white'
                }`}>
                  <span className="text-[10px] font-display font-bold">→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Immersive presentation details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGuide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-white rounded-[24px] border border-primary-green/10 overflow-hidden shadow-luxury p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                
                {/* Photo column */}
                <div className="md:col-span-5 relative rounded-[20px] overflow-hidden aspect-[4/3] md:aspect-auto border border-primary-green/5">
                  <img
                    src={activeGuide.photo}
                    alt={language === 'en' ? (activeGuide.nameEn || activeGuide.name) : activeGuide.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Decorative stamp overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-display text-[9px] uppercase tracking-[0.2em] text-accent-gold font-bold">
                      {t('Sains Ekstraksi', 'Extraction Science')}
                    </span>
                    <p className="font-display text-sm font-semibold italic mt-0.5">{t('Aroma Volatil Seimbang', 'Balanced Volatile Aromas')}</p>
                  </div>
                </div>

                {/* Parameter details and instructions column */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl text-primary-green font-bold">
                      {t('Prosedur', 'Procedure')} {language === 'en' ? (activeGuide.nameEn || activeGuide.name) : activeGuide.name}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed">
                      {language === 'en' ? (activeGuide.descriptionEn || activeGuide.description) : activeGuide.description}
                    </p>
                  </div>

                  {/* 4 Parameter Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    <div className="p-4 bg-light-green/20 rounded-[16px] border border-primary-green/5 flex items-start space-x-3">
                      <div className="text-accent-gold mt-0.5">
                        <Scale size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-display text-[9px] text-brand-gray uppercase tracking-wider block font-semibold">{t('Rasio Kopi', 'Coffee Ratio')}</span>
                        <span className="font-sans text-xs font-bold text-primary-green">{activeGuide.ratio}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-light-green/20 rounded-[16px] border border-primary-green/5 flex items-start space-x-3">
                      <div className="text-accent-gold mt-0.5">
                        <Thermometer size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-display text-[9px] text-brand-gray uppercase tracking-wider block font-semibold">{t('Suhu Seduh', 'Brew Temperature')}</span>
                        <span className="font-sans text-xs font-bold text-primary-green">{activeGuide.temperature}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-light-green/20 rounded-[16px] border border-primary-green/5 flex items-start space-x-3">
                      <div className="text-accent-gold mt-0.5">
                        <Clock size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-display text-[9px] text-brand-gray uppercase tracking-wider block font-semibold">{t('Durasi Seduh', 'Brew Duration')}</span>
                        <span className="font-sans text-xs font-bold text-primary-green">{language === 'en' ? (activeGuide.timeEn || activeGuide.time) : activeGuide.time}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-light-green/20 rounded-[16px] border border-primary-green/5 flex items-start space-x-3">
                      <div className="text-accent-gold mt-0.5">
                        <Activity size={16} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-display text-[9px] text-brand-gray uppercase tracking-wider block font-semibold">{t('Tingkat Gilingan', 'Grind Size')}</span>
                        <span className="font-sans text-xs font-bold text-primary-green">{language === 'en' ? (activeGuide.grindSizeEn || activeGuide.grindSize) : activeGuide.grindSize}</span>
                      </div>
                    </div>

                  </div>

                  {/* Step list sequence */}
                  <div className="space-y-3.5 pt-4 border-t border-primary-green/5">
                    <span className="font-display text-[10px] uppercase tracking-wider text-brand-gray font-bold block">
                      {t('Tahapan Ekstraksi Bertahap', 'Step-by-Step Extraction Stages')}
                    </span>
                    <div className="space-y-3 max-h-[190px] overflow-y-auto pr-2">
                      {activeGuide.steps.map((step, stepIdx) => (
                        <div
                          key={stepIdx}
                          className="flex items-start space-x-3"
                        >
                          <span className="font-display text-xs font-bold text-accent-gold shrink-0 w-5 h-5 rounded-full bg-accent-gold/10 flex items-center justify-center">
                            0{stepIdx + 1}
                          </span>
                          <p className="font-sans text-xs text-brand-gray leading-relaxed">
                            {language === 'en' ? (activeGuide.stepsEn ? activeGuide.stepsEn[stepIdx] : step) : step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
