import * as React from "react";
import { useEffect, useState } from "react";
import cx from "classnames";

import { RowsPerPageType, SpacingsType } from "types/types";

import { BoxSeparator, Icon, Link, Table, TableProps, Box, Flex } from "componentLib";

export interface TableWithPaginationProps extends TableProps {
  rowsPerPage: RowsPerPageType;
  highlightedRowIndexes: any[];
  className?: string;
}

export const TableWithPagination: React.FunctionComponent<TableWithPaginationProps> = ({
  headers,
  headersGridSizes,
  rows = [],
  rowsPerPage,
  style,
  className
}) => {
  const calcNumberOfPages = (numberOfRows: number, rowsPerPage: number) => {
    return Math.ceil(numberOfRows / rowsPerPage);
  };

  const determineRowSubset = (rows: any[], rowsPerPage: number, page: number) => {
    if (rowsPerPage) {
      const start = rowsPerPage * page;
      const end = start + rowsPerPage;
      return rows.slice(start, end);
    }
    return rows;
  };

  const [numberOfPages, setNumberOfPages] = useState(() =>
    calcNumberOfPages(rows.length, rowsPerPage)
  );
  const [page, setPage] = useState(0);
  const [rowSubset, setRowSubset] = useState(() =>
    determineRowSubset(rows, rowsPerPage, page)
  );

  useEffect(() => {
    const newPage = 0;
    const newSubset = determineRowSubset(rows, rowsPerPage, newPage);
    setRowSubset(newSubset);
    setPage(newPage);
    setNumberOfPages(calcNumberOfPages(rows.length, rowsPerPage));
  }, [rows]);

  const handleChangePage = (typeOfChange: string, chosenPage = null) => {
    let newPage = null;
    if (typeOfChange === "dec" && page > 0) {
      newPage = page - 1;
    } else if (typeOfChange === "incr" && page < numberOfPages) {
      newPage = page + 1;
    } else if (typeOfChange === "choose") {
      newPage = chosenPage;
    }
    if (newPage !== null) {
      setPage(newPage);
      setRowSubset(determineRowSubset(rows, rowsPerPage, newPage));
    }
  };

  return (
    <Box className={className}>
      <Table
        headers={headers}
        headersGridSizes={headersGridSizes}
        rows={rowSubset}
        style={style}
      />
      {rowsPerPage && rows.length > 0 && <BoxSeparator />}
      {rowsPerPage && rows.length > 0 && (
        <div className="s-padding1">
          <Flex container justifyContent="flex-end" spacing={1}>
            <div>
              {page * rowsPerPage + 1}-
              {page * rowsPerPage + rowsPerPage > rows.length
                ? rows.length
                : page * rowsPerPage + rowsPerPage}{" "}
              of {rows.length}
            </div>
            <Link
              cursorPointer={page !== 0}
              disabled={page === 0}
              onClick={() => handleChangePage("dec")}
              unstyled={page === 0}
            >
              <Icon icon="chevron-left" />
            </Link>
            <Link
              cursorPointer={page + 1 < numberOfPages}
              disabled={page + 1 === numberOfPages}
              onClick={() => handleChangePage("incr")}
              unstyled={page + 1 === numberOfPages}
            >
              <Icon icon="chevron-right" />
            </Link>
          </Flex>
        </div>
      )}
    </Box>
  );
};

export default TableWithPagination;
