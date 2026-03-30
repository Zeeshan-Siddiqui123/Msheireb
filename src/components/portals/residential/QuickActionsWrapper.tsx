import React from "react";

interface QuickActionsWrapperProps {
  children: React.ReactNode;
  className?: string;
  hideBorder?: boolean;
}

const QuickActionsWrapper = ({
  children,
  className = "",
  hideBorder = false,
}: QuickActionsWrapperProps) => {
  return (
    <div
      style={{
        position: "relative",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
      className={`
        flex flex-col items-start justify-start
        rounded-xl
        p-6
        overflow-visible
        transition-all duration-300
        ${className}
      `}
    >
      {/* Thin border */}
      {!hideBorder && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            // padding: "1.3px",
            background: "rgba(255, 255, 255, 0.32)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude" as any,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Corner glow */}
      {!hideBorder && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1px",
            background: `
            radial-gradient(circle at 0% 0%, rgba(255,255,255,1) 0%, transparent 75%),
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0) 0%, transparent 0%),
            radial-gradient(circle at 0% 100%, rgba(255,255,255,0) 0%, transparent 0%),
            radial-gradient(circle at 100% 100%, rgba(255,255,255,1) 0%, transparent 75%)
          `,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude" as any,
            pointerEvents: "none",
          }}
        />
      )}

      {children}
    </div>
  );
};

export default QuickActionsWrapper;