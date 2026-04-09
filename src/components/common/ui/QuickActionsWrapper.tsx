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
      }}
      className={`
        flex flex-col items-start justify-start
        rounded-xl
        p-4
        backdrop-blur-md
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
            background: "rgba(255, 255, 255, 0.32)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude" as any,
            pointerEvents: "none",
          }}
        />
      )}



      {/* Corner glow with transparent cutoffs on top-right and bottom-left */}
      {!hideBorder && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1px",
            background: `
              /* Top edge - full width */
              linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0.8) 100%) top / 100% 1px no-repeat,
              
              /* Bottom edge - full width */
              linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.6) 100%) bottom / 100% 1px no-repeat,
              
              /* Left edge - full height */
              linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 100%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.7) 100%) left / 1px 100% no-repeat,
              
              /* Right edge - full height */
              linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.3) 100%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0.7) 100%) right / 1px 100% no-repeat,
              
              /* Top-left corner - solid */
              radial-gradient(circle at 0% 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%) 0% 0% / 24px 24px no-repeat,
              
              /* Top-right corner - TRANSPARENT/CUTOFF */
              /* No gradient here for cutoff */
              
              /* Bottom-left corner - TRANSPARENT/CUTOFF */
              /* No gradient here for cutoff */
              
              /* Bottom-right corner - solid */
              radial-gradient(circle at 100% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%) 100% 100% / 24px 24px no-repeat
            `,
            backgroundRepeat: "no-repeat",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude" as any,
            pointerEvents: "none",
            zIndex: 100,
          }}
        />
      )}

      {children}
    </div>
  );
};

export default QuickActionsWrapper;