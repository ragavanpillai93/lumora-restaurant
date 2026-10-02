import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservation', href: '#reservation' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-2xl bg-[#08080a]/85 backdrop-blur-xl border-b border-white/10'
            : 'bg-gradient-to-b from-[#08080a]/95 via-[#08080a]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-white hover:text-[#d4af37] transition-colors uppercase font-light cursor-pointer select-none"
          >
            LUMORA
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs uppercase tracking-[0.18em] font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 hover:text-[#d4af37] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#c5a059] rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-[#d4af37]/20 whitespace-nowrap"
            >
              <span>Reserve Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-200 hover:text-[#d4af37] focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#08080a]/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-8 pt-28 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">Mayfair, London</p>
          <nav className="flex flex-col gap-5 text-xl font-serif text-neutral-200 tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#d4af37] transition-colors py-1 flex items-center justify-between border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans text-neutral-400 tracking-widest uppercase">Explore</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#c5a059] rounded-sm shadow-md cursor-pointer"
          >
            Reserve Your Table
          </button>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hello LUMORA Concierge, I would like to reserve a table.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-neutral-300 hover:text-white border border-white/15 rounded-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Booking</span>
          </a>
          <p className="text-center text-[11px] text-neutral-400">18 Mayfair Square, London · +44 (0) 20 7946 0882</p>
        </div>
      </div>
    </>
  );
};
