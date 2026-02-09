import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activePage, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-full border-2 border-white/10 hover:border-brand-purple transition-colors">
        <h1 
          className="font-display font-bold text-xl cursor-pointer"
          onClick={() => onNavigate(Page.HOME)}
        >
          Antariksh <span className="text-brand-purple">.</span>
        </h1>
      </div>

      <div className="pointer-events-auto bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-full border-2 border-white/10">
        <span className="font-display font-bold text-brand-purple">BABAN</span>
      </div>
    </nav>
  );
};

export default Navigation;