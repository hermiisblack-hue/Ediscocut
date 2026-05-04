import { motion } from "motion/react";
import { SALON_DATA } from "../constants";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            The <span className="text-accent italic text-3xl md:text-5xl">Gallery</span> of Excellence
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Witness the art of barbing. From sharp fades to complete style transformations, our work speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SALON_DATA.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer ${
                index % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
