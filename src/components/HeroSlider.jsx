import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Truck, Headphones, ShieldCheck, Gift, ArrowRight } from 'lucide-react';

export const HeroSlider = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      badge: 'Bansals Bridal & Festive',
      headlineWord1: 'WEDDING',
      headlineWord2: 'SEASON',
      subText: "Bhajanpura's grand destination for bridal lehengas, festive suits, and groom kurtas.",
      leftModelImg: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
      leftModelAlt: 'Modern festive sunglasses ethnic suit Bansals Apparel',
      centerFramedImg: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      centerFramedAlt: 'Framed festive lehenga collection Bhajanpura Delhi Bansals Apparel',
      rightModelImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      rightModelAlt: 'Designer pink embroidered ethnic wear with traditional earrings',
      ctaPage: 'women',
      ctaLabel: 'Explore Wedding Collection',
    },
    {
      id: 2,
      badge: 'New Festive Arrivals 2026',
      headlineWord1: 'FESTIVE',
      headlineWord2: 'COLLECTION',
      subText: 'Gotta patti velvet kurtis, pure silk anarkalis, and vibrant dupattas for festivals.',
      leftModelImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      leftModelAlt: 'Chic festive kurti dress Bansals Apparel',
      centerFramedImg: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      centerFramedAlt: 'Men designer festive kurta and Nehru jacket',
      rightModelImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      rightModelAlt: 'Festive family clothing retail Bhajanpura',
      ctaPage: 'women',
      ctaLabel: 'View Festive Kurtis',
    },
    {
      id: 3,
      badge: 'Complete Family Fashion',
      headlineWord1: 'FAMILY',
      headlineWord2: 'SPECIAL',
      subText: 'Men, women, kids, and newborn outfits all under one roof on Main Market Road.',
      leftModelImg: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
      leftModelAlt: 'Kids stylish partywear and cotton dresses',
      centerFramedImg: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
      centerFramedAlt: 'Men stylish casual and formal shirts',
      rightModelImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      rightModelAlt: 'Men fashion garments near Tukhmirpur Bansals Apparel',
      ctaPage: 'kids',
      ctaLabel: 'Shop Kids & Family',
    },
    {
      id: 4,
      badge: 'Matching Shringar & Jewelry',
      headlineWord1: 'ROYAL',
      headlineWord2: 'MATCH',
      subText: 'Kundan bangles, traditional potlis, and makeup essentials paired to perfection.',
      leftModelImg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      leftModelAlt: 'Traditional jewelry and glass bangles collection',
      centerFramedImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
      centerFramedAlt: 'Ethnic cosmetics and potli bags',
      rightModelImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      rightModelAlt: 'Ethnic Indian fashion accessories',
      ctaPage: 'cosmetics',
      ctaLabel: 'Browse Matching Bangles',
    },
  ];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div id="hero-wrapper" className="w-full bg-white">
      {/* 1. PANORAMIC HERO BANNER (Matches Screenshot 2026-09-07 142631.png) */}
      <section
        id="panoramic-hero-banner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full overflow-hidden bg-[#73030D] text-white min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center justify-center select-none"
      >
        {/* Deep rich background styling with theme palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#73030D] via-[#732F3B] to-[#73030D] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(242,242,242,0.12),transparent_70%)]" />

        {/* Traditional Hanging Jhumka / Bell / Toran Ornamental Motif in Top-Left (as in screenshot) */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 pointer-events-none opacity-30 z-10 text-amber-200">
          <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
            {/* Hanging chain 1 */}
            <line x1="20" y1="0" x2="20" y2="70" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="20" cy="74" r="5" />
            <path d="M12,80 L28,80 L25,95 L15,95 Z" />
            <circle cx="20" cy="100" r="3" />
            {/* Hanging chain 2 */}
            <line x1="60" y1="0" x2="60" y2="110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="60" cy="115" r="7" />
            <path d="M48,122 L72,122 L68,145 L52,145 Z" />
            <circle cx="60" cy="152" r="4" />
            {/* Hanging chain 3 */}
            <line x1="105" y1="0" x2="105" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="105" cy="54" r="4" />
            <path d="M98,58 L112,58 L110,70 L100,70 Z" />
            <circle cx="105" cy="74" r="2.5" />
          </svg>
        </div>

        {/* Floating Side Badge (Matches "Compare 0" or Store Badge in screenshot) */}
        <div className="hidden lg:flex flex-col items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#732F3B] hover:bg-[#73030D] text-white px-2 py-4 rounded-l-xl shadow-lg border-l border-y border-white/20 cursor-pointer transition-all">
          <span className="text-[10px] font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
            Bhajanpura Store
          </span>
          <div className="w-6 h-6 rounded-full bg-white text-[#73030D] flex items-center justify-center text-[10px] font-black mt-2 shadow-xs">
            ★
          </div>
        </div>

        {/* 3-Photo Montage & Central Serif Typography */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 h-full flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-6"
            >
              {/* LEFT MODEL (Chic high-fashion ethnic cutout/portrait) */}
              <div className="hidden lg:flex lg:col-span-3 justify-center items-end h-[460px] relative overflow-hidden">
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={slide.leftModelImg}
                  alt={slide.leftModelAlt}
                  className="w-full h-full object-cover object-top rounded-2xl shadow-xl brightness-[0.95]"
                />
                {/* Subtle soft gradient fade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#73030D]/70 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* CENTER-LEFT: FRAMED CARD MODEL (Matches screenshot's framed white border box) */}
              <div className="hidden sm:flex lg:col-span-3 justify-center items-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-2 sm:p-2.5 rounded-2xl shadow-2xl border-4 border-white/90 max-w-[260px] lg:max-w-[280px] transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                >
                  <div className="w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-xl bg-[#F2F2F2]">
                    <img
                      src={slide.centerFramedImg}
                      alt={slide.centerFramedAlt}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-2 pb-1 text-center">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#73030D]">
                      In-Store Collection
                    </span>
                    <p className="text-[11px] font-semibold text-[#0D0D0D] truncate">
                      {slide.badge}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CENTER-RIGHT: MANDALA WATERMARK + LOGO CREST + "WEDDING SEASON" DISPLAY */}
              <div className="col-span-1 sm:col-span-6 lg:col-span-3 text-center flex flex-col items-center justify-center relative py-4 lg:py-0">
                {/* Ornamental Mandala Watermark in background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                  <svg viewBox="0 0 300 300" className="w-72 h-72 text-amber-200" fill="currentColor">
                    <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="150" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
                    {Array.from({ length: 12 }).map((_, i) => (
                      <g key={i} transform={`rotate(${i * 30} 150 150)`}>
                        <path d="M150,20 C140,50 160,50 150,20" fill="currentColor" opacity="0.4" />
                        <circle cx="150" cy="18" r="3" />
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Circular Brand Logo Emblem */}
                <div className="relative mb-3 w-16 h-16 rounded-full bg-white text-[#73030D] p-1 shadow-lg border border-amber-200/60 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-[#732F3B]/30 flex flex-col items-center justify-center text-center p-0.5">
                    <span className="text-[9px] font-['Cinzel',serif] font-bold uppercase tracking-[0.15em] text-[#73030D] leading-none">
                      BANSALS
                    </span>
                    <span className="text-[6.5px] font-['Cinzel',serif] font-semibold uppercase tracking-[0.2em] text-[#732F3B] leading-none mt-0.5">
                      APPAREL
                    </span>
                  </div>
                </div>

                {/* Large Serif Typography: "WEDDING SEASON" */}
                <h1 className="font-serif tracking-tight leading-[0.95] text-white">
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-white drop-shadow-xs italic font-serif">
                    {slide.headlineWord1}
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-wider text-amber-200 drop-shadow-xs mt-1">
                    {slide.headlineWord2}
                  </span>
                </h1>

                {/* Subtitle description */}
                <p className="mt-3 text-xs sm:text-sm text-stone-200 max-w-xs leading-relaxed">
                  {slide.subText}
                </p>

                {/* CTA Button */}
                <div className="mt-5">
                  <button
                    onClick={() => onNavigate(slide.ctaPage)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-amber-100 text-[#73030D] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg transition-all cursor-pointer group"
                  >
                    <span>{slide.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-[#73030D] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* RIGHT MODEL (Smiling woman in pink/peach embroidered wear) */}
              <div className="hidden lg:flex lg:col-span-3 justify-center items-end h-[460px] relative overflow-hidden">
                <motion.img
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  src={slide.rightModelImg}
                  alt={slide.rightModelAlt}
                  className="w-full h-full object-cover object-top rounded-2xl shadow-xl brightness-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#73030D]/70 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Circular Prev Arrow Button (<) on Left */}
        <button
          id="hero-slider-prev-btn"
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#0D0D0D] shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-[#0D0D0D]" />
        </button>

        {/* Circular Next Arrow Button (>) on Right */}
        <button
          id="hero-slider-next-btn"
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-[#0D0D0D] shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-[#0D0D0D]" />
        </button>

        {/* Slider Pagination Dots (. . o .) at Bottom Center */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex items-center justify-center gap-2">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-amber-300 shadow-xs'
                    : 'w-2 h-2 bg-white/50 hover:bg-white'
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* 2. FOUR TRUST & VALUE BADGES (Directly Below Banner on White Canvas - Matches Screenshot) */}
      <section id="hero-trust-badges-strip" className="bg-white border-b border-[#F2F2F2] py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Badge 1: Free Trial & Fitting */}
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2F2F2]/40 transition-colors">
            {/* Circular Outlined Icon (as in screenshot) */}
            <div className="w-14 h-14 rounded-full border border-[#73030D]/30 bg-[#F2F2F2]/50 flex items-center justify-center flex-shrink-0 text-[#73030D]">
              <Truck className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D0D0D]">Trial & Alterations</h4>
              <p className="text-xs text-[#8C8C8C] mt-0.5">Complimentary in-store fitting support</p>
            </div>
          </div>

          {/* Badge 2: Quality Support */}
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2F2F2]/40 transition-colors">
            <div className="w-14 h-14 rounded-full border border-[#73030D]/30 bg-[#F2F2F2]/50 flex items-center justify-center flex-shrink-0 text-[#73030D]">
              <Headphones className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D0D0D]">Quality Support</h4>
              <p className="text-xs text-[#8C8C8C] mt-0.5">24/7 WhatsApp sizing & feedback</p>
            </div>
          </div>

          {/* Badge 3: Policy Notice / Honest Retail */}
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2F2F2]/40 transition-colors">
            <div className="w-14 h-14 rounded-full border border-[#73030D]/30 bg-[#F2F2F2]/50 flex items-center justify-center flex-shrink-0 text-[#73030D]">
              <ShieldCheck className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D0D0D]">Honest Retail Rates</h4>
              <p className="text-xs text-[#8C8C8C] mt-0.5">No bargaining • Direct fair prices</p>
            </div>
          </div>

          {/* Badge 4: Gift Voucher / Wedding Specials */}
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2F2F2]/40 transition-colors">
            <div className="w-14 h-14 rounded-full border border-[#73030D]/30 bg-[#F2F2F2]/50 flex items-center justify-center flex-shrink-0 text-[#73030D]">
              <Gift className="w-6 h-6 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0D0D0D]">Family Deals</h4>
              <p className="text-xs text-[#8C8C8C] mt-0.5">Special wedding bulk package savings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
