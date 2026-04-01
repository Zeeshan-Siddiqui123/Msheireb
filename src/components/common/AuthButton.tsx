import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'large';
}

const AuthButton: React.FC<AuthButtonProps> = ({ children, className, style, size = 'small', ...props }) => {
  const isLarge = size === 'large';

  return (
    <button
      {...props}
      className={`relative w-full ${isLarge ? 'py-4' : 'py-2.5'} overflow-hidden rounded-full text-white text-regular-bold tracking-wide transition-all duration-300 active:scale-95 group shadow-figma-drop ${className || ''}`}
      style={style}
    >
      {/* Base Glass Layer - High Frost and Translucent Fill */}
      <div
        className="absolute inset-0 bg-white/[0.03] backdrop-blur-[40px] rounded-full shadow-sm"
        style={{
          background: 'linear-gradient(-45deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        }}
      />

      {/* Top Line (Shaded Gradient) */}
      <div
        className="absolute top-0 left-[0px] right-[0px] h-[1.4px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 15%, rgba(255,255,255,0.6) 80%, transparent 100%)' }}
      />
      {/* Bottom Line (Shaded Gradient) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, transparent 100%)' }}
      />

      {/* Left Cap (Top-Left Only) */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[28px] border-l-[1.5px] border-t-[1.5px] border-white/60 rounded-l-full pointer-events-none"
        style={{ clipPath: 'polygon(0% 1%, 100% 3%, 100% 45%, 0% 70%)' }}
      />

      {/* Right Cap (Bottom-Right Only) */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[28px] border-r-[0.9px] border-b-[0.5px] border-white/60 rounded-r-full pointer-events-none"
        style={{ clipPath: 'polygon(0% 40%, 100% 40%, 100% 98%, 0% 98%)' }}
      />

      {/* Blurry Cutoff Glows - Top-Right and Bottom-Left */}
      <div className="absolute top-0 right-0 w-[48px] h-[24px] bg-white/10 blur-md rounded-tr-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[48px] h-[24px] bg-white/10 blur-md rounded-bl-full pointer-events-none opacity-50" />

      {/* Blurry Edge Glows replacing the border at TR and BL */}
      {/* Removed discrete glow divs to eliminate internal fog. The gradient mask handles the fade perfectly. */}

      {/* Subtle overall gradient overlay (Removed white shade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-full pointer-events-none" />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2  btn-text-regular">
        {children}
      </span>

      {/* Hover state shine effect */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </button>
  );
};

export default AuthButton;
