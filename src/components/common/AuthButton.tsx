import React from 'react';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'small' | 'large';
}

const AuthButton: React.FC<AuthButtonProps> = ({ children, className, style, size = 'small', ...props }) => {
  const isLarge = size === 'large';

  const r = isLarge ? 28 : 22;

  return (
    <button
      {...props}
      className={`relative w-full ${isLarge ? 'py-4' : 'py-2.5'} rounded-full text-white text-regular-bold tracking-wide transition-all duration-300 active:scale-95 group shadow-figma-drop ${className || ''}`}
      style={style}
    >
      {/* Base Glass Layer - Frosted effect with precise milky tint from screenshot */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.12)] backdrop-blur-xl rounded-full shadow-sm" />

      {/* Clipped Borders & Highlights - Exactly removes Top-Right and Bottom-Left curves */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          clipPath: `polygon(
            0 0,
            calc(100% - ${r}px) 0,
            calc(100% - ${r}px) 50%,
            100% 50%,
            100% 100%,
            ${r}px 100%,
            ${r}px 50%,
            0 50%
          )`
        }}
      >
        {/* Continuous border (gets masked) */}
        <div className="absolute inset-0 rounded-full border border-white/50" />

        {/* Sharp Top Rim Highlight - Brighter for more glossy look */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_2px_rgba(255,255,255,0.5)]" />

        {/* Soft Bottom Rim Highlight */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_-2px_1px_rgba(255,255,255,0.2)]" />
      </div>

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
