import { motion } from "motion/react";
import { Scissors, Phone } from "lucide-react";
import { SALON_DATA } from "../constants";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full"
      >
        <div className="flex items-center gap-2">
          <Scissors className="text-accent w-6 h-6" />
          <span className="text-xl font-bold font-serif tracking-tight">{SALON_DATA.name}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Gallery</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
        </div>

        <a 
          href={`tel:${SALON_DATA.phone}`}
          className="flex items-center gap-2 bg-accent text-primary px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Book Now</span>
        </a>
      </motion.div>
    </nav>
  );
}
