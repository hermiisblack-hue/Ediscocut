import { motion } from "motion/react";
import { SALON_DATA } from "../constants";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="pt-24 pb-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="text-3xl font-serif font-bold mb-6 italic">{SALON_DATA.name}</h3>
          <p className="text-muted mb-8 leading-relaxed">
            Experience the finest grooming services in Uyo. Our expert barbers are dedicated to providing a premium touch that leaves you looking and feeling your best.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent text-sm">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-muted hover:text-white transition-colors">
              <MapPin className="text-accent shrink-0" size={20} />
              <span>{SALON_DATA.address}</span>
            </li>
            <li className="flex items-center gap-4 text-muted hover:text-white transition-colors">
              <Phone className="text-accent shrink-0" size={20} />
              <span>{SALON_DATA.phone}</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent text-sm">Opening Hours</h4>
          <ul className="space-y-4 text-muted">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Monday - Saturday</span>
              <span className="text-white">8:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sunday</span>
              <span className="text-white">12:00 PM - 7:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Map placeholder */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-accent text-sm">Our Location</h4>
          <div className="rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 h-40">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=800" 
              alt="Location Map Placeholder"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-muted">Visit us today for a premium experience</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 text-center text-muted text-sm italic">
        <p>© {new Date().getFullYear()} {SALON_DATA.name}. All rights reserved. {SALON_DATA.slogan}</p>
      </div>
    </footer>
  );
}
