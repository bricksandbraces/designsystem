import { useState } from "react";
import { HeaderEntry, RowEntry } from "./DataTable";
/**
 * Provides a method that manages the sorting by columns.
 * Gives information about the currently sortedColumns, direction and sort functions.
 * Also provides interaction methods for triggering or revoking header sorting.
 *
 * @returns
 * [
 *   sortByColumn,
 *   sortDirection,
 *   sortFn,
 *   toggleHeaderSorting,
 *   disableSorting
 * ]
 */
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
export { useTableSort };
