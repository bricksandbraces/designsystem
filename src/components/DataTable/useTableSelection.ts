import { useState } from "react";
import { RowEntry } from "./DataTable";

/**
 * Manages the selection of multiple rows.
 * Returns the current selection state and provides ease-of-use methods to mutate it.
 *
 * @param unprocessedRows Unprocessed row entries
 * @returns
 * [
 *   selectedIDs
 *   toggleSelectionForRow
 *   toggleAll(:selected)
 * ]
 */
const useTableSelection = (
  unprocessedRows: RowEntry[]
): [
  string[],
  (entry: RowEntry | string) => void,
  (select?: boolean) => void
] => {
  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);

  const toggleSelectionForRow = (entry: RowEntry | string) => {
    const entryId = typeof entry === "string" ? entry : entry.id;

    if (!selectedIDs.includes(entryId)) {
      setSelectedIDs([...selectedIDs, entryId]);
    } else {
      setSelectedIDs(selectedIDs.filter((id) => id !== entryId));
    }
  };

  const toggleAll = (select?: boolean) => {
    if (select != null) {
      setSelectedIDs(select ? unprocessedRows.map((row) => row.id) : []);
    } else {
      // all selected
      if (selectedIDs.length === unprocessedRows.length) {
        setSelectedIDs([]);
      } else {
        setSelectedIDs(unprocessedRows.map((row) => row.id));
      }
    }
  };

  return [selectedIDs, toggleSelectionForRow, toggleAll];
};

export { useTableSelection };
