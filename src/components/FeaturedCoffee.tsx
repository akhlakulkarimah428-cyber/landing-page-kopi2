import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, Phone, X, ArrowRight, 
  Search, SlidersHorizontal, Award, Compass, ChevronDown 
} from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturedCoffeeProps {
  isHomepageOnly?: boolean;
  onExploreFullCatalog?: () => void;
}

export default function FeaturedCoffee({ isHomepageOnly = false, onExploreFullCatalog }: FeaturedCoffeeProps = {}) {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Filter and Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoast, setSelectedRoast] = useState<'All' | 'Light' | 'Medium' | 'Dark'>('All');
  const [selectedProcess, setSelectedProcess] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<string>('featured');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Extract all unique processing methods for filter list
  const allProcesses = ['All', ...Array.from(new Set(products.map(p => p.process).filter(Boolean))) as string[]];

  // Filter & Search Logic
  const filteredProducts = products.filter((product) => {
    const nameToSearch = language === 'en' ? (product.nameEn || product.name) : product.name;
    const originToSearch = language === 'en' ? (product.originEn || product.origin) : product.origin;
    const notesToSearch = language === 'en' ? (product.flavorNotesEn || product.flavorNotes) : product.flavorNotes;

    const matchesSearch = 
      nameToSearch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      originToSearch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notesToSearch.some(note => note.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRoast = selectedRoast === 'All' || product.roastLevel === selectedRoast;
    const matchesProcess = selectedProcess === 'All' || product.process === selectedProcess;

    return matchesSearch && matchesRoast && matchesProcess;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'price-low') return a.price - b.price;
    if (selectedSort === 'price-high') return b.price - a.price;
    if (selectedSort === 'rating') return b.rating - a.rating;
    if (selectedSort === 'sca') return (b.scaScore || 0) - (a.scaScore || 0);
    return 0; // 'featured' or default
  });

  const displayProducts = isHomepageOnly ? products.slice(0, 3) : sortedProducts;

  const handleViewDetail = (product: Product) => {
    navigate('/product/' + product.id);
  };

  return (
    <section id="featured-coffee" className="py-24 md:py-32 bg-white relative">
      
      {/* Decorative Minimal Blur Background Graphics */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-light-green/40 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-light-green/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {isHomepageOnly ? (
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
              {t('Pilihan Unggulan', 'Featured Selection')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
              {t('Kopi Terbaik Indonesia', 'Indonesia\'s Finest Coffee')} <br />
              <span className="italic font-normal text-primary-green">{t('Langsung ke Roastery Anda', 'Straight to Your Roastery')}</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-brand-gray leading-relaxed max-w-xl mx-auto">
              {t(
                'Tiga varian single-origin pilihan — favorit mitra roastery global kami. Langsung dari kebun, disortir ketat, dan dikemas hermetis siap kirim.',
                'Three handpicked single-origin varieties — favorites among our global roastery partners. Straight from the farm, tightly sorted, hermetically sealed.'
              )}
            </p>
            <div className="w-12 h-[1.5px] bg-accent-gold mx-auto mt-6" />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="h-[1px] w-8 bg-accent-gold" />
                <span className="font-display text-[10px] uppercase tracking-[0.25em] text-accent-gold font-bold block">
                  {t('Katalog Ekspor Kopi', 'Coffee Export Catalog')}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-brand-text leading-tight font-extrabold tracking-tight">
                {t('Koleksi Pilihan', 'Curated Collection')} <br />
                <span className="italic font-normal text-primary-green">{t('Green Bean & Roasted', 'Green Bean & Roasted')}</span>
              </h2>
              <p className="font-sans text-xs md:text-sm text-brand-gray max-w-xl">
                {t(
                  'Lot mikro direct-trade dari koperasi petani terbaik Indonesia. Skor SCA 88+, sortasi tiga kali, kadar air stabil, dan dikemas hermetis — siap kirim ke roastery Anda.',
                  'Direct-trade micro-lots from Indonesia\'s finest grower cooperatives. SCA 88+, triple-sorted, stable moisture, hermetically packed — ready for your roastery.'
                )}
              </p>
            </div>
          </div>
        )}

        {/* Search & Comprehensive Filters Card */}
        {!isHomepageOnly && (
          <div className="bg-[#EAF5EF]/20 rounded-[24px] border border-primary-green/5 shadow-sm p-6 md:p-8 mb-12 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              
              {/* Search Input */}
              <div className="lg:col-span-5 relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray" />
                <input
                  type="text"
                  placeholder={t(
                    'Cari berdasarkan kebun, wilayah asal, proses pasca-panen, atau skor SCA...',
                    'Search by farm, origin, post-harvest process, or SCA score...'
                  )}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-primary-green/10 focus:border-primary-green focus:ring-1 focus:ring-primary-green rounded-[14px] pl-11 pr-4 py-3.5 text-xs font-sans text-[#202020] placeholder-brand-gray outline-none transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#202020]/50 hover:text-primary-green"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Roast Selection Filter */}
              <div className="lg:col-span-4 flex overflow-x-auto no-scrollbar gap-1.5 bg-white p-1.5 rounded-[14px] border border-primary-green/5">
                {(['All', 'Light', 'Medium', 'Dark'] as const).map((roast) => (
                  <button
                    key={roast}
                    onClick={() => setSelectedRoast(roast)}
                    className={`flex-1 min-w-[70px] text-center py-2.5 rounded-lg text-[10px] font-display font-bold uppercase tracking-wider transition-all ${
                      selectedRoast === roast
                        ? 'bg-primary-green text-white shadow-sm'
                        : 'text-brand-gray hover:text-primary-green hover:bg-light-green'
                    }`}
                  >
                    {roast === 'All' ? t('Semua Sangrai', 'All Roasts') : roast}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="lg:col-span-3 relative">
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" />
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full bg-white border border-primary-green/10 focus:border-primary-green rounded-[14px] px-4 py-3.5 text-xs font-sans text-[#202020] appearance-none outline-none cursor-pointer transition-all"
                >
                  <option value="featured">{t('Urutkan: Lot Utama', 'Sort: Featured Lots')}</option>
                  <option value="rating">{t('Urutkan: Rating Tertinggi', 'Sort: Highest Rating')}</option>
                  <option value="sca">{t('Urutkan: Skor Cupping SCA (88+)', 'Sort: SCA Score (88+)')}</option>
                  <option value="price-low">{t('Harga: Rendah ke Tinggi', 'Price: Low to High')}</option>
                  <option value="price-high">{t('Harga: Tinggi ke Rendah', 'Price: High to Low')}</option>
                </select>
              </div>
            </div>

            {/* Toggle Advanced Filters Button */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center space-x-2 text-xs font-display text-accent-gold hover:text-primary-green font-semibold transition-colors duration-200"
              >
                <SlidersHorizontal size={14} />
                <span>{showAdvancedFilters ? t('Sembunyikan Filter Lanjutan', 'Hide Advanced Filters') : t('Tampilkan Filter Lanjutan', 'Show Advanced Filters')}</span>
              </button>

              {/* Clear filters shortcut */}
              {(searchQuery || selectedRoast !== 'All' || selectedProcess !== 'All' || selectedSort !== 'featured') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRoast('All');
                    setSelectedProcess('All');
                    setSelectedSort('featured');
                  }}
                  className="text-xs text-red-500 hover:text-red-600 font-sans font-semibold transition-colors"
                >
                  {t('Hapus Semua Filter Aktif', 'Clear All Active Filters')}
                </button>
              )}
            </div>

            {/* Advanced Filters Expandable Drawer */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t border-t-primary-green/5 pt-5 mt-4"
              >
                <div className="space-y-4">
                  <div>
                    <span className="font-display text-[9px] font-bold uppercase tracking-wider text-brand-gray block mb-2">
                      {t('Saring Berdasarkan Metode Pengolahan Pasca-Panen', 'Filter by Post-Harvest Processing Method')}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {allProcesses.map((proc) => (
                        <button
                          key={proc}
                          onClick={() => setSelectedProcess(proc)}
                          className={`px-4 py-2 rounded-lg text-[10px] font-sans font-semibold transition-colors duration-300 ${
                            selectedProcess === proc
                              ? 'bg-accent-gold text-white shadow-sm'
                              : 'bg-white border border-primary-green/5 hover:border-primary-green/25 text-brand-gray hover:text-primary-green'
                          }`}
                        >
                          {proc === 'All' ? t('Semua Proses', 'All Processes') : proc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Dynamic Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[24px] border border-primary-green/5 p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#202020]/5 flex items-center justify-center mx-auto mb-4 text-accent-gold">
              <Search size={22} />
            </div>
            <h3 className="font-display text-lg font-bold text-brand-text mb-1">{t('Tidak Ada Lot Ekspor yang Cocok', 'No Matching Export Lots')}</h3>
            <p className="font-sans text-xs text-brand-gray leading-relaxed">
              {t(
                'Kami tidak menemukan kopi yang sesuai dengan kriteria pencarian Anda. Atur kembali filter proses atau tingkat sangrai Anda.',
                'We could not find any coffee matching your search criteria. Please adjust your processing or roast level filters.'
              )}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRoast('All');
                setSelectedProcess('All');
              }}
              className="mt-6 bg-primary-green hover:bg-accent-gold text-white px-6 py-3 rounded-full text-[10px] font-display uppercase tracking-widest font-bold transition-all"
            >
              {t('Reset Filter', 'Reset Filters')}
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className={`flex flex-wrap justify-center gap-8`}
          >
            <AnimatePresence mode="popLayout">
              {displayProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="bg-white rounded-[24px] border border-primary-green/10 overflow-hidden group shadow-luxury hover:shadow-luxury-hover transition-shadow duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full w-full sm:w-72 lg:w-80"
                >
                  
                  {/* Product Thumbnail container */}
                  <div className="relative aspect-[3/4] bg-[#F8F5F2] overflow-hidden">
                    <img
                      src={product.image}
                      alt={language === 'en' ? (product.nameEn || product.name) : product.name}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-[1.2s] ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge Roast Level */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-green text-white font-display text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                        {product.roastLevel} Roast
                      </span>
                    </div>

                    {/* SCA Score Badge */}
                    {product.scaScore && (
                      <div className="absolute top-4 right-4 bg-accent-gold/95 text-white px-2.5 py-1.5 rounded-full flex items-center space-x-1 shadow-sm font-display text-[9px] font-bold tracking-wider">
                        <Award size={11} />
                        <span>SCA {product.scaScore}</span>
                      </div>
                    )}

                    {/* Stock status badge */}
                    {product.stockStatus && product.stockStatus !== 'Available' && (
                      <div className="absolute bottom-4 left-4">
                        <span className={`font-display text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white ${
                          product.stockStatus === 'Limited' ? 'bg-amber-600' : 'bg-gray-500'
                        }`}>
                          {product.stockStatus === 'Limited' ? t('Terbatas', 'Limited') : t('Habis Dipesan', 'Sold Out')}
                        </span>
                      </div>
                    )}

                    {/* Overlays Hover Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <button
                        onClick={() => handleViewDetail(product)}
                        className="p-3.5 bg-white text-primary-green hover:bg-primary-green hover:text-white rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 cursor-pointer"
                        aria-label={t('Tampilkan detail produk', 'View product details')}
                      >
                        <Eye size={16} />
                      </button>
                      {product.stockStatus !== 'Sold Out' && (
                        <a
                          href={`https://wa.me/6281230860124?text=${encodeURIComponent(
                            language === 'en'
                              ? `Hello Nayaka Export Atelier, I am interested in *${product.nameEn || product.name}* (SCA Score: ${product.scaScore || 'N/A'}). Can I get more details?`
                              : `Halo Nayaka Export Atelier, saya tertarik dengan kopi *${product.name}* (Skor SCA: ${product.scaScore || 'N/A'}). Bisa mohon info lebih lanjut?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3.5 bg-accent-gold text-white hover:bg-primary-green rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 cursor-pointer flex items-center justify-center"
                          aria-label={t('Hubungi via WhatsApp', 'Contact via WhatsApp')}
                        >
                          <Phone size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Product Body Text */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-1 text-brand-gray font-display text-[9px] uppercase tracking-wider">
                        <Compass size={10} className="text-accent-gold" />
                        <span className="truncate">{language === 'en' ? (product.originEn || product.origin) : product.origin}</span>
                      </div>
                      
                      <h3 className="font-display text-lg text-brand-text font-bold leading-tight group-hover:text-primary-green transition-colors duration-300">
                        {language === 'en' ? (product.nameEn || product.name) : product.name}
                      </h3>

                      {product.process && (
                        <span className="inline-block text-[10px] font-display font-bold uppercase tracking-wider text-accent-gold bg-accent-gold/5 px-2 py-0.5 rounded">
                          {t('Proses', 'Process')} {language === 'en' ? (product.processEn || product.process) : product.process}
                        </span>
                      )}
                      
                      {/* B2B Technical Metadata */}
                      <div className="grid grid-cols-2 gap-y-1 gap-x-2 pt-2 text-[10px] text-brand-gray font-mono border-t border-primary-green/5">
                        {product.moisture && <div>{t('Kadar Air', 'Moisture')}: <span className="font-bold text-primary-green">{product.moisture}</span></div>}
                        {product.defectCount && <div className="truncate">{t('Cacat', 'Defects')}: <span className="font-bold text-primary-green">Grade 1</span></div>}
                        {product.bagType && <div className="col-span-2 truncate">{t('Kemasan', 'Packaging')}: <span className="font-bold text-[#202020]/80">{language === 'en' ? (product.bagTypeEn || product.bagType) : product.bagType}</span></div>}
                        {product.availableLots && <div className="col-span-2 truncate text-[9px]">{t('Stok', 'Stock')}: <span className="font-bold text-accent-gold">{language === 'en' ? (product.availableLotsEn || product.availableLots) : product.availableLots}</span></div>}
                      </div>
                    </div>

                    {/* Flavor Notes Tag list */}
                    <div className="flex flex-wrap gap-1">
                      {(language === 'en' ? (product.flavorNotesEn || product.flavorNotes) : product.flavorNotes).map((note, index) => (
                        <span
                          key={index}
                          className="bg-light-green/40 text-primary-green text-[9px] font-sans px-2 py-0.5 rounded"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-primary-green/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-display text-[9px] text-brand-gray uppercase tracking-widest leading-none mb-1">FOB / KG</span>
                        <span className="font-display text-lg font-bold text-primary-green leading-none">
                          Rp {(product.price * 16000).toLocaleString('id-ID')}
                        </span>
                      </div>
                      <button
                        onClick={() => handleViewDetail(product)}
                        className={`font-display text-[10px] uppercase tracking-wider font-bold flex items-center space-x-1.5 transition-colors duration-300 cursor-pointer ${
                          product.stockStatus === 'Sold Out'
                            ? 'text-brand-gray/35 cursor-not-allowed'
                            : 'text-accent-gold hover:text-primary-green'
                        }`}
                        disabled={product.stockStatus === 'Sold Out'}
                      >
                        <span>{product.stockStatus === 'Sold Out' ? t('Terpesan', 'Allocated') : t('Minta Sampel', 'Request Sample')}</span>
                        <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {isHomepageOnly && onExploreFullCatalog && (
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreFullCatalog}
              className="bg-primary-green hover:bg-accent-gold text-white font-display text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4.5 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300 inline-flex items-center space-x-3 cursor-pointer"
            >
              <span>{t('Jelajahi Seluruh Katalog Ekspor', 'Explore Full Export Catalog')}</span>
            </motion.button>
          </div>
        )}



      </div>
    </section>
  );
}
