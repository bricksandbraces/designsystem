import { action } from "@storybook/addon-actions";
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
  SearchInput,
  Modal,
  Checkbox,
  Button
} from "../..";
import { prefix } from "../../settings";
import NumberInput from "../NumberInput/NumberInput";
import Pagination from "../Pagination/Pagination";
import Headline from "../Typography/Headline";
import DataTable, { HeaderEntry, RowEntry } from "./DataTable";
import TableActions from "./TableActions";
import TableSelectionCell from "./TableSelectionCell";
import TableSelectionHeaderCell from "./TableSelectionHeaderCell";
import TableSelectionRadioCell from "./TableSelectionRadioCell";
import TableSelectionRadioHeaderCell from "./TableSelectionRadioHeaderCell";
import TableToolbar from "./TableToolbar";
import TableToolbarFilterButton from "./TableToolbarFilterButton";
import { useTableFilter } from "./useTableFilter";
import { useTableSelection } from "./useTableSelection";
import { useTableSort } from "./useTableSort";

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
  { title: "Location (Country)", key: "location", sortable: true },
  { title: "Profession", key: "profession" }
];

export const DefaultPlainTable = () => {
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <TableContainer>
              <Table>
                <TableHead headers={defaultHeaders}>
                  <TableRow>
                    {unprocessedHeaders.map((header) => (
                      <TableHeadCell key={header.key}>
                        {header.title}
                      </TableHeadCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {unprocessedRows.map((row) => (
                    <TableRow key={row.id}>
                      {unprocessedHeaders.map((header) => (
                        <TableCell key={`${row.id}-${header.key}`}>
                          {row[header.key]}
                        </TableCell>
                      ))}
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
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
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
                            toggleAll={toggleAll}
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

export const DataTableWithRadioSelection = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [selectedID, selectID] = useState<string>();

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
                          <TableSelectionRadioHeaderCell />
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
                            <TableSelectionRadioCell
                              id={row.id + "-selection"}
                              checked={selectedID === row.id}
                              onChange={() => selectID(row.id)}
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

export const DataTableWithSortableHeaderCells = () => {
  const [
    sortByColumn,
    sortDirection,
    sortFn,
    toggleHeaderSorting,
    ,
    getSortState
  ] = useTableSort();
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
                          {headers.map((header) => {
                            return (
                              <TableHeadCell
                                key={header.key}
                                onClick={() => toggleHeaderSorting(header)}
                                sortState={getSortState(header)}
                              >
                                {header.title}
                              </TableHeadCell>
                            );
                          })}
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

export const DataTableWithToolbar = () => {
  const [itemsToShow, setItemsToShow] = useState<number>(3);
  const [searchQuery, setSearchQuery] = useState<string | undefined>();

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={object("Rows", defaultRows as RowEntry[])}
              headers={object("Headers", defaultHeaders) as HeaderEntry[]}
              searchQuery={searchQuery}
              itemsToShow={itemsToShow}
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

export const DataTableFilterPanel = () => {
  const [filterPanelOpen, setFilterPanelOpen] = useState<boolean>(false);
  const { activeFilters, activeFiltersCount, registerFilter } =
    useTableFilter();

  const [locationFilter, setLocationFilter] = useState<string[]>([]);
  const toggleLocationFilter = (location: string) => {
    let newAllowedLocations: string[] = [];
    if (locationFilter.includes(location)) {
      newAllowedLocations = locationFilter.filter((l) => l !== location);
    } else {
      newAllowedLocations = [...locationFilter, location];
    }

    setLocationFilter(newAllowedLocations);

    // afterwards re-register filter
    if (newAllowedLocations.length > 0) {
      registerFilter("location", (rowEntry: RowEntry) =>
        newAllowedLocations.includes(rowEntry.location as string)
      );
    } else {
      registerFilter("location", undefined);
    }
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              activeFilters={activeFilters}
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
                      {/** Extract to TableToolbarFilter Buttton */}
                      <TableToolbarFilterButton
                        activeFiltersCount={activeFiltersCount}
                        setFilterPanelOpen={setFilterPanelOpen}
                      />
                      <Modal
                        open={filterPanelOpen}
                        onClose={() => setFilterPanelOpen(false)}
                      >
                        <Headline type="h6">Location</Headline>
                        <Checkbox
                          id="location-filter-ger"
                          label="Germany"
                          value="Germany"
                          onChange={() => toggleLocationFilter("Germany")}
                        />
                        <Checkbox
                          id="location-filter-jap"
                          label="Japan"
                          value="Japan"
                          onChange={() => toggleLocationFilter("Japan")}
                        />
                        <Checkbox
                          id="location-filter-usa"
                          label="USA"
                          value="USA"
                          onChange={() => toggleLocationFilter("USA")}
                        />
                      </Modal>
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

export const DataTableRowActions = () => {
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
                          <TableHeadCell />
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
                            <TableActions>
                              <Button
                                key="edit"
                                onClick={(event) => {
                                  action("onClick")(event, row);
                                }}
                                kind="ghost"
                              >
                                Edit
                              </Button>
                            </TableActions>
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

export const DataTableWithBatchActions = () => {
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
                    <TableToolbar
                      selectedIDs={selectedIDs}
                      batchActions={
                        <>
                          <p>{selectedIDs.length} items selected</p>
                          <Button>Delete</Button>
                          <Button>Download</Button>
                           |
                          <Button
                            onClick={() => {
                              toggleAll(false);
                            }}
                          >
                            Cancel
                          </Button>
                        </>
                      }
                    >
                      <Button>Add new</Button>
                    </TableToolbar>
                    <Table {...getTableProps()}>
                      <TableHead
                        headers={defaultHeaders}
                        {...getTableHeadProps()}
                      >
                        <TableRow>
                          <TableSelectionHeaderCell
                            toggleAll={toggleAll}
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

export const DataTableWithPagination = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [page, setPage] = useState<number>(0);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              page={page}
              itemsPerPage={1}
            >
              {({
                rows,
                headers,
                pagesCount,
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
                      <Pagination
                        totalPages={pagesCount}
                        page={page}
                        onPageChange={(newPage) => setPage(newPage)}
                      />
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
