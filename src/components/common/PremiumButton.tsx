import React from 'react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ children, className, style, ...props }) => {
  return (
    <button
      {...props}
      className={`relative w-full py-4 rounded-full text-white text-regular-bold tracking-wide transition-all duration-300 active:scale-95 group overflow-hidden ${className || ''}`}
      style={style}
    >
      {/* Base Glass Layer */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[12px] rounded-full border border-white/20 shadow-figma-drop" />
      
      {/* Detailing: Top Rim Highlight (Inner Glow) */}
      <div className="absolute inset-px rounded-full shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4)] pointer-events-none" />
      
      {/* Detailing: Bottom Subtle Shadow (Inner) */}
      <div className="absolute inset-px rounded-full shadow-[inset_0_-1px_2px_rgba(0,0,0,0.2)] pointer-events-none" />

      {/* Detailing: Glossy Shine (Top Half) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-full opacity-50 pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Hover state shine effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </button>
  );
};

export default PremiumButton;
