import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Clock, X, Heart, MessageSquare, Share2 } from 'lucide-react';
import { articles } from '../data';
import { Article } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export default function Articles() {
  const { t, language } = useLanguage();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const [linkCopied, setLinkCopied] = useState(false);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (isLiked[id] ? -1 : 1),
    }));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 2000);
  };

  // Pre-compiled high-end content stories for each article id in both Indonesian and English
  const getArticleStory = (id: string) => {
    const stories: Record<string, { intro: string; p1: string; p2: string; p3: string }> = {
      a1: {
        intro: language === 'en'
          ? 'In a world that demands ceaseless speed, taking fifteen minutes to manually brew coffee is not a waste of time. It is a profound statement of self-care and mental presence.'
          : 'Dalam dunia yang menuntut akselerasi tanpa henti, menyisihkan waktu lima belas menit untuk menyeduh kopi secara manual bukanlah pemborosan waktu. Ini adalah pernyataan mendalam tentang kepedulian diri dan kesadaran mental.',
        p1: language === 'en'
          ? 'Modern science confirms that the tactile ritual of weighing, grinding, and pouring water is deeply meditative. When we focus entirely on the stream of water exiting the gooseneck kettle, we calm the amygdala—the brain\'s threat detector—and activate the parasympathetic nervous system.'
          : 'Sains modern menegaskan bahwa ritual taktil dalam menimbang, menggiling, dan menuangkan air sangatlah meditatif. Ketika kita fokus sepenuhnya pada aliran air yang keluar dari ketel leher angsa, kita menenangkan amygdala—pusat pendeteksi ancaman di otak—dan mengaktifkan sistem saraf parasimpatis.',
        p2: language === 'en'
<<<<<<< HEAD
          ? 'At Nayaka Export, we treat brewing not as a mechanical task of extraction, but as a culinary symphony. The paper filter acts as a canvas, the fresh coffee grounds are the composition, and the hot water is the dynamic force releasing locked aromatic compounds. Inhaling sweet jasmine steam and fresh peach notes during the 45-second bloom connects us deeply with nature and the generations of growers who spent months nurturing these seeds.'
          : 'Di Nayaka Export, kami memperlakukan penyeduhan bukan sebagai tugas ekstraksi mekanis, melainkan sebagai simfoni kuliner. Filter kertas bertindak sebagai kanvas, gilingan kopi segar adalah komposisi lagunya, dan air panas adalah kekuatan dinamis yang melepaskan senyawa aromatik yang terkunci. Menghirup uap melati manis dan aroma buah persik yang segar selama proses blooming 45 detik adalah cara terhubung mendalam dengan alam dan petani generasi yang menghabiskan waktu berbulan-bulan merawat benih ini.',
=======
          ? 'At Kaffa Export, we treat brewing not as a mechanical task of extraction, but as a culinary symphony. The paper filter acts as a canvas, the fresh coffee grounds are the composition, and the hot water is the dynamic force releasing locked aromatic compounds. Inhaling sweet jasmine steam and fresh peach notes during the 45-second bloom connects us deeply with nature and the generations of growers who spent months nurturing these seeds.'
          : 'Di Kaffa Export, kami memperlakukan penyeduhan bukan sebagai tugas ekstraksi mekanis, melainkan sebagai simfoni kuliner. Filter kertas bertindak sebagai kanvas, gilingan kopi segar adalah komposisi lagunya, dan air panas adalah kekuatan dinamis yang melepaskan senyawa aromatik yang terkunci. Menghirup uap melati manis dan aroma buah persik yang segar selama proses blooming 45 detik adalah cara terhubung mendalam dengan alam dan petani generasi yang menghabiskan waktu berbulan-bulan merawat benih ini.',
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
        p3: language === 'en'
          ? 'To practice this ritual at home, start by silencing all notifications. Grind your coffee beans manually, feeling the resistance of the seeds fracturing into powder, and pour water in a continuous, calming spiral. Watch the dark coffee oils bubble to the surface. Sip slowly, tasting how the flavors evolve as the cup cools.'
          : 'Untuk menerapkan ritual ini di rumah Anda, mulailah dengan mematikan semua notifikasi. Giling biji kopi Anda secara manual, rasakan hambatan benih yang hancur menjadi bubuk, dan tuangkan air dalam spiral yang berkelanjutan dan menenangkan. Saksikan minyak kopi gelap menggelembung ke permukaan. Minum secara perlahan, rasakan bagaimana rasa berkembang seiring cup mendingin.'
      },
      a2: {
        intro: language === 'en'
          ? 'Direct trade is often used as an industry marketing catchphrase, but on the steep volcanic slopes of Sumatra and Kintamani, it represents the primary pillar of environmental and human sustainability.'
          : 'Direct trade (perdagangan langsung) sering digunakan sebagai istilah pemasaran industri, tetapi di lereng vulkanis yang curam di Sumatra dan Kintamani, ini mewakili pilar terpenting keberlanjutan lingkungan dan kemanusiaan.',
        p1: language === 'en'
          ? 'For generations, smallholder coffee growers have been at the mercy of traditional middle-men who depress purchase prices to maximize wholesale exporter profits. When commodity indexes plunge, grower families often operate at a net loss, unable to afford organic fertilizers or basic farm labor.'
          : 'Selama beberapa generasi, petani kopi kecil berada di bawah belas kasihan makelar tradisional yang menekan harga beli untuk memaksimalkan keuntungan eksportir grosir. Ketika indeks komoditas anjlok, keluarga petani sering kali mengalami kerugian bersih, bahkan tidak mampu membeli pupuk organik atau membiayai tenaga kerja perkebunan dasar.',
        p2: language === 'en'
<<<<<<< HEAD
          ? 'Nayaka Export\'s Direct Trade model guarantees that 100% of our premium prices flow directly to the farmers themselves. We establish multi-year contracts independent of volatile C-market commodity indexes, paying up to 400% higher than globally recognized Fair Trade minimums. This structural fairness allows our partner farmers to invest in climate-friendly shade trees, drying beds, and clean water filtration systems.'
          : 'Model Perdagangan Langsung (Direct Trade) Nayaka Export menjamin bahwa 100% harga premium kami langsung mengalir kepada para petani itu sendiri. Kami menetapkan kontrak multi-tahun yang independen dari indeks komoditas C-market yang fluktuatif, membayar hingga 400% lebih tinggi dari harga minimum Fair Trade yang diakui secara global. Keadilan struktural ini memungkinkan petani mitra kami berinvestasi pada pohon pelindung yang ramah iklim, para-para jemur, dan filter pemurnian air bersih di pabrik mikro.',
=======
          ? 'Kaffa Export\'s Direct Trade model guarantees that 100% of our premium prices flow directly to the farmers themselves. We establish multi-year contracts independent of volatile C-market commodity indexes, paying up to 400% higher than globally recognized Fair Trade minimums. This structural fairness allows our partner farmers to invest in climate-friendly shade trees, drying beds, and clean water filtration systems.'
          : 'Model Perdagangan Langsung (Direct Trade) Kaffa Export menjamin bahwa 100% harga premium kami langsung mengalir kepada para petani itu sendiri. Kami menetapkan kontrak multi-tahun yang independen dari indeks komoditas C-market yang fluktuatif, membayar hingga 400% lebih tinggi dari harga minimum Fair Trade yang diakui secara global. Keadilan struktural ini memungkinkan petani mitra kami berinvestasi pada pohon pelindung yang ramah iklim, para-para jemur, dan filter pemurnian air bersih di pabrik mikro.',
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
        p3: language === 'en'
          ? 'By visiting our partner estates several times throughout seasonal cycles, we co-develop farming guidelines that protect local aquifers. This ensures that every cup of coffee you brew helps preserve clean mountain rivers, cloud forest habitats, and stable generational prosperity for hundreds of farming families.'
          : 'Dengan mengunjungi perkebunan mitra kami beberapa kali selama siklus musiman, kami bersama-sama mengembangkan panduan pertanian yang melindungi akuifer hutan setempat. Ini memastikan bahwa setiap cangkir kopi yang Anda seduh turut melestarikan aliran sungai pegunungan yang bersih, hutan kabut yang terjaga, dan kemakmuran generasi yang stabil bagi ratusan keluarga petani.'
      },
      a3: {
        intro: language === 'en'
          ? 'Water makes up exactly 98% of your brewed cup of coffee. If you use ordinary tap water or over-purified reverse osmosis water, you are leaving more than half of your coffee\'s flavor potential locked inside the grounds.'
          : 'Air menyusun tepat 98% dari cangkir kopi seduhan Anda. Jika Anda menggunakan air keran biasa atau air osmosis terbalik yang terlalu murni, Anda membiarkan lebih dari separuh potensi rasa kopi Anda terkunci di dalam bubuk kopi.',
        p1: language === 'en'
          ? 'Water chemistry determines which volatile compounds are extracted from the ground beans and which are left behind. Specifically, we look at the balance of calcium, magnesium, and buffer alkalinity capacity. Calcium binds to sweet roasted and caramel oils, easing their translation into the cup. Magnesium acts as a chemical hook that pulls out delicate tropical fruit acids and floral aromatics.'
          : 'Kimia air menentukan senyawa volatil mana yang diekstraksi dari biji yang digiling dan mana yang tertinggal. Secara khusus, kami melihat keseimbangan kalsium, magnesium, dan kapasitas penyangga alkalinitas. Kalsium mengikat minyak panggang yang manis dan karamel, memudahkan penerjemahannya ke dalam cangkir. Magnesium bertindak sebagai pengikat kimia yang mengeluarkan asam buah tropis dan aromatik floral yang halus.',
        p2: language === 'en'
          ? 'However, too much mineral content (hard water) will yield a chalky, flat, or muddy mouthfeel, destroying bright acidity. Conversely, pure distilled water or water with no mineral content at all lacks the ionic hooks needed to pull organic compounds, leaving your brew tasting overly sour, thin, and empty.'
          : 'Namun, terlalu banyak kandungan mineral (air sadah) akan menghasilkan rasa di mulut yang berkapur, datar, atau berlumpur, merusak keasaman yang cerah. Sebaliknya, air suling murni atau air tanpa mineral sama sekali tidak memiliki pengikat ionik yang dibutuhkan untuk menarik senyawa organik, meninggalkan hasil seduhan Anda terasa sangat asam, tipis, dan hambar.',
        p3: language === 'en'
          ? 'To fix this, we recommend a total dissolved solids (TDS) target between 120-150ppm. You can easily achieve this by using a high-quality carbon filter pitcher, or by adding specialty coffee mineral packets to pure distilled water. The flavor difference will amaze you: your coffee will instantly bloom with sweet bergamot and jasmine clarity.'
          : 'Untuk mengatasinya, kami menyarankan kadar mineral total (TDS) berkisar antara 120-150ppm. Anda dapat dengan mudah mencapainya dengan menggunakan teko filter karbon berkualitas tinggi, atau dengan menambahkan paket mineral khusus kopi spesialti ke dalam air suling murni. Perbedaan rasanya akan memukau Anda: seketika kopi Anda akan mekar dengan kejelasan rasa buah bergamot dan melati yang manis.'
      }
    };
    return stories[id] || { intro: '', p1: '', p2: '', p3: '' };
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
<<<<<<< HEAD
            {t('Kabar Nayaka Export', 'Nayaka Export News')}
=======
            {t('Kabar Kaffa Export', 'Kaffa Export News')}
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
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
                onClick={() => setActiveArticle(article)}
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

        {/* Full Screen Reading Overlay Drawer */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#1F1F1F]/70 flex items-stretch justify-end backdrop-blur-md"
            >
              
              {/* Semi-transparent backdrop close click */}
              <div className="absolute inset-0" onClick={() => setActiveArticle(null)} />

              {/* Side Reading Sheet */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 200 }}
                className="relative bg-white w-full max-w-2xl h-full shadow-2xl z-10 overflow-y-auto border-l border-primary-green/10 flex flex-col"
              >
                
                {/* Header Actions */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-md p-6 border-b border-primary-green/5 flex items-center justify-between z-20">
                  <div className="flex items-center space-x-3 text-xs text-brand-gray font-display font-bold">
                    <span className="bg-primary-green text-white px-3 py-1 rounded-full uppercase tracking-wider text-[9px]">
                      {language === 'en' ? (activeArticle.categoryEn || activeArticle.category) : activeArticle.category}
                    </span>
                    <span>{language === 'en' ? (activeArticle.readTimeEn || activeArticle.readTime) : activeArticle.readTime}</span>
                  </div>

                  <div className="flex items-center space-x-2 relative">
                    {/* Copy Feedback Toast */}
                    <AnimatePresence>
                      {linkCopied && (
                        <motion.span
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute -left-28 top-2 bg-primary-green text-white text-[10px] px-2.5 py-1 rounded shadow-md font-sans"
                        >
                          {t('Tautan disalin!', 'Link copied!')}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={handleShare}
                      className="p-2.5 text-primary-green/60 hover:text-primary-green hover:bg-light-green/40 rounded-full transition-all cursor-pointer"
                      title={t('Salin tautan bagikan', 'Copy share link')}
                    >
                      <Share2 size={16} />
                    </button>
                    <button
                      onClick={() => setActiveArticle(null)}
                      className="bg-light-green text-primary-green hover:bg-primary-green hover:text-white p-2.5 rounded-full transition-colors duration-300 cursor-pointer"
                      aria-label={t('Tutup jurnal', 'Close journal')}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Hero Feature Image Inside Sheet */}
                <div className="relative w-full aspect-[21/9] bg-light-green/10">
                  <img
                    src={activeArticle.image}
                    alt={language === 'en' ? (activeArticle.titleEn || activeArticle.title) : activeArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white font-display text-[10px] tracking-widest uppercase font-bold">
                    {t('Diterbitkan: ', 'Published: ')}{language === 'en' ? (activeArticle.dateEn || activeArticle.date) : activeArticle.date}
                  </div>
                </div>

                {/* Article Content Area */}
                <div className="p-8 md:p-12 space-y-8 flex-1">
                  
                  {/* Article Title */}
                  <h1 className="font-display text-3xl md:text-4xl text-brand-text font-extrabold leading-tight tracking-tight">
                    {language === 'en' ? (activeArticle.titleEn || activeArticle.title) : activeArticle.title}
                  </h1>

                  <div className="h-[1px] bg-primary-green/10" />

                  {/* Body Text */}
                  <div className="space-y-6 text-[#202020]/80 text-sm md:text-base font-sans leading-relaxed">
                    
                    {/* Elegant Intro paragraph with left accent gold border */}
                    <p className="font-display italic text-primary-green text-lg leading-relaxed relative border-l-2 border-accent-gold pl-4 font-semibold">
                      {getArticleStory(activeArticle.id).intro}
                    </p>

                    <p>
                      {getArticleStory(activeArticle.id).p1}
                    </p>

                    {/* Pull Quote block */}
                    <div className="bg-light-green/20 p-6 rounded-[24px] border-l-4 border-accent-gold my-8 space-y-2">
                      <span className="font-display text-3xl text-accent-gold font-bold block leading-none">“</span>
                      <p className="font-display italic text-sm md:text-base text-primary-green mt-[-10px] leading-relaxed font-semibold">
                        {t(
                          'Kopi adalah rajutan sensoris yang ditenun melintasi gunung, awan, dan tetesan air yang perlahan. Kami tidak terburu-buru memanen; kami menghormati evolusi rasa yang tenang.',
                          'Coffee is a sensory tapestry woven across mountains, clouds, and slow water droplets. We do not rush the harvest; we respect the quiet evolution of flavor.'
                        )}
                      </p>
                      <span className="font-display text-[9px] uppercase tracking-widest text-brand-gray font-bold block text-right">
<<<<<<< HEAD
                        {t('— Ahli Sangrai Utama Nayaka Export', '— Master Roaster, Nayaka Export')}
=======
                        {t('— Ahli Sangrai Utama Kaffa Export', '— Master Roaster, Kaffa Export')}
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
                      </span>
                    </div>

                    <p>
                      {getArticleStory(activeArticle.id).p2}
                    </p>

                    <p>
                      {getArticleStory(activeArticle.id).p3}
                    </p>

                  </div>

                </div>

                {/* Footer Signature Inside Sheet */}
                <div className="bg-light-green/10 p-8 border-t border-primary-green/5 flex items-center justify-between text-xs text-brand-gray font-display font-bold mt-auto">
<<<<<<< HEAD
                  <span>© 2026 Nayaka Export</span>
=======
                  <span>© 2026 Kaffa Export</span>
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
                  <span>{t('Seri Kebun Kemitraan', 'Partnership Estate Series')}</span>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
