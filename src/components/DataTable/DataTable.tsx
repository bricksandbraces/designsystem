import React, { useState } from "react";
import { TableProps } from "./Table";
import { TableContainerProps } from "./TableContainer";
import { TableHeadProps } from "./TableHead";

export type HeaderEntry = {
  title: string;
  key: string;
  sortFn?: (r1: RowEntry, r2: RowEntry) => boolean;
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
  children: (rendererProps: DataTableRendererProps) => React.ReactNode;
};

const DataTable = ({
  rows,
  headers,
  children
}: DataTableProps): JSX.Element => {
  const [tableContainerProps, setTableContainerProps] = useState<
    Partial<TableContainerProps>
  >({});

  const [tableProps, setTableProps] = useState<Partial<TableProps>>({});

  const [tableHeadProps, setTableHeadProps] =
    useState<Partial<TableHeadProps>>();

  const processedRows = rows;
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
