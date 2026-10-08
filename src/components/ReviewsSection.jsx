import React from 'react';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, HeartHandshake, Scissors } from 'lucide-react';
import { GOOGLE_REVIEWS, STORE_INFO } from '../data/storeData.js';

export const ReviewsSection = () => {
  return (
    <section id="google-reviews-section" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto bg-white">
      {/* Google Trust Banner & Rating Badge */}
      <div className="bg-white rounded-2xl border border-[#F2F2F2] p-6 sm:p-8 shadow-xs mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* 4.0 Star Rating Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#73030D]/10 border border-[#73030D]/20 flex flex-col items-center justify-center text-[#0D0D0D] shadow-inner flex-shrink-0">
              <div className="flex items-center gap-1">
                <span className="font-serif font-black text-3xl sm:text-4xl text-[#73030D]">
                  {STORE_INFO.rating.toFixed(1)}
                </span>
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-[10px] font-bold text-[#732F3B] uppercase tracking-wider">
                Google Rating
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-5 h-5 text-[#8C8C8C]/40 fill-[#8C8C8C]/20" />
                <span className="text-xs font-semibold text-[#8C8C8C] ml-2">
                  (140+ Google Reviews)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0D0D0D]">
                Bhajanpura's Trusted Neighborhood Fashion Store
              </h2>
              <p className="text-xs sm:text-sm text-[#8C8C8C] mt-1 max-w-xl">
                Serving families across Bhajanpura, Tukhmirpur, Yamuna Vihar, and Northeast Delhi with honest pricing and genuine care.
              </p>
            </div>
          </div>

          {/* Quick Review Action */}
          <div className="flex items-center gap-3">
            <a
              id="google-maps-reviews-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                'Bansals Apparel, ' + STORE_INFO.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#73030D] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Read on Google Maps</span>
            </a>
          </div>
        </div>

        {/* 4 Trust Highlights */}
        <div className="mt-8 pt-6 border-t border-[#F2F2F2] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#73030D]/10 text-[#73030D] flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D0D0D]">Family-First Vibe</div>
              <div className="text-[11px] text-[#8C8C8C]">Approachable & polite staff</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D0D0D]">Trial Rooms & Alteration</div>
              <div className="text-[11px] text-[#8C8C8C]">Same-day fitting support</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <ThumbsUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D0D0D]">Honest Fair Pricing</div>
              <div className="text-[11px] text-[#8C8C8C]">No inflated retail markups</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F2F2F2] text-[#0D0D0D] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#73030D]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0D0D0D]">All 7 Days Open</div>
              <div className="text-[11px] text-[#8C8C8C]">10:30 AM to 9:30 PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Snippets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {GOOGLE_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            id={`google-review-${rev.id}`}
            className="bg-white rounded-xl border border-[#F2F2F2] p-5 shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Reviewer Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full bg-[#73030D] text-white font-bold text-xs flex items-center justify-center"
                  >
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D0D0D]">{rev.author}</div>
                    <div className="text-[10px] text-[#8C8C8C]">{rev.location}</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#8C8C8C]">{rev.date}</div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-2.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs text-[#0D0D0D]/90 leading-relaxed italic">
                "{rev.review}"
              </p>
            </div>

            {/* Verified Footer */}
            <div className="mt-4 pt-3 border-t border-[#F2F2F2] flex items-center justify-between text-[10px] text-emerald-700 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verified Customer
              </span>
              <span className="text-[#8C8C8C] font-normal">Google Review</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
