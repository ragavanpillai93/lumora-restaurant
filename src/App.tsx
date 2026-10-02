import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { ChefSpecial } from './components/ChefSpecial';
import { FullMenu } from './components/FullMenu';
import { ExperienceGallery } from './components/ExperienceGallery';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [initialDishRequest, setInitialDishRequest] = useState<string>('');

  const scrollToReservation = (dishName?: string) => {
    if (dishName) {
      setInitialDishRequest(dishName);
    }
    const target = document.querySelector('#reservation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const target = document.querySelector('#menu');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#f3e7c4] relative">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenReservation={() => scrollToReservation()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenReservation={() => scrollToReservation()}
          onExploreMenu={scrollToMenu}
        />

        {/* 2. About Section (Split layout with story & large interior image) */}
        <About />

        {/* 3. Signature Dishes Section (4 requested dishes) */}
        <SignatureDishes
          onSelectDishForReservation={(dishName) => scrollToReservation(dishName)}
        />

        {/* 4. Chef's Special (Full-width cinematic section with parallax visual effect) */}
        <ChefSpecial
          onOpenReservation={() => scrollToReservation("Chef's Special: Obsidian Langoustine & Oscietra Caviar")}
        />

        {/* 5. Full Categorized Menu with dynamic category tabs */}
        <FullMenu
          onReserveDish={(dishName) => scrollToReservation(dishName)}
        />

        {/* 6. Experience Section (The Chambers & Salons) */}
        <ExperienceGallery />

        {/* 7. Gallery Section (Interior, Chef, Prep, Table, Evening Ambience + Lightbox) */}
        <GallerySection />

        {/* 8. Table Reservation Section */}
        <ReservationSection
          initialDishRequest={initialDishRequest}
          onClearInitialDish={() => setInitialDishRequest('')}
        />

        {/* 9. Location, Opening Hours & Google Maps Section */}
        <LocationSection />
      </main>

      {/* 10. Premium Footer */}
      <Footer onOpenReservation={() => scrollToReservation()} />

      {/* 11. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
