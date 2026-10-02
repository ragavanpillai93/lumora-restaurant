import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const cleanNumber = RESTAURANT_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const prefilledMessage = encodeURIComponent(
    'Hello LUMORA Concierge, I would like to inquire about reserving a table for dinner.'
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-sm bg-[#121217]/95 backdrop-blur-md border border-[#25D366]/40 shadow-2xl text-xs text-neutral-200 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Concierge online · Reserve via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer shadow-[#25D366]/30 border-2 border-white/20"
        aria-label="Direct WhatsApp Concierge reservation"
      >
        <Phone className="w-6 h-6 text-black fill-black" />
        {/* Subtle pulse ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/60 animate-ping opacity-60 pointer-events-none" />
      </a>
    </aside>
  );
};
