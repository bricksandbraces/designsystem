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
  Button,
  ButtonGroup,
  Link,
  Select
} from "../..";

import Pagination from "../Pagination/Pagination";
import Headline from "../Typography/Headline";
import DataTable, { HeaderEntry, RowEntry } from "./DataTable";
import TableActions from "./TableActions";
import TableSelectionCell from "./TableSelectionCell";
import TableSelectionHeadCell from "./TableSelectionHeadCell";
import TableSelectionRadioCell from "./TableSelectionRadioCell";
import TableSelectionRadioHeaderCell from "./TableSelectionRadioHeaderCell";
import TableToolbar from "./TableToolbar";
import TableToolbarFilterButton from "./TableToolbarFilterButton";
import { useTableFilter } from "./useTableFilter";
import { useTableSelection } from "./useTableSelection";
import { useTableSort } from "./useTableSort";
import TableTitle from "./TableTitle";
import TableHeader from "./TableHeader";
import IconOnlyButton from "../Button/IconOnlyButton";
import {
  IconAlertCircle,
  IconDots,
  IconDotsVertical,
  IconFilter
} from "@tabler/icons";
import ModalHeader from "../Modal/ModalHeader";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import TableFooter from "./TableFooter";

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

export const DefaultAsDataTable = () => {
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
        </Column>
      </Grid>
    </div>
  );
};

export const DataTableWithToolbar = () => {
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
                    <TableToolbar>
                      <SearchInput
                        id="datatable-search"
                        label="Search"
                        onChange={(newValue) => {
                          setSearchQuery(newValue);
                        }}
                        withSubmit={false}
                      />
                      <IconOnlyButton icon={<IconFilter />} />
                      <Button>Add new Order</Button>
                      <IconOnlyButton
                        kind="ghost"
                        icon={<IconDotsVertical />}
                      />
                    </TableToolbar>
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
                    <TableToolbar>
                      <TableToolbarFilterButton
                        activeFiltersCount={activeFiltersCount}
                        setFilterPanelOpen={setFilterPanelOpen}
                      />
                      <Modal
                        open={filterPanelOpen}
                        onClose={() => setFilterPanelOpen(false)}
                      >
                        <ModalHeader
                          headline="Location"
                          subHeadline="Choose your location"
                        />
                        <ModalBody>
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
                        </ModalBody>
                      </Modal>
                    </TableToolbar>
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

export const DataTableWithBatchActions = () => {
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
                  <TableHeader>
                    <TableTitle>Datatable with Pagination</TableTitle>
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
                            <TableCell key={`${row.id}-${header.key}`}>
                              {row[header.key]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <TableFooter>
                    <Pagination
                      totalPages={pagesCount}
                      page={page}
                      onPageChange={(newPage) => setPage(newPage)}
                    />
                    <Select
                      id="1"
                      options={[
                        { value: "50", text: "50 Items" },
                        { value: "100", text: "100 Items" },
                        { value: "200", text: "200 Items" }
                      ]}
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
