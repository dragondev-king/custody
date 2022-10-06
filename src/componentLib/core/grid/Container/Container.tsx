import * as React from "react";
import cx from "classnames";
import { ColSizesType } from "componentLib";

export interface ContainerProps {
  children: React.ReactNode;
  maxSize?: ColSizesType;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  maxSize,
}) => {
  const containerClasses = cx(
    // Default
    "s-container",
    {
      [`s-gridMaxXs${maxSize}`]: maxSize,
    }
  );
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
