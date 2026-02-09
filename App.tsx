import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ContentDeck from './components/ContentDeck';
import Gallery from './components/Gallery';
import ThankYou from './components/ThankYou';
import LoadingScreen from './components/LoadingScreen';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // 2.2 seconds to allow the progress bar to complete
    return () => clearTimeout(timer);
  }, []);

  // Simple hash router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (Object.values(Page).includes(hash as Page)) {
        setActivePage(hash as Page);
      } else {
        setActivePage(Page.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-purple selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation activePage={activePage} onNavigate={navigateTo} />

            <AnimatePresence mode="wait">
              {activePage === Page.HOME ? (
                <motion.main
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                  <About />
                  <Skills />
                  <ContentDeck onNavigate={navigateTo} />
                  <ThankYou />
                  
                  {/* Footer */}
                  <footer className="py-6 text-center text-gray-600 text-xs border-t border-white/5">
                     © 2026 Antariksh Biswas (Baban). All rights reserved.
                  </footer>
                </motion.main>
              ) : (
                <motion.main
                  key="gallery"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Gallery page={activePage} onBack={() => navigateTo(Page.HOME)} />
                </motion.main>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;