import React from 'react';
import { CHEF_SPECIAL } from '../data/restaurantData';
import { Sparkles, Wine, ArrowRight, Flame } from 'lucide-react';

interface ChefSpecialProps {
  onOpenReservation: () => void;
}

export const ChefSpecial: React.FC<ChefSpecialProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/5 overflow-hidden">
      {/* Full-width cinematic atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src={CHEF_SPECIAL.image}
          alt=""
          className="w-full h-full object-cover blur-2xl scale-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#08080a]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column with Parallax Frame */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative group">
              {/* Outer decorative borders */}
              <div className="absolute -inset-3 rounded-sm border border-[#d4af37]/25 pointer-events-none transition-all duration-700 group-hover:border-[#d4af37]/50" />

              {/* Main Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-neutral-900 shadow-2xl">
                <img
                  src={CHEF_SPECIAL.image}
                  alt={CHEF_SPECIAL.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-65" />

                {/* Floating Price Badge */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-[#08080a]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-sm shadow-xl">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-sans">
                    Tasting Course
                  </span>
                  <span className="text-2xl font-serif text-[#d4af37] font-semibold tabular-nums">
                    ${CHEF_SPECIAL.price}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Column with Large Typography */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef's Masterpiece</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 leading-[1.08] tracking-tight">
              {CHEF_SPECIAL.title}
            </h2>

            <p className="text-xs uppercase tracking-[0.2em] text-[#e5c378]/80 mb-6 font-medium">
              {CHEF_SPECIAL.subtitle}
            </p>

            <p className="text-neutral-300 font-light text-base md:text-lg leading-relaxed mb-6">
              {CHEF_SPECIAL.description}
            </p>

            {/* Chef's personal note */}
            <blockquote className="p-4 rounded-sm border-l-2 border-[#d4af37] bg-white/[0.02] mb-6">
              <p className="text-sm font-serif italic text-neutral-300 leading-relaxed mb-2">
                {CHEF_SPECIAL.chefQuote}
              </p>
              <footer className="text-[11px] uppercase tracking-widest text-[#d4af37] font-medium">
                — {CHEF_SPECIAL.chefName}, {CHEF_SPECIAL.chefRole}
              </footer>
            </blockquote>

            {/* Wine Pairing */}
            <div className="p-4 rounded-sm glass-panel border border-white/10 mb-8 flex items-start gap-3">
              <Wine className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <span className="font-semibold text-neutral-200 block mb-0.5 uppercase tracking-wider text-[10px]">
                  Sommelier Vintage Recommendation
                </span>
                {CHEF_SPECIAL.sommelierNote}
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#c5a059] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#d4af37]/20 cursor-pointer group"
              >
                <span>Reserve Chef's Table</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
