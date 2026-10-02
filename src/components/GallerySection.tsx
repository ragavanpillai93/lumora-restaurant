import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { key: 'all', label: 'All Curations' },
    { key: 'interior', label: 'Restaurant Interior' },
    { key: 'chef', label: 'The Chef' },
    { key: 'prep', label: 'Food Preparation' },
    { key: 'table', label: 'Dining Table' },
    { key: 'ambience', label: 'Evening Ambience' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeFilter === 'all' || item.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const prevItem = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextItem = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#08080a] border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
              <span>Visual Anthology</span>
              <span className="w-10 h-[1px] bg-[#d4af37]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Atmosphere & <span className="italic font-light text-[#f3e7c4]">Artistry</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            An intimate glimpse behind the obsidian doors of LUMORA — capturing the raw energy of live fire, meticulous culinary composition, and nocturnal warmth.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center overflow-x-auto pb-4 mb-10 scrollbar-none gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                activeFilter === filter.key
                  ? 'bg-neutral-800 text-[#d4af37] border-[#d4af37]/60 shadow-md'
                  : 'text-neutral-400 hover:text-white bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-sm overflow-hidden bg-[#111116] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 cursor-pointer shadow-xl ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-[#08080a]/85 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-medium">
                {item.categoryLabel}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-[#08080a]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#d4af37] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2 max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItemIndex !== null && filteredItems[activeItemIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 text-white hover:text-[#d4af37] border border-white/20 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevItem();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:text-[#d4af37] border border-white/20 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextItem();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 text-white hover:text-[#d4af37] border border-white/20 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full bg-[#0e0e13] border border-[#d4af37]/35 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
              <img
                src={filteredItems[activeItemIndex].image}
                alt={filteredItems[activeItemIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#0e0e13] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold block mb-1">
                  {filteredItems[activeItemIndex].categoryLabel} · Frame {activeItemIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="text-2xl font-serif text-white">
                  {filteredItems[activeItemIndex].title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mt-1 max-w-2xl">
                  {filteredItems[activeItemIndex].description}
                </p>
              </div>

              <div className="text-xs text-neutral-400 font-mono tracking-wider shrink-0">
                LUMORA ARCHIVE
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
