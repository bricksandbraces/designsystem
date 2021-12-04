import React, { useState } from "react";
import { TableProps } from "./Table";
import { TableContainerProps } from "./TableContainer";
import { TableHeadProps } from "./TableHead";

export type HeaderEntry = {
  title: string;
  key: string;
  sortable?: boolean;
  sortFn?: (r1: RowEntry, r2: RowEntry) => number;
};

type Identifiable = {
  id: string;
};

export type RowEntry = Record<string, React.ReactNode> & Identifiable;

export type DataTableRendererProps = {
  rows: RowEntry[];
  headers: HeaderEntry[];
  getTableHeadProps: () => any;
  getTableContainerProps: () => any;
  getTableProps: () => any;
};

export type DataTableProps = {
  rows: RowEntry[];
  headers: HeaderEntry[];
  sortedByColumn?: string;
  customSortFn?: (a: RowEntry, b: RowEntry) => number;
  sortDirection?: "ascending" | "descending";
  children: (rendererProps: DataTableRendererProps) => React.ReactNode;
};

const DataTable = ({
  rows,
  headers,
  sortedByColumn,
  customSortFn,
  sortDirection = "ascending",
  children
}: DataTableProps): JSX.Element => {
  const [tableContainerProps] = useState<Partial<TableContainerProps>>({});
  const [tableProps] = useState<Partial<TableProps>>({});
  const [tableHeadProps] = useState<Partial<TableHeadProps>>();

  let processedRows = rows;

  // Sorting
  if (sortedByColumn) {
    if (customSortFn) {
      processedRows = processedRows.sort(customSortFn);
      if (sortDirection === "descending") {
        processedRows = processedRows.reverse();
      }
    } else {
      const sortableEntries = processedRows.filter(
        (row) => typeof row[sortedByColumn] === "string"
      );
      const unsortableEntries = processedRows.filter(
        (row) => typeof row[sortedByColumn] !== "string"
      );

      // sort sortableEntries and append unsortableEntries
      processedRows = sortableEntries
        .sort((a, b) => {
          const aString = a[sortedByColumn] as string;
          const bString = b[sortedByColumn] as string;
          return sortDirection === "ascending"
            ? aString.localeCompare(bString)
            : bString.localeCompare(aString);
        })
        .concat(unsortableEntries);
    }
  }

  const processedHeaders = headers;

  return (
    <>
      {children?.({
        rows: processedRows,
        headers: processedHeaders,
        getTableContainerProps: () => tableContainerProps,
        getTableProps: () => tableProps,
        getTableHeadProps: () => tableHeadProps
      })}
    </>
  );
};

export default DataTable;
