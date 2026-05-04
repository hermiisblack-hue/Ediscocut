import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Transformations from "./components/Transformations";
import Equipment from "./components/Equipment";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Short "Live" Section Placeholder - Using a section with motion to feel active */}
        <section className="bg-accent/5 py-12 border-y border-white/5">
           <div className="max-w-7xl mx-auto flex overflow-hidden whitespace-nowrap gap-12 text-2xl font-serif italic font-medium opacity-20 select-none uppercase tracking-[1em]">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex gap-12"
              >
                  <span>Touch of experience • Premium Cutz • Sharp Lineage • Classic Grooming • </span>
                  <span>Touch of experience • Premium Cutz • Sharp Lineage • Classic Grooming • </span>
                  <span>Touch of experience • Premium Cutz • Sharp Lineage • Classic Grooming • </span>
              </motion.div>
           </div>
        </section>

        <Services />
        <Equipment />
        
        {/* Call to action mid-page */}
        <section className="py-20 bg-accent text-primary relative overflow-hidden">
           <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl"></div>
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 italic">Ready for your transformation?</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto font-medium opacity-80">Book your session today and experience the difference of a professional touch.</p>
              <a 
                href="tel:+2348136331724" 
                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-110 transition-transform inline-block"
              >
                Call: +234 813 633 1724
              </a>
           </div>
        </section>

        <Gallery />
        <Transformations />
      </main>

      <Footer />
    </div>
  );
}

