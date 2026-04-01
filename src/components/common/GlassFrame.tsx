import React from 'react';

interface GlassFrameProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  rounded?: 'xl' | 'full' | 'sm';
  showGlows?: boolean;
  topLineOffset?: string;
  bottomLineOffset?: string;
  rightLineOffset?: string;
  leftLineOffset?: string;
  topLineStyle?: React.CSSProperties;
  bottomLineStyle?: React.CSSProperties;
  leftCapWidth?: string;
  rightCapWidth?: string;
  leftCapClip?: string;
  rightCapClip?: string;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const GlassFrame: React.FC<GlassFrameProps> = ({
  children,
  className = "",
  contentClassName = "",
  rounded = 'xl',
  showGlows = false,
  topLineOffset = "left-8 right-3",
  bottomLineOffset = "left-3 right-8",
  rightLineOffset = "top-8 bottom-4",
  leftLineOffset = "top-4 bottom-8",
  topLineStyle,
  bottomLineStyle,
  leftCapWidth = "w-8",
  rightCapWidth = "w-8",
  leftCapClip,
  rightCapClip,
  style,
  contentStyle,
}) => {
  const roundingClass = rounded === 'full' ? 'rounded-full' : rounded === 'sm' ? 'rounded-sm' : 'rounded-xl';

  return (
    <div className={`relative group bg-transparent ${className}`} style={style}>
      {/* Base Glass Layer */}
      <div
        className={`absolute inset-0  backdrop-blur-[40px] shadow-figma-drop  transition-all duration-300 ${roundingClass} ${contentClassName}`}
        style={{
          ...contentStyle
        }}
      />

      {/* 4-Segment Broken Border System */}
      {/* Top Line */}
      <div
        className={`absolute top-0 left-0 h-[1px] bg-[#B6BAC3] transition-all ${topLineOffset}`}
        style={topLineStyle}
      />
      {/* Right Line */}
      <div className={`absolute right-0 w-[1px] bg-[#B6BAC3] transition-all ${rightLineOffset}`} />
      {/* Bottom Line */}
      <div
        className={`absolute bottom-0 h-[1px] bg-[#B6BAC3] transition-all ${bottomLineOffset}`}
        style={bottomLineStyle}
      />
      {/* Left Line */}
      <div className={`absolute left-0 w-[1px] bg-[#B6BAC3] transition-all ${leftLineOffset}`} />

      {/* Sharp Corner Segments */}
      <div className={`absolute top-0 left-0 h-10 border-t-[1.5px] border-l-[1.5px] border-[#B6BAC3] pointer-events-none ${leftCapWidth} ${rounded === 'xl' ? 'rounded-tl-xl' : rounded === 'full' ? 'rounded-l-full' : 'rounded-tl-sm'}`}
        style={{ clipPath: leftCapClip || (rounded === 'full' ? 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)' : undefined) }}
      />
      <div className={`absolute bottom-0 right-0 h-10 border-b-[1.5px] border-r-[1.5px] border-[#B6BAC3] pointer-events-none ${rightCapWidth} ${rounded === 'xl' ? 'rounded-br-xl' : rounded === 'full' ? 'rounded-r-full' : 'rounded-br-sm'}`}
        style={{ clipPath: rightCapClip || (rounded === 'full' ? 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)' : undefined) }}
      />

      {/* Optional Blurry Cutoff Glows */}
      {showGlows && rounded === 'full' && (
        <>
          <div className="absolute top-0 right-0 w-[48px] h-[24px] bg-white/10 blur-md rounded-tr-full pointer-events-none opacity-50" />
          <div className="absolute bottom-0 left-0 w-[48px] h-[24px] bg-white/10 blur-md rounded-bl-full pointer-events-none opacity-50" />
        </>
      )}

      {/* Child Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        {children}
      </div>
    </div>
  );
};

export default GlassFrame;
