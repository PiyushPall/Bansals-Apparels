import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  Navigation,
  Heart,
  ShoppingBag,
  Check,
  Scissors,
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Ruler,
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';
import { useStore } from '../context/StoreContext.jsx';

export const QuickInquiryModal = ({ product, onClose }) => {
  if (!product) return null;

  const { isInWishlist, addToWishlist, removeFromWishlist, isInBag, addToBag, removeFromBag } = useStore();
  const isFav = isInWishlist(product.id);
  const isBagged = isInBag(product.id);

  // Gallery list: combine main image, secondaryImage, and any other gallery items
  const galleryImages = React.useMemo(() => {
    const list = [];
    if (product.image) list.push(product.image);
    if (product.secondaryImage && !list.includes(product.secondaryImage)) {
      list.push(product.secondaryImage);
    }
    if (product.gallery) {
      product.gallery.forEach((img) => {
        if (!list.includes(img)) list.push(img);
      });
    }
    return list.length > 0 ? list : [product.image];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // WhatsApp Message incorporating selected size and color
  const selectedDetailsText = [
    selectedSize ? `Size: ${selectedSize}` : null,
    selectedColor ? `Color: ${selectedColor}` : null,
  ]
    .filter(Boolean)
    .join(', ');

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Bansals Apparel, I am looking at "${product.title}" (${product.subCategory}${
      selectedDetailsText ? ` - ${selectedDetailsText}` : ''
    }) on your online catalog. Could you please confirm if this is currently in stock at the Bhajanpura store?`
  )}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bansals Apparel, ' + STORE_INFO.address
  )}`;

  return (
    <div
      id="quick-inquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="quick-inquiry-modal-content"
        className="bg-white rounded-2xl max-w-3xl lg:max-w-4xl w-full overflow-hidden shadow-2xl border border-[#F2F2F2] relative my-4 sm:my-8 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar for Mobile */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#F2F2F2] bg-stone-50/80 sm:hidden">
          <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#73030D]">
            <span>Bansals Apparel</span>
            <span className="text-[#8C8C8C] font-normal">• Quick View</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-stone-200 text-[#0D0D0D] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Close Button for Desktop */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          aria-label="Close details"
          className="hidden sm:flex absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0D0D0D] items-center justify-center transition-all shadow-md hover:scale-105 cursor-pointer border border-[#F2F2F2]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Image Gallery (5 cols on md, 6 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-6 bg-stone-100 p-3 sm:p-5 flex flex-col justify-between">
            {/* Main Stage Image */}
            <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center group">
              <img
                src={galleryImages[activeImageIndex]}
                alt={`${product.altText} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-top transition-all duration-300"
              />

              {/* Photo Navigation Arrows if multi-photo */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#0D0D0D] flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#0D0D0D] flex items-center justify-center shadow-md transition-all opacity-80 hover:opacity-100 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Photo Counter Badge */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5">
                <span>View {activeImageIndex + 1} of {galleryImages.length}</span>
              </div>

              {/* Store Guarantee Stamp */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#73030D] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-xs">
                In-Store Item
              </div>
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {galleryImages.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#73030D] shadow-md scale-102'
                        : 'border-white/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                    {idx === 1 && (
                      <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] text-center font-medium py-0.5">
                        Slide Angle
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Comprehensive Product Details (7 cols on md, 6 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between bg-white">
            <div>
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold text-[#73030D] bg-[#73030D]/10 px-2.5 py-0.5 rounded-full font-sans">
                  {product.subCategory}
                </span>
                {product.featuredBadge && (
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    {product.featuredBadge}
                  </span>
                )}
                {product.ageGroup && (
                  <span className="text-[10px] font-bold text-[#0D0D0D] bg-amber-200 px-2 py-0.5 rounded-md">
                    {product.ageGroup === '0-2'
                      ? '0-2 Years'
                      : product.ageGroup === 'toddler'
                      ? 'Toddler (2-5 Yrs)'
                      : 'Pre-teens (6-14 Yrs)'}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="font-serif font-bold text-[#0D0D0D] text-xl sm:text-2xl leading-tight">
                {product.title}
              </h2>

              {/* Store Location Hint */}
              <div className="flex items-center gap-1.5 text-xs text-[#8C8C8C] mt-1.5 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#73030D] flex-shrink-0" />
                <span>Available at Bhajanpura Store (Block B, Main Market)</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Fabric & Craft Details */}
              {product.fabric && (
                <div className="mt-3.5 p-3 bg-stone-50 rounded-xl border border-stone-200/70">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#73030D] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[#0D0D0D] block font-sans">
                        Fabric & Material
                      </span>
                      <span className="text-xs text-stone-600 leading-snug block font-sans">
                        {product.fabric}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#0D0D0D] flex items-center gap-1.5 font-sans">
                      <Ruler className="w-3.5 h-3.5 text-[#73030D]" />
                      Select Size:
                    </span>
                    <span className="text-[11px] text-[#73030D] font-medium font-sans">
                      Selected: <strong className="text-[#0D0D0D]">{selectedSize || 'None'}</strong>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'bg-[#73030D] text-white shadow-xs border border-[#73030D]'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-transparent'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Color / Shade Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-3.5">
                  <span className="text-xs font-bold text-[#0D0D0D] block mb-1.5 font-sans">
                    Available Colors:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer flex items-center gap-1 ${
                          selectedColor === color
                            ? 'bg-amber-100 text-amber-900 border border-amber-400 font-semibold'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-transparent'
                        }`}
                      >
                        {selectedColor === color && <Check className="w-3 h-3 text-amber-700" />}
                        <span>{color}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tailoring & Alteration Guarantee */}
              <div className="mt-4 pt-3 border-t border-[#F2F2F2] flex items-start gap-2 text-xs text-stone-600">
                <Scissors className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="font-sans leading-snug">
                  {product.alterationNotes ||
                    'In-house master tailor on-site for immediate custom fitting & length adjustment.'}
                </span>
              </div>
            </div>

            {/* Bottom Actions Cluster */}
            <div className="mt-5 pt-3.5 border-t border-[#F2F2F2] space-y-2.5">
              {/* Wishlist and Inquiry Bag Row */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => (isFav ? removeFromWishlist(product.id) : addToWishlist(product))}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    isFav
                      ? 'bg-[#73030D] border-[#73030D] text-white'
                      : 'border-stone-200 text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                  <span className="truncate">{isFav ? 'Saved' : 'Wishlist'}</span>
                </button>

                <button
                  onClick={() => (isBagged ? removeFromBag(product.id) : addToBag(product))}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                    isBagged
                      ? 'bg-[#732F3B] border-[#732F3B] text-white'
                      : 'border-stone-200 text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  {isBagged ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                  <span className="truncate">{isBagged ? 'In Inquiry Bag' : 'Add to Bag'}</span>
                </button>
              </div>

              {/* Primary WhatsApp CTA with pre-filled details */}
              <a
                id="modal-whatsapp-cta-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600 flex-shrink-0" />
                <span className="truncate">
                  Ask Availability on WhatsApp {selectedSize ? `(${selectedSize})` : ''}
                </span>
              </a>

              {/* Quick Call & Directions */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#73030D]" />
                  <span>Call Store</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#0D0D0D] hover:bg-[#73030D] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-white fill-white" />
                  <span>Store Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
