import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Shirt } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData.js';
import { ProductCard } from '../components/ProductCard.jsx';

export const MenView = ({ onSelectProduct }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Casual Shirts', 'T-Shirts', 'Denim', 'Formal'];

  const filteredProducts = useMemo(() => {
    const menItems = PRODUCTS_CATALOG.filter((item) => item.category === 'men');
    if (selectedFilter === 'All') return menItems;
    return menItems.filter((item) => item.subCategory.toLowerCase() === selectedFilter.toLowerCase());
  }, [selectedFilter]);

  return (
    <div id="men-catalog-view" className="py-8 sm:py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[#73030D] rounded-2xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>पुरुष परिधान • Everyday & Festive Menswear</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight">
              Men's Casuals, Denim & Festive Kurtas
            </h1>
            <p className="mt-2 text-[#F2F2F2]/90 text-xs sm:text-base leading-relaxed">
              Breathable linen shirts, stretch cotton denim, formal office trousers, and handcrafted festive kurta pajama sets designed for Indian climate and family events.
            </p>
          </div>
          <div className="absolute right-6 -bottom-8 opacity-10 hidden md:block">
            <Shirt className="w-56 h-56 text-white" />
          </div>
        </div>

        {/* Quality Points */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#0D0D0D] bg-white p-3.5 rounded-xl border border-[#F2F2F2]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span><strong>Durable Cottons:</strong> Pre-washed fabrics that resist color bleeding</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#73030D] flex-shrink-0" />
            <span><strong>True Indian Fits:</strong> Regular & comfort cuts in sizes 38 to 46</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#732F3B] flex-shrink-0" />
            <span><strong>Festive Kurtas:</strong> Modi jackets & kurta sets ready for weddings</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#F2F2F2]">
          <span className="text-xs font-semibold text-[#8C8C8C] mr-2">Filter Category:</span>
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#73030D] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#0D0D0D] hover:bg-[#F2F2F2] border border-[#F2F2F2]'
                }`}
              >
                {filter === 'Formal' ? 'Formal & Nehru Jackets' : filter}
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
