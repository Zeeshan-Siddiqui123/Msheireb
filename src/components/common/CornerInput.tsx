import React from 'react';

interface CornerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const CornerInput: React.FC<CornerInputProps> = ({ label, icon, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-white text-small-medium ml-1">{label}</label>

      <div className="relative group">
        <input
          {...props}
          className={`w-full backdrop-blur-xl  rounded-xl px-4 py-3 text-white text-small-regular shadow-figma-drop placeholder:text-white focus:outline-none transition-all ${icon ? 'pr-10' : ''} ${className || ''}`}
        />

        {/* Broken Border Segments with blurry/shadow effect */}
        {/* Top line */}
        <div className="absolute top-0 left-4 right-3 h-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        {/* Right line */}
        <div className="absolute top-6 bottom-4 right-0 w-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        {/* Bottom line */}
        <div className="absolute bottom-0 left-2 right-4 h-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        {/* Left line */}
        <div className="absolute top-4 bottom-6 left-0 w-[1px] bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.1)]" />

        {/* Sharp Corner Segments */}
        <div className="absolute top-0 left-0 w-4 h-8 border-t border-l border-white/25 rounded-tl-xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-8 border-b border-r border-white/25 rounded-br-xl pointer-events-none" />

        {/* Input Icon */}
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white/60 transition-colors">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CornerInput;
