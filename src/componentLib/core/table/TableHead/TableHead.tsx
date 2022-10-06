import * as React from "react";
import cx from "classnames";

export interface TableHeadProps {
  children: React.ReactNode
}

export const TableHead: React.FunctionComponent<TableHeadProps> = ({
  children,
}) => {
  return <thead>{children}</thead>;
};

export default TableHead;
