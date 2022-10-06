import * as React from "react";
import cx from "classnames";

export interface TableRowProps {
  children: React.ReactNode
}

export const TableRow: React.FunctionComponent<TableRowProps> = ({
  children,
}) => {
  return <tr>{children}</tr>;
};

export default TableRow;
