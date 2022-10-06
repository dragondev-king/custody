import * as React from "react";
import cx from "classnames";

export interface TableCellProps {
  header?: React.ReactNode;
  children: React.ReactNode
}

export const TableCell: React.FunctionComponent<TableCellProps> = ({
  children,
  header,
}) => {
  const allowedProps = { header };
  return <td {...allowedProps}>{children}</td>;
};

export default TableCell;
