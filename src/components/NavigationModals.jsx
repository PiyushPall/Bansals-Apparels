import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Heart, ShoppingBag, Trash2, ArrowRight, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { useStore } from '../context/StoreContext.jsx';
import { PRODUCTS_CATALOG, STORE_INFO } from '../data/storeData.js';

export const NavigationModals = ({ onSelectProduct, onNavigate }) => {
  const {
    searchOpen,
    setSearchOpen,
    wishlistDrawerOpen,
    setWishlistDrawerOpen,
    bagDrawerOpen,
    setBagDrawerOpen,
    storeInfoModalOpen,
    setStoreInfoModalOpen,
    wishlist,
    removeFromWishlist,
    bag,
    removeFromBag,
    addToBag,
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Filtered search results
  const searchResults = PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory = selectedCategoryFilter === 'all' || item.category === selectedCategoryFilter;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;
    const matchesText =
      item.title.toLowerCase().includes(query) ||
      item.subCategory.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesText;
  });

  const sendWishlistWhatsApp = () => {
    if (wishlist.length === 0) return;
    const itemsList = wishlist.map((item, idx) => `${idx + 1}. ${item.title} (${item.subCategory})`).join('\n');
    const message = `Namaste Bansals Apparel! I am interested in checking availability for these ${wishlist.length} item(s) from your lookbook:\n\n${itemsList}\n\nPlease let me know if these are in stock at your Bhajanpura store.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendBagWhatsApp = () => {
    if (bag.length === 0) return;
    const itemsList = bag.map((item, idx) => `${idx + 1}. ${item.title} (${item.subCategory})`).join('\n');
    const message = `Namaste Bansals Apparel! I would like to inquire regarding these ${bag.length} item(s) from your online store catalog:\n\n${itemsList}\n\nCan I visit your Bhajanpura store for trial and fitting today?`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* 1. SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-[#0D0D0D]/60 backdrop-blur-xs"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#F2F2F2] overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="p-4 sm:p-5 border-b border-[#F2F2F2] flex items-center gap-3">
                <Search className="w-5 h-5 text-[#73030D] flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search kurtis, lehengas, shirts, kids wear, bangles..."
                  className="w-full text-base sm:text-lg text-[#0D0D0D] placeholder-[#8C8C8C] outline-none bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-full text-[#8C8C8C] hover:text-[#0D0D0D]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 rounded-lg text-[#8C8C8C] hover:text-[#0D0D0D] hover:bg-[#F2F2F2] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Department Filter Pills */}
              <div className="px-4 py-2.5 bg-[#F2F2F2]/60 border-b border-[#F2F2F2] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
                <span className="text-[#8C8C8C] font-medium whitespace-nowrap">Filter:</span>
                {[
                  { id: 'all', label: 'All Collections' },
                  { id: 'women', label: "Women's" },
                  { id: 'men', label: "Men's" },
                  { id: 'kids', label: 'Kids & Newborn' },
                  { id: 'cosmetics', label: 'Cosmetics' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryFilter(cat.id)}
                    className={`px-3 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                      selectedCategoryFilter === cat.id
                        ? 'bg-[#73030D] text-white'
                        : 'bg-white text-[#0D0D0D] border border-[#8C8C8C]/30 hover:border-[#73030D]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Results List */}
              <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#F2F2F2]">
                {searchResults.length === 0 ? (
                  <div className="py-12 text-center text-[#8C8C8C]">
                    <p className="text-sm">No items found matching "{searchQuery}".</p>
                    <p className="text-xs mt-1">Try searching for "kurti", "lehenga", "shirt", or "cotton".</p>
                  </div>
                ) : (
                  searchResults.slice(0, 8).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        onSelectProduct(item);
                        setSearchOpen(false);
                      }}
                      className="py-3 flex items-center gap-4 hover:bg-[#F2F2F2]/50 p-2 rounded-xl transition-colors cursor-pointer group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-lg flex-shrink-0 bg-[#F2F2F2]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#73030D] bg-[#73030D]/10 px-2 py-0.5 rounded">
                            {item.subCategory}
                          </span>
                          {item.featuredBadge && (
                            <span className="text-[10px] font-medium text-[#732F3B]">
                              {item.featuredBadge}
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-[#0D0D0D] truncate group-hover:text-[#73030D] transition-colors mt-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#8C8C8C] truncate">{item.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#73030D] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. WISHLIST DRAWER */}
      <AnimatePresence>
        {wishlistDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setWishlistDrawerOpen(false)}
              className="fixed inset-0 bg-[#0D0D0D]/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-[#F2F2F2]"
            >
              {/* Header */}
              <div className="p-4 border-b border-[#F2F2F2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#73030D] fill-[#73030D]" />
                  <h3 className="font-serif font-bold text-lg text-[#0D0D0D]">
                    Saved Favorites ({wishlist.length})
                  </h3>
                </div>
                <button
                  onClick={() => setWishlistDrawerOpen(false)}
                  className="p-1.5 rounded-lg text-[#8C8C8C] hover:text-[#0D0D0D] hover:bg-[#F2F2F2] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {wishlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#8C8C8C]">
                    <div className="w-16 h-16 rounded-full bg-[#F2F2F2] flex items-center justify-center mb-3 text-[#8C8C8C]">
                      <Heart className="w-8 h-8" />
                    </div>
                    <p className="font-serif font-semibold text-[#0D0D0D] text-base">Your Wishlist is Empty</p>
                    <p className="text-xs mt-1 max-w-xs text-[#8C8C8C]">
                      Click the heart icon on any kurti, lehenga, or children's dress to save it for your store visit.
                    </p>
                  </div>
                ) : (
                  wishlist.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#F2F2F2] hover:border-[#732F3B]/30 transition-all bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-[#73030D] font-bold uppercase">{item.subCategory}</div>
                        <h4
                          onClick={() => {
                            onSelectProduct(item);
                            setWishlistDrawerOpen(false);
                          }}
                          className="text-xs sm:text-sm font-semibold text-[#0D0D0D] truncate hover:text-[#73030D] cursor-pointer"
                        >
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <button
                            onClick={() => {
                              addToBag(item);
                            }}
                            className="text-[11px] font-semibold text-[#73030D] hover:underline"
                          >
                            + Add to Inquiry
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 text-[#8C8C8C] hover:text-[#73030D] transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Actions */}
              {wishlist.length > 0 && (
                <div className="p-4 border-t border-[#F2F2F2] bg-[#F2F2F2]/30 space-y-2">
                  <button
                    onClick={sendWishlistWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-[#73030D] hover:bg-[#732F3B] text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  >
                    <span>Send Wishlist to WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-[#8C8C8C]">
                    Direct check with Bhajanpura store staff for sizes & trial availability
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. INQUIRY BAG DRAWER */}
      <AnimatePresence>
        {bagDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBagDrawerOpen(false)}
              className="fixed inset-0 bg-[#0D0D0D]/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 border-l border-[#F2F2F2]"
            >
              {/* Header */}
              <div className="p-4 border-b border-[#F2F2F2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#73030D]" />
                  <h3 className="font-serif font-bold text-lg text-[#0D0D0D]">
                    Inquiry Bag ({bag.length})
                  </h3>
                </div>
                <button
                  onClick={() => setBagDrawerOpen(false)}
                  className="p-1.5 rounded-lg text-[#8C8C8C] hover:text-[#0D0D0D] hover:bg-[#F2F2F2] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {bag.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#8C8C8C]">
                    <div className="w-16 h-16 rounded-full bg-[#F2F2F2] flex items-center justify-center mb-3 text-[#8C8C8C]">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="font-serif font-semibold text-[#0D0D0D] text-base">Inquiry Bag is Empty</p>
                    <p className="text-xs mt-1 max-w-xs text-[#8C8C8C]">
                      Browse items and add to inquiry to check trial room booking or size availability at our Bhajanpura store.
                    </p>
                  </div>
                ) : (
                  bag.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#F2F2F2] bg-white"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-[#73030D] font-bold uppercase">{item.subCategory}</div>
                        <h4
                          onClick={() => {
                            onSelectProduct(item);
                            setBagDrawerOpen(false);
                          }}
                          className="text-xs sm:text-sm font-semibold text-[#0D0D0D] truncate hover:text-[#73030D] cursor-pointer"
                        >
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-[#8C8C8C] mt-0.5">Trial & Alterations Available</div>
                      </div>
                      <button
                        onClick={() => removeFromBag(item.id)}
                        className="p-2 text-[#8C8C8C] hover:text-[#73030D] transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Actions */}
              {bag.length > 0 && (
                <div className="p-4 border-t border-[#F2F2F2] bg-[#F2F2F2]/30 space-y-2">
                  <button
                    onClick={sendBagWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-[#8C8C8C]">
                    We will hold these items or confirm sizes before you arrive at the store.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. STORE PROFILE / INFO MODAL */}
      <AnimatePresence>
        {storeInfoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStoreInfoModalOpen(false)}
              className="fixed inset-0 bg-[#0D0D0D]/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#F2F2F2] overflow-hidden z-10"
            >
              <div className="bg-gradient-to-r from-[#73030D] to-[#732F3B] p-6 text-white relative">
                <button
                  onClick={() => setStoreInfoModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-xs font-semibold text-[#F2F2F2] uppercase tracking-widest">
                  Bhajanpura Retail Store
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">Bansals Apparel</h3>
                <p className="text-xs text-[#F2F2F2]/90 mt-1">
                  Complete Family Fashion • Women, Men, Kids & Cosmetics
                </p>
              </div>

              <div className="p-6 space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#73030D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0D0D0D]">Store Location:</div>
                    <div className="text-[#8C8C8C] mt-0.5">{STORE_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#73030D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0D0D0D]">Business Hours:</div>
                    <div className="text-[#8C8C8C] mt-0.5">10:30 AM – 9:30 PM (Open All 7 Days)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#73030D] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0D0D0D]">Direct Telephone:</div>
                    <div className="text-[#8C8C8C] mt-0.5">{STORE_INFO.phone}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2F2F2] flex items-center gap-3">
                  <a
                    href={`tel:${STORE_INFO.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#73030D] hover:bg-[#732F3B] text-white font-semibold py-2.5 rounded-xl transition-colors text-xs sm:text-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Store</span>
                  </a>
                  <button
                    onClick={() => {
                      setStoreInfoModalOpen(false);
                      onNavigate('contact');
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#F2F2F2] hover:bg-[#8C8C8C]/20 text-[#0D0D0D] font-semibold py-2.5 rounded-xl transition-colors text-xs sm:text-sm"
                  >
                    <span>Full Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
