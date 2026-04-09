import type { ReactNode, CSSProperties } from 'react';

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function GlassCard({ children, className = '', style }: GlassCardProps) {
  return (
    <div
      style={style}
      className={`glass-card ${className}`}
    >
      {children}
    </div>
  );
}
