import { motion } from "motion/react";
import { SALON_DATA } from "../constants";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SALON_DATA.heroImage} 
          alt="Edisco Cutz Hero"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/40 to-primary"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4"
        >
          Established & Professional
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-6 italic"
        >
          {SALON_DATA.name}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted mb-10 font-light"
        >
          {SALON_DATA.slogan}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href={`tel:${SALON_DATA.phone}`}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary transition-all duration-200 bg-accent rounded-full hover:bg-yellow-500 focus:outline-hidden"
          >
            <span>Contact Us: {SALON_DATA.phone}</span>
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 border-2 border-white/20 rounded-full hover:bg-white/10"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute left-10 bottom-20 hidden lg:block">
        <p className="vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-muted whitespace-nowrap">
          The ultimate grooming experience • Since 2010
        </p>
      </div>
    </section>
  );
}
