import React from 'react';
import StickerCard from './StickerCard';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Photo Card - Scroll Animated & Draggable */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: -20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full md:w-5/12 flex justify-center perspective-1000 z-20"
        >
          <motion.div 
            drag 
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} 
            whileDrag={{ scale: 1.1, cursor: 'grabbing', rotate: 5 }} 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="cursor-grab relative"
          >
            {/* Background elements for depth */}
            <div className="absolute -inset-4 bg-brand-purple/20 rounded-3xl -z-10 rotate-6 blur-lg animate-pulse"></div>

            <StickerCard rotate={-3} className="w-80 bg-[#EFEFEA] p-5 pb-14 text-black transition-none shadow-cartoon border-4 border-white">
              <div className="flex justify-between items-center mb-4">
                <span className="font-display font-black text-5xl tracking-tighter opacity-20">ID</span>
                <div className="text-[10px] font-bold border-2 border-black rounded-full px-3 py-1 uppercase bg-brand-green text-black">Verified</div>
              </div>
              
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-black mb-6 relative group grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://picsum.photos/600/600?grayscale" 
                  alt="Antariksh" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-6 left-6 font-display font-bold text-3xl rotate-[-2deg] bg-black text-white px-2 shadow-[4px_4px_0px_rgba(124,58,237,1)]">
                Antariksh
              </div>
              
              <div className="absolute bottom-3 right-6 text-[10px] font-mono font-bold tracking-widest text-brand-purple">
                DEV // AI // DSGN
              </div>
              
              {/* Holographic sticker effect */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 via-yellow-200 to-blue-400 opacity-30 mix-blend-overlay animate-pulse"></div>
            </StickerCard>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-7/12 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative"
          >
            <h2 className="font-sans text-brand-accent text-xl italic mb-2 tracking-wide">Code + Creativity</h2>
            <h3 className="font-display font-bold text-6xl md:text-8xl mb-4 leading-[0.9]">
              Antariksh <br/> Biswas
            </h3>
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-brand-purple font-medium italic">
               aka Baban
            </div>
            
            <motion.span 
              animate={{ y: [0, -15, 0], rotate: [10, 20, 10] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-10 right-0 md:right-20 text-7xl drop-shadow-xl"
            >
              🚀
            </motion.span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-gray-300 font-sans leading-relaxed text-lg bg-gradient-to-b from-brand-card/80 to-brand-dark p-8 rounded-3xl border border-white/5 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <p>
              I am a <strong className="text-white border-b-2 border-brand-purple hover:bg-brand-purple/20 transition-colors px-1 rounded">Full Stack Web Developer</strong> and <strong className="text-white border-b-2 border-brand-green hover:bg-brand-green/20 transition-colors px-1 rounded">AI Developer</strong> who loves bridging the gap between complex algorithms and beautiful user interfaces.
            </p>
            <p>
              Beyond coding, I have a creative streak as a <strong className="text-white">Logo Designer</strong> and <strong className="text-white">Thumbnail Creator</strong>, helping brands and creators stand out in a crowded digital space.
            </p>
            <p>
              Whether it's training a neural network, building a responsive web app, or designing a click-worthy thumbnail, I bring passion and precision to every project.
            </p>
          </motion.div>

          {/* Socials - Staggered Entrance */}
          <div className="flex flex-wrap gap-4 mt-10">
            {[
              { name: 'GitHub', icon: Github, color: 'hover:border-black' },
              { name: 'LinkedIn', icon: Linkedin, color: 'bg-[#0077b5] text-white border-transparent' },
              { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white border-transparent' },
              { name: 'Contact Me', icon: Mail, color: 'bg-brand-card border-white/20 text-white hover:bg-brand-purple' }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? -2 : 2 }}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 transition-all shadow-lg ${social.color.includes('bg-') ? social.color : 'bg-white text-black ' + social.color}`}
              >
                <social.icon size={20} /> {social.name}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;