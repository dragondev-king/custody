import * as React from "react";

export interface InlineLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export const InlineLabel: React.FunctionComponent<InlineLabelProps> = ({
  children,
  htmlFor,
}) => {
  return (
    <label className="c-label c-label--inline" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default InlineLabel;
