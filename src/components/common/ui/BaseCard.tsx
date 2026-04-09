import React from "react";
import QuickActionsWrapper from "./QuickActionsWrapper";

interface BaseCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hideBorder?: boolean;
}

interface SlotProps {
  children?: React.ReactNode;
  className?: string;
}

const BaseCard = ({ children, className = "", onClick, hideBorder = false }: BaseCardProps) => {
  return (
    <QuickActionsWrapper className={`w-full ${className}`} hideBorder={hideBorder}>
      <div className="w-full" onClick={onClick}>
        {children}
      </div>
    </QuickActionsWrapper>
  );
};

export const CardHeader = ({ children, className = "" }: SlotProps) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = "" }: SlotProps) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = "" }: SlotProps) => (
  <div className={`w-full ${className}`}>
    {children}
  </div>
);

export default BaseCard;