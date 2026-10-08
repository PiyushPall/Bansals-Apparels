import React from 'react';
import { MessageCircle, Eye, Tag, Heart, Plus, Check } from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';
import { useStore } from '../context/StoreContext.jsx';

export const ProductCard = ({ product, onSelectProduct }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist, isInBag, addToBag, removeFromBag } = useStore();
  const isFav = isInWishlist(product.id);
  const isBagged = isInBag(product.id);

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Bansals Apparel, I am interested in checking availability for "${product.title}" (${product.subCategory}) seen on your website catalog. Do you have this in stock at the Bhajanpura store?`
  )}`;

  return (
    <div
      id={`catalog-card-${product.id}`}
      className="bg-white rounded-2xl border border-[#F2F2F2] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group/card"
    >
      {/* Product Image Box with Sliding Hover Effect */}
      <div
        className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#F2F2F2] cursor-pointer"
        onClick={() => onSelectProduct(product)}
      >
        {/* Primary Image - slides left on hover when secondaryImage is present */}
        <img
          src={product.image}
          alt={product.altText}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out ${
            product.secondaryImage ? 'group-hover/card:-translate-x-full' : 'group-hover/card:scale-105'
          }`}
          loading="lazy"
        />

        {/* Secondary Image - slides in from the right on hover */}
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.altText} alternate angle view`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-in-out translate-x-full group-hover/card:translate-x-0"
            loading="lazy"
          />
        )}

        {/* Multi-angle slide indicator pill */}
        {product.secondaryImage && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs text-white text-[10px] pointer-events-none transition-opacity duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 group-hover/card:bg-white/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover/card:bg-white group-hover/card:scale-125"></span>
            <span className="ml-1 text-[9.5px] font-medium hidden xs:inline tracking-wider uppercase opacity-80 group-hover/card:opacity-100">
              Angle 2
            </span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20 pointer-events-none">
          {product.featuredBadge && (
            <span className="bg-[#73030D] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              {product.featuredBadge}
            </span>
          )}
          {product.ageGroup && (
            <span className="bg-amber-500 text-[#0D0D0D] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              {product.ageGroup === '0-2'
                ? '0-2 Yrs'
                : product.ageGroup === 'toddler'
                ? 'Toddler (2-5 Yrs)'
                : 'Pre-teens (6-14 Yrs)'}
            </span>
          )}
        </div>

        {/* Action icons on image top right: Heart & Bag */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isFav) removeFromWishlist(product.id);
              else addToWishlist(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xs transition-all ${
              isFav
                ? 'bg-[#73030D] text-white shadow-md'
                : 'bg-white/85 text-[#0D0D0D] hover:bg-white hover:text-[#73030D]'
            }`}
            title={isFav ? 'Remove from saved' : 'Save to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (isBagged) removeFromBag(product.id);
              else addToBag(product);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xs transition-all ${
              isBagged
                ? 'bg-[#732F3B] text-white shadow-md'
                : 'bg-white/85 text-[#0D0D0D] hover:bg-white hover:text-[#732F3B]'
            }`}
            title={isBagged ? 'In Inquiry List' : 'Add to Inquiry Bag'}
          >
            {isBagged ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>

        {/* Quick View overlay button */}
        <div className="absolute inset-0 bg-[#0D0D0D]/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 text-[#0D0D0D] px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-[#73030D]" />
            <span>Quick View & Details</span>
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {product.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-[10px] bg-[#F2F2F2] text-[#8C8C8C] px-2 py-0.5 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="font-serif font-bold text-[#0D0D0D] text-base sm:text-lg group-hover/card:text-[#73030D] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.title}
          </h3>

          <p className="text-xs text-[#8C8C8C] mt-1.5 line-clamp-2 leading-relaxed font-sans">
            {product.description}
          </p>

          {/* Sizes / Colors Info */}
          {(product.sizes || product.colors || product.fabric) && (
            <div className="mt-3 pt-2.5 border-t border-[#F2F2F2] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#8C8C8C]">
              {product.sizes && (
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#8C8C8C] flex-shrink-0" />
                  <span>Sizes: {product.sizes.slice(0, 3).join(', ')}{product.sizes.length > 3 ? '...' : ''}</span>
                </div>
              )}
              {product.colors && (
                <div className="text-[#8C8C8C] font-sans">
                  {product.colors.length} shades in-store
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions Bar: Quick View & Details + WhatsApp Inquire */}
        <div className="mt-4 pt-3 border-t border-[#F2F2F2] flex items-center gap-2">
          {/* Quick View & Details Button */}
          <button
            id={`product-quick-view-${product.id}`}
            onClick={() => onSelectProduct(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 sm:px-3 rounded-xl border border-[#73030D]/30 bg-white hover:bg-[#73030D]/5 text-[#73030D] text-xs font-semibold transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
            title="View Full Details, Fabric & Size Chart"
          >
            <Eye className="w-3.5 h-3.5 text-[#73030D]" />
            <span className="truncate">Quick View & Details</span>
          </button>

          {/* WhatsApp Direct Inquire */}
          <a
            id={`product-whatsapp-inquire-${product.id}`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs flex-shrink-0"
            title="Ask availability on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          </a>
        </div>
      </div>
    </div>
  );
};
