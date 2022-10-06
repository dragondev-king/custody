import * as React from "react";
import cx from "classnames";
export const ColSizes = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
export type ColSizesType = typeof ColSizes[number];

export interface ColProps {
  children: React.ReactNode;
  xs?: ColSizesType;
  sm?: ColSizesType;
  md?: ColSizesType;
  lg?: ColSizesType;
  pushXs?: ColSizesType;
  pushSm?: ColSizesType;
  pushMd?: ColSizesType;
  pushLg?: ColSizesType;
  spacing?: "default" | "0" | "C";
}

export const Col: React.FunctionComponent<ColProps> = ({
  children,
  xs = 24,
  sm,
  md,
  lg,
  pushXs,
  pushSm,
  pushMd,
  pushLg,
  spacing = "default",
}) => {
  const colBaseClass = cx({
    "s-grid": spacing == "default",
    "s-gridC": spacing == "C",
    "s-grid0": spacing == "0",
  });

  const colClasses = cx(
    {
      [`${colBaseClass}-colXs${xs}`]: xs,
      [`${colBaseClass}-colSm${sm}`]: sm,
      [`${colBaseClass}-colMd${md}`]: md,
      [`${colBaseClass}-colLg${lg}`]: lg,
    },
    {
      [`${colBaseClass}--pushXs${pushXs}`]: pushXs,
      [`${colBaseClass}--pushSm${pushSm}`]: pushSm,
      [`${colBaseClass}--pushMd${pushMd}`]: pushMd,
      [`${colBaseClass}--pushLg${pushLg}`]: pushLg,
    }
  );
  return <div className={colClasses}>{children}</div>;
};

export default Col;
