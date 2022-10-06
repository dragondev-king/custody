import * as React from "react";
import cx from "classnames";
import { Col } from "componentLib";

export interface GridProps {
  spacing?: "default" | "0" | "C";
  children: React.ReactNode
}

export const Grid: React.FunctionComponent<GridProps> = ({
  children,
  spacing = "default",
}) => {
  const colClasses = cx({
    "s-grid": spacing == "default",
    "s-grid0": spacing == "0",
    "s-gridC": spacing == "C",
  });
  // s-gridMaxXs12
  // Force the spacing down the Col to avoid repeatition
  const childrenWithProps = React.Children.map(children, (child) => {
    const reactChild = child as React.ReactElement<any>;
    if (!reactChild) {
      return child;
    }

    const reactChildType = reactChild.type as any;
    if (!reactChildType) {
      return child;
    }

    const reactChildName = reactChildType.name as any;
    if (!reactChildName) {
      return child;
    }

    if (React.isValidElement(child) && reactChildName == Col.name) {
      return React.cloneElement(child, { spacing });
    } else {
      return child;
    }
  });

  return <div className={colClasses}>{childrenWithProps}</div>;
};

export default Grid;
