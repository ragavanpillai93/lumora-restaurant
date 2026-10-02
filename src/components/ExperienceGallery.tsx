import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/restaurantData';
import { Maximize2, X, Users, Sparkles } from 'lucide-react';

export const ExperienceGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#08080a] border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
              <span>Ambiance & Architecture</span>
              <span className="w-10 h-[1px] bg-[#d4af37]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              The Nocturnal <span className="italic font-light text-[#f3e7c4]">Atmosphere</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Every chamber at LUMORA was sculpted by award-winning architectural atelier to evoke shadow, acoustic intimacy, and tactile warmth.
          </p>
        </div>

        {/* Gallery Grid (Bento Style with Varied Rhythms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-sm overflow-hidden bg-[#111116] border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-end min-h-[380px] md:min-h-[440px]"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Content Box */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#d4af37] font-medium">
                    {item.subtitle}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#d4af37] group-hover:border-[#d4af37]/40 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed mb-4 max-w-xl">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-neutral-400">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{item.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0e0e12] border border-[#d4af37]/30 rounded-sm shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:text-[#d4af37] transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium block mb-1">
                {activeItem.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                {activeItem.title}
              </h3>
              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-4">
                {activeItem.description}
              </p>
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm text-xs text-neutral-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#d4af37]" />
                <span>{activeItem.capacity}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
