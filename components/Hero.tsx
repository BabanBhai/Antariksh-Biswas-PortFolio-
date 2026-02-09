import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Brain, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Calculate percentage from center
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* Background Decor - More Vibrant */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Animated Gradient Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-20"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-20"
      />

      {/* Floating Elements Layer */}
      <motion.div 
        animate={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
        transition={{ type: 'spring', damping: 100 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] text-brand-purple/50"
        >
          <Code size={48} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[15%] text-brand-green/40"
        >
          <Brain size={64} />
        </motion.div>

        <motion.div 
           className="absolute top-[30%] right-[10%] w-24 h-24 border-2 border-dashed border-white/10 rounded-full animate-spin-slow"
        />
        
        <div className="absolute bottom-[15%] left-[20%] w-4 h-4 bg-brand-accent rotate-45"></div>
        <div className="absolute top-[20%] right-[25%] w-3 h-3 bg-white rounded-full"></div>
      </motion.div>

      {/* Main Title Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          className="relative inline-block mb-8"
        >
           {/* Sticker effect for text */}
          <h1 className="font-display font-bold text-7xl md:text-[10rem] leading-none tracking-tighter relative z-10 text-white drop-shadow-[6px_6px_0px_#000]">
            PORTFOLIO<span className="text-brand-purple">.</span>
          </h1>
          
          {/* Decorative badges */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -top-4 -right-2 md:-right-8 rotate-12 bg-white text-black px-4 py-1 rounded-full border-2 border-black shadow-flat font-display font-bold text-xl md:text-2xl z-20 flex items-center gap-2"
          >
            <Sparkles size={18} className="text-brand-purple" /> 2026
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-8 py-3 rounded-xl border-2 border-white shadow-flat font-bold -rotate-2 whitespace-nowrap z-20 hover:scale-105 hover:rotate-0 transition-transform cursor-default"
          >
            Antariksh Biswas <span className="opacity-70 font-normal">| aka Baban</span>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.2 }}
           className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {['Full Stack', 'AI Engineer', 'Creative Design'].map((skill, i) => (
            <div key={i} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-green rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
               <span className="relative block px-6 py-2 bg-brand-dark rounded-full border border-white/10 text-sm font-sans tracking-widest uppercase hover:text-white transition-colors">
                {skill}
               </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <MousePointer2 size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;