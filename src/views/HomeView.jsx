import React from 'react';
import { HeroSlider } from '../components/HeroSlider.jsx';
import { CategoryGrid } from '../components/CategoryGrid.jsx';
import { FreshArrivals } from '../components/FreshArrivals.jsx';
import { ReviewsSection } from '../components/ReviewsSection.jsx';
import { STORE_INFO } from '../data/storeData.js';
import {
  MapPin,
  Phone,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Store,
} from 'lucide-react';

export const HomeView = ({ onNavigate, onSelectProduct }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bansals Apparel, ' + STORE_INFO.address
  )}`;

  return (
    <div id="home-view" className="space-y-0 bg-white">
      {/* 1. Panoramic Hero Slider & 4 Value Proposition Badges (matching Screenshot) */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 2. Macro Category Grid (Women, Men, Kids, Cosmetics) */}
      <CategoryGrid onNavigate={onNavigate} />

      {/* 3. Fresh Arrivals Horizontal Gallery */}
      <FreshArrivals onSelectProduct={onSelectProduct} />

      {/* 4. In-Store Shopping Experience Section with White Background and Theme Colors */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F2F2F2]/60 border-y border-[#F2F2F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#73030D]/10 text-[#73030D] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#73030D]" />
              <span>Bhajanpura Market's Trusted Family Store</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0D0D] tracking-tight leading-tight">
              Why Northeast Delhi Families Choose Bansals Apparel
            </h2>
            <p className="text-[#0D0D0D]/80 text-sm sm:text-base leading-relaxed">
              Nothing compares to touching the rich zari borders, trying on a wedding lehenga in a private fitting room, or ensuring newborn cotton is 100% gentle. At our Bhajanpura store, our family serves yours with care and honest pricing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0D0D0D]">
                <CheckCircle className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <span>Private, hygienic trial rooms with warm mirror lighting</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0D0D0D]">
                <CheckCircle className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <span>Fast in-house alterations for lehengas, suits & trousers</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0D0D0D]">
                <CheckCircle className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <span>Matching bangles, dupattas & potlis right next to the clothing racks</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0D0D0D]">
                <CheckCircle className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <span>Special seasonal discounts for wedding family packages</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-[#73030D] hover:bg-[#732F3B] text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm cursor-pointer"
              >
                <span>Store Location & Timings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F2F2F2] text-[#0D0D0D] border border-[#8C8C8C]/30 font-semibold px-4 py-3 rounded-xl transition-all text-xs sm:text-sm"
              >
                <MapPin className="w-4 h-4 text-[#73030D]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
                alt="Bansals Apparel Bhajanpura Delhi in-store festive clothing collection"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent p-5 text-white">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5" />
                  <span>Visit Our Bhajanpura Store</span>
                </div>
                <div className="font-serif font-bold text-lg text-white mt-1">
                  Main Market Rd, Block B, Bhajanpura
                </div>
                <div className="text-xs text-[#F2F2F2]/90 mt-0.5">
                  Near Bhajanpura Chowk & Tukhmirpur Road • Delhi 110053
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Google Reviews Section (4.0 Stars badge) */}
      <ReviewsSection />

      {/* 6. Local SEO & WhatsApp Consultation CTA */}
      <section className="bg-[#73030D] text-white py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-amber-200 uppercase">
            Family Clothing Store in Bhajanpura, Delhi
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">
            Planning a Wedding or Festive Shopping Visit?
          </h2>
          <p className="mt-3 text-[#F2F2F2]/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Call or WhatsApp our team before visiting to verify specific sizes or lehenga styles, or simply drop by our store on Main Market Road.
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-amber-100 text-[#73030D] font-bold px-6 py-3 rounded-xl transition-all shadow-md text-xs sm:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 97737 19071</span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hi Bansals Apparel, I am planning to visit your Bhajanpura store today.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-all text-xs sm:text-sm shadow-md"
            >
              <span>WhatsApp Store Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
