import * as React from "react";
import cx from "classnames";

export interface FieldProps {
  error?: boolean;
  children: React.ReactNode
}

export const Field: React.FunctionComponent<FieldProps> = ({
  children,
  error = false,
}) => {
  const inputGroupClasses = cx(
    "c-input-group",
    "c-input-group--no_margin", // for now, disable default margin
    {
      "c-input-group--has-error": error,
    }
  );

  return <div className={inputGroupClasses}>{children}</div>;
};

export default Field;
