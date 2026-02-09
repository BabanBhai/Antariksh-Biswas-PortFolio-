import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block mb-8"
        >
            <div className="w-20 h-20 bg-brand-card rounded-full flex items-center justify-center shadow-glow border border-white/10">
               <Heart size={32} className="text-brand-purple fill-brand-purple" />
            </div>
        </motion.div>

        <h2 className="font-display font-bold text-6xl md:text-9xl text-white mb-6 leading-tight tracking-tighter">
          Thank <span className="text-brand-purple">You!</span>
        </h2>
        
        <p className="text-gray-400 text-xl md:text-2xl font-light max-w-2xl mx-auto mb-12">
          Thanks for stopping by. I hope you enjoyed the little interactive journey through my portfolio.
        </p>

        <motion.div 
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="bg-brand-card/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 mb-16 mx-4 shadow-cartoon"
        >
          <p className="font-display font-bold text-2xl md:text-4xl text-white leading-snug">
            "I would be really happy to work with you on your next big idea."
          </p>
          <div className="mt-8 flex justify-center">
             <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-brand-purple hover:text-white transition-all shadow-lg hover:shadow-glow">
               Let's make it happen <ArrowUpRight size={18} />
             </a>
          </div>
        </motion.div>
      </motion.div>
      
      <footer className="absolute bottom-10 w-full text-center">
        <div className="text-sm text-gray-500 font-mono">
           © 2026 Antariksh Biswas (Baban). All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default ThankYou;