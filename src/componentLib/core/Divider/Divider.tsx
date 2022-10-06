import * as React from "react";
import cx from "classnames";
import { SpacingsType } from "types/types";

export interface DividerProps {
  spacingTop?: SpacingsType;
  spacingBottom?: SpacingsType;
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  spacingTop = 1,
  spacingBottom = 1,
}) => {
  const spacingTopToString = String(spacingTop).replace(".", "_");
  const spacingBottomToString = String(spacingBottom).replace(".", "_");
  const dividerClasses = cx(
    // Default
    "c-divider",
    `s-marginTop${spacingTopToString}`,
    `s-marginBottom${spacingBottomToString}`
  );

  return <hr className={dividerClasses} />;
};

export default Divider;
