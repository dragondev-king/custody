import * as React from "react";
import { SpacingsType } from "types/types";
import cx from "classnames";
export interface SpacerProps {
  spacing?: SpacingsType;
  children: React.ReactNode
}

export const Spacer: React.FunctionComponent<SpacerProps> = ({
  children,
  spacing = 1,
}) => {
  const spacingToString = String(spacing).replace(".", "_");
  const spacerClasses = cx(`s-marginBottom${spacingToString}`);

  return <div className={spacerClasses}>{children}</div>;
};

export default Spacer;
