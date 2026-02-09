import React from 'react';
import { EXPERIENCES, SOFTWARE_SKILLS } from '../constants';
import { Briefcase, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-full h-full bg-brand-dark overflow-hidden -z-20">
         <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute left-1/4 top-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]"
         />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Column: Experience (Concise) */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl mb-8 flex items-center gap-3">
              <Briefcase className="text-brand-purple" size={32} /> 
              <span>Timeline</span>
            </h2>
            
            <div className="relative border-l-2 border-brand-purple/20 ml-3 space-y-12 py-2">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring" }}
                  whileHover={{ x: 10 }}
                  className="relative pl-10 group cursor-default"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-dark border-4 border-brand-purple group-hover:scale-150 group-hover:border-brand-accent transition-all duration-300 shadow-glow"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-bold text-white text-xl group-hover:text-brand-purple transition-colors">{exp.role}</h3>
                    <span className="text-xs font-mono font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0 border border-brand-green/20">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-gray-400 font-medium">{exp.company}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-brand-card/50 border border-white/5 p-6 rounded-xl relative overflow-hidden group"
          >
             <div className="absolute left-0 top-0 w-1 h-full bg-brand-purple group-hover:h-1/2 transition-all duration-500"></div>
            <p className="text-gray-400 text-sm leading-relaxed pl-4">
              "I believe in learning by doing. My journey from school to freelancing has been fueled by a relentless curiosity for new technologies and a passion for creating impactful digital experiences."
            </p>
          </motion.div>
        </div>

        {/* Right Column: Professional Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
          className="bg-gradient-to-b from-brand-card/80 to-brand-dark border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl mb-8 flex items-center gap-3">
              <Layers className="text-brand-accent" size={32} />
              <span>Tech Arsenal</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {SOFTWARE_SKILLS.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 transition-colors cursor-default"
                >
                  <div className="p-3 bg-brand-dark rounded-lg text-brand-purple shadow-inner group-hover:text-white">
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{skill.name}</div>
                    <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{skill.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-400 font-mono">
              <span>SYSTEM: ONLINE</span>
              <span className="animate-pulse text-brand-green flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-brand-green"></span> AVAILABLE FOR WORK
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;