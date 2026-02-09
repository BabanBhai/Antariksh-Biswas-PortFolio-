import React from 'react';
import { Page } from '../types';
import { PORTFOLIO_DATA } from '../constants';
import StickerCard from './StickerCard';
import { ArrowLeft, MessageSquare, Send, MapPin, Phone, Gamepad2, PenTool, Sparkles, Layout, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryProps {
  page: Page;
  onBack: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ page, onBack }) => {
  const items = PORTFOLIO_DATA.filter(item => item.category === page);
  const pageTitle = page === Page.AI ? 'AI Development' : 
                    page === Page.THUMBNAIL ? 'Thumbnail Art' :
                    page === Page.WEB ? 'Web Design' :
                    page === Page.LOGO ? 'Logo Design' : 'Contact';

  // --- CONTACT PAGE ---
  if (page === Page.CONTACT) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 max-w-4xl mx-auto flex flex-col items-center">
         <button 
          onClick={onBack}
          className="self-start mb-8 p-3 bg-white text-black rounded-full hover:bg-brand-purple hover:text-white transition-colors shadow-flat"
        >
          <ArrowLeft size={24} />
        </button>
        
        <h2 className="font-display font-bold text-5xl md:text-7xl mb-12 text-center">
          Let's <span className="text-brand-purple">Talk!</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <StickerCard rotate={-2} className="bg-brand-card p-8 flex flex-col gap-6">
             <h3 className="font-display text-2xl">Contact Info</h3>
             <div className="space-y-4">
               <div className="flex items-center gap-4 text-gray-300">
                 <div className="p-3 bg-white/10 rounded-lg"><MapPin /></div>
                 <div>
                   <div className="text-xs text-gray-500 uppercase">Location</div>
                   <div className="font-bold">India / Remote</div>
                 </div>
               </div>
               <div className="flex items-center gap-4 text-gray-300">
                 <div className="p-3 bg-white/10 rounded-lg"><MessageSquare /></div>
                 <div>
                   <div className="text-xs text-gray-500 uppercase">Email</div>
                   <div className="font-bold">contact@antariksh.dev</div>
                 </div>
               </div>
                <div className="flex items-center gap-4 text-gray-300">
                 <div className="p-3 bg-white/10 rounded-lg"><Phone /></div>
                 <div>
                   <div className="text-xs text-gray-500 uppercase">Phone</div>
                   <div className="font-bold">+91 98765 43210</div>
                 </div>
               </div>
             </div>
          </StickerCard>

          <form className="bg-white text-black p-8 rounded-2xl shadow-flat flex flex-col gap-4 rotate-2">
            <div>
              <label className="block text-xs font-bold uppercase mb-1">Name</label>
              <input type="text" className="w-full bg-gray-100 p-3 rounded-lg border-2 border-gray-200 focus:border-brand-purple outline-none" placeholder="Your Name" />
            </div>
             <div>
              <label className="block text-xs font-bold uppercase mb-1">Email</label>
              <input type="email" className="w-full bg-gray-100 p-3 rounded-lg border-2 border-gray-200 focus:border-brand-purple outline-none" placeholder="hello@example.com" />
            </div>
             <div>
              <label className="block text-xs font-bold uppercase mb-1">Message</label>
              <textarea rows={4} className="w-full bg-gray-100 p-3 rounded-lg border-2 border-gray-200 focus:border-brand-purple outline-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="bg-brand-purple text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    )
  }

  // --- LOGO PAGE (Scattered - Retain Interactive Feel) ---
  if (page === Page.LOGO) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto relative">
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <Gamepad2 className="absolute top-20 left-10 text-brand-purple w-24 h-24 -rotate-12" />
          <PenTool className="absolute bottom-20 right-10 text-brand-green w-32 h-32 rotate-12" />
          <Sparkles className="absolute top-40 right-20 text-white w-16 h-16" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-16">
            <button 
              onClick={onBack}
              className="p-4 bg-white text-black rounded-full hover:bg-brand-purple hover:text-white transition-all shadow-cartoon hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <ArrowLeft size={28} />
            </button>
            <div>
              <h2 className="font-display font-bold text-5xl md:text-7xl leading-none">
                <span className="text-brand-purple">LOGOS</span>
              </h2>
              <p className="font-handwriting text-brand-accent text-xl italic tracking-wide">Brand Identity & Vectors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4">
            {items.map((item, index) => {
              const rotation = index % 3 === 0 ? -3 : index % 3 === 1 ? 2 : -1; 
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.5, rotate: rotation - 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: rotation }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  className="relative group perspective-1000"
                >
                  <div className="bg-white p-4 pb-12 rounded-2xl shadow-cartoon transition-all duration-300">
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-50 border-2 border-gray-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- THUMBNAIL PAGE (Static Grid, No Hover) ---
  if (page === Page.THUMBNAIL) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button onClick={onBack} className="p-3 bg-brand-green text-black rounded-full hover:bg-white hover:text-black transition-colors shadow-flat">
            <ArrowLeft size={24} />
          </button>
          <div>
             <h2 className="font-display font-bold text-4xl md:text-6xl text-brand-green">Thumbnail Art</h2>
             <p className="text-gray-400">High CTR Designs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border-2 border-white/10 shadow-lg"
            >
              <div className="aspect-video bg-gray-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // --- WEB DESIGN PAGE (Static Browser Windows, No Hover) ---
  if (page === Page.WEB) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button onClick={onBack} className="p-3 bg-brand-purple text-white rounded-full hover:bg-white hover:text-brand-purple transition-colors shadow-flat">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-brand-purple">Web Design</h2>
            <p className="text-gray-400">Interactive & Responsive</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Static Browser Window */}
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
                {/* Browser Toolbar */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-900 rounded-md py-1 px-3 text-xs text-gray-500 font-mono text-center truncate">
                    antariksh.dev/design/{item.title.toLowerCase().replace(/\s/g, '-')}
                  </div>
                </div>
                
                {/* Viewport - Static Image */}
                <div className="relative aspect-[16/10] bg-white border-b border-white/5">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top" />
                </div>

                {/* Info Section - Static Content */}
                <div className="bg-brand-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="font-display font-bold text-2xl text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase border border-brand-purple/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // --- AI DEVELOPMENT PAGE (Static Terminal, No Hover) ---
  if (page === Page.AI) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <button onClick={onBack} className="p-3 bg-white text-black rounded-full hover:bg-brand-dark hover:text-white transition-colors shadow-flat">
            <ArrowLeft size={24} />
          </button>
           <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white">AI Development</h2>
            <p className="text-gray-400 font-mono">System.init(Intelligence)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700 shadow-2xl font-mono text-sm"
            >
              {/* Terminal Header */}
              <div className="bg-[#2d2d2d] px-4 py-2 flex justify-between items-center border-b border-black">
                <span className="text-gray-400">root@antariksh-ai:~/{item.title.replace(/\s/g, '_').toLowerCase()}</span>
                <div className="flex gap-2">
                   <Maximize2 size={14} className="text-gray-500" />
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-green-500 mb-2">$ run demo.py</div>
                <div className="relative rounded-md overflow-hidden border border-gray-700 mb-4">
                   <img src={item.image} alt={item.title} className="w-full h-48 object-cover opacity-80" />
                   <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
                </div>
                
                <div className="space-y-1 text-gray-300">
                  <p><span className="text-blue-400">Analysis:</span> {item.description}</p>
                  <p><span className="text-yellow-400">Stack:</span> [{item.tags.join(', ')}]</p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Gallery;