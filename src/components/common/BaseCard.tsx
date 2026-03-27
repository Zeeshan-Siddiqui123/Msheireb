import React from "react";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        backdropFilter: "blur(4.6px)",
        WebkitBackdropFilter: "blur(4.6px)",
      }}
      className={`
        flex flex-col
        overflow-visible
        transition-all duration-300
        ${onClick ? "cursor-pointer hover:scale-[1.02] active:scale-[0.98]" : ""}
        ${className}
      `}
    >
      {/* Premium Border/Glow Layer */}
      {/* <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1px",
          background: "linear-gradient(-185deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.4) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any,
          pointerEvents: "none",
        }}
      /> */}
      {children}
    </div>
  );
};

export default BaseCard;
