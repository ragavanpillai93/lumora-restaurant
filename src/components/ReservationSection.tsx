import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle2, MessageSquare, Sparkles, MapPin, X, CalendarCheck, ShieldCheck, Printer, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  initialDishRequest?: string;
  onClearInitialDish?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialDishRequest,
  onClearInitialDish
}) => {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2); // Default 2 days ahead
    return d.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [specialRequest, setSpecialRequest] = useState(
    initialDishRequest ? `Inquiry regarding: ${initialDishRequest}` : ''
  );

  // Validation errors
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    date?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    code: string;
    name: string;
    email: string;
    phone: string;
    guests: number;
    date: string;
    time: string;
    specialRequest: string;
  } | null>(null);

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please provide your full guest name (min 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    const phoneDigits = phone.replace(/[^0-9]/g, '');
    if (!phone.trim() || phoneDigits.length < 7) {
      newErrors.phone = 'Please provide a valid contact number (min 7 digits).';
    }
    const today = new Date().toISOString().split('T')[0];
    if (!date || date < today) {
      newErrors.date = 'Reservation date must be today or a future date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = `LUM-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingConfirmation({
        code: generatedCode,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        guests,
        date,
        time,
        specialRequest: specialRequest.trim()
      });

      // Clear form inputs
      setName('');
      setEmail('');
      setPhone('');
      setSpecialRequest('');
      setErrors({});

      if (onClearInitialDish) onClearInitialDish();
    }, 700);
  };

  // Helper to generate a downloadable .ics calendar file
  const handleAddToCalendar = () => {
    if (!bookingConfirmation) return;
    const [year, month, day] = bookingConfirmation.date.split('-');
    const [hour, minute] = bookingConfirmation.time.split(':');
    const startStr = `${year}${month}${day}T${hour}${minute}00`;
    const endHour = String(Number(hour) + 2).padStart(2, '0');
    const endStr = `${year}${month}${day}T${endHour}${minute}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//LUMORA Gastronomy//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner Reservation at LUMORA (Ref: ${bookingConfirmation.code})`,
      `DESCRIPTION:Reserved for ${bookingConfirmation.name}, party of ${bookingConfirmation.guests} guests.\\nSpecial requests: ${bookingConfirmation.specialRequest || 'None'}\\nDress Code: Smart Elegant.`,
      `LOCATION:${RESTAURANT_INFO.address}`,
      `DTSTART:${startStr}`,
      `DTEND:${endStr}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `lumora-reservation-${bookingConfirmation.code}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const whatsappDirectLink = `https://wa.me/${RESTAURANT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello LUMORA Concierge, I would like to reserve a table for ${guests} guests on ${date} at ${time}. Name: ${name || 'Guest'}.`
  )}`;

  return (
    <section id="reservation" className="py-28 md:py-36 bg-[#0a0a0d] border-t border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & House Policies */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-3 font-medium">
                <span>Direct Allocations</span>
                <span className="w-10 h-[1px] bg-[#d4af37]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
                Reserve Your <span className="italic font-light text-[#f3e7c4]">Table</span>
              </h2>

              <p className="text-neutral-300 font-light text-base leading-relaxed mb-8">
                Due to our intimate 42-seat salon and day-boat ingredient sourcing from Brittany and Miyazaki, bookings are released thirty days in advance.
              </p>

              {/* Policies Card */}
              <div className="space-y-4 mb-8 text-xs text-neutral-400">
                <div className="p-4 rounded-sm bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold text-neutral-200 uppercase tracking-wider mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Dietary & Allergy Protocol</span>
                  </h4>
                  <p className="leading-relaxed">
                    Kindly notify our culinary brigade of dietary preferences 24 hours in advance. Dedicated plant-based and gluten-free tasting menus are curated upon notice.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold text-neutral-200 uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Dress Code & Table Duration</span>
                  </h4>
                  <p className="leading-relaxed">
                    Smart elegant attire. Tables are reserved for 2.5 hours for parties up to four, and 3 hours for parties of five or more.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Concierge Card */}
            <div className="p-6 rounded-sm glass-panel-gold border border-[#d4af37]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Instant WhatsApp Concierge</h4>
                  <p className="text-[11px] text-neutral-400">Direct line to our reservations maître d'</p>
                </div>
              </div>
              <p className="text-xs text-neutral-300 font-light mb-4">
                Prefer immediate messaging or arranging bespoke private dining? Connect directly with our team on WhatsApp.
              </p>
              <a
                href={whatsappDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#20ba5a] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#111116] border border-white/15 shadow-2xl relative">
              <h3 className="text-2xl font-serif text-white mb-2">Reserve Your Table</h3>
              <p className="text-xs text-neutral-400 font-light mb-8">
                Please complete your reservation details below for immediate table allocation.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Lord Alexander Wright"
                        className={`w-full bg-[#18181f] border rounded-sm pl-10 pr-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alexander@domain.com"
                        className={`w-full bg-[#18181f] border rounded-sm pl-10 pr-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+44 (0) 7911 123456"
                        className={`w-full bg-[#18181f] border rounded-sm pl-10 pr-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Number of Guests *
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-sm bg-[#18181f] border border-white/15 text-white hover:border-[#d4af37] flex items-center justify-center transition-colors cursor-pointer text-base"
                      >
                        -
                      </button>
                      <div className="flex-grow bg-[#18181f] border border-white/10 rounded-sm py-2 text-center text-xs text-white font-medium flex items-center justify-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setGuests(Math.min(12, guests + 1))}
                        className="w-10 h-10 rounded-sm bg-[#18181f] border border-white/15 text-white hover:border-[#d4af37] flex items-center justify-center transition-colors cursor-pointer text-base"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Reservation Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          setDate(e.target.value);
                          if (errors.date) setErrors({ ...errors, date: undefined });
                        }}
                        className={`w-full bg-[#18181f] border rounded-sm pl-10 pr-4 py-2.5 text-xs text-neutral-200 focus:outline-none transition-colors cursor-pointer ${
                          errors.date ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#d4af37]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.date}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                      Preferred Time Slot *
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`py-2 text-[11px] rounded-sm text-center transition-all cursor-pointer font-serif tabular-nums border ${
                            time === slot
                              ? 'bg-[#d4af37] text-black border-[#d4af37] font-semibold'
                              : 'bg-[#18181f] text-neutral-300 hover:text-white border-white/10 hover:border-white/20'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Special Request (Dietary, Anniversary, Wine Cellar)
                  </label>
                  <textarea
                    rows={3}
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Anniversary celebration, bespoke wine pairing request, seating preference near hearth or cellar..."
                    className="w-full bg-[#18181f] border border-white/10 rounded-sm p-3 text-xs text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c378] to-[#c5a059] rounded-sm hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-black/80 border-t-transparent rounded-full animate-spin" />
                      Securing Table...
                    </span>
                  ) : (
                    <span>Reserve Your Table</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Confirmation Message Modal */}
      {bookingConfirmation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in"
          onClick={() => setBookingConfirmation(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0f0f14] border border-[#d4af37]/50 rounded-sm p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setBookingConfirmation(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white cursor-pointer"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-4 shadow-xl gold-glow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-1">
                Reservation Confirmed
              </span>
              <h3 className="text-3xl font-serif text-white mb-2">We Await Your Presence</h3>
              <p className="text-xs text-neutral-400 font-light max-w-sm mb-6 leading-relaxed">
                Your reservation dossier has been officially secured in the LUMORA guest ledger. A formal confirmation email has been dispatched to <strong className="text-neutral-200">{bookingConfirmation.email}</strong>.
              </p>

              {/* Detailed Summary Docket */}
              <div className="w-full bg-[#16161c] border border-white/10 rounded-sm p-5 text-left space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs border-b border-white/10 pb-2.5">
                  <span className="text-neutral-400 uppercase tracking-wider text-[10px]">Booking Reference</span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    {bookingConfirmation.code}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Guest Name</span>
                  <span className="text-white font-medium">{bookingConfirmation.name}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Date & Service</span>
                  <span className="text-white font-medium font-serif">
                    {bookingConfirmation.date} at {bookingConfirmation.time}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Party Allocation</span>
                  <span className="text-white font-medium">{bookingConfirmation.guests} Guests</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Sanctuary</span>
                  <span className="text-white font-medium">18 Mayfair Square, London</span>
                </div>
                {bookingConfirmation.specialRequest && (
                  <div className="flex justify-between items-start text-xs border-t border-white/5 pt-2">
                    <span className="text-neutral-400">Special Notes</span>
                    <span className="text-neutral-300 italic text-right max-w-[220px]">
                      {bookingConfirmation.specialRequest}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-3">
                <button
                  onClick={handleAddToCalendar}
                  className="py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-neutral-200 border border-white/20 hover:border-[#d4af37]/60 rounded-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white/[0.02]"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Add to Calendar</span>
                </button>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello Concierge, I just booked reference ${bookingConfirmation.code} for ${bookingConfirmation.name} on ${bookingConfirmation.date} at ${bookingConfirmation.time}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-neutral-200 border border-white/20 hover:border-[#25D366]/60 rounded-sm transition-colors flex items-center justify-center gap-1.5 bg-white/[0.02]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Send to WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => setBookingConfirmation(null)}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c378] rounded-sm transition-colors cursor-pointer shadow-md"
              >
                Close Confirmation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
