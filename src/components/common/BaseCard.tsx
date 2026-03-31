import { Card } from "@heroui/react";
import React from "react";

interface BaseCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface SlotProps {
  children?: React.ReactNode;
  className?: string;
}

const BaseCard = ({ children, className = "", onClick }: BaseCardProps) => {
  return (
    <Card
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export const CardHeader = ({ children, className = "" }: SlotProps) => (
  <CardHeader className={`${className}`}>
    {children}
  </CardHeader>
);

export const CardBody = ({ children, className = "" }: SlotProps) => (
  <CardBody className={`${className}`}>
    {children}
  </CardBody>
);

export const CardFooter = ({ children, className = "" }: SlotProps) => (
  <CardFooter className={`${className}`}>
    {children}
  </CardFooter>
);

export default BaseCard;