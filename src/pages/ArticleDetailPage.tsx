import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Share2, X } from 'lucide-react';
import { articles } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [linkCopied, setLinkCopied] = useState(false);

  const article = articles.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const getArticleStory = () => {
    const stories: Record<string, { intro: string; p1: string; p2: string; p3: string }> = {
      a1: {
        intro: language === 'en'
          ? 'In a world that demands ceaseless speed, taking fifteen minutes to manually brew coffee is not a waste of time. It is a profound statement of self-care and mental presence.'
          : 'Dalam dunia yang menuntut akselerasi tanpa henti, menyisihkan waktu lima belas menit untuk menyeduh kopi secara manual bukanlah pemborosan waktu. Ini adalah pernyataan mendalam tentang kepedulian diri dan kesadaran mental.',
        p1: language === 'en'
          ? 'Modern science confirms that the tactile ritual of weighing, grinding, and pouring water is deeply meditative. When we focus entirely on the stream of water exiting the gooseneck kettle, we calm the amygdala—the brain\'s threat detector—and activate the parasympathetic nervous system.'
          : 'Sains modern menegaskan bahwa ritual taktil dalam menimbang, menggiling, dan menuangkan air sangatlah meditatif. Ketika kita fokus sepenuhnya pada aliran air yang keluar dari ketel leher angsa, kita menenangkan amygdala—pusat pendeteksi ancaman di otak—dan mengaktifkan sistem saraf parasimpatis.',
        p2: language === 'en'
          ? 'At Nayaka Export, we treat brewing not as a mechanical task of extraction, but as a culinary symphony. The paper filter acts as a canvas, the fresh coffee grounds are the composition, and the hot water is the dynamic force releasing locked aromatic compounds. Inhaling sweet jasmine steam and fresh peach notes during the 45-second bloom connects us deeply with nature and the generations of growers who spent months nurturing these seeds.'
          : 'Di Nayaka Export, kami memperlakukan penyeduhan bukan sebagai tugas ekstraksi mekanis, melainkan sebagai simfoni kuliner. Filter kertas bertindak sebagai kanvas, gilingan kopi segar adalah komposisi lagunya, dan air panas adalah kekuatan dinamis yang melepaskan senyawa aromatik yang terkunci. Menghirup uap melati manis dan aroma buah persik yang segar selama proses blooming 45 detik adalah cara terhubung mendalam dengan alam dan petani generasi yang menghabiskan waktu berbulan-bulan merawat benih ini.',
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
          ? 'Nayaka Export\'s Direct Trade model guarantees that 100% of our premium prices flow directly to the farmers themselves. We establish multi-year contracts independent of volatile C-market commodity indexes, paying up to 400% higher than globally recognized Fair Trade minimums. This structural fairness allows our partner farmers to invest in climate-friendly shade trees, drying beds, and clean water filtration systems.'
          : 'Model Perdagangan Langsung (Direct Trade) Nayaka Export menjamin bahwa 100% harga premium kami langsung mengalir kepada para petani itu sendiri. Kami menetapkan kontrak multi-tahun yang independen dari indeks komoditas C-market yang fluktuatif, membayar hingga 400% lebih tinggi dari harga minimum Fair Trade yang diakui secara global. Keadilan struktural ini memungkinkan petani mitra kami berinvestasi pada pohon pelindung yang ramah iklim, para-para jemur, dan filter pemurnian air bersih di pabrik mikro.',
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
    return stories[id || ''] || { intro: '', p1: '', p2: '', p3: '' };
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <h1 className="font-display text-2xl text-brand-text font-bold">
            {t('Artikel tidak ditemukan', 'Article not found')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary-green hover:text-accent-gold font-display text-sm underline cursor-pointer"
          >
            {t('Kembali ke beranda', 'Back to home')}
          </button>
        </div>
      </div>
    );
  }

  const story = getArticleStory();

  return (
    <div className="relative min-h-screen bg-white selection:bg-accent-gold/30 selection:text-primary-green antialiased flex flex-col justify-between">
      <div>
        <Header activeTab="" onNavClick={(sectionId) => navigate('/#' + sectionId)} onShopClick={() => navigate('/')} />

        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-brand-gray hover:text-primary-green font-display text-xs uppercase tracking-wider font-bold transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{t('Kembali ke Jurnal', 'Back to Journal')}</span>
            </button>

            {/* Article Card */}
            <div className="bg-white rounded-[24px] border border-primary-green/10 overflow-hidden shadow-luxury">
              
              {/* Header Actions */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md p-6 border-b border-primary-green/5 flex items-center justify-between z-20">
                <div className="flex items-center space-x-3 text-xs text-brand-gray font-display font-bold">
                  <span className="bg-primary-green text-white px-3 py-1 rounded-full uppercase tracking-wider text-[9px]">
                    {language === 'en' ? (article.categoryEn || article.category) : article.category}
                  </span>
                  <span>{language === 'en' ? (article.readTimeEn || article.readTime) : article.readTime}</span>
                </div>

                <div className="flex items-center space-x-2 relative">
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
                </div>
              </div>

              {/* Hero Feature Image */}
              <div className="relative w-full aspect-[21/9] bg-light-green/10">
                <img
                  src={article.image}
                  alt={language === 'en' ? (article.titleEn || article.title) : article.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white font-display text-[10px] tracking-widest uppercase font-bold">
                  {t('Diterbitkan: ', 'Published: ')}{language === 'en' ? (article.dateEn || article.date) : article.date}
                </div>
              </div>

              {/* Article Content Area */}
              <div className="p-8 md:p-12 space-y-8">
                
                {/* Article Title */}
                <h1 className="font-display text-3xl md:text-4xl text-brand-text font-extrabold leading-tight tracking-tight">
                  {language === 'en' ? (article.titleEn || article.title) : article.title}
                </h1>

                <div className="h-[1px] bg-primary-green/10" />

                {/* Body Text */}
                <div className="space-y-6 text-[#202020]/80 text-sm md:text-base font-sans leading-relaxed">
                  
                  <p className="font-display italic text-primary-green text-lg leading-relaxed relative border-l-2 border-accent-gold pl-4 font-semibold">
                    {story.intro}
                  </p>

                  <p>{story.p1}</p>

                  {/* Pull Quote block */}
                  <div className="bg-light-green/20 p-6 rounded-[24px] border-l-4 border-accent-gold my-8 space-y-2">
                    <span className="font-display text-3xl text-accent-gold font-bold block leading-none">{"\u201C"}</span>
                    <p className="font-display italic text-sm md:text-base text-primary-green mt-[-10px] leading-relaxed font-semibold">
                      {t(
                        'Kopi adalah rajutan sensoris yang ditenun melintasi gunung, awan, dan tetesan air yang perlahan. Kami tidak terburu-buru memanen; kami menghormati evolusi rasa yang tenang.',
                        'Coffee is a sensory tapestry woven across mountains, clouds, and slow water droplets. We do not rush the harvest; we respect the quiet evolution of flavor.'
                      )}
                    </p>
                    <span className="font-display text-[9px] uppercase tracking-widest text-brand-gray font-bold block text-right">
                      {t('\u2014 Ahli Sangrai Utama Nayaka Export', '\u2014 Master Roaster, Nayaka Export')}
                    </span>
                  </div>

                  <p>{story.p2}</p>

                  <p>{story.p3}</p>

                </div>
              </div>

              {/* Footer Signature */}
              <div className="bg-light-green/10 p-8 border-t border-primary-green/5 flex items-center justify-between text-xs text-brand-gray font-display font-bold">
                <span>&copy; 2026 Nayaka Export</span>
                <span>{t('Seri Kebun Kemitraan', 'Partnership Estate Series')}</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer onNavClick={(sectionId) => navigate('/#' + sectionId)} onShopClick={() => navigate('/')} />
    </div>
  );
}
