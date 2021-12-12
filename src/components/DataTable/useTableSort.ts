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
 *   disableSorting,
 *   getSortState
 * ]
 */
const useTableSort = (): [
  string | undefined,
  "ascending" | "descending",
  ((r1: RowEntry, r2: RowEntry) => number) | undefined,
  (header: HeaderEntry) => void,
  () => void,
  (header: HeaderEntry) => "ascending" | "descending" | "unsorted" | undefined
] => {
  const [sortByColumn, setSortByColumn] = useState<string>();
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("descending");
  const [sortFn, setSortFn] =
    useState<(r1: RowEntry, r2: RowEntry) => number>();

  const disableSorting = () => {
    setSortByColumn(undefined);
    setSortDirection("descending");
    setSortFn(undefined);
  };

  const toggleHeaderSorting = (header: HeaderEntry) => {
    // check if current header toggling
    if (header.key === sortByColumn) {
      if (sortDirection === "ascending") {
        setSortDirection("descending");
      } else if (sortDirection === "descending") {
        disableSorting();
      }
    } else {
      setSortDirection("ascending");
      setSortByColumn(header.key);
      setSortFn(header.sortFn);
    }
  };

  const getSortState = (header: HeaderEntry) => {
    if (!header.sortable) return undefined;
    if (sortByColumn !== header.key) return "unsorted";
    return sortDirection;
  };

  return [
    sortByColumn,
    sortDirection,
    sortFn,
    toggleHeaderSorting,
    disableSorting,
    getSortState
  ];
};
export { useTableSort };
