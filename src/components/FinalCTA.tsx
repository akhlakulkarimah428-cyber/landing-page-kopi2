import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FinalCTAProps {
  onShopClick: () => void;
}

export default function FinalCTA({ onShopClick }: FinalCTAProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section
      id="final-cta"
      className="py-24 md:py-32 bg-primary-green text-white relative overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(210,175,116,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#153E32]/50 via-transparent to-primary-green" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
        
        {/* Editorial Title */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-accent-gold font-bold block">
            {t('Jaringan Ekspor Kopi Global', 'Global Coffee Export Network')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-extrabold tracking-tight">
            {t('Dapatkan Penawaran Lot Terbaru', 'Get the Latest Lot Offers')} <br />
            <span className="italic font-normal text-accent-gold font-display">{t('Langsung untuk Roastery Anda', 'Directly to Your Roastery')}</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-bg/75 max-w-xl mx-auto pt-2 leading-relaxed">
            {t(
              'Daftarkan email perusahaan Anda untuk mendapatkan info real-time ketersediaan lot kopi, hasil uji cupping laboratorium SCA, dan laporan pelayaran kapal ekspor kami.',
              'Register your company email to receive real-time updates on coffee lot availability, SCA laboratory cupping results, and our export shipment logs.'
            )}
          </p>
        </div>

        {/* Form and CTA buttons row */}
        <div className="flex flex-col items-center justify-center space-y-8 max-w-xl mx-auto">
          
          {/* Shop button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShopClick}
            className="bg-accent-gold hover:bg-white hover:text-primary-green text-white px-10 py-5 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 shadow-2xl flex items-center space-x-2 cursor-pointer"
          >
            <span>{t('Jelajahi Lot Ekspor', 'Explore Export Lots')}</span>
            <ArrowRight size={14} />
          </motion.button>

          {/* Divider with small text */}
          <div className="flex items-center space-x-4 w-full text-white/30 font-display text-[9px] uppercase tracking-widest">
            <div className="h-[1px] bg-white/10 flex-1" />
            <span>{t('Gabung Jaringan Importir', 'Join Importer Network')}</span>
            <div className="h-[1px] bg-white/10 flex-1" />
          </div>

          {/* Newsletter Subscribe Form */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="subscribe-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-stretch gap-3 w-full bg-white/5 p-2 rounded-[20px] border border-white/10 backdrop-blur-sm"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('Masukkan alamat email perusahaan', 'Enter your company email address')}
                    className="flex-1 bg-transparent px-4 py-3.5 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-0 w-full font-sans"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white hover:bg-accent-gold text-primary-green hover:text-white px-6 py-3.5 rounded-[14px] text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 shrink-0 flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading ? (
                      <span>{t('Mengirim...', 'Sending...')}</span>
                    ) : (
                      <>
                        <span>{t('Berlangganan', 'Subscribe')}</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="subscribe-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/5 border border-emerald-500/20 rounded-[20px] p-6 text-center text-emerald-400 flex flex-col items-center space-y-2 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-1">
                    <Check size={20} className="text-emerald-400 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">{t('Berhasil Bergabung', 'Successfully Joined')}</h4>
                  <p className="text-xs text-brand-bg/70 font-sans max-w-sm">
                    {t(
<<<<<<< HEAD
                      'Anda sekarang terdaftar di Jaringan Importir Nayaka Export. Kami akan mengirimkan katalog stok terbaru dan laporan sensoris laboratorium langsung ke inbox Anda.',
                      'You are now registered in the Nayaka Export Importer Network. We will deliver the latest stock catalogs and laboratory sensory reports directly to your inbox.'
=======
                      'Anda sekarang terdaftar di Jaringan Importir Kaffa Export. Kami akan mengirimkan katalog stok terbaru dan laporan sensoris laboratorium langsung ke inbox Anda.',
                      'You are now registered in the Kaffa Export Importer Network. We will deliver the latest stock catalogs and laboratory sensory reports directly to your inbox.'
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
                    )}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
