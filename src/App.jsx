import React, { useState, useEffect } from 'react';
import { StoreProvider } from './context/StoreContext.jsx';
import { TopBar } from './components/TopBar.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { QuickInquiryModal } from './components/QuickInquiryModal.jsx';
import { NavigationModals } from './components/NavigationModals.jsx';
import { HomeView } from './views/HomeView.jsx';
import { WomenView } from './views/WomenView.jsx';
import { MenView } from './views/MenView.jsx';
import { KidsView } from './views/KidsView.jsx';
import { CosmeticsView } from './views/CosmeticsView.jsx';
import { ContactView } from './views/ContactView.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Initialize page from URL pathname or hash
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase().replace(/^\//, '');
      const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
      const target = hash || path;

      if (target === 'women') setCurrentPage('women');
      else if (target === 'men') setCurrentPage('men');
      else if (target === 'kids') setCurrentPage('kids');
      else if (target === 'cosmetics') setCurrentPage('cosmetics');
      else if (target === 'contact' || target === 'visit-us') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Update dynamic page SEO title based on selected category
  useEffect(() => {
    switch (currentPage) {
      case 'women':
        document.title = "Women's Festive Kurtis & Bridal Lehengas — Bansals Apparel Bhajanpura";
        break;
      case 'men':
        document.title = "Men's Readymade Garments & Kurtas near Tukhmirpur — Bansals Apparel";
        break;
      case 'kids':
        document.title = 'Kids Clothing Shop Northeast Delhi (0-14 Yrs) — Bansals Apparel';
        break;
      case 'cosmetics':
        document.title = 'Cosmetics, Bangles & Ethnic Accessories — Bansals Apparel Bhajanpura';
        break;
      case 'contact':
        document.title = 'Visit Us & Store Directions — Bansals Apparel Main Market Bhajanpura';
        break;
      default:
        document.title = 'Bansals Apparel — Best Family Clothing Store in Bhajanpura, Delhi';
        break;
    }
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    try {
      const newPath = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({ page }, '', newPath);
    } catch {
      // safe fallback in restricted iframe
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#0D0D0D] font-sans selection:bg-[#73030D] selection:text-white">
        {/* 1. Store Top Bar */}
        <TopBar onNavigateContact={() => handleNavigate('contact')} />

        {/* 2. Main Navigation Header matching screenshot */}
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

        {/* 3. Main Content Views */}
        <main className="flex-1 bg-white">
          {currentPage === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
          )}
          {currentPage === 'women' && (
            <WomenView
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'men' && (
            <MenView onSelectProduct={(p) => setSelectedProduct(p)} />
          )}
          {currentPage === 'kids' && (
            <KidsView onSelectProduct={(p) => setSelectedProduct(p)} />
          )}
          {currentPage === 'cosmetics' && (
            <CosmeticsView
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
            />
          )}
          {currentPage === 'contact' && <ContactView />}
        </main>

        {/* 4. Store Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* 5. Floating WhatsApp Button (all pages) */}
        <FloatingWhatsApp />

        {/* 6. Navigation Modals (Search, Wishlist Drawer, Inquiry Bag Drawer, Store Info Modal) */}
        <NavigationModals
          onSelectProduct={(p) => setSelectedProduct(p)}
          onNavigate={handleNavigate}
        />

        {/* 7. Quick Lookbook Item Modal */}
        <QuickInquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </StoreProvider>
  );
}
