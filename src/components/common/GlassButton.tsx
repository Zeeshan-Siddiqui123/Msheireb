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
         
          w-full h-full cursor-pointer
          btn-text-regular
           backdrop-blur-[40px]
          ${sizeStyles[size]}
        ${buttonClassName}
        `}
        style={{
          background: 'linear-gradient(185deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',



        }}


      >
        {children}
      </Button>
    </OutlineWrapper>
  );
};

export default GlassButton;
