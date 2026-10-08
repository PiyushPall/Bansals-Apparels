import React, { useState, useMemo } from 'react';
import { Sparkles, Heart, Baby, ShieldCheck } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData.js';
import { ProductCard } from '../components/ProductCard.jsx';

export const KidsView = ({ onSelectProduct }) => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');

  const ageGroups = [
    { id: 'All', label: 'All Age Groups', range: '0 to 14 Years' },
    { id: '0-2', label: '0 – 2 Years', range: 'Newborns & Infants' },
    { id: 'toddler', label: 'Toddlers', range: '2 – 5 Years' },
    { id: 'pre-teen', label: 'Pre-teens', range: '6 – 14 Years' },
  ];

  const filteredProducts = useMemo(() => {
    const kidsItems = PRODUCTS_CATALOG.filter((item) => item.category === 'kids');
    if (selectedAgeGroup === 'All') return kidsItems;
    return kidsItems.filter((item) => item.ageGroup === selectedAgeGroup);
  }, [selectedAgeGroup]);

  return (
    <div id="kids-catalog-view" className="py-8 sm:py-12 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="bg-[#73030D] rounded-2xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3 backdrop-blur-xs">
              <Baby className="w-3.5 h-3.5 text-amber-400" />
              <span>नवजात व बच्चों के वस्त्र • Newborn to 14 Years</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight">
              Newborn & Kids Garments Collection
            </h1>
            <p className="mt-2 text-[#F2F2F2]/90 text-xs sm:text-base leading-relaxed">
              Safe, skin-friendly, and delightful apparel for little ones. From gentle hospital welcome sets to celebratory toddler dhoti kurtas and party dresses.
            </p>
          </div>
          <div className="absolute right-6 -bottom-6 opacity-15 hidden md:block">
            <Heart className="w-56 h-56 text-white" />
          </div>
        </div>

        {/* Parent Reassurance Strip */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#0D0D0D] bg-white p-3.5 rounded-xl border border-[#F2F2F2]">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#73030D] flex-shrink-0" />
            <span><strong>100% Bio-Wash Cotton:</strong> Gentle on tender infant skin</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span><strong>Non-Itchy Linings:</strong> Pure cotton inner linings on all party gowns</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#732F3B] flex-shrink-0" />
            <span><strong>Hassle-Free Dressing:</strong> Snap buttons & elasticated waists</span>
          </div>
        </div>
      </div>

      {/* Filter by Age Group Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-[#F2F2F2]">
          <span className="text-xs font-semibold text-[#8C8C8C] mr-1">Select Age Group:</span>
          {ageGroups.map((group) => {
            const isActive = selectedAgeGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedAgeGroup(group.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#73030D] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#0D0D0D] hover:bg-[#F2F2F2] border border-[#F2F2F2]'
                }`}
              >
                <span>{group.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-amber-200' : 'text-[#8C8C8C]'}`}>
                  ({group.range})
                </span>
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
