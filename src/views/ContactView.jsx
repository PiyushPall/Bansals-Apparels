import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  Car,
  Train,
  Store,
  ShieldCheck,
  Send,
  Sparkles,
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData.js';

export const ContactView = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryDepartment, setInquiryDepartment] = useState("Women's Ethnic");
  const [inquiryText, setInquiryText] = useState('');

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bansals Apparel, ' + STORE_INFO.address
  )}`;

  // Google Maps embed URL using the verified location
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Bansals Apparel 2/654/21 Main Market Rd Bhajanpura Delhi 110053'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const message = `Hi Bansals Apparel, My name is ${inquiryName || 'Customer'}. I am inquiring regarding ${inquiryDepartment}. ${
      inquiryText ? inquiryText : 'Is this available in your Bhajanpura store?'
    }`;
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="contact-visit-us-page" className="py-8 sm:py-12 bg-white">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#73030D]/10 text-[#73030D] text-xs font-semibold uppercase tracking-wider mb-2">
          <Store className="w-3.5 h-3.5 text-[#73030D]" />
          <span>Hamari Dukan Par Padhaarein • Visit Our Store</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#0D0D0D] tracking-tight">
          Visit Bansals Apparel in Bhajanpura
        </h1>
        <p className="mt-2 text-[#8C8C8C] text-sm sm:text-base">
          Experience trial rooms, hands-on fabric feel, and personal attention from our staff. Centrally located on Main Market Road, Block B.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Google Maps Iframe Embed */}
        <div className="rounded-2xl overflow-hidden border border-[#F2F2F2] shadow-md bg-[#F2F2F2] mb-10 relative">
          <div className="h-72 sm:h-96 w-full">
            <iframe
              title="Bansals Apparel Bhajanpura Google Maps Location"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.15] contrast-[1.05]"
            />
          </div>

          {/* Quick Floating Bar over Map */}
          <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#F2F2F2] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#0D0D0D]">
              <MapPin className="w-4 h-4 text-[#73030D] flex-shrink-0" />
              <span className="font-semibold">{STORE_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                id="maps-embed-directions-cta"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0D0D0D] hover:bg-[#73030D] text-white font-bold px-3.5 py-1.5 rounded-lg text-xs transition-colors shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-white fill-white" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 bg-[#73030D] hover:bg-[#732F3B] text-white font-semibold px-3.5 py-1.5 rounded-lg text-xs transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Info & In-Store Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Store Hours & Landmark Guidance */}
          <div className="lg:col-span-7 space-y-6">
            {/* Store Hours Table */}
            <div className="bg-white rounded-2xl border border-[#F2F2F2] p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#73030D]" />
                <h2 className="font-serif font-bold text-[#0D0D0D] text-lg">
                  Store Business Hours (Timings)
                </h2>
              </div>

              <div className="divide-y divide-[#F2F2F2]">
                {STORE_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm"
                  >
                    <div>
                      <div className="font-semibold text-[#0D0D0D]">{h.days}</div>
                      {h.note && (
                        <div className="text-[11px] text-[#8C8C8C]">{h.note}</div>
                      )}
                    </div>
                    <div className="font-mono font-bold text-[#73030D] bg-[#73030D]/10 px-2.5 py-1 rounded-md w-fit">
                      {h.timings}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#F2F2F2] flex items-center gap-2 text-xs text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Open All 7 Days a week for convenient family shopping.</span>
              </div>
            </div>

            {/* Parking & Landmark Guidance */}
            <div className="bg-white rounded-2xl border border-[#F2F2F2] p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-5 h-5 text-[#732F3B]" />
                <h2 className="font-serif font-bold text-[#0D0D0D] text-lg">
                  How to Reach & Bhajanpura Market Guidance
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STORE_INFO.landmarks.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#F2F2F2]"
                  >
                    <div className="flex items-center gap-2 font-serif font-bold text-[#0D0D0D] text-xs sm:text-sm mb-1">
                      {idx === 0 && <Store className="w-4 h-4 text-[#73030D]" />}
                      {idx === 1 && <Train className="w-4 h-4 text-[#73030D]" />}
                      {idx === 2 && <Car className="w-4 h-4 text-[#73030D]" />}
                      {idx === 3 && <MapPin className="w-4 h-4 text-[#73030D]" />}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#8C8C8C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-[#F2F2F2] rounded-xl border border-[#F2F2F2] text-xs text-[#0D0D0D] flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#73030D] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Local Tip for Festival Shoppers:</strong> During Karwa Chauth, Diwali, and wedding seasons, we recommend visiting during morning hours (11:00 AM – 2:00 PM) for relaxed fitting and alteration service.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact & Quick WhatsApp Inquiry */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-[#73030D] text-white rounded-2xl p-6 shadow-md">
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                Contact Store Directly
              </h3>
              <p className="text-xs text-[#F2F2F2]/90 mb-6">
                Have a question regarding lehenga design, children's sizes, or wedding bulk shopping? Call or message us directly.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-colors text-white text-xs sm:text-sm font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white text-[#73030D] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#F2F2F2]/80 font-normal">Telephone Call</div>
                      <div>{STORE_INFO.phone}</div>
                    </div>
                  </div>
                  <span className="text-amber-200 font-bold">Call Now →</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hi Bansals Apparel, I would like to check stock availability in your Bhajanpura store.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors text-white text-xs sm:text-sm font-semibold shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white text-emerald-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 fill-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-100 font-normal">WhatsApp Messenger</div>
                      <div>+91 97737 19071</div>
                    </div>
                  </div>
                  <span className="text-white font-bold">Chat →</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white rounded-2xl border border-[#F2F2F2] p-6 shadow-xs">
              <h3 className="font-serif font-bold text-[#0D0D0D] text-base mb-1">
                Check Stock Availability
              </h3>
              <p className="text-xs text-[#8C8C8C] mb-4">
                Send a quick WhatsApp inquiry with your preferred clothing department and requirements.
              </p>

              <form onSubmit={handleSendInquiry} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-[#0D0D0D] font-medium mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Anjali Gupta"
                    className="w-full px-3 py-2 border border-[#8C8C8C]/30 rounded-xl focus:outline-none focus:border-[#73030D] bg-white text-[#0D0D0D]"
                  />
                </div>

                <div>
                  <label className="block text-[#0D0D0D] font-medium mb-1">
                    Looking For Department
                  </label>
                  <select
                    value={inquiryDepartment}
                    onChange={(e) => setInquiryDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-[#8C8C8C]/30 rounded-xl focus:outline-none focus:border-[#73030D] bg-white text-[#0D0D0D]"
                  >
                    <option value="Women's Ethnic (Kurtis & Lehengas)">Women's Ethnic (Kurtis & Lehengas)</option>
                    <option value="Men's Wear (Shirts, Kurtas & Denim)">Men's Wear (Shirts, Kurtas & Denim)</option>
                    <option value="Kids & Newborn Wear (0 to 14 Yrs)">Kids & Newborn Wear (0 to 14 Yrs)</option>
                    <option value="Cosmetics & Traditional Bangles">Cosmetics & Traditional Bangles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#0D0D0D] font-medium mb-1">
                    What size or design are you looking for?
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    placeholder="e.g. Looking for red bridal lehenga for wedding function or 3-year-old boy kurta pajama..."
                    className="w-full px-3 py-2 border border-[#8C8C8C]/30 rounded-xl focus:outline-none focus:border-[#73030D] bg-white text-[#0D0D0D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
