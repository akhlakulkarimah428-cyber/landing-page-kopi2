import { motion } from 'motion/react';
import { Flame, Star, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Star className="w-5 h-5 stroke-[2]" />,
      title: t('Spesialti Bersertifikat SCA', 'SCA-Certified Specialty'),
      desc: t(
        'Seluruh lot kopi kami melewati proses sortasi density dan penyortiran manual tiga kali (triple-picked). Q-Grader bersertifikat mengevaluasi setiap lot dengan protokol ketat untuk menjamin status Kopi Spesial Kelas 1 dengan skor cupping melebihi 88+ poin.',
        'All our coffee lots undergo density sorting and manual triple-picking. Certified Q-Graders evaluate each lot under strict protocols to guarantee Specialty Coffee Grade 1 status with cupping scores exceeding 88+ points.'
      ),
      accent: t('Skor SCA 88+ Elite', 'Elite SCA Score 88+')
    },
    {
      icon: <ShieldCheck className="w-5 h-5 stroke-[2]" />,
      title: t('Kemasan Hermetis GrainPro', 'GrainPro Hermetic Bags'),
      desc: t(
        'Semua kargo ekspor disegel dalam kantong pelindung kedap udara GrainPro multi-layer di dalam karung rami tebal atau kotak vakum, mengunci kadar air pada tingkat stabil 11,0% guna mencegah jamur transit laut.',
        'All export cargo is sealed in multi-layer airtight GrainPro protective liners inside thick jute bags or vacuum boxes, locking moisture at a stable 11.0% to prevent maritime transit mold.'
      ),
      accent: t('Terlindungi GrainPro', 'GrainPro Protected')
    },
    {
      icon: <Zap className="w-5 h-5 stroke-[2]" />,
      title: t('Pengiriman Sampel Cepat', 'Rapid Sample Shipping'),
      desc: t(
        'Kami mengirimkan sampel biji kopi mentah (green bean) atau contoh hasil sangrai (200g - 350g) secara global dalam waktu 48 jam melalui DHL/FedEx, memberikan jaminan mutu sebelum finalisasi kontrak.',
        'We dispatch physical green bean or roasted coffee samples (200g - 350g) globally within 48 hours via DHL/FedEx, providing quality assurance before finalizing contracts.'
      ),
      accent: t('Sampel Express DHL', 'DHL Express Samples')
    },
    {
      icon: <Flame className="w-5 h-5 stroke-[2]" />,
      title: t('Logistik Perdagangan Mulus', 'Seamless Trade Logistics'),
      desc: t(
        'Kami menangani kepatuhan dokumen bea cukai ekspor secara lengkap. Setiap pengapalan disertai dengan sertifikat Fitosanitari terperinci, Surat Keterangan Asal (COO), tanda ICO resmi, dan laporan uji rasa.',
        'We handle export customs compliance comprehensively. Every shipment comes complete with detailed Phytosanitary certificates, Certificate of Origin (COO), official ICO marks, and cupping reports.'
      ),
      accent: t('Sesuai Ketentuan FOB & CIF', 'FOB & CIF Compliant')
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 md:py-32 bg-white border-t border-primary-green/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold block">
            {t('Infrastruktur Ekspor Kopi', 'Coffee Export Infrastructure')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
            {t('Pilar Utama', 'Key Pillars of')} <br />
            <span className="text-primary-green font-normal italic font-display">{t('Sourcing & Logistik Kopi Spesialti', 'Specialty Coffee Sourcing & Logistics')}</span>
          </h2>
          <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="bg-white hover:bg-light-green/20 border border-primary-green/10 p-8 rounded-[24px] shadow-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1.5 group relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Soft subtle visual glow in card corners */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-green/5 to-transparent rounded-full pointer-events-none group-hover:from-primary-green/10 transition-colors duration-500" />
              
              <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-between">
                
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-light-green text-primary-green group-hover:bg-primary-green group-hover:text-white rounded-xl transition-all duration-300 shrink-0">
                    {card.icon}
                  </div>
                  <span className="font-mono text-[10px] text-brand-gray/35">0{idx + 1}</span>
                </div>

                {/* Content */}
                <div className="space-y-2 mt-4">
                  <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold">
                    {card.accent}
                  </span>
                  
                  <h3 className="font-display text-lg text-brand-text font-bold group-hover:text-primary-green transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-brand-gray leading-relaxed pt-1">
                    {card.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
