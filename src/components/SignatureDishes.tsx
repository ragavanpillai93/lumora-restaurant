import React, { useState } from 'react';
import { SIGNATURE_DISHES, Dish } from '../data/restaurantData';
import { ArrowUpRight, Wine, X, Sparkles } from 'lucide-react';

interface SignatureDishesProps {
  onSelectDishForReservation: (dishName: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDishForReservation }) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <section id="signature" className="py-28 md:py-36 bg-[#0a0a0d] relative border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
              <span>Haute Gastronomie</span>
              <span className="w-10 h-[1px] bg-[#d4af37]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Signature <span className="italic font-light text-[#f3e7c4]">Creations</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Four seasonal masterpieces conceived through elemental fire, Japanese precision, and foraged Mediterranean richness.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group cursor-pointer rounded-sm overflow-hidden bg-[#111116] border border-white/10 hover:border-[#d4af37]/45 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/15"
            >
              {/* Large Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-85" />

                {/* Refined Price Tag */}
                <div className="absolute top-3 right-3 px-3.5 py-1 bg-[#08080a]/90 backdrop-blur-md rounded-sm border border-white/15 text-xs font-serif tracking-wider text-[#d4af37] tabular-nums font-semibold">
                  ${dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-neutral-400 mb-2 font-medium">
                    <span>{dish.category}</span>
                    {dish.origin && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{dish.origin.split(',')[0]}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-serif text-white group-hover:text-[#d4af37] transition-colors mb-2 leading-snug">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3 mb-5">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 group-hover:text-neutral-200">
                  <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#d4af37]/90 font-medium">
                    <span>Tasting Notes & Pairing</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish Inspection Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0f0f13] border border-[#d4af37]/35 rounded-sm shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-[#0f0f13]/40 to-transparent" />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#d4af37] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-medium block mb-1">
                    Signature Course · {selectedDish.origin || 'Artisanal Sourcing'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">{selectedDish.name}</h3>
                </div>
                <div className="text-2xl font-serif text-[#d4af37] tabular-nums font-semibold">
                  ${selectedDish.price}
                </div>
              </div>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {/* Sommelier Pairing */}
              {selectedDish.pairing && (
                <div className="p-4 rounded-sm bg-neutral-900/80 border border-white/10 mb-6 flex items-start gap-3">
                  <Wine className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-0.5">
                      Sommelier Reserve Pairing
                    </span>
                    <span className="text-sm font-serif text-neutral-200">{selectedDish.pairing}</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedDish(null)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const dishName = selectedDish.name;
                    setSelectedDish(null);
                    onSelectDishForReservation(dishName);
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] to-[#c5a059] rounded-sm hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  Reserve For This Dish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
