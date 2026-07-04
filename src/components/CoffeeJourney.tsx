import { motion } from 'motion/react';
import { Mountain, FlameKindling, Sun, Sparkles, CheckCircle2, Truck } from 'lucide-react';
import { timelineSteps } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

// Helper component to render corresponding Lucide icons dynamically
function TimelineIcon({ name }: { name: string }) {
  const css = "w-5 h-5 text-primary-green group-hover:text-accent-gold transition-colors duration-500";
  switch (name) {
    case 'Mountain':
      return <Mountain className={css} />;
    case 'FlameKindling':
      return <FlameKindling className={css} />;
    case 'Sun':
      return <Sun className={css} />;
    case 'Sparkles':
      return <Sparkles className={css} />;
    case 'CheckCircle':
      return <CheckCircle2 className={css} />;
    case 'Truck':
      return <Truck className={css} />;
    default:
      return <Sparkles className={css} />;
  }
}

export default function CoffeeJourney() {
  const { t, language } = useLanguage();

  return (
    <section
      id="coffee-journey"
      className="py-24 md:py-32 bg-white overflow-hidden relative border-t border-primary-green/10"
    >
      {/* Soft Background Graphic */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-light-green/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
            {t('Alur Kerja & Ketertelusuran Ekspor', 'Workflow & Export Traceability')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Perjalanan Sourcing & Logistik', 'Sourcing & Logistics Journey')} <br />
            <span className="italic font-normal text-primary-green font-display">{t('Kargo Ekspor Kopi Premium', 'Premium Coffee Export Cargo')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Connecting Vertical Line (Hidden on Mobile) */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent-gold/0 via-accent-gold/40 to-accent-gold/0" />

          {/* Timeline steps */}
          <div className="space-y-16 lg:space-y-24">
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const stepSubtitle = language === 'en' ? (step.subtitleEn || step.subtitle) : step.subtitle;
              const stepTitle = language === 'en' ? (step.titleEn || step.title) : step.title;
              const stepDescription = language === 'en' ? (step.descriptionEn || step.description) : step.description;

              return (
                <div
                  key={step.id}
                  className="flex flex-col lg:flex-row items-stretch lg:items-center relative"
                >
                  
                  {/* Timeline Node Icon (Centered on Desktop, Left on Mobile) */}
                  <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-10 h-10 rounded-full bg-white border border-accent-gold/50 hover:border-primary-green flex items-center justify-center shadow-luxury group cursor-pointer transition-colors duration-500"
                    >
                      <TimelineIcon name={step.icon} />
                    </motion.div>
                  </div>

                  {/* Left Column (Content or Empty) */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:pr-16 text-left lg:text-right order-2 lg:order-1">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                        className="space-y-3 bg-white lg:bg-transparent p-6 lg:p-0 rounded-[20px] shadow-sm lg:shadow-none border border-primary-green/5 lg:border-none"
                      >
                        <span className="font-display text-[10px] uppercase tracking-widest text-accent-gold font-bold">
                          {t('Langkah', 'Step')} 0{step.id} — {stepSubtitle}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-brand-text font-bold">
                          {stepTitle}
                        </h3>
                        <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed max-w-md lg:ml-auto">
                          {stepDescription}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* Right Column (Content or Empty) */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-16 text-left order-3 lg:order-2">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7 }}
                        className="space-y-3 bg-white lg:bg-transparent p-6 lg:p-0 rounded-[20px] shadow-sm lg:shadow-none border border-primary-green/5 lg:border-none"
                      >
                        <span className="font-display text-[10px] uppercase tracking-widest text-accent-gold font-bold">
                          {t('Langkah', 'Step')} 0{step.id} — {stepSubtitle}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-brand-text font-bold">
                          {stepTitle}
                        </h3>
                        <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed max-w-md">
                          {stepDescription}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
