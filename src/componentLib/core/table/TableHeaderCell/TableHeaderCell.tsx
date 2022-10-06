import * as React from "react";
import cx from "classnames";

export interface TableHeaderCellProps {
  col?: number;
  children: React.ReactNode
}

export const TableHeaderCell: React.FunctionComponent<TableHeaderCellProps> = ({
  children,
  col,
}) => {
  const tableHeaderCellClasses = cx({
    [`c-table__col${col}`]: col,
  });
  return <th className={tableHeaderCellClasses}>{children}</th>;
};

export default TableHeaderCell;
