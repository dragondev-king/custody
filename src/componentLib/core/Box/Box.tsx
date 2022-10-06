import * as React from "react";
import cx from "classnames";

export interface BoxProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  fullHeight = false,
  fullWidth = false,
  className
}) => {
  const boxClasses = cx("c-box", {
    "u-height100": fullHeight,
    "u-width100": fullWidth,
  }, className);
  return <div className={boxClasses}>{children}</div>;
};

export default Box;
