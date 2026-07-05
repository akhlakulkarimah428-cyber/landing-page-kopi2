import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedCoffee from './components/FeaturedCoffee';
import CoffeeJourney from './components/CoffeeJourney';
import BrewingGuide from './components/BrewingGuide';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { t } = useLanguage();
  
  // Tab Navigation Handler with top-scroll behavior
  const handleNavClick = (sectionId: string) => {
    setActiveTab(sectionId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShopNowClick = () => {
    handleNavClick('featured-coffee');
  };

  // Setup visual analytics console message for fun branding
  useEffect(() => {
    console.log(
<<<<<<< HEAD
      '%c NAYAKA ATELIER %c Sown in volcanic mist, harvested with reverence.',
=======
      '%c KAFFA ATELIER %c Sown in volcanic mist, harvested with reverence.',
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
      'background: #2F5D50; color: #C7A76C; padding: 6px 12px; font-weight: bold; font-family: serif; font-size: 14px; border-radius: 4px;',
      'background: #EAF5EF; color: #202020; padding: 6px 12px; font-family: sans-serif; font-size: 12px;'
    );
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.25 } }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-accent-gold/30 selection:text-primary-green antialiased flex flex-col justify-between">
      
      <div>
        {/* 1. Sticky Navigation Header */}
        <Header activeTab={activeTab} onNavClick={handleNavClick} onShopClick={handleShopNowClick} />

        {/* Main Sections with animated transition */}
        <main className="pt-20">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* 1. Hero Section */}
                <Hero onShopClick={handleShopNowClick} />

                {/* 2. Company Highlights (BrandStory) */}
                <BrandStory />

                {/* 3. Featured Coffee (Homepage View with 3 Products) */}
                <FeaturedCoffee isHomepageOnly={true} onExploreFullCatalog={handleShopNowClick} />

                {/* 4. Why Choose Us (Four luxury cards) */}
                <WhyChooseUs />

                {/* 5. Coffee Journey (Multi-stage Processing & Logistics) */}
                <CoffeeJourney />

                {/* 6. Testimonials (3D Card Carousel) */}
                <Testimonials />

                {/* 7. Latest Articles (Company Journal) */}
                <Articles />

                {/* 8. Elegant Final CTA */}
                <FinalCTA onShopClick={handleShopNowClick} />
              </motion.div>
            )}

            {activeTab === 'featured-coffee' && (
              <motion.div
                key="featured-coffee"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Featured Coffee (Interactive micro-lots boutique with Detail Modal) */}
                <FeaturedCoffee />

                {/* Brewing Guide (Instructional sensory workspace) */}
                <BrewingGuide />
              </motion.div>
            )}

            {activeTab === 'brand-story' && (
              <motion.div
                key="brand-story"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Brand Story with Stats */}
                <BrandStory />

                {/* Coffee Journey (Vertical alternating timeline) */}
                <CoffeeJourney />

                {/* Gallery (Pinterest masonry with full screen interactive Lightbox) */}
                <Gallery />
              </motion.div>
            )}

            {activeTab === 'articles' && (
              <motion.div
                key="articles"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Articles (Editorial cards with slide-out full reading sheet) */}
                <Articles />
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                key="faq"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* FAQ (Modern animated collapsible accordion) */}
                <FAQ />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* 13. Footer Section */}
      <Footer onNavClick={handleNavClick} onShopClick={handleShopNowClick} />

      {/* 14. Sticky CTA on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="md:hidden fixed bottom-6 left-6 right-6 z-40"
      >
        <a
          href={`https://wa.me/6281234567890?text=${encodeURIComponent(
            t(
<<<<<<< HEAD
              'Halo Nayaka Export Atelier, saya tertarik dengan kopi ekspor Anda. Bisa berdiskusi lebih lanjut?',
              'Hello Nayaka Export Atelier, I am interested in your export coffee. Can we discuss further?'
=======
              'Halo Kaffa Export Atelier, saya tertarik dengan kopi ekspor Anda. Bisa berdiskusi lebih lanjut?',
              'Hello Kaffa Export Atelier, I am interested in your export coffee. Can we discuss further?'
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
            )
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary-green/95 backdrop-blur-md text-white py-4 px-6 rounded-full border border-white/10 shadow-2xl flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer"
        >
          <div className="flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-full bg-accent-gold flex items-center justify-center text-white">
              <Phone size={15} />
            </div>
            <div>
<<<<<<< HEAD
              <p className="font-display text-[11px] font-bold tracking-wide text-accent-gold uppercase">Nayaka Atelier</p>
=======
              <p className="font-display text-[11px] font-bold tracking-wide text-accent-gold uppercase">Kaffa Atelier</p>
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
              <p className="font-sans text-[11px] font-semibold text-white/85">{t('Hubungi via WhatsApp', 'Contact via WhatsApp')}</p>
            </div>
          </div>
          <span className="font-display text-xs uppercase tracking-widest text-accent-gold font-bold">
            {t('Kontak →', 'Contact →')}
          </span>
        </a>
      </motion.div>

    </div>
  );
}
