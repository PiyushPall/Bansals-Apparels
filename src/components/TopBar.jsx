import React from 'react';
import { Phone, Clock, MapPin, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';

export const TopBar = ({ onNavigateContact }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bansals Apparel, ' + STORE_INFO.address
  )}`;

  return (
    <header
      id="store-top-bar"
      className="bg-[#73030D] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-black/10 z-40 relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Store Timings & Live Status */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-shrink">
          <span className="inline-flex items-center gap-1.5 bg-black/20 text-[#F2F2F2] font-semibold px-2 py-0.5 rounded-full text-[10.5px] sm:text-[11px] border border-white/10 whitespace-nowrap flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open Today</span>
          </span>

          <div className="flex items-center gap-1 text-[#F2F2F2]/90 text-[10.5px] sm:text-xs truncate">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 flex-shrink-0 hidden xs:block" />
            <span className="hidden md:inline font-sans truncate">10:30 AM – 9:30 PM (All 7 Days)</span>
            <span className="md:hidden font-sans truncate">10:30 AM – 9:30 PM</span>
          </div>
        </div>

        {/* Right: Address, Click to Call & Directions (Fully responsive) */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          {/* Location Landmark (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 text-[#F2F2F2]/90 text-xs truncate max-w-[220px]">
            <MapPin className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="truncate">Main Market Rd, Block B</span>
          </div>

          {/* Quick Call Button */}
          <a
            id="topbar-call-button"
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="flex items-center gap-1 text-white hover:text-amber-200 transition-colors py-1 px-1.5 sm:px-2 rounded hover:bg-black/15 text-[11px] sm:text-xs font-semibold"
            title="Call Bansals Apparel store"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
            <span className="hidden sm:inline tracking-wide">{STORE_INFO.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Directions Button */}
          <a
            id="topbar-directions-button"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-white text-[#73030D] font-bold px-2 sm:px-2.5 py-1 rounded hover:bg-[#F2F2F2] active:scale-95 transition-all text-[10.5px] sm:text-[11px] shadow-xs flex-shrink-0"
            title="Open in Google Maps"
          >
            <Navigation className="w-3 h-3 text-[#73030D] fill-[#73030D] flex-shrink-0" />
            <span className="hidden xs:inline">Directions</span>
            <span className="xs:hidden">Map</span>
          </a>
        </div>
      </div>
    </header>
  );
};
