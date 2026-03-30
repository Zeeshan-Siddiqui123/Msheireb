import React from "react";
import OutlineWrapper from "./OutlineWrapper";
import { Button } from "@heroui/react";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "small" | "large";
  buttonClassName?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  size = "small",
  buttonClassName
}) => {
  const sizeStyles: Record<"small" | "large", string> = {
    small: "px-10 py-1.5  rounded-3xl",
    large: "px-22 py-3.5  rounded-3xl",
  };

  return (
    <OutlineWrapper className={className}>
      <Button
        onClick={onClick}
        disabled={disabled}
        className={`
          text-white duration-300
          disabled:opacity-50
          disabled:cursor-not-allowed
          bg-transparent
          w-full h-full cursor-pointer
          btn-text-regular backdrop:blur-1
          ${sizeStyles[size]}
        ${buttonClassName}
        `}
      >
        {children}
      </Button>
    </OutlineWrapper>
  );
};

export default GlassButton;