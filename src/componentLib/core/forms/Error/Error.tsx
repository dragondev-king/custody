import * as React from "react";
import cx from "classnames";

export interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FunctionComponent<ErrorProps> = ({ children }) => {
  return <div className="c-input-hint">{children}</div>;
};

export default Error;
