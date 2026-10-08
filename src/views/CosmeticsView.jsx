import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowLeft, Gem, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData.js';
import { ProductCard } from '../components/ProductCard.jsx';

export const CosmeticsView = ({ onSelectProduct, onNavigate }) => {
  const [selectedSub, setSelectedSub] = useState('All');

  const subCategories = ['All', 'Jewelry & Sets', 'Bangles & Chuda', 'Bags & Accessories', 'Dupattas', 'Beauty & Shringar'];

  const filteredProducts = useMemo(() => {
    const cosmeticsItems = PRODUCTS_CATALOG.filter((item) => item.category === 'cosmetics');
    if (selectedSub === 'All') return cosmeticsItems;
    return cosmeticsItems.filter((item) => item.subCategory.toLowerCase() === selectedSub.toLowerCase());
  }, [selectedSub]);

  return (
    <div id="cosmetics-catalog-view" className="py-8 sm:py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[#73030D] rounded-2xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-xs">
              <Gem className="w-3.5 h-3.5 text-amber-400" />
              <span>श्रृंगार एवं आभूषण • Complete Outfit Matching</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight">
              Cosmetics, Bangles & Ethnic Accessories
            </h1>
            <p className="mt-2 text-[#F2F2F2]/90 text-xs sm:text-base leading-relaxed">
              Complete your traditional look in one visit. High-shine glass and velvet bangles, bridal kundan jewelry sets, Banarasi potli bags, and long-stay cosmetic essentials.
            </p>
          </div>
          <div className="absolute right-6 -bottom-8 opacity-15 hidden md:block">
            <Gem className="w-56 h-56 text-white" />
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#0D0D0D] bg-white p-3.5 rounded-xl border border-[#F2F2F2]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#732F3B] flex-shrink-0" />
            <span><strong>Exact Color Match:</strong> Bring your dress to match bangles instantly</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span><strong>Bridal Sets:</strong> Complete sets with choker, earrings & maangtikka</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#73030D] flex-shrink-0" />
            <span><strong>Skin-Safe:</strong> Lead-free jewelry finishes and certified cosmetics</span>
          </div>
        </div>
      </div>

      {/* Cross-link to Women's Page Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[#F2F2F2] border border-[#F2F2F2] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-[#0D0D0D] font-medium">
            <span className="font-bold text-[#73030D]">Shopping for an outfit first?</span>
            <span>Browse our curated lehengas, festive kurtis, and designer suits.</span>
          </div>
          <button
            onClick={() => onNavigate('women')}
            className="inline-flex items-center gap-1.5 text-[#73030D] hover:text-[#732F3B] font-bold underline underline-offset-4 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Women's Ethnic Wear</span>
          </button>
        </div>
      </div>

      {/* Sub-Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#F2F2F2]">
          <span className="text-xs font-semibold text-[#8C8C8C] mr-2">Filter Items:</span>
          {subCategories.map((sub) => {
            const isActive = selectedSub === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSub(sub)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#73030D] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#0D0D0D] hover:bg-[#F2F2F2] border border-[#F2F2F2]'
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
