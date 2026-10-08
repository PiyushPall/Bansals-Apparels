import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORY_CARDS } from '../data/storeData.js';

export const CategoryGrid = ({ onNavigate }) => {
  return (
    <section id="macro-categories-section" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#73030D]/10 text-[#73030D] text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#73030D]" />
          <span>Poora Parivar • Ek Chhat Ke Neeche</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D0D0D] tracking-tight">
          Explore Our Store Departments
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#8C8C8C]">
          Visit Bhajanpura's complete family store. Handpicked readymade styles for weddings, festivals, and daily comfort.
        </p>
      </div>

      {/* 4 Macro Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {CATEGORY_CARDS.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-white border border-[#F2F2F2] flex flex-col cursor-pointer"
            onClick={() => onNavigate(cat.id)}
            id={`category-card-${cat.id}`}
          >
            {/* Image Container with Hover Scale */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F2F2F2]">
              <img
                src={cat.image}
                alt={cat.altText}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/85 via-[#0D0D0D]/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#73030D] font-bold text-[11px] px-2.5 py-1 rounded-full shadow-xs border border-[#F2F2F2]">
                {cat.badge}
              </div>

              {/* In-store items count */}
              <div className="absolute top-3 right-3 bg-[#0D0D0D]/80 backdrop-blur-sm text-[#F2F2F2] text-[11px] px-2 py-0.5 rounded-md font-medium">
                {cat.count}
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block mb-0.5">
                  {cat.hindiName}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#F2F2F2]/90 line-clamp-2 leading-relaxed">
                  {cat.tagline}
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-4 bg-white flex items-center justify-between border-t border-[#F2F2F2] group-hover:bg-[#F2F2F2]/60 transition-colors">
              <span className="text-xs font-semibold text-[#73030D] group-hover:text-[#732F3B] flex items-center gap-1">
                Browse Lookbook
              </span>
              <span className="w-8 h-8 rounded-full bg-[#73030D]/10 group-hover:bg-[#73030D] text-[#73030D] group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
