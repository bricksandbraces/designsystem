import { object, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import {
  Grid,
  Column,
  Table,
  TableRow,
  TableHead,
  TableHeadCell,
  TableContainer,
  TableBody,
  TableCell,
  SearchInput
} from "../..";
import { prefix } from "../../settings";
import NumberInput from "../NumberInput/NumberInput";
import DataTable, { HeaderEntry, RowEntry } from "./DataTable";
import TableSelectionCell from "./TableSelectionCell";
import TableSelectionHeaderCell from "./TableSelectionHeaderCell";
import TableToolbar from "./TableToolbar";

export default { title: "Components/DataTable", decorators: [withKnobs] };

const defaultRows: RowEntry[] = [
  {
    id: "0",
    name: "Max Nustermann",
    location: "Germany",
    profession: "Fachkraft"
  },
  {
    id: "1",
    name: "Joe Nustermann",
    location: "USA",
    profession: "Fachkraft"
  },
  {
    id: "2",
    name: "Lilsa Nustermann",
    location: "Japan",
    profession: "Fachkraft"
  }
];
const defaultHeaders: HeaderEntry[] = [
  { title: "Full Name", key: "name", sortable: true },
  { title: "Location (Country)", key: "location" },
  { title: "Profession", key: "profession" }
];

export const DefaultPlainTable = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <TableContainer>
              <Table>
                <TableHead headers={defaultHeaders}>
                  <TableRow>
                    {(object("Headers", defaultHeaders) as HeaderEntry[]).map(
                      (header) => (
                        <TableHeadCell key={header.key}>
                          {header.title}
                        </TableHeadCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {object("Rows", defaultRows as RowEntry[]).map((row) => (
                    <TableRow key={row.id}>
                      {(object("Headers", defaultHeaders) as HeaderEntry[]).map(
                        (header) => (
                          <TableCell key={`${row.id}-${header.key}`}>
                            {row[header.key]}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export const DefaultAsDataTable = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={object("Rows", defaultRows as RowEntry[])}
              headers={object("Headers", defaultHeaders) as HeaderEntry[]}
            >
              {({
                rows,
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()}>
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeadCell key={header.key}>
                              {header.title}
                            </TableHeadCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            {headers.map((header) => (
                              <TableCell key={`${row.id}-${header.key}`}>
                                {row[header.key]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            </DataTable>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

const useTableSelection = (
  unprocessedRows: RowEntry[]
): [string[], (entry: RowEntry) => void, () => void] => {
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);

  const toggleSelectionForRow = (entry: RowEntry) => {
    if (!selectedIDs.includes(entry.id)) {
      setSelectedIDs([...selectedIDs, entry.id]);
    } else {
      setSelectedIDs(selectedIDs.filter((id) => id !== entry.id));
    }
  };

  const toggleAll = () => {
    // all selected
    if (selectedIDs.length === unprocessedRows.length) {
      setSelectedIDs([]);
    } else {
      setSelectedIDs(unprocessedRows.map((row) => row.id));
    }
  };

  return [selectedIDs, toggleSelectionForRow, toggleAll];
};

export const DataTableWithSelection = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [selectedIDs, toggleSelectionForRow, toggleAll] =
    useTableSelection(unprocessedRows);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable rows={unprocessedRows} headers={unprocessedHeaders}>
              {({
                rows,
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()}>
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          <TableSelectionHeaderCell
                            onChange={toggleAll}
                            unprocessedRows={unprocessedRows}
                            selectedRows={selectedIDs}
                          />
                          {headers.map((header) => (
                            <TableHeadCell key={header.key}>
                              {header.title}
                            </TableHeadCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            <TableSelectionCell
                              id={row.id + "-selection"}
                              checked={selectedIDs.includes(row.id)}
                              onChange={() => toggleSelectionForRow(row)}
                            />
                            {headers.map((header) => (
                              <TableCell key={`${row.id}-${header.key}`}>
                                {row[header.key]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            </DataTable>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

const useTableSort = (): [
  string | undefined,
  "ascending" | "descending",
  ((r1: RowEntry, r2: RowEntry) => number) | undefined,
  (header: HeaderEntry) => void,
  () => void
] => {
  const [sortByColumn, setSortByColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("descending");
  const [sortFn, setSortFn] =
    useState<(r1: RowEntry, r2: RowEntry) => number>();

  const toggleHeaderSorting = (header: HeaderEntry) => {
    setSortByColumn(header.key);
    setSortDirection(
      sortDirection === "ascending" ? "descending" : "ascending"
    );
    setSortFn(header.sortFn);
  };

  const disableSorting = () => {
    setSortByColumn(undefined);
    setSortDirection("descending");
    setSortFn(undefined);
  };

  return [
    sortByColumn,
    sortDirection,
    sortFn,
    toggleHeaderSorting,
    disableSorting
  ];
};

export const DataTableWithSortableHeaderCells = () => {
  const [sortByColumn, sortDirection, sortFn, toggleHeaderSorting] =
    useTableSort();
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={object("Rows", defaultRows as RowEntry[])}
              headers={object("Headers", defaultHeaders) as HeaderEntry[]}
              sortedByColumn={sortByColumn}
              sortDirection={sortDirection}
              customSortFn={sortFn}
            >
              {({
                rows,
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()}>
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeadCell
                              key={header.key}
                              onClick={() => toggleHeaderSorting(header)}
                              interactive={header.sortable}
                            >
                              {header.title}
                            </TableHeadCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            {headers.map((header) => (
                              <TableCell key={`${row.id}-${header.key}`}>
                                {row[header.key]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            </DataTable>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export const DataTableWithHeader = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={object("Rows", defaultRows as RowEntry[])}
              headers={object("Headers", defaultHeaders) as HeaderEntry[]}
            >
              {({
                rows,
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()} title="Tableau">
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeadCell key={header.key}>{}</TableHeadCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            {headers.map((header) => (
                              <TableCell key={`${row.id}-${header.key}`}>
                                {row[header.key]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            </DataTable>
          </div>
        </Column>
      </Grid>
    </div>
  );
};

export const DataTableWithToolbar = () => {
  const [itemsToShow, setItemsToShow] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const filterBySearchQuery = (rowEntry: RowEntry) => {
    return (
      !searchQuery ||
      Object.keys(rowEntry)
        .filter((key) => typeof rowEntry[key] === "string")
        .some((key) => (rowEntry[key] as string).includes(searchQuery))
    );
  };
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={object("Rows", defaultRows as RowEntry[])}
              headers={object("Headers", defaultHeaders) as HeaderEntry[]}
            >
              {({
                rows,
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()}>
                    <TableToolbar>
                      Show
                      <NumberInput
                        value={itemsToShow}
                        min={0}
                        max={rows.length}
                        onChange={(event, { parsedValue }) => {
                          if (parsedValue != null) {
                            setItemsToShow(parsedValue);
                          }
                        }}
                      />
                      entries
                      <SearchInput
                        id="datatable-search"
                        label="Search"
                        onChange={(event) => setSearchQuery(event.target.value)}
                        withSubmit={false}
                      />
                    </TableToolbar>
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeadCell key={header.key}>
                              {header.title}
                            </TableHeadCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .filter(filterBySearchQuery)
                          .slice(0, itemsToShow)
                          .map((row) => (
                            <TableRow key={row.id}>
                              {headers.map((header) => (
                                <TableCell key={`${row.id}-${header.key}`}>
                                  {row[header.key]}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                );
              }}
            </DataTable>
          </div>
        </Column>
      </Grid>
    </div>
  );
};
