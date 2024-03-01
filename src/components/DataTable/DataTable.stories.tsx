import { IconDotsVertical, IconSearch, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Column,
  DataTable,
  EmptyState,
  Grid,
  HeaderEntry,
  IconOnlyButton,
  OverflowMenu,
  OverflowMenuItem,
  RowEntry,
  SearchInput,
  Table,
  TableActions,
  TableBody,
  TableBodyCell,
  TableContainer,
  TableFilterButton,
  TableFooter,
  TableHead,
  TableHeadCell,
  TableHeader,
  TablePagination,
  TableRow,
  TableSelectionCell,
  TableSelectionHeadCell,
  TableSelectionRadioCell,
  TableSelectionRadioHeaderCell,
  TableSkeletonCell,
  TableTitle,
  TableToolbar,
  TableToolbarActions
} from "../..";

import { TableFilterPanel } from "./TableFilterPanel";
import { useTableFilter } from "./useTableFilter";
import { useTableSelection } from "./useTableSelection";
import { useTableSort } from "./useTableSort";

export default { title: "Miscellaneous/DataTable" };

const defaultRows: RowEntry[] = [
  {
    id: "0",
    name: "Max Mustermann",
    location: (
      <>
        <img
          width="16"
          alt="Max Mustermann"
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
          alt="Joe Mustermann"
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
          alt="Lisa Liguster"
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
          alt="Harry Motter"
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
          alt="Ginni Wusely"
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
          alt="Neville Shortbottom"
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
          alt="Hermine Stranger"
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

export const Default = {
  render: () => {
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];
    const unprocessedRows = defaultRows as RowEntry[];
    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              inline={false}
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
  }
};

export const WithSelection = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    const [selectedIDs, toggleSelectionForRow, toggleAll] =
      useTableSelection(unprocessedRows);

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              inline={false}
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
  }
};

export const WithRadioSelection = {
  render: () => {
    const unprocessedRows = defaultRows;
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    const [selectedID, selectID] = useState<string>();

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              inline={false}
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
  }
};

export const WithSorting = {
  render: () => {
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
              rows={defaultRows as RowEntry[]}
              headers={defaultHeaders as HeaderEntry[]}
              sortedByColumn={sortByColumn}
              sortDirection={sortDirection}
              customSortFn={sortFn}
              inline={false}
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
  }
};

export const WithHeader = {
  render: () => {
    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={defaultRows as RowEntry[]}
              headers={defaultHeaders as HeaderEntry[]}
              inline={false as any}
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
  }
};

export const WithToolbar = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    const [searchQuery, setSearchQuery] = useState<string | undefined>("");

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              searchQuery={searchQuery}
              inline={false}
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
                        {(searchQuery?.length ?? 0) > 0 &&
                          rows.length === 0 && (
                            <TableRow>
                              <td colSpan={3}>
                                <EmptyState
                                  orientation="horizontal"
                                  icon={<IconSearch />}
                                  title="Whooops!"
                                  subTitle="We couldn't find any single bread crumb. Please review your input."
                                />
                              </td>
                            </TableRow>
                          )}
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
  }
};

export const WithFilterPanel = {
  render: () => {
    const [filterPanelOpen, setFilterPanelOpen] = useState<boolean>(false);
    const { activeFilters, activeFiltersCount, registerFilter } =
      useTableFilter();

    const [searchQuery, setSearchQuery] = useState<string | undefined>("");

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
              searchQuery={searchQuery}
              rows={defaultRows as RowEntry[]}
              headers={defaultHeaders as HeaderEntry[]}
              inline={false as any}
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
  }
};

export const WithRowActions = {
  render: () => {
    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={defaultRows as RowEntry[]}
              headers={defaultHeaders as HeaderEntry[]}
              inline={false}
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
                              <Button kind="ghost">Edit</Button>
                              <IconOnlyButton
                                kind="ghost"
                                icon={<IconTrash />}
                              />
                              <OverflowMenu light>
                                <OverflowMenuItem onClick={() => {}}>
                                  Enable 2FA
                                </OverflowMenuItem>
                                <OverflowMenuItem href="#">
                                  Turn on accessibility
                                </OverflowMenuItem>

                                <OverflowMenuItem>
                                  Check connectivity
                                </OverflowMenuItem>
                              </OverflowMenu>
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
  }
};

export const WithBatchActions = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    const [selectedIDs, toggleSelectionForRow, toggleAll] =
      useTableSelection(unprocessedRows);

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              inline={false}
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
                      <TableTitle>
                        {selectedIDs.length > 0
                          ? `${selectedIDs.length} items selected`
                          : "Datatable Header"}
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
  }
};

export const WithTablePagination = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

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
              inline={false}
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
  }
};

export const Inline = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    const [page, setPage] = useState<number>(0);

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              inline={true}
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
                      <TableTitle>
                        Inline Datatable with TablePagination
                      </TableTitle>
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
  }
};

export const Skeleton = {
  render: () => {
    const unprocessedRows = defaultRows as RowEntry[];
    const unprocessedHeaders = defaultHeaders as HeaderEntry[];

    return (
      <div style={{ marginTop: "16px" }}>
        <Grid narrow>
          <Column sm={4} md={8} lg={16} xlg={16}>
            <DataTable
              rows={unprocessedRows}
              headers={unprocessedHeaders}
              inline={false}
            >
              {({
                headers,
                getTableContainerProps,
                getTableProps,
                getTableHeadProps
              }) => {
                return (
                  <TableContainer {...getTableContainerProps()}>
                    <TableHeader>
                      <TableTitle>Datatable with Skeletons</TableTitle>
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
  }
};
