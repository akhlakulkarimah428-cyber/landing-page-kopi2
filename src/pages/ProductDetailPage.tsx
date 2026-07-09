import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Award, ShieldCheck, ArrowLeft } from 'lucide-react';
import { products } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="font-display text-2xl text-brand-text font-bold">
            {t('Produk tidak ditemukan', 'Product not found')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary-green hover:text-accent-gold font-display text-sm underline cursor-pointer"
          >
            {t('Kembali ke katalog', 'Back to catalog')}
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-accent-gold/30 selection:text-primary-green antialiased flex flex-col justify-between">
      <div>
        <Header activeTab="" onNavClick={(sectionId) => navigate('/#' + sectionId)} onShopClick={() => navigate('/')} />

        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-brand-gray hover:text-primary-green font-display text-xs uppercase tracking-wider font-bold transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{t('Kembali ke Katalog', 'Back to Catalog')}</span>
            </button>

            {/* Product Detail Card (adapted from modal) */}
            <div className="bg-white rounded-[24px] overflow-hidden max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 relative shadow-luxury border border-primary-green/10">
              {/* Left: Product Image */}
              <div className="md:col-span-5 relative bg-[#202020]/5 aspect-square md:aspect-auto md:min-h-[500px]">
                <img
                  src={product.image}
                  alt={language === 'en' ? (product.nameEn || product.name) : product.name}
                  className="w-full h-full object-cover absolute inset-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202020]/50 via-transparent to-transparent md:hidden" />

                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <span className="font-display text-[9px] uppercase tracking-widest text-accent-gold font-bold">
                    {language === 'en' ? (product.originEn || product.origin) : product.origin}
                  </span>
                  <h3 className="font-display text-xl font-bold">
                    {language === 'en' ? (product.nameEn || product.name) : product.name}
                  </h3>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="hidden md:block">
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold block mb-1">
                      {language === 'en' ? (product.originEn || product.origin) : product.origin}
                    </span>
                    <h3 className="font-display text-3xl text-brand-text font-extrabold leading-tight">
                      {language === 'en' ? (product.nameEn || product.name) : product.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="bg-primary-green text-white text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {product.roastLevel} Roast
                    </span>
                    {product.process && (
                      <span className="bg-accent-gold text-white text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                        {t('Proses', 'Process')} {language === 'en' ? (product.processEn || product.process) : product.process}
                      </span>
                    )}
                    {product.scaScore && (
                      <span className="bg-primary-green/10 text-primary-green text-[9px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center space-x-1">
                        <Award size={10} className="text-accent-gold" />
                        <span>SCA {product.scaScore}</span>
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed pt-2">
                    {language === 'en' ? (product.descriptionEn || product.description) : product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 bg-[#EAF5EF]/20 p-3.5 rounded-xl border border-primary-green/5 text-xs font-sans">
                    {product.elevation && (
                      <div>
                        <span className="text-brand-gray font-display text-[10px] block font-medium">{t('Ketinggian Kebun', 'Farm Elevation')}</span>
                        <span className="font-semibold text-brand-text">{product.elevation}</span>
                      </div>
                    )}
                    {product.process && (
                      <div>
                        <span className="text-brand-gray font-display text-[10px] block font-medium">{t('Pengolahan', 'Processing Method')}</span>
                        <span className="font-semibold text-brand-text">{language === 'en' ? (product.processEn || product.process) : product.process}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <span className="font-display text-[10px] uppercase tracking-wider text-[#202020]/50 font-bold block">
                    {t('Profil Rasa & Karakter Cangkir', 'Flavor Profile & Cup Characteristics')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(language === 'en' ? (product.flavorNotesEn || product.flavorNotes) : product.flavorNotes).map((note) => (
                      <span
                        key={note}
                        className="bg-accent-gold/10 text-accent-gold font-display font-bold text-xs px-3.5 py-1 rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-green/10 space-y-4">
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-primary-green/5 space-y-2 text-xs text-brand-gray">
                    <p className="font-display text-[10px] uppercase tracking-wider text-[#202020] font-bold">
                      {t('Informasi Ekspor & Sourcing', 'Export & Sourcing Information')}
                    </p>
                    <p className="leading-relaxed font-sans">
                      {t(
                        'Semua lot ekspor kami dikirimkan ke seluruh dunia dalam kemasan hermetis (GrainPro/Vakum). Silakan hubungi kami langsung via WhatsApp untuk mendiskusikan kebutuhan volume, penawaran harga, profil sangrai, atau pengiriman sampel resmi ke laboratorium roastery Anda.',
                        'All our export lots are shipped worldwide in hermetic packaging (GrainPro/Vacuum). Please contact us directly via WhatsApp to discuss volume requirements, price quotes, roast profiles, or to arrange official sample shipments to your roastery lab.'
                      )}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/6281230860124?text=${encodeURIComponent(
                      language === 'en'
                        ? `Hello Nayaka Export Atelier, I am interested in *${product.nameEn || product.name}* (SCA Score: ${product.scaScore || 'N/A'}). Could I get more details on ordering or export samples?`
                        : `Halo Nayaka Export Atelier, saya tertarik dengan kopi *${product.name}* (Skor SCA: ${product.scaScore || 'N/A'}). Bisa mohon info lebih lanjut untuk pemesanan/sampel ekspor?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary-green hover:bg-accent-gold text-white py-4 rounded-xl text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center space-x-2.5 hover:shadow-lg text-center"
                  >
                    <Phone size={14} />
                    <span>{t('Hubungi via WhatsApp', 'Contact via WhatsApp')}</span>
                  </a>
                </div>

                <div className="flex items-center space-x-2 text-brand-gray justify-center">
                  <ShieldCheck size={12} className="text-primary-green" />
                  <span className="font-display text-[9px] uppercase tracking-wider font-semibold">
                    {t('Jaminan Mutu Sensoris & Pengiriman Karbon Netral', 'Sensory Quality Guarantee & Carbon Neutral Shipping')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer onNavClick={(sectionId) => navigate('/#' + sectionId)} onShopClick={() => navigate('/')} />
    </div>
  );
}
