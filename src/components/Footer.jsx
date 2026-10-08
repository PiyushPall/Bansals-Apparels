import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Star,
  MessageCircle,
  ShieldCheck,
  Scissors,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
  Store,
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';

export const Footer = ({ onNavigate }) => {
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bansals Apparel, ' + STORE_INFO.address
  )}`;

  const handlePrivilegeClubJoin = (e) => {
    e.preventDefault();
    if (!whatsappPhone.trim()) return;
    const msg = `Hi Bansals Apparel, I would like to join your VIP WhatsApp Club for new stock and wedding collection updates. My number is: ${whatsappPhone}`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubscribed(true);
  };

  return (
    <footer id="store-footer" className="bg-white border-t border-[#F2F2F2] text-[#0D0D0D] rounded-t-xl ">
      {/* 1. VIP WhatsApp Privilege & In-Store Perks Banner */}
      <div className="bg-[#73030D] text-white py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bansals Privilege Club • Bhajanpura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Get Instant WhatsApp Alerts for New Festive Arrivals
            </h2>
            <p className="text-xs sm:text-sm text-[#F2F2F2]/85 mt-1 font-sans leading-relaxed">
              Be the first to see wedding lehenga drops, festival season discounts, and custom fitting schedules directly on WhatsApp.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="bg-white/15 border border-white/20 rounded-2xl p-4 flex items-center gap-3 text-white text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Thank you! WhatsApp window opened to confirm your VIP membership.</span>
              </div>
            ) : (
              <form
                onSubmit={handlePrivilegeClubJoin}
                className="flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-md"
              >
                <div className="relative flex-1">
                  <MessageCircle className="w-4 h-4 text-emerald-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="Enter WhatsApp Mobile Number"
                    className="w-full pl-10 pr-4 py-3 bg-white text-[#0D0D0D] rounded-xl text-xs sm:text-sm placeholder:text-[#8C8C8C] focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#0D0D0D] hover:bg-black text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>Join VIP Club</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute -right-12 -bottom-16 opacity-5 pointer-events-none hidden md:block">
          <Store className="w-80 h-80 text-white" />
        </div>
      </div>

      {/* 2. Four Core In-Store Pillars */}
      <div className="border-b border-[#F2F2F2] py-6 px-4 sm:px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#73030D]/10 text-[#73030D] flex items-center justify-center flex-shrink-0">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#0D0D0D] font-serif text-sm">Free In-House Alterations</div>
              <div className="text-[#8C8C8C] text-[11px]">Instant fitting support for all outfits</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#732F3B]/10 text-[#732F3B] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#0D0D0D] font-serif text-sm">100% Quality Assurance</div>
              <div className="text-[#8C8C8C] text-[11px]">Fast-color fabrics & bio-wash cottons</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600/10 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            </div>
            <div>
              <div className="font-bold text-[#0D0D0D] font-serif text-sm">4.0 Google Rating</div>
              <div className="text-[#8C8C8C] text-[11px]">140+ verified local neighborhood reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-[#73030D]/10 text-[#73030D] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-[#0D0D0D] font-serif text-sm">Open All 7 Days</div>
              <div className="text-[#8C8C8C] text-[11px]">10:30 AM – 9:30 PM (Sun till 10 PM)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Col 1: Brand Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Botanical Circular Logo Crest */}
              <div className="w-14 h-14 rounded-full border-2 border-[#73030D] bg-white shadow-xs p-1 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full rounded-full border border-[#732F3B]/30 flex flex-col items-center justify-center text-center p-0.5">
                  <span className="font-['Cinzel',serif] font-bold tracking-[0.15em] text-[#73030D] text-[10px] leading-none">
                    BANSALS
                  </span>
                  <span className="font-['Cinzel',serif] text-[7px] tracking-[0.2em] text-[#732F3B] font-semibold mt-0.5">
                    APPAREL
                  </span>
                </div>
              </div>

              <div>
                <span className="font-serif font-extrabold text-2xl text-[#0D0D0D] tracking-tight block">
                  Bansals Apparel
                </span>
                <p className="text-xs text-[#73030D] font-semibold tracking-wider uppercase font-['Cinzel',serif]">
                  Bhajanpura • Family Fashion House
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C8C8C] leading-relaxed font-sans pr-4">
              Delhi's trusted neighborhood destination for family clothing. Handpicked bridal lehengas, festive suits, smart men's casuals, skin-friendly infant wear, and traditional cosmetics all under one roof.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#0D0D0D] hover:text-[#73030D] transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#73030D]/10 text-[#73030D] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{STORE_INFO.phone} (Direct Store Line)</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>+91 97737 19071 (WhatsApp Support)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Women's & Bridal Collection (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-bold text-base text-[#0D0D0D] pb-2 border-b border-[#F2F2F2] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#73030D] rounded-full"></span>
              <span>Women's & Bridal</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0D0D0D]/80">
              <li>
                <button
                  onClick={() => onNavigate('women')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Wedding Lehengas & Anarkalis</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('women')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Handcrafted Festive Kurtis</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('women')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Everyday Pure Cotton Suits</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('women')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Fusion Co-ords & Crop Tops</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cosmetics')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Bridal Bangles & Velvet Chudas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cosmetics')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Kundan Jewelry & Matching Potlis</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Men's & Kids Wear (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-bold text-base text-[#0D0D0D] pb-2 border-b border-[#F2F2F2] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#732F3B] rounded-full"></span>
              <span>Men & Kids</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0D0D0D]/80">
              <li>
                <button
                  onClick={() => onNavigate('men')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Festive Kurta Pajamas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('men')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Nehru & Modi Jackets</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('men')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Casual Linen & Cotton Shirts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kids')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Newborn Hospital Kits (0-2 Yrs)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kids')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Toddler Birthday Gowns & Kurtas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kids')}
                  className="hover:text-[#73030D] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-[#8C8C8C]">›</span>
                  <span>Pre-Teen Boys & Girls Wear</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Visit & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-bold text-base text-[#0D0D0D] pb-2 border-b border-[#F2F2F2] flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#0D0D0D] rounded-full"></span>
              <span>Visit Bhajanpura Store</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <div className="text-[#0D0D0D]/90 font-sans leading-relaxed">
                  <strong>2/654/21, Main Market Rd</strong>, near Bhajanpura, Block B, Tukhmirpur, Delhi 110053
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#732F3B] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#0D0D0D]/80">
                  <div><strong>Mon – Sat:</strong> 10:30 AM – 9:30 PM</div>
                  <div><strong>Sunday:</strong> 10:30 AM – 10:00 PM</div>
                </div>
              </div>

              {/* Map CTA Button */}
              <a
                id="footer-maps-action-cta"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-3 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] hover:border-[#73030D] hover:bg-white transition-all text-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold text-[#0D0D0D]">
                    <Navigation className="w-3.5 h-3.5 text-[#73030D] fill-[#73030D]" />
                    <span>Get Driving Directions</span>
                  </div>
                  <span className="text-[#73030D] font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <div className="text-[11px] text-[#8C8C8C] mt-1 pl-5.5">
                  Centrally located in Main Market, Bhajanpura
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Local Neighborhood Coverage Directory */}
        <div className="mt-12 pt-6 border-t border-[#F2F2F2]">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8C8C8C]">
            <span className="font-semibold text-[#0D0D0D] font-serif">Serving Northeast Delhi & NCR:</span>
            <span>Bhajanpura Market</span>
            <span>•</span>
            <span>Tukhmirpur</span>
            <span>•</span>
            <span>Yamuna Vihar</span>
            <span>•</span>
            <span>Maujpur</span>
            <span>•</span>
            <span>Shahdara</span>
            <span>•</span>
            <span>Karawal Nagar</span>
            <span>•</span>
            <span>Khajuri Khas</span>
            <span>•</span>
            <span>Gokulpuri</span>
            <span>•</span>
            <span>Sonia Vihar</span>
            <span>•</span>
            <span>Dilshad Garden</span>
          </div>
        </div>

        {/* 5. Bottom Copyright & Store Assurance Bar */}
        <div className="mt-8 pt-6 border-t border-[#F2F2F2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8C8C]">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#0D0D0D]">Bansals Apparel</strong>. All rights reserved. Registered Retail Business, Delhi 110053.
          </div>

          {/* Payment & In-store trust chips */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-[#F2F2F2] text-[#0D0D0D] font-medium">UPI / GPay / PhonePe</span>
            <span className="px-2 py-0.5 rounded bg-[#F2F2F2] text-[#0D0D0D] font-medium">Cash Accepted</span>
            <span className="px-2 py-0.5 rounded bg-[#F2F2F2] text-[#0D0D0D] font-medium">All Cards</span>
            <span className="px-2 py-0.5 rounded bg-[#F2F2F2] text-[#0D0D0D] font-medium">GST Invoicing</span>
          </div>

          <div className="flex items-center gap-4 text-[#0D0D0D]">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#73030D] transition-colors cursor-pointer font-medium"
            >
              Contact Us
            </button>
            <span>•</span>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
