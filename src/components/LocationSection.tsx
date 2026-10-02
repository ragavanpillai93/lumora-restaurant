import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Sparkles, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="location" className="py-28 md:py-36 bg-[#08080a] border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
              <span>Mayfair, London · Arrival & Atmosphere</span>
              <span className="w-10 h-[1px] bg-[#d4af37]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Location & <span className="italic font-light text-[#f3e7c4]">Hours</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Nestled in discreet seclusion on Mayfair Square. Direct entrance via private portico with complimentary valet reception.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address & Contact */}
            <div className="p-8 rounded-sm bg-[#111116] border border-white/10 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-medium block mb-2">
                  Sanctuary Address
                </span>
                <p className="text-xl font-serif text-white mb-2 leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Car className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{RESTAURANT_INFO.valet}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Direct Telephone</span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-neutral-200 hover:text-[#d4af37] transition-colors flex items-center gap-1 cursor-pointer font-mono"
                  >
                    {copiedPhone ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <span>{RESTAURANT_INFO.phone}</span>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Concierge Desk</span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-neutral-200 hover:text-[#d4af37] transition-colors underline"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Dress Code</span>
                  <span className="text-neutral-300">Smart Formal</span>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-8 rounded-sm bg-[#111116] border border-white/10 shadow-xl flex-grow">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-medium block mb-4">
                Service Schedule
              </span>

              <div className="space-y-4">
                {RESTAURANT_INFO.hours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-baseline text-xs pb-3 border-b border-white/5 last:border-0 last:pb-0">
                    <div>
                      <span className="font-semibold text-neutral-200 block">{schedule.days}</span>
                      <span className="text-neutral-400 text-[11px]">{schedule.meal}</span>
                    </div>
                    <span className="font-serif text-[#d4af37] tabular-nums text-sm font-medium">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Area / Aesthetic Representation */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-white/15 bg-[#121217] relative shadow-2xl flex flex-col min-h-[420px] lg:min-h-full">
            {/* Interactive Dark Map Simulation */}
            <div className="relative w-full flex-grow bg-[#0c0c10] overflow-hidden flex items-center justify-center p-8 group">
              {/* Abstract Cartographic Grid Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-[#0c0c10]/80" />

              {/* Street road vectors aesthetic */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="0" y1="65%" x2="100%" y2="65%" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="50%" cy="50%" r="80" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.4" />
                <circle cx="50%" cy="50%" r="130" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.2" />
              </svg>

              {/* Stylized Pin */}
              <div className="relative z-10 flex flex-col items-center animate-pulse">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-2xl gold-glow">
                  <MapPin className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div className="mt-3 px-4 py-1.5 bg-[#08080a]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-sm text-center">
                  <span className="text-xs font-serif text-white font-semibold tracking-wider block">
                    LUMORA MAYFAIR
                  </span>
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-widest">
                    18 Mayfair Square
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar with Directions Button */}
            <div className="p-6 bg-[#0e0e13] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs text-neutral-300 font-medium block">
                  Private Valet & Chauffeured Drop-off
                </span>
                <span className="text-[11px] text-neutral-400">
                  Green Park Station (Piccadilly / Victoria lines) · 4 min walk
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=18+Mayfair+Square+London"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] to-[#c5a059] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
