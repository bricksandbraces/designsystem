import { useState } from "react";
import { RowEntry } from "./DataTable";

/**
 * Provides a function that manages the filtering using incremental filter functions.
 * All filters have to apply to a row entry.
 * Also provides a method to register new filters.
 *
 * @returns [
 *   activeFilters,
 *   activeFiltersCount,
 *   registerFilter
 * ]
 */
const useTableFilter = () => {
  const [activeFilters, setActiveFilters] = useState<
    Record<string, ((row: RowEntry) => boolean) | undefined>
  >({});
  const activeFiltersCount = Object.keys(activeFilters).filter(
    (filterKey) => !!activeFilters[filterKey]
  ).length;

  const registerFilter = (
    filterKey: string,
    filterFn: ((row: RowEntry) => boolean) | undefined
  ) => {
    setActiveFilters({ ...activeFilters, [filterKey]: filterFn });
  };

  return {
    activeFilters,
    activeFiltersCount,
    registerFilter
  };
};

export { useTableFilter };
