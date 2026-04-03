import React from "react";
import { Button, cn } from "@heroui/react";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "small" | "large";
  buttonClassName?: string;
}

const GlassButtons: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  size = "small",
  buttonClassName,
}) => {
  const sizeStyles: Record<"small" | "large", string> = {
    small: "px-10 py-1.5 rounded-3xl",
    large: "px-22 py-3.5 rounded-3xl",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-3xl overflow-visible transition-all duration-300 hover:scale-105 active:scale-95",
        "",
        className
      )}
      style={{
        backdropFilter: "blur(50px)",
        WebkitBackdropFilter: "blur(50px)",
      }}
    >
      {/* ✨ Glass Border Layer */}
      <span
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(-185deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude" as any,

        }}
      />

      {/* 🔘 Actual Button */}
      <Button
        onPress={onClick}
        isDisabled={disabled}
        className={cn(
          "relative z-10 w-full h-full text-white cursor-pointer !bg-transparent",
          "btn-text-regular backdrop-blur-[40px]",

          "",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeStyles[size],
          buttonClassName
        )}
      >
        {children}
      </Button>
    </div>
  );
};

export default GlassButtons;