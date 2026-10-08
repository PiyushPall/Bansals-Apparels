import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi, I want to check stock availability at Bansals Apparel Bhajanpura.'
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-white text-stone-900 px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200 text-xs font-medium max-w-[210px] sm:max-w-xs relative animate-bounce flex items-center justify-between gap-2">
          <span>
            💬 Chat with Bhajanpura store directly!
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-600 p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-stone-200 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Bansals Apparel on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-600 rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
