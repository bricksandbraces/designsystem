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
  TableBodyCell,
  SearchInput,
  Checkbox,
  Button,
  ButtonGroup,
  Link
} from "../..";

import TablePagination from "./TablePagination";
import DataTable, { HeaderEntry, RowEntry } from "./DataTable";
import TableActions from "./TableActions";
import TableSelectionCell from "./TableSelectionCell";
import TableSelectionHeadCell from "./TableSelectionHeadCell";
import TableSelectionRadioCell from "./TableSelectionRadioCell";
import TableSelectionRadioHeaderCell from "./TableSelectionRadioHeaderCell";
import TableToolbar from "./TableToolbar";
import TableFilterButton from "./TableFilterButton";
import { useTableFilter } from "./useTableFilter";
import { useTableSelection } from "./useTableSelection";
import { useTableSort } from "./useTableSort";
import TableTitle from "./TableTitle";
import TableHeader from "./TableHeader";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical, IconFilter } from "@tabler/icons";
import TableFooter from "./TableFooter";
import TableToolbarActions from "./TableToolbarActions";
import CheckboxGroup from "../Checkbox/CheckboxGroup";
import TableFilterPanel from "./TableFilterPanel";
import TableSkeletonCell from "./TableSkeletonCell";

export default { title: "Components/DataTable", decorators: [withKnobs] };

const defaultRows: RowEntry[] = [
  {
    id: "0",
    name: "Max Mustermann",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/de.png"
          style={{ marginRight: "1rem" }}
        />
        Germany
      </>
    ),
    profession: "Accountant"
  },
  {
    id: "1",
    name: "Joe Mustermann",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/us.png"
          style={{ marginRight: "1rem" }}
        />
        United States
      </>
    ),
    profession: "Content Creator"
  },
  {
    id: "2",
    name: "Lisa Liguster",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/jp.png"
          style={{ marginRight: "1rem" }}
        />
        Japan
      </>
    ),
    profession: "Firefighter"
  },
  {
    id: "3",
    name: "Harry Motter",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/gb.png"
          style={{ marginRight: "1rem" }}
        />
        United Kingdom
      </>
    ),
    profession: "F1 Driver"
  },
  {
    id: "4",
    name: "Ginni Wusely",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/es.png"
          style={{ marginRight: "1rem" }}
        />
        Spain
      </>
    ),
    profession: "Queen of Spain"
  },
  {
    id: "5",
    name: "Neville Shortbottom",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/pl.png"
          style={{ marginRight: "1rem" }}
        />
        Poland
      </>
    ),
    profession: "White-Collar Worker"
  },
  {
    id: "6",
    name: "Hermine Stranger",
    location: (
      <>
        <img
          width="16"
          src="https://flagcdn.com/w160/it.png"
          style={{ marginRight: "1rem" }}
        />
        Italy
      </>
    ),
    profession: "Witch"
  }
];

const defaultHeaders: HeaderEntry[] = [
  { title: "Full Name", key: "name", sortable: true },
  { title: "Location (Country)", key: "location", sortable: true },
  { title: "Profession", key: "profession" }
];

export const Default = () => {
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithSelection = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [selectedIDs, toggleSelectionForRow, toggleAll] =
    useTableSelection(unprocessedRows);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                        <TableSelectionHeadCell
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithRadioSelection = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [selectedID, selectID] = useState<string>();

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithSorting = () => {
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithHeader = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                  <TableHeader>
                    <TableTitle>Datatable with Header</TableTitle>
                  </TableHeader>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithToolbar = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [itemsToShow, setItemsToShow] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string | undefined>("");

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <DataTable
            rows={unprocessedRows}
            headers={unprocessedHeaders}
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
                <TableContainer
                  {...getTableContainerProps()}
                  title="Data Table with Header"
                >
                  <TableHeader>
                    <TableTitle>Datatable with Toolbar</TableTitle>
                  </TableHeader>
                  <TableToolbar>
                    <SearchInput
                      light
                      id="datatable-search"
                      label="Search"
                      onChange={(newValue) => {
                        setSearchQuery(newValue);
                      }}
                      withSubmit={false}
                    />
                    <TableToolbarActions>
                      <Button>Add new Order</Button>
                    </TableToolbarActions>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithFilterPanel = () => {
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
                <TableContainer
                  {...getTableContainerProps()}
                  title="Datatable with Icons"
                >
                  <TableHeader>
                    <TableTitle>Datatable with Filter panel</TableTitle>
                  </TableHeader>
                  <TableToolbar>
                    <SearchInput
                      light
                      id="datatable-search"
                      label="Search"
                      onChange={(newValue) => {
                        setSearchQuery(newValue);
                      }}
                      withSubmit={false}
                    />
                    <TableToolbarActions>
                      <TableFilterButton
                        activeFiltersCount={activeFiltersCount}
                        setFilterPanelOpen={() =>
                          setFilterPanelOpen(!filterPanelOpen)
                        }
                      />
                      <IconOnlyButton
                        kind="ghost"
                        icon={<IconDotsVertical />}
                      />
                      <Button>Add new Order</Button>
                    </TableToolbarActions>
                  </TableToolbar>
                  <TableFilterPanel
                    open={filterPanelOpen}
                    onClose={() => setFilterPanelOpen(!filterPanelOpen)}
                  >
                    <CheckboxGroup
                      orientation="vertical"
                      legendLabel="Location (Country)"
                      name="filter"
                    >
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
                    </CheckboxGroup>
                    <CheckboxGroup
                      orientation="vertical"
                      legendLabel="Location (Country)"
                      name="filter"
                    >
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
                    </CheckboxGroup>
                  </TableFilterPanel>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithRowActions = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                          <TableActions>
                            <Link
                              key="edit"
                              onClick={(event) => {
                                action("onClick")(event, row);
                              }}
                            >
                              Edit
                            </Link>
                          </TableActions>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithBatchActions = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [selectedIDs, toggleSelectionForRow, toggleAll] =
    useTableSelection(unprocessedRows);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
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
                  <TableHeader>
                    <TableTitle>
                      {selectedIDs.length > 0
                        ? `${selectedIDs.length} items selected`
                        : `Datatable Header`}
                    </TableTitle>
                    <TableToolbar
                      selectedIDs={selectedIDs}
                      batchActions={
                        <>
                          <ButtonGroup withDivider>
                            <Button>Delete</Button>
                            <Button>Download</Button>
                            <Button
                              onClick={() => {
                                toggleAll(false);
                              }}
                            >
                              Cancel
                            </Button>
                          </ButtonGroup>
                        </>
                      }
                    >
                      <Button>Add new</Button>
                    </TableToolbar>
                  </TableHeader>

                  <Table {...getTableProps()}>
                    <TableHead
                      headers={defaultHeaders}
                      {...getTableHeadProps()}
                    >
                      <TableRow>
                        <TableSelectionHeadCell
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const WithTablePagination = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [page, setPage] = useState<number>(0);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <DataTable
            rows={unprocessedRows}
            headers={unprocessedHeaders}
            page={page}
            itemsPerPage={3}
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
                  <TableHeader>
                    <TableTitle>Datatable with TablePagination</TableTitle>
                  </TableHeader>
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
                            <TableBodyCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableBodyCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <TableFooter>
                    <TablePagination
                      totalPages={pagesCount}
                      page={page}
                      onPageChange={(newPage) => setPage(newPage)}
                    />
                  </TableFooter>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};

export const Skeleton = () => {
  const unprocessedRows = object("Rows", defaultRows as RowEntry[]);
  const unprocessedHeaders = object("Headers", defaultHeaders) as HeaderEntry[];

  const [page, setPage] = useState<number>(0);

  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <DataTable
            rows={unprocessedRows}
            headers={unprocessedHeaders}
            page={page}
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
                  <TableHeader>
                    <TableTitle>Datatable with TablePagination</TableTitle>
                  </TableHeader>
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
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                      <TableRow>
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                        <TableSkeletonCell />
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              );
            }}
          </DataTable>
        </Column>
      </Grid>
    </div>
  );
};
