import * as React from "react";
import cx from "classnames";

export interface TableBodyProps {
  children: React.ReactNode
}

export const TableBody: React.FunctionComponent<TableBodyProps> = ({
  children,
}) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
