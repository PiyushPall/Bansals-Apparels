import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Eye, Sparkles, Heart } from 'lucide-react';
import { FRESH_ARRIVALS, STORE_INFO } from '../data/storeData.js';
import { useStore } from '../context/StoreContext.jsx';

export const FreshArrivals = ({ onSelectProduct }) => {
  const scrollRef = useRef(null);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useStore();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const createWhatsAppUrl = (itemTitle) => {
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hi Bansals Apparel, I am interested in "${itemTitle}" from your Fresh Arrivals. Is this available in my size at the Bhajanpura store?`
    )}`;
  };

  return (
    <section id="fresh-arrivals-section" className="py-12 sm:py-16 bg-white border-y border-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#73030D] bg-[#73030D]/10 px-2.5 py-1 rounded-full mb-2 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#73030D]" />
              <span>Direct In-Store Stock</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D0D0D] tracking-tight">
              Fresh Weekly Arrivals
            </h2>
            <p className="text-sm text-[#8C8C8C] mt-1 max-w-xl font-sans">
              Freshly displayed on our Bhajanpura store mannequins. New stock arrives every Tuesday and Friday.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              id="fresh-arrivals-prev-btn"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#8C8C8C]/30 hover:border-[#73030D] bg-white hover:bg-[#F2F2F2] text-[#0D0D0D] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="fresh-arrivals-next-btn"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#8C8C8C]/30 hover:border-[#73030D] bg-white hover:bg-[#F2F2F2] text-[#0D0D0D] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {FRESH_ARRIVALS.map((item) => {
            const isFav = isInWishlist(item.id);
            return (
              <div
                key={item.id}
                id={`fresh-arrival-item-${item.id}`}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl border border-[#F2F2F2] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group/item flex flex-col snap-start"
              >
                {/* Image Box with Sliding Hover Effect */}
                <div
                  className="relative h-72 w-full overflow-hidden bg-[#F2F2F2] cursor-pointer"
                  onClick={() => onSelectProduct(item)}
                >
                  {/* Primary Image - slides left on hover */}
                  <img
                    src={item.image}
                    alt={item.altText}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out ${
                      item.secondaryImage ? 'group-hover/item:-translate-x-full' : 'group-hover/item:scale-105'
                    }`}
                    loading="lazy"
                  />

                  {/* Secondary Image - slides in from right on hover */}
                  {item.secondaryImage && (
                    <img
                      src={item.secondaryImage}
                      alt={`${item.altText} alternate angle`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out translate-x-full group-hover/item:translate-x-0"
                      loading="lazy"
                    />
                  )}

                  {/* Multi-angle indicator pill */}
                  {item.secondaryImage && (
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs text-white text-[10px] pointer-events-none transition-opacity duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 group-hover/item:bg-white/40"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover/item:bg-white group-hover/item:scale-125"></span>
                      <span className="ml-1 text-[9px] font-medium tracking-wider uppercase opacity-80 group-hover/item:opacity-100">
                        Slide
                      </span>
                    </div>
                  )}

                  {/* Badge */}
                  {item.featuredBadge && (
                    <span className="absolute top-3 left-3 bg-[#73030D] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs z-20 pointer-events-none">
                      {item.featuredBadge}
                    </span>
                  )}

                  {/* Wishlist Heart Toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isFav) removeFromWishlist(item.id);
                      else addToWishlist(item);
                    }}
                    className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xs transition-all ${
                      isFav
                        ? 'bg-[#73030D] text-white shadow-md'
                        : 'bg-white/85 text-[#0D0D0D] hover:bg-white hover:text-[#73030D]'
                    }`}
                    title={isFav ? 'Remove from saved' : 'Save to wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                  </button>

                  {/* Quick View Button overlay on hover */}
                  <div className="absolute inset-0 bg-[#0D0D0D]/25 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="bg-white text-[#0D0D0D] px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 shadow-xl text-xs transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#73030D]" />
                      Quick View & Details
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] bg-[#F2F2F2] text-[#8C8C8C] px-2 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      onClick={() => onSelectProduct(item)}
                      className="font-serif font-bold text-[#0D0D0D] text-base line-clamp-1 group-hover/item:text-[#73030D] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#8C8C8C] mt-1 line-clamp-2 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Actions: Quick View & Details + Check Stock */}
                  <div className="pt-3 mt-3 border-t border-[#F2F2F2] flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#73030D] hover:text-[#732F3B] py-1 px-2 rounded-md hover:bg-[#73030D]/5 transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <a
                      id={`fresh-item-whatsapp-${item.id}`}
                      href={createWhatsAppUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors shadow-xs"
                      title="Check size availability on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                      <span>Check Stock</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
