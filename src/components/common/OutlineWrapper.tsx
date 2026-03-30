import React from "react";

type OutlineWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const OutlineWrapper: React.FC<OutlineWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      style={{
        position: "relative",
        
      }}
      className={`
        inline-flex items-center justify-center
        
        rounded-3xl
        shadow-[0_4px_10px_rgba(0,0,0,0.1)]
        overflow-visible
        transition-all duration-300
        hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      {/* Pseudo border layer */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1px",
          background:
            "linear-gradient(-187deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any, // TS fix
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
};

export default OutlineWrapper;