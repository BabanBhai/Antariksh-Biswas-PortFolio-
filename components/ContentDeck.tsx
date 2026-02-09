import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '../constants';
import { Page } from '../types';
import { motion } from 'framer-motion';

interface ContentDeckProps {
  onNavigate: (page: Page) => void;
}

const ContentDeck: React.FC<ContentDeckProps> = ({ onNavigate }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 overflow-hidden relative min-h-[900px] flex flex-col items-center justify-center">
      
      {/* Background Ambience */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="text-center mb-20 relative z-10">
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="font-display font-bold text-6xl md:text-8xl text-white drop-shadow-[5px_5px_0px_rgba(124,58,237,0.5)]">
            Pick a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-accent italic">Card</span>
          </h2>
          <p className="text-gray-400 mt-6 text-xl font-light tracking-wide max-w-md mx-auto">
            Choose a category to explore my projects. <br/> <span className="text-brand-purple font-bold">Tap to open.</span>
          </p>
        </motion.div>
      </div>

      {/* The Deck - Modern Cartoon Style */}
      <div className="relative w-full max-w-lg h-[600px] flex justify-center items-center">
        {NAVIGATION_ITEMS.map((item, index) => {
          const total = NAVIGATION_ITEMS.length;
          const centerIndex = (total - 1) / 2;
          const offset = index - centerIndex;
          const isHovered = hoveredIndex === index;
          
          // Fan calculations
          const rotation = offset * 12; // Exaggerated spread
          const x = offset * 70; 
          const y = Math.abs(offset) * 30; 
          
          return (
            <motion.div
              key={item.id}
              initial={{ y: 1000, rotate: rotation }}
              whileInView={{ 
                y: y, 
                rotate: rotation,
              }}
              viewport={{ once: true }}
              animate={{
                y: isHovered ? -160 : [y - 10, y + 10, y - 10], // Floating idle animation
                x: x,
                rotate: isHovered ? 0 : rotation,
                scale: isHovered ? 1.25 : 1,
                zIndex: isHovered ? 100 : 10 + index, // Stack order
              }}
              transition={{ 
                // Spring transition for hover interactions
                type: 'spring', 
                stiffness: 300, 
                damping: 20,
                // Continuous floating animation settings
                y: {
                  repeat: isHovered ? 0 : Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: index * 0.5 
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onNavigate(item.id)}
              
              className={`
                absolute w-72 h-[420px] 
                rounded-[2rem] border-[8px]
                shadow-cartoon cursor-pointer
                flex flex-col justify-between p-6
                ${item.color}
                overflow-hidden
                group
                transform-gpu
              `}
              style={{
                transformOrigin: 'bottom center',
              }}
            >
              {/* Card Texture */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply"></div>

              {/* Card Header */}
              <div className="flex justify-between items-start relative z-10">
                <div className="bg-black/10 backdrop-blur-sm rounded-full px-4 py-1 border border-black/5 font-mono font-bold">
                  <span className="opacity-80">#{index + 1}</span>
                </div>
                <div className="p-2 bg-black/5 rounded-full">
                   <item.icon size={24} className="opacity-80" />
                </div>
              </div>

              {/* Center Graphic - Dynamic Scale */}
              <div className="flex flex-col items-center text-center relative z-10 my-auto">
                 <motion.div
                    animate={isHovered ? { 
                      rotate: [0, -10, 10, 0], 
                      scale: [1, 1.2, 1] 
                    } : {}}
                    transition={{ duration: 0.5 }}
                 >
                    <item.icon size={110} strokeWidth={1.5} className="drop-shadow-2xl filter" />
                 </motion.div>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 text-center">
                 <h3 className="font-display font-bold text-3xl leading-none tracking-tight uppercase drop-shadow-md">
                   {item.label}
                 </h3>
                 <div className="w-16 h-2 bg-black/20 rounded-full mx-auto mt-4 group-hover:w-32 transition-all duration-300"></div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentDeck;