import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, Heart, MessageSquare } from 'lucide-react';
import { articles } from '../data';
import { useLanguage } from '../contexts/LanguageContext';



export default function Articles() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (isLiked[id] ? -1 : 1),
    }));
  };

  const handleReadArticle = (id: string) => {
    navigate('/article/' + id);
  };

  return (
    <section
      id="articles"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-primary-green/10"
    >
      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-light-green/10 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
            {t('Kabar Nayaka Export', 'Nayaka Export News')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Jurnal Edukasi', 'Educational Journal')} <br />
            <span className="italic font-normal text-primary-green font-display">{t('& Kronik Kopi Spesialti', '& Specialty Coffee Chronicles')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            const numLikes = (likes[article.id] || 0) + 12 + idx * 4;
            const liked = !!isLiked[article.id];

            return (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={article.id}
                onClick={() => handleReadArticle(article.id)}
                className="bg-white rounded-[24px] border border-primary-green/10 overflow-hidden group shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                
                {/* Large Cover Image */}
                <div className="relative aspect-[16/10] bg-light-green/10 overflow-hidden">
                  <img
                    src={article.image}
                    alt={language === 'en' ? (article.titleEn || article.title) : article.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-primary-green font-display text-[9px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                      {language === 'en' ? (article.categoryEn || article.category) : article.category}
                    </span>
                  </div>
                </div>

                {/* Article Card Content */}
                <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    
                    {/* Date and Read Time indicators */}
                    <div className="flex items-center space-x-4 text-brand-gray/70 font-display text-[10px] font-bold">
                      <span className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{language === 'en' ? (article.dateEn || article.date) : article.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{language === 'en' ? (article.readTimeEn || article.readTime) : article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl text-brand-text font-bold leading-snug group-hover:text-primary-green transition-colors duration-300">
                      {language === 'en' ? (article.titleEn || article.title) : article.title}
                    </h3>

                    <p className="font-sans text-xs text-brand-gray leading-relaxed line-clamp-3">
                      {language === 'en' ? (article.summaryEn || article.summary) : article.summary}
                    </p>

                  </div>

                  {/* Actions & Read More */}
                  <div className="pt-6 border-t border-primary-green/5 flex items-center justify-between">
                    <span className="font-display text-[10px] uppercase tracking-wider font-bold text-accent-gold group-hover:text-primary-green flex items-center space-x-1.5 transition-colors duration-300">
                      <span>{t('Baca Jurnal', 'Read Journal')}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>

                    {/* Like & Share micro interactions */}
                    <div className="flex items-center space-x-3 text-brand-gray/55 text-xs font-display font-bold">
                      <button
                        onClick={(e) => handleLike(article.id, e)}
                        className={`flex items-center space-x-1 hover:text-rose-600 transition-colors duration-300 cursor-pointer ${liked ? 'text-rose-600' : ''}`}
                        aria-label={t('Sukai artikel', 'Like article')}
                      >
                        <Heart size={14} className={liked ? 'fill-current' : ''} />
                        <span>{numLikes}</span>
                      </button>
                      <span className="flex items-center space-x-1">
                        <MessageSquare size={13} />
                        <span>{2 + idx}</span>
                      </span>
                    </div>
                  </div>

                </div>

              </motion.article>
            );
          })}
        </div>



      </div>
    </section>
  );
}
