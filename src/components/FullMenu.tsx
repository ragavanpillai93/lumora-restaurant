import React, { useState } from 'react';
import { FULL_MENU_ITEMS, Dish } from '../data/restaurantData';
import { Wine, Search, Download, Check, Sparkles, Printer, X, ArrowRight } from 'lucide-react';

interface FullMenuProps {
  onReserveDish: (dishName: string) => void;
}

type MenuCategory = 'starters' | 'main' | 'pasta' | 'pizza' | 'desserts' | 'drinks';

export const FullMenu: React.FC<FullMenuProps> = ({ onReserveDish }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [inquiredDish, setInquiredDish] = useState<string | null>(null);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'starters', label: 'Starters', count: FULL_MENU_ITEMS.filter(i => i.category === 'starters').length },
    { key: 'main', label: 'Main Course', count: FULL_MENU_ITEMS.filter(i => i.category === 'main').length },
    { key: 'pasta', label: 'Pasta', count: FULL_MENU_ITEMS.filter(i => i.category === 'pasta').length },
    { key: 'pizza', label: 'Pizza', count: FULL_MENU_ITEMS.filter(i => i.category === 'pizza').length },
    { key: 'desserts', label: 'Desserts', count: FULL_MENU_ITEMS.filter(i => i.category === 'desserts').length },
    { key: 'drinks', label: 'Drinks', count: FULL_MENU_ITEMS.filter(i => i.category === 'drinks').length },
  ];

  const filteredItems = FULL_MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary =
      dietaryFilter === 'all' ||
      (dietaryFilter === 'GF' && item.dietary?.includes('GF')) ||
      (dietaryFilter === 'V' && (item.dietary?.includes('V') || item.dietary?.includes('VG'))) ||
      (dietaryFilter === 'Signature' && item.dietary?.includes('Chef Signature'));

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleInquireDish = (dishName: string) => {
    setInquiredDish(dishName);
    setTimeout(() => {
      onReserveDish(dishName);
    }, 200);
  };

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#0a0a0d] border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
            <span>The Culinary Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            The Autumn <span className="italic font-light text-[#f3e7c4]">Tasting Menu</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Crafted daily around early-morning foraged provisions and direct Atlantic maritime deliveries. Select a category below to explore.
          </p>
        </div>

        {/* Category Controls & Search */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Segmented Category Buttons */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium rounded-sm transition-all duration-300 whitespace-nowrap cursor-pointer border flex items-center gap-2 ${
                  activeCategory === cat.key
                    ? 'bg-[#d4af37] text-[#08080a] border-[#d4af37] shadow-lg shadow-[#d4af37]/20 font-semibold scale-102'
                    : 'text-neutral-300 hover:text-white bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] tabular-nums px-1.5 py-0.2 rounded-sm ${
                  activeCategory === cat.key ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sub-bar: Search & Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish or ingredient (e.g. Wagyu, Truffle)..."
                className="w-full bg-[#121217] border border-white/10 rounded-sm pl-9 pr-4 py-2 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-[#d4af37]/70 transition-colors"
              />
            </div>

            {/* Dietary quick toggles & PDF Download */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 mr-1 hidden md:inline">Dietary:</span>
                {[
                  { key: 'all', label: 'All' },
                  { key: 'GF', label: 'Gluten-Free' },
                  { key: 'V', label: 'Vegetarian' },
                  { key: 'Signature', label: 'Signatures' },
                ].map((diet) => (
                  <button
                    key={diet.key}
                    onClick={() => setDietaryFilter(diet.key)}
                    className={`px-3 py-1 text-[11px] rounded-sm transition-all cursor-pointer ${
                      dietaryFilter === diet.key
                        ? 'bg-neutral-800 text-[#d4af37] border border-[#d4af37]/50 shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-200 border border-transparent'
                    }`}
                  >
                    {diet.label}
                  </button>
                ))}
              </div>

              {/* View/Print PDF Dossier button */}
              <button
                onClick={() => setShowPdfModal(true)}
                className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-300 hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37]/40 rounded-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0 bg-white/[0.02]"
                title="View Printable Tasting Menu"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PDF Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Menu Items List with Smooth Keyframe Transition */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#111116] rounded-sm border border-white/5">
            <p className="text-neutral-400 text-sm">No dishes match your selection in this category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 text-xs uppercase tracking-wider text-[#d4af37] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative pb-6 border-b border-white/10 hover:border-[#d4af37]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-xl font-serif text-white group-hover:text-[#d4af37] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-white/20 mx-2 hidden sm:block" />
                    <span className="text-lg font-serif text-[#d4af37] tabular-nums font-semibold shrink-0">
                      ${item.price}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-3 pr-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                  <div className="flex items-center gap-2">
                    {item.dietary?.map((tag, idx) => (
                      <span key={idx} className="text-neutral-400 tracking-wider">
                        {tag === 'GF' && '· Gluten-Free'}
                        {tag === 'V' && '· Vegetarian'}
                        {tag === 'VG' && '· Plant-Based'}
                        {tag === 'Chef Signature' && '· Chef Signature'}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {item.pairing && (
                      <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] italic hidden sm:flex">
                        <Wine className="w-3 h-3 text-[#d4af37]" />
                        <span className="truncate max-w-[160px]">{item.pairing.split(',')[0]}</span>
                      </div>
                    )}
                    <button
                      onClick={() => handleInquireDish(item.name)}
                      className="text-[11px] uppercase tracking-wider text-[#d4af37] hover:text-[#f3e7c4] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tasting Menu Notice */}
        <div className="mt-16 p-8 rounded-sm glass-panel border border-[#d4af37]/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-serif text-white mb-1">Looking for the Chef’s 7-Course Blind Tasting?</h4>
            <p className="text-xs text-neutral-400 font-light">
              Available Wednesday through Sunday with optional Grand Cru sommelier pairing ($195 / $310 with wine pairing).
            </p>
          </div>
          <button
            onClick={() => onReserveDish("Chef's 7-Course Blind Tasting")}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] to-[#c5a059] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shrink-0 cursor-pointer shadow-md"
          >
            Reserve Tasting Menu
          </button>
        </div>
      </div>

      {/* Printable PDF Menu Preview Modal */}
      {showPdfModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setShowPdfModal(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0f0f14] border border-[#d4af37]/40 rounded-sm p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-2xl font-serif tracking-[0.2em] text-white uppercase block">LUMORA</span>
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]">18 Mayfair Square, London · Autumn Tasting Dossier</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white border border-white/20 rounded-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Print</span>
                </button>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="p-1.5 text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-8 text-xs text-neutral-300">
              <div>
                <h5 className="font-serif text-lg text-[#d4af37] border-b border-white/5 pb-1 mb-3">Starters</h5>
                <div className="space-y-2">
                  {FULL_MENU_ITEMS.filter(i => i.category === 'starters').map(i => (
                    <div key={i.id} className="flex justify-between">
                      <div>
                        <span className="font-medium text-white">{i.name}</span>
                        <p className="text-[11px] text-neutral-400 font-light">{i.description}</p>
                      </div>
                      <span className="font-serif text-[#d4af37] tabular-nums shrink-0 ml-4">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-serif text-lg text-[#d4af37] border-b border-white/5 pb-1 mb-3">Main Courses</h5>
                <div className="space-y-2">
                  {FULL_MENU_ITEMS.filter(i => i.category === 'main').map(i => (
                    <div key={i.id} className="flex justify-between">
                      <div>
                        <span className="font-medium text-white">{i.name}</span>
                        <p className="text-[11px] text-neutral-400 font-light">{i.description}</p>
                      </div>
                      <span className="font-serif text-[#d4af37] tabular-nums shrink-0 ml-4">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-serif text-lg text-[#d4af37] border-b border-white/5 pb-1 mb-3">Pasta & Pizza</h5>
                <div className="space-y-2">
                  {FULL_MENU_ITEMS.filter(i => i.category === 'pasta' || i.category === 'pizza').slice(0, 4).map(i => (
                    <div key={i.id} className="flex justify-between">
                      <div>
                        <span className="font-medium text-white">{i.name}</span>
                        <p className="text-[11px] text-neutral-400 font-light">{i.description}</p>
                      </div>
                      <span className="font-serif text-[#d4af37] tabular-nums shrink-0 ml-4">${i.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center text-[11px] text-neutral-400">
              For allergen requests or private wine vault bookings, contact concierge@lumora-restaurant.com.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
