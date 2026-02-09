import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-2">
          PORTFOLIO<span className="text-brand-purple">.</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-400 font-mono text-sm">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
          Initializing Assets...
        </div>
      </motion.div>

      <div className="w-64 h-1 bg-brand-card rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-brand-purple"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;