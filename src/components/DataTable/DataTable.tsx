import cx from "classnames";
import { chunk } from "lodash";
import React, { useState } from "react";
import { prefix } from "../../settings";
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
  pagesCount: number;
};

export type DataTableProps = {
  rows: RowEntry[];
  headers: HeaderEntry[];
  inline?: boolean;
  sortedByColumn?: string;
  activeFilters?: Record<string, ((row: RowEntry) => boolean) | undefined>;
  customSortFn?: (a: RowEntry, b: RowEntry) => number;
  sortDirection?: "ascending" | "descending";
  itemsToShow?: number;
  searchQuery?: string;
  customSearchFilterFn?: (row: RowEntry) => boolean;
  children: (rendererProps: DataTableRendererProps) => React.ReactNode;
  actions?: (row: RowEntry) => JSX.Element[];
  page?: number;
  itemsPerPage?: number;
  size?: "large" | "default" | "small";
};

export const DataTable = React.forwardRef(function DataTable(
  {
    rows,
    headers,
    activeFilters,
    sortedByColumn,
    inline = false,
    customSortFn,
    size = "default",
    sortDirection = "ascending",
    itemsToShow,
    searchQuery,
    page,
    itemsPerPage,
    customSearchFilterFn,
    children
  }: DataTableProps,
  ref: React.ForwardedRef<any>
): JSX.Element {
  const [tableContainerProps] = useState<Partial<TableContainerProps>>({});
  const [tableProps] = useState<Partial<TableProps>>({});
  const [tableHeadProps] = useState<Partial<TableHeadProps>>();

  const processedHeaders = headers;
  let processedRows = rows;

  // Filtering

  if (activeFilters) {
    Object.keys(activeFilters).forEach((filterKey) => {
      const filterFn = activeFilters[filterKey];
      if (filterFn) {
        processedRows = processedRows.filter(filterFn);
      }
    });
  }

  // Searching

  if (searchQuery) {
    const basicSearchFilterFn = (rowEntry: RowEntry) => {
      return (
        !searchQuery ||
        Object.keys(rowEntry)
          .filter((key) => typeof rowEntry[key] === "string")
          .some((key) => (rowEntry[key] as string).includes(searchQuery))
      );
    };

    processedRows = processedRows.filter(
      customSearchFilterFn ?? basicSearchFilterFn
    );
  }

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

  let pagesCount: number = 1;

  // Slice
  if (itemsToShow != null) {
    processedRows = processedRows.slice(0, itemsToShow);
  } else {
    // Pagination
    if (itemsPerPage != null && page != null) {
      const chunkedRows = chunk(processedRows, itemsPerPage);
      processedRows = chunkedRows[page];
      pagesCount = chunkedRows.length;
    }
  }

  return (
    <div
      className={cx(`${prefix}--datatable ${prefix}--datatable-${size}`, {
        [`${prefix}--datatable-inline`]: inline === true
      })}
      ref={ref}
    >
      {children?.({
        rows: processedRows,
        headers: processedHeaders,
        getTableContainerProps: () => tableContainerProps,
        getTableProps: () => tableProps,
        getTableHeadProps: () => tableHeadProps,
        pagesCount
      })}
    </div>
  );
});
