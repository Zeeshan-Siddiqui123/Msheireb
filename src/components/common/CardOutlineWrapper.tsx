import React from "react";

interface CardOutlineWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardOutlineWrapper = ({
  children,
  className = "",
}: CardOutlineWrapperProps) => {
  return (
    <div
      style={{
        position: "relative",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
      className={`
        flex flex-col items-start justify-start
        rounded-lg
        p-6
        shadow-[0_4px_10px_rgba(0,0,0,0.1)]
        overflow-visible
        transition-all duration-300
        ${className}
      `}
    >
      {/* Thin border */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1.3px",
          background: "rgba(255, 255, 255, 0.32)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any,
          pointerEvents: "none",
        }}
      />

      {/* Corner glow */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "2px",
          background: `
            radial-gradient(circle at 0% 0%, rgba(255,255,255,1) 0%, transparent 5%),
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0.8) 0%, transparent 5%),
            radial-gradient(circle at 0% 100%, rgba(255,255,255,0.8) 0%, transparent 5%),
            radial-gradient(circle at 100% 100%, rgba(255,255,255,1) 0%, transparent 5%)
          `,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any,
          pointerEvents: "none",
        }}
      />

      {children}
    </div>
  );
};

export default CardOutlineWrapper;