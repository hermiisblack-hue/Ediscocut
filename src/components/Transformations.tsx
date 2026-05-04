import { motion } from "motion/react";
import { SALON_DATA } from "../constants";

export default function Transformations() {
  const pairs = [
    {
      before: "https://images.unsplash.com/photo-1542618913-64016666ba84?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1593702295094-ada74342990e?auto=format&fit=crop&q=80&w=800",
      label: "The Executive Cut"
    },
    {
      before: "https://images.unsplash.com/photo-1534030347209-43c2c15103a0?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
      label: "Skin Fade Specialist"
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center italic">
          Power of <span className="text-accent underline decoration-white/10 underline-offset-8">Transformation</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {pairs.map((pair, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-2 h-[400px]">
                <div className="flex-1 relative group overflow-hidden rounded-2xl">
                  <div className="absolute top-4 left-4 z-10 glass px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">Before</div>
                  <img src={pair.before} alt="Before" className="w-full h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 relative group overflow-hidden rounded-2xl border-2 border-accent/20">
                  <div className="absolute top-4 right-4 z-10 bg-accent text-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">After</div>
                  <img src={pair.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <p className="text-center font-serif text-2xl italic text-accent">{pair.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
