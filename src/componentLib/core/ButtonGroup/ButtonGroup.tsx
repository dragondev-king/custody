import * as React from "react";
import cx from "classnames";

export interface ButtonGroupProps {
  children: React.ReactNode;
}

export const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  children,
}) => {
  const buttonClasses = cx(
    // Default
    "c-button-group"
  );

  return <div className={buttonClasses}>{children}</div>;
};

export default ButtonGroup;
