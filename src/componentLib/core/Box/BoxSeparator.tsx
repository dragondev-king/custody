import * as React from "react";
import cx from "classnames";

export interface BoxSeparatorProps {}

export const BoxSeparator: React.FunctionComponent<BoxSeparatorProps> = () => {
  const boxSeparatorClasses = cx("c-box__separator");

  return <div className={boxSeparatorClasses}></div>;
};

export default BoxSeparator;
