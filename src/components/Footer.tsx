import { Instagram, Facebook, Compass, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onShopClick: () => void;
}

export default function Footer({ onNavClick, onShopClick }: FooterProps) {
  const { t } = useLanguage();

  const links = [
    { name: t('Beranda', 'Home'), id: 'home' },
    { name: t('Koleksi Kopi', 'Coffee Catalog'), id: 'featured-coffee' },
    { name: t('Tentang Kami', 'About Us'), id: 'brand-story' },
    { name: t('Jurnal Edukasi', 'Educational Journal'), id: 'articles' },
    { name: t('FAQ', 'FAQ'), id: 'faq' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#1F1F1F] text-[#F8F5F2] pt-20 pb-12 border-t border-primary-green/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(199,167,108,0.03),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavClick('home');
            }}
            className="flex flex-col items-start select-none group"
          >
            <span className="font-display text-2xl font-black tracking-widest text-white uppercase leading-none group-hover:text-accent-gold transition-colors duration-300">
              Nayaka
            </span>
            <span className="font-display text-[10px] font-bold tracking-[0.25em] text-accent-gold uppercase leading-none mt-1">
              Export Atelier
            </span>
          </a>

          <p className="font-sans text-xs md:text-sm text-white/50 leading-relaxed max-w-sm">
            {t(
              'Nayaka Export Atelier adalah eksportir utama biji kopi hijau (green bean) spesialti Indonesia. Kami menghubungkan koperasi tani elit di dataran tinggi vulkanis dengan para penyangrai (roastery) dan importir global melalui kemitraan perdagangan langsung (direct trade) yang adil dan transparan.',
              'Nayaka Export Atelier is a premier exporter of specialty Indonesian green coffee beans. We bridge elite farming cooperatives in high-altitude volcanic terroirs with global roasters and importers through fair, transparent direct trade partnerships.'
            )}
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3.5 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-gold hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
              aria-label="Instagram Profile"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-gold hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
              aria-label="Facebook Profile"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-gold hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
              aria-label="TikTok Profile"
            >
              <span className="font-display text-[9px] font-bold">d</span>
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-widest text-accent-gold font-bold">
            {t('Navigasi', 'Navigation')}
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.id);
                  }}
                  className="font-sans text-xs text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations and Coffee Series Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-widest text-accent-gold font-bold">
            {t('Lot Kopi Unggulan', 'Featured Coffee Lots')}
          </h4>
          <ul className="space-y-3">
            <li>
              <button
                onClick={onShopClick}
                className="font-sans text-xs text-white/60 hover:text-white text-left transition-colors cursor-pointer"
              >
                Gayo Mountain Anaerobic Natural
              </button>
            </li>
            <li>
              <button
                onClick={onShopClick}
                className="font-sans text-xs text-white/60 hover:text-white text-left transition-colors cursor-pointer"
              >
                Toraja Sapan Wet-Hulled G1
              </button>
            </li>
            <li>
              <button
                onClick={onShopClick}
                className="font-sans text-xs text-white/60 hover:text-white text-left transition-colors cursor-pointer"
              >
                Kerinci Washed Specialty Lot
              </button>
            </li>
            <li>
              <button
                onClick={onShopClick}
                className="font-sans text-xs text-white/60 hover:text-white text-left transition-colors cursor-pointer"
              >
                Bali Kintamani Honey Micro-lot
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Coordinates Column */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-display text-[10px] uppercase tracking-widest text-accent-gold font-bold">
            {t('Kontak & Alamat', 'Contact & Address')}
          </h4>
          <ul className="space-y-3.5 text-white/60 font-sans text-xs">
            <li className="flex items-start space-x-3">
              <MapPin size={14} className="text-accent-gold shrink-0 mt-0.5" />
              <span>
                {t('Nayaka Export Atelier Lab,', 'Nayaka Export Atelier Lab,')} <br />
                {t('Perum Kembang Permai, Bondowoso, Jawa Timur, Indonesia')}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={14} className="text-accent-gold shrink-0" />
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  t(
                    'Halo Nayaka Export Atelier, saya tertarik dengan kopi ekspor Anda. Bisa berdiskusi lebih lanjut?',
                    'Hello Nayaka Export Atelier, I am interested in your export coffee. Can we discuss further?'
                  )
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                +62 812-3456-7890 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={14} className="text-accent-gold shrink-0" />
              <a href="mailto:export@nayaka-atelier.com" className="hover:text-white transition-colors">
                export@nayaka-atelier.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Compass size={14} className="text-accent-gold shrink-0" />
              <span className="font-display text-[10px] font-bold">2.1893° N, 99.0712° E ({t('Terroir Danau Toba', 'Lake Toba Terroir')})</span>
            </liSumatra>
          </ul>
        </div>

      </div>

      {/* Copyright Footer credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F8F5F2]/45 font-display text-[10px] uppercase tracking-wider relative z-10 font-bold">
        <p>{t('© 2026 Nayaka Export Atelier. Hak Cipta Dilindungi. Bersertifikat Spesialti SCA.', '© 2026 Nayaka Export Atelier. All Rights Reserved. SCA Specialty Certified.')}</p>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-white transition-colors">{t('Kebijakan Privasi', 'Privacy Policy')}</a>
          <a href="#home" className="hover:text-white transition-colors">{t('Syarat & Ketentuan', 'Terms & Conditions')}</a>
          <a href="#home" className="hover:text-white transition-colors">{t('Sertifikasi Direct Trade', 'Direct Trade Certification')}</a>
        </div>
      </div>
    </footer>
  );
}
