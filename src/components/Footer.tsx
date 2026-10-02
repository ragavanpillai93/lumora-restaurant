import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, Phone, Mail, ArrowUp, Send, Check, X, Shield } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-20 pb-12 text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Vision (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-3xl font-serif tracking-[0.25em] text-white uppercase block mb-4 font-light">
              LUMORA
            </span>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
              A modern culinary sanctuary where live fire embers, Japanese precision, and premier cru cellar reserves convene in nocturnal intimacy.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
                aria-label="WhatsApp Concierge"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
                aria-label="Email Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Chef</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-white transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Tasting Menu</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-white transition-colors">Reservation</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Service Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-4">
              Opening Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-white block font-medium">Wed — Sun</span>
                <span className="text-neutral-400">Dinner: 18:00 – 23:30</span>
              </div>
              <div>
                <span className="text-white block font-medium">Fri — Sun</span>
                <span className="text-neutral-400">Lunch Tasting: 12:00 – 15:30</span>
              </div>
              <div>
                <span className="text-white block font-medium">Mon — Tue</span>
                <span className="text-neutral-400">Cellar Rest & Private Dining Only</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Concierge Dossier (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-2">
              The Seasonal Dossier
            </h4>
            <p className="text-xs text-neutral-400 font-light mb-4">
              Receive private invitations to seasonal tasting menus, cellar releases, and guest chef residencies.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#111116] border border-white/15 rounded-sm px-3 py-2 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#d4af37] hover:bg-[#e5c378] text-black rounded-sm flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#d4af37] font-light">
                  Thank you. You have been added to our private register.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>
            © {new Date().getFullYear()} LUMORA Gastronomy Ltd. All rights reserved. 18 Mayfair Square, London.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Terms & Dining Protocol
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Policy Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0f0f14] border border-[#d4af37]/40 rounded-sm p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <Shield className="w-4 h-4" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {legalModal === 'privacy' ? 'Guest Privacy & Discretion' : 'Dining Terms & House Protocol'}
                </h4>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-neutral-300 font-light space-y-3 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    LUMORA operates under strict VIP confidentiality. Guest reservation records, dining notes, and sommelier preferences are securely held within our private ledger and never disclosed or sold to third parties.
                  </p>
                  <p>
                    Photography within the salon is permitted for personal memories provided discretion for neighboring tables is honored. Flash photography and professional streaming rigs are prohibited during dinner service.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Table Holding:</strong> Reserved tables are held for 15 minutes past the appointed reservation time before being released to waitlisted patrons.
                  </p>
                  <p>
                    <strong>Cancellations:</strong> In honor of daily market sourcing, cancellations or reductions in party size should be communicated at least 24 hours prior to service.
                  </p>
                  <p>
                    <strong>Dress Code:</strong> Smart elegant attire. Tailored jackets are recommended for gentlemen; athletic sportswear, flip-flops, and baseball caps are strictly prohibited.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-sm transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
