import React from 'react';
import { Award, Wine, Flame, Clock } from 'lucide-react';
import cellarDiningImg from '@/src/assets/images/cellar_private_dining_1790929794337.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#08080a] border-t border-white/5 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Restaurant Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4 font-medium">
              <span>The Story & Alchemy</span>
              <span className="w-12 h-[1px] bg-[#d4af37]/40" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-[1.14] mb-6 text-balance">
              Where Ancient Fire Meets <span className="italic font-light text-[#f3e7c4]">Modern Precision</span>
            </h2>

            <div className="space-y-4 text-neutral-300 font-light text-base md:text-lg leading-relaxed">
              <p>
                Founded in the heart of Mayfair, <strong className="text-white font-medium">LUMORA</strong> was conceived as an ode to contrasts — the elemental raw power of open embers harmonized with the surgical nuance of contemporary French and Japanese culinary arts.
              </p>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                Executive Chef Matteo Vane sources only heirloom botanicals, day-boat catches from pristine Atlantic shores, and rare Wagyu nurtured in the misty valleys of Miyazaki. Every course is curated as a multi-sensory progression, heightened by our subterranean reserve of over 1,400 premier cru vintages.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-6 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Flame className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-200">Embers</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  White binchotan coals at 1,000°C yield smokeless caramelization.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Wine className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-200">The Vault</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Temperature-guarded cellar housing centuries of winemaking heritage.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-neutral-200">Craft</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  42 seats per seating, ensuring singular dedication to every table.
                </p>
              </div>
            </div>

            {/* Chef Endorsement Box */}
            <div className="mt-10 p-5 rounded-sm glass-panel border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800 shrink-0 border border-[#d4af37]/40 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80"
                  alt="Executive Chef Matteo Vane"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs italic text-neutral-300 font-serif text-base mb-1">
                  “Gastronomy is not mere sustenance; it is a nocturnal theater where memory and flavor intertwine.”
                </p>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#d4af37]">
                  Matteo Vane · Executive Chef & Founder
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Interior/Food Image with Layered Depth */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src={cellarDiningImg}
                  alt="LUMORA private wine cellar dining room"
                  className="w-full h-[480px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Glassmorphic Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 glass-panel-gold p-6 rounded-sm max-w-xs shadow-2xl border border-[#d4af37]/30 hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-serif text-[#d4af37] font-semibold">1,400+</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-300">Sommelier Reserves</span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Curated by Head Sommelier Elena Rostova, pairing rare biodynamic crus with each seasonal tasting chapter.
                </p>
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
