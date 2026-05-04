import { motion } from "motion/react";
import { SALON_DATA } from "../constants";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Premium <span className="text-accent italic">Grooming</span> Services
            </h2>
            <p className="text-muted text-lg">
              We offer a wide range of hair and beard grooming services using the latest techniques and high-end equipment.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[120px] font-serif font-black opacity-5 leading-none select-none">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALON_DATA.services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Scissors;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <IconComponent size={80} strokeWidth={1} />
                </div>
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="text-accent w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-mono font-bold text-xl">{service.price}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted group-hover:text-white transition-colors">Professional Care</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
