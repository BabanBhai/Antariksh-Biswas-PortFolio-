import React from 'react';
import { motion } from 'framer-motion';

interface StickerCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const StickerCard: React.FC<StickerCardProps> = ({ 
  children, 
  className = '', 
  rotate = 0, 
  delay = 0,
  onClick,
  hoverEffect = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1, type: "spring" }}
      whileHover={hoverEffect ? { 
        y: -10, 
        scale: 1.02,
        rotate: 0,
        boxShadow: '10px 10px 0px 0px rgba(0,0,0,0.3)'
      } : {}}
      onClick={onClick}
      className={`
        relative bg-brand-card border-4 border-brand-cream rounded-2xl 
        shadow-sticker cursor-pointer overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default StickerCard;