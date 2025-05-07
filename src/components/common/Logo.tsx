import React from 'react';
import { Mountain } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  
  return (
    <div className={`flex items-center font-headings font-bold text-2xl ${textColor}`}>
      <Mountain 
        size={28} 
        className={`mr-2 ${variant === 'light' ? 'text-tertiary' : 'text-secondary'}`} 
      />
      <span>Polimetrica<span className="text-tertiary">9</span></span>
    </div>
  );
};

export default Logo;