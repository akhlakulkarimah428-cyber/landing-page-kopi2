import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-primary-green/10"
    >
      {/* Decorative ambient vector light */}
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-light-green/25 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
            {t('Pusat Informasi', 'Information Hub')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Pertanyaan yang', 'Frequently Asked')} <br />
            <span className="italic font-normal text-primary-green font-display">{t('Sering Diajukan Importir', 'Questions by Importers')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            const faqQuestion = language === 'en' ? (faq.questionEn || faq.question) : faq.question;
            const faqAnswer = language === 'en' ? (faq.answerEn || faq.answer) : faq.answer;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-[24px] border transition-all duration-500 overflow-hidden shadow-luxury ${
                  isOpen
                    ? 'border-primary-green/20 bg-white shadow-lg'
                    : 'border-primary-green/5 hover:border-primary-green/10'
                }`}
              >
                {/* Accordion Trigger Title */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-start space-x-4">
                    <span className="font-display text-xs font-bold text-accent-gold shrink-0 mt-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-base md:text-lg text-brand-text font-bold tracking-tight leading-snug group-hover:text-primary-green transition-colors duration-300">
                      {faqQuestion}
                    </h3>
                  </div>

                  {/* Icon Indicator (Minus when open, Plus when closed) */}
                  <div className={`w-8 h-8 rounded-full border border-primary-green/10 flex items-center justify-center shrink-0 transition-all duration-500 ${
                    isOpen ? 'bg-primary-green border-primary-green text-white rotate-180' : 'bg-transparent text-primary-green'
                  }`}>
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Accordion Animated Expansion content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pl-12 md:pl-16 pt-0 text-xs md:text-sm text-brand-gray leading-relaxed border-t border-primary-green/5">
                        <p className="max-w-2xl">{faqAnswer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
