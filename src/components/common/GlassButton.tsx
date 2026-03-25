import React from "react";
import OutlineWrapper from "./OutlineWrapper";
import { Button } from "@heroui/react";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "small" | "large";
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  size = "small",
}) => {
  const sizeStyles: Record<"small" | "large", string> = {
    small: "px-16 py-1.5 text-base rounded-3xl",
    large: "px-22 py-3.5 text-lg rounded-3xl",
  };

  return (
    <OutlineWrapper className={className}>
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          text-white font-medium
          transition-all duration-300
          disabled:opacity-50
          disabled:cursor-not-allowed
          bg-transparent
          w-full h-full cursor-pointer
          ${sizeStyles[size]}
        `}
      >
        {children}
      </Button>
    </OutlineWrapper>
  );
};

export default GlassButton;