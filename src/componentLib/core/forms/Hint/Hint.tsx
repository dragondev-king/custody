import * as React from "react";

export interface HintProps {
  children: React.ReactNode;
}

export const Hint: React.FunctionComponent<HintProps> = ({ children }) => {
  return <div className="c-hint">{children}</div>;
};

export default Hint;
