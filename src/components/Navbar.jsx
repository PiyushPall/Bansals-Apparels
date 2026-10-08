import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext.jsx';
import { STORE_INFO } from '../data/storeData.js';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const {
    wishlist,
    bag,
    setSearchOpen,
    setWishlistDrawerOpen,
    setBagDrawerOpen,
    setStoreInfoModalOpen,
  } = useStore();

  // Top-tier main links (matching screenshot: Home, New Arrivals, About Us, Contact Us)
  const topNavLinks = [
    { id: 'home', label: 'Home' },
    { id: 'women', label: 'New Arrivals' },
    { id: 'contact', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Second-tier category links (matching screenshot: Shop By Category, Stitched, Unstitched, Luxury, Special, Sale Deals)
  const subCategories = [
    { id: 'women', label: 'Stitched Kurtis' },
    { id: 'women', label: 'Unstitched & Lehengas' },
    { id: 'men', label: 'Luxury Men' },
    { id: 'kids', label: 'Kids & Newborn', tag: '0-14 Yrs' },
    { id: 'cosmetics', label: 'Bangles & Cosmetics' },
    { id: 'women', label: 'Sale Deals', tag: 'Offers' },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setCategoryDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-header" className="bg-white border-b border-[#F2F2F2] sticky top-0 z-40 transition-all">
      {/* Top Bar with Brand Logo, Center Nav, and Right Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* 1. Left: Circular Brand Emblem (Matching INAM CLOTH circular crest badge) */}
          <button
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left py-1"
          >
            {/* Circular Botanical Emblem */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#73030D]/20 group-hover:border-[#73030D] bg-white shadow-xs p-1 flex items-center justify-center transition-all duration-300">
              {/* Botanical leaves laurel svg accent */}
              <div className="absolute inset-0 rounded-full border border-[#732F3B]/30 m-0.5 pointer-events-none" />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full text-[#732F3B]/40 group-hover:text-[#73030D]/70 transition-colors pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20,50 Q20,25 50,20 Q80,25 80,50 Q80,75 50,80 Q20,75 20,50" strokeDasharray="3 3" />
                {/* Decorative leaves */}
                <path d="M15,35 C12,30 20,22 28,26 C22,30 18,34 15,35 Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M85,35 C88,30 80,22 72,26 C78,30 82,34 85,35 Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M22,68 C16,74 24,80 30,75 C26,72 23,70 22,68 Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M78,68 C84,74 76,80 70,75 C74,72 77,70 78,68 Z" fill="currentColor" fillOpacity="0.2" />
              </svg>

              <div className="text-center z-10">
                <span className="block font-['Cinzel',serif] font-bold tracking-[0.15em] text-[#73030D] text-xs sm:text-sm uppercase leading-tight">
                  BANSALS
                </span>
                <span className="block text-[7px] sm:text-[8px] tracking-[0.2em] text-[#732F3B] uppercase font-semibold font-['Cinzel',serif] mt-0.5">
                  APPAREL
                </span>
              </div>
            </div>

            {/* Brand Title Text on larger screens */}
            <div className="hidden xl:block">
              <div className="font-serif font-bold text-lg text-[#0D0D0D] tracking-tight group-hover:text-[#73030D] transition-colors">
                Bansals Apparel
              </div>
              <div className="text-[11px] text-[#8C8C8C] flex items-center gap-1 font-sans">
                <MapPin className="w-3 h-3 text-[#73030D]" />
                <span>Bhajanpura • Block B</span>
              </div>
            </div>
          </button>

          {/* 2. Center: Top Nav Links (Home, New Arrivals, About Us, Contact Us) */}
          <nav id="desktop-top-nav-links" className="hidden md:flex items-center gap-6 lg:gap-10">
            {topNavLinks.map((item, idx) => {
              const isActive =
                item.id === currentPage ||
                (item.label === 'New Arrivals' && currentPage === 'women') ||
                (item.label === 'About Us' && currentPage === 'contact');

              return (
                <button
                  key={`${item.id}-${idx}`}
                  id={`top-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm lg:text-base font-medium transition-colors relative py-2 cursor-pointer ${
                    isActive
                      ? 'text-[#73030D] font-semibold'
                      : 'text-[#0D0D0D] hover:text-[#73030D]'
                  }`}
                >
                  {item.label}
                  {/* Clean active line matching screenshot */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#73030D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Right: Icon Actions (Search, Account/Info, Wishlist Heart, Bag/Inquiry) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <button
              id="navbar-search-btn"
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full text-[#0D0D0D] hover:text-[#73030D] hover:bg-[#F2F2F2] transition-colors cursor-pointer"
              title="Search Catalog"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Account / Store Info Icon */}
            <button
              id="navbar-user-btn"
              onClick={() => setStoreInfoModalOpen(true)}
              className="p-2.5 rounded-full text-[#0D0D0D] hover:text-[#73030D] hover:bg-[#F2F2F2] transition-colors cursor-pointer"
              title="Store Information"
              aria-label="Store Information"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Wishlist Heart Icon with Count Badge */}
            <button
              id="navbar-wishlist-btn"
              onClick={() => setWishlistDrawerOpen(true)}
              className="p-2.5 rounded-full text-[#0D0D0D] hover:text-[#73030D] hover:bg-[#F2F2F2] transition-colors relative cursor-pointer"
              title="Saved Favorites"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#73030D] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Bag / Inquiry Basket Icon with Count Badge */}
            <button
              id="navbar-bag-btn"
              onClick={() => setBagDrawerOpen(true)}
              className="p-2.5 rounded-full text-[#0D0D0D] hover:text-[#73030D] hover:bg-[#F2F2F2] transition-colors relative cursor-pointer"
              title="Inquiry Bag"
              aria-label="Inquiry Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {bag.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#732F3B] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {bag.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="navbar-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#0D0D0D] hover:bg-[#F2F2F2] transition-colors cursor-pointer ml-1"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Second-Tier Sub-Bar: Shop By Category & Sub-collections (Matching Screenshot) */}
      <div className="border-t border-[#F2F2F2] bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-6 lg:gap-10 py-3 text-xs sm:text-sm font-medium">
            {/* Shop By Category Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="flex items-center gap-1.5 text-[#0D0D0D] hover:text-[#73030D] font-semibold transition-colors cursor-pointer"
              >
                <span>Shop By Category</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8C8C8C] transition-transform ${
                    categoryDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Category Dropdown Menu */}
              {categoryDropdownOpen && (
                <div
                  onMouseLeave={() => setCategoryDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#F2F2F2] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <button
                    onClick={() => handleNavClick('women')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#0D0D0D] hover:bg-[#F2F2F2] hover:text-[#73030D] font-medium flex items-center justify-between"
                  >
                    <span>Women's Ethnic & Lehengas</span>
                    <span className="text-[10px] bg-[#73030D]/10 text-[#73030D] px-1.5 py-0.5 rounded font-bold">
                      Trending
                    </span>
                  </button>
                  <button
                    onClick={() => handleNavClick('men')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#0D0D0D] hover:bg-[#F2F2F2] hover:text-[#73030D] font-medium flex items-center justify-between"
                  >
                    <span>Men's Casuals & Kurtas</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('kids')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#0D0D0D] hover:bg-[#F2F2F2] hover:text-[#73030D] font-medium flex items-center justify-between"
                  >
                    <span>Kids & Newborn (0-14 Yrs)</span>
                    <span className="text-[10px] bg-[#F2F2F2] text-[#8C8C8C] px-1.5 py-0.5 rounded">
                      Cotton
                    </span>
                  </button>
                  <button
                    onClick={() => handleNavClick('cosmetics')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#0D0D0D] hover:bg-[#F2F2F2] hover:text-[#73030D] font-medium flex items-center justify-between"
                  >
                    <span>Cosmetics & Bangles</span>
                  </button>
                  <div className="border-t border-[#F2F2F2] my-1" />
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-left px-4 py-2 text-xs text-[#73030D] hover:bg-[#F2F2F2] font-semibold"
                  >
                    Visit Store in Bhajanpura →
                  </button>
                </div>
              )}
            </div>

            {/* Sub-Category Links */}
            {subCategories.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(sub.id)}
                className="text-[#0D0D0D]/90 hover:text-[#73030D] transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
              >
                <span>{sub.label}</span>
                {sub.tag && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#73030D]/10 text-[#73030D]">
                    {sub.tag}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-white border-b border-[#F2F2F2] shadow-xl px-4 py-4 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center gap-2 p-3 bg-[#F2F2F2] rounded-xl text-xs text-[#0D0D0D] mb-4">
            <Sparkles className="w-4 h-4 text-[#73030D] flex-shrink-0" />
            <span>Bhajanpura's Complete Family Fashion Destination</span>
          </div>

          <div className="space-y-1 divide-y divide-[#F2F2F2]">
            <div className="pb-2 space-y-1">
              {topNavLinks.map((item, idx) => (
                <button
                  key={`m-top-${idx}`}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0D0D0D] hover:bg-[#F2F2F2] hover:text-[#73030D] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-1">
              <div className="text-[11px] font-bold uppercase text-[#8C8C8C] px-3 py-1">
                Shop By Department
              </div>
              <button
                onClick={() => handleNavClick('women')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#0D0D0D] hover:bg-[#F2F2F2]"
              >
                Women's Festive & Lehengas
              </button>
              <button
                onClick={() => handleNavClick('men')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#0D0D0D] hover:bg-[#F2F2F2]"
              >
                Men's Casuals & Kurta Sets
              </button>
              <button
                onClick={() => handleNavClick('kids')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#0D0D0D] hover:bg-[#F2F2F2]"
              >
                Kids & Newborn Outfits (0-14 Yrs)
              </button>
              <button
                onClick={() => handleNavClick('cosmetics')}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#0D0D0D] hover:bg-[#F2F2F2]"
              >
                Traditional Bangles & Cosmetics
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold text-[#73030D] hover:bg-[#F2F2F2]"
              >
                Store Location & Directions →
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
