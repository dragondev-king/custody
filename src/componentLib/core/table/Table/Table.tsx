import * as React from "react";
import cx from "classnames";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "componentLib";

export interface TableProps {
  style?: "default" | "bordered";
  headers?: React.ReactNode[];
  headersGridSizes?: number[];
  rows?: any[];
  children?: React.ReactNode
}

export const Table: React.FunctionComponent<TableProps> = ({
  children,
  style = "default",
  headers,
  headersGridSizes,
  rows,
}) => {
  const tableClasses = cx("c-table c-table--spaced", {
    "c-table--bordered": style == "bordered",
  });

  if (children) {
    return <table className={tableClasses}>{children}</table>;
  }

  return (
    <table className={cx(tableClasses, "c-table--responsive")}>
      {headers && (
        <TableHead>
          <TableRow>
            {headers.map((header, headerIndex) => (
              <TableHeaderCell
                key={`header-cell-${headerIndex}`}
                col={headersGridSizes && headersGridSizes[headerIndex]}
              >
                {header}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
      )}
      {rows && (
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {row.map((cell: any, cellIndex: any) => (
                <TableCell
                  key={`row-${rowIndex}-cell-${cellIndex}`}
                  header={headers ? headers[cellIndex] : ""}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}
    </table>
  );
};

export default Table;
