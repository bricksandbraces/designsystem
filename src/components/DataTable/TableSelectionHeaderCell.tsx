import React from "react";
import { Checkbox, TableHeadCell } from "../..";
import { RowEntry } from "./DataTable";

export type TableSelectionHeaderCellProps = {
  /**
   * TableSelectionHeaderCell Unprocessed Rows
   */
  unprocessedRows: RowEntry[];

  /**
   * TableSelectionHeaderCell Selected Rows (only used for length comparison)
   */
  selectedRows: any[];

  /**
   * TableSelectionHeaderCell toggleAll from useTableSelection hook
   */
  toggleAll: (selection?: boolean) => void;

  /**
   * TableSelectionHeaderCell Title
   */
  title?: string;
};

const TableSelectionHeaderCell = (
  {
    selectedRows,
    unprocessedRows,
    toggleAll,
    title,
    ...rest
  }: TableSelectionHeaderCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  const allSelected =
    unprocessedRows.length > 0 &&
    selectedRows.length === unprocessedRows.length &&
    selectedRows.every((rowId) =>
      unprocessedRows.some((row) => row.id === rowId)
    );
  const noneSelected = selectedRows.length === 0;
  return (
    <TableHeadCell ref={ref} interactive {...rest}>
      <Checkbox
        id="head-selection"
        value="selection"
        checked={allSelected}
        indeterminate={!allSelected && !noneSelected}
        onChange={() => {
          if (noneSelected) {
            toggleAll(true);
          } else {
            toggleAll(false);
          }
        }}
        label={title}
      />
    </TableHeadCell>
  );
};

export default React.forwardRef(TableSelectionHeaderCell);
