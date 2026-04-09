import React from "react";
import BaseCard from "./ui/BaseCard";

interface WithCardContainerProps {
  className?: string;
}

const withCardContainer = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & WithCardContainerProps) => {
    const { className, ...remainingProps } = props;
    return (
      <BaseCard className={className}>
        <WrappedComponent {...(remainingProps as P)} />
      </BaseCard>
    );
  };
};

export default withCardContainer;
