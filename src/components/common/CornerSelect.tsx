import React from 'react';

interface CornerSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const CornerSelect: React.FC<CornerSelectProps> = ({ label, children, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-white/70 text-small-medium ml-1">{label}</label>

      <div className="relative group">
        <select
          {...props}
          className={`w-full backdrop-blur-xl  rounded-xl px-4 py-3 text-white text-small-regular shadow-figma-drop appearance-none focus:outline-none transition-all ${className || ''}`}
        >
          {children}
        </select>

        {/* Chevron icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Broken Border Segments (Matching CornerInput) */}
        <div className="absolute top-0 left-4 right-3 h-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <div className="absolute top-6 bottom-4 right-0 w-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <div className="absolute bottom-0 left-2 right-4 h-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <div className="absolute top-4 bottom-6 left-0 w-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />

        {/* Sharp Corner Segments */}
        <div className="absolute top-0 left-0 w-4 h-8 border-t border-l border-white/25 rounded-tl-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-8 border-b border-r border-white/25 rounded-br-xl pointer-events-none" />
      </div>
    </div>
  );
};

export default CornerSelect;
