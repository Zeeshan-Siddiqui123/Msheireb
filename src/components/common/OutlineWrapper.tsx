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
      className={`inline-flex isolate items-center justify-center rounded-3xl overflow-visible transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-glass-heavy ${className}`}
    >
      {/* Pseudo border layer */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "clamp(1px, 0.15vw, 2px)",
          // ✅ multiple gradients to ensure full edges
          background: `
            linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.2)) top / 90% 1px no-repeat,
            linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.35)) bottom / 90% 0.8px no-repeat,
            linear-gradient(-185deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.5) 100%)
          `,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any, // TS fix
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
      {children}
    </div>
  );
};

export default OutlineWrapper;