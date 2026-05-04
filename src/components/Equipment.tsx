import { motion } from "motion/react";
import { SALON_DATA } from "../constants";

export default function Equipment() {
  return (
    <section className="py-24 px-6 relative bg-primary flex flex-col items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src={SALON_DATA.equipmentImage} 
            alt="Barbing Equipment" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 p-8 glass rounded-2xl max-w-sm">
            <h3 className="text-2xl font-serif font-bold mb-2">Precision Tools</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We only use professional-grade clippers and sterilized equipment to ensure the highest standards of hygiene and precision.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-serif font-bold italic">High-End <span className="text-accent underline underline-offset-4 decoration-accent/30">Arsenal</span></h2>
          <p className="text-muted text-lg leading-relaxed">
            Our commitment to quality starts with our tools. From Wahl and Andis clippers to premium Japanese steel scissors, we invest in the best to give you the best.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass rounded-2xl">
              <h4 className="text-accent font-bold mb-2 uppercase text-xs tracking-widest">Sanitation</h4>
              <p className="text-sm text-muted">UV sterilization for all metal tools after every use.</p>
            </div>
            <div className="p-6 glass rounded-2xl">
              <h4 className="text-accent font-bold mb-2 uppercase text-xs tracking-widest">Ergonomics</h4>
              <p className="text-sm text-muted">Precision grip tools for consistent hair sculpting.</p>
            </div>
            <div className="p-6 border border-white/5 bg-white/2 rounded-2xl">
               {/* Just a decorative block */}
               <div className="h-full flex items-center justify-center opacity-20">
                 <span className="text-6xl font-serif font-black italic">EDISCO</span>
               </div>
            </div>
            <div className="p-6 glass rounded-2xl">
              <h4 className="text-accent font-bold mb-2 uppercase text-xs tracking-widest">Comfort</h4>
              <p className="text-sm text-muted">Premium seating for a relaxing grooming session.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
