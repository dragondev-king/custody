import * as React from "react";

export interface LabelProps {
  center?: boolean;
  error?: boolean;
  children: React.ReactNode;
  style?: any;
  htmlFor?: string;
}

export const Label: React.FunctionComponent<LabelProps> = ({
  center,
  error,
  children,
  style = {},
  htmlFor,
}) => {
  let className = "";
  // TODO: Remove this
  if (error) {
    className += "u-colorRed";
  }
  // TODO: Remove this
  if (center) {
    style.textAlign = "center";
  }
  return (
    <label
      className={`c-label s-fontSize12 ${className}`}
      style={style}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
