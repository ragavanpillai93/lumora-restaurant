import React from 'react';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import heroDiningImg from '@/src/assets/images/hero_cinematic_dining_1790929757006.jpg';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08080a]">
      {/* Background Image with Cinematic Depth */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDiningImg}
          alt="LUMORA luxury nocturnal dining atmosphere"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000 will-change-transform"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark luxury overlays for contrast & legibility */}
        <div className="absolute inset-0 bg-[#08080a]/65 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08080a]/50 to-[#08080a]" />
      </div>

      {/* Decorative Gold Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#d4af37]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-32 pb-20 flex flex-col items-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-3 text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-[#d4af37] mb-6 opacity-95">
          <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          <span>Haute Gastronomie · Mayfair, London</span>
          <span className="w-8 h-[1px] bg-[#d4af37]/60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-white mb-6 leading-[1.08] max-w-4xl text-balance">
          A Modern <span className="italic font-light text-[#f5ebd7]">Dining Experience</span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide text-balance">
          Where culinary avant-garde meets nocturnal intimacy. An elevated culinary sanctuary crafted for sensory discovery, artisanal fire, and rare vintages.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#c5a059] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Reserve Your Table</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-200 hover:text-white glass-panel hover:bg-white/10 rounded-sm transition-all duration-300 border border-white/20 hover:border-[#d4af37]/50 cursor-pointer"
          >
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Accolades & Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-8 border-t border-white/10 w-full text-left">
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Distinction</span>
            <span className="text-sm font-serif text-neutral-100 tracking-wide mt-1">Three Stars Culinary Craft</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Philosophy</span>
            <span className="text-sm font-serif text-neutral-100 tracking-wide mt-1">Live Binchotan & Foraged</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">The Cellar</span>
            <span className="text-sm font-serif text-neutral-100 tracking-wide mt-1">1,400 Curated Bottles</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Location</span>
            <span className="text-sm font-serif text-neutral-100 tracking-wide mt-1">18 Mayfair Square, London</span>
          </div>
        </div>
      </div>

      {/* Small Animated Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors group cursor-pointer"
        aria-label="Scroll down to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 group-hover:text-[#d4af37]">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#d4af37] p-1 flex justify-center transition-colors">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
