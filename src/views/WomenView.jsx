import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Scissors, Shirt } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData.js';
import { ProductCard } from '../components/ProductCard.jsx';

export const WomenView = ({ onSelectProduct, onNavigate }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const subCategories = ['All', 'Festive Kurtis', 'Lehengas', 'Everyday Ethnic Wear', 'Fusion Co-ords'];

  const filteredProducts = useMemo(() => {
    const womenItems = PRODUCTS_CATALOG.filter((item) => item.category === 'women');
    if (selectedSubCategory === 'All') return womenItems;
    return womenItems.filter((item) => item.subCategory.toLowerCase() === selectedSubCategory.toLowerCase());
  }, [selectedSubCategory]);

  return (
    <div id="women-catalog-view" className="py-8 sm:py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[#73030D] rounded-2xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>महिला परिधान संग्रह • Wedding & Festive Lookbook</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight">
              Women's Ethnic & Festive Collection
            </h1>
            <p className="mt-2 text-[#F2F2F2]/90 text-xs sm:text-base leading-relaxed">
              Explore hand-embroidered festive kurtis, bridal red lehengas, breezy everyday cotton suits, and modern fusion co-ord sets available at our Bhajanpura store.
            </p>
          </div>
          {/* Decorative motif */}
          <div className="absolute right-4 -bottom-10 opacity-15 hidden md:block">
            <Shirt className="w-64 h-64 text-white" />
          </div>
        </div>

        {/* In-store benefits bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#0D0D0D] bg-white p-3.5 rounded-xl border border-[#F2F2F2]">
          <div className="flex items-center gap-2">
            <Scissors className="w-4 h-4 text-[#73030D] flex-shrink-0" />
            <span><strong>In-house Fitting:</strong> Free basic alterations for perfect look</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span><strong>Multiple Sizes:</strong> S to 3XL available in most designs</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#732F3B] flex-shrink-0" />
            <span><strong>Matching Service:</strong> Dupattas & bangles matched in-store</span>
          </div>
        </div>
      </div>

      {/* Sub-Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#F2F2F2]">
          <span className="text-xs font-semibold text-[#8C8C8C] mr-2">Filter Section:</span>
          {subCategories.map((sub) => {
            const isActive = selectedSubCategory === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubCategory(sub)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#73030D] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#0D0D0D] hover:bg-[#F2F2F2] border border-[#F2F2F2]'
                }`}
              >
                {sub === 'Lehengas' ? 'Lehengas & Anarkalis' : sub}
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

        {/* Cross-link to Cosmetics & Accessories Banner */}
        <div className="mt-14 bg-[#F2F2F2] rounded-2xl border border-[#F2F2F2] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#73030D] mb-1 uppercase tracking-wide">
              Complete Your Ethnic Look
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0D0D0D]">
              Pair with Matching Bangles, Kundan Jewelry & Dupattas
            </h2>
            <p className="text-xs sm:text-sm text-[#8C8C8C] mt-1 max-w-xl">
              Visit our dedicated in-store cosmetics and traditional jewelry section to complete your outfit without running around the market.
            </p>
          </div>
          <button
            onClick={() => onNavigate('cosmetics')}
            className="inline-flex items-center gap-2 bg-[#73030D] hover:bg-[#732F3B] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-xs flex-shrink-0 cursor-pointer"
          >
            <span>Explore Matching Accessories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
