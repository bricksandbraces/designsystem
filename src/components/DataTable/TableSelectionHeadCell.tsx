import React from "react";
import { Checkbox, TableHeadCell } from "../..";
import { RowEntry } from "./DataTable";
import { prefix } from "../../settings";

export type TableSelectionHeadCellProps = {
  /**
   * TableSelectionHeadCell Unprocessed Rows
   */
  unprocessedRows: RowEntry[];

  /**
   * TableSelectionHeadCell Selected Rows (only used for length comparison)
   */
  selectedRows: any[];

  /**
   * TableSelectionHeadCell toggleAll from useTableSelection hook
   */
  toggleAll: (selection?: boolean) => void;

  /**
   * TableSelectionHeadCell Title
   */
  title?: string;
};

export const TableSelectionHeadCell = React.forwardRef(
  function TableSelectionHeadCell(
    {
      selectedRows,
      unprocessedRows,
      toggleAll,
      title,
      ...rest
    }: TableSelectionHeadCellProps,
    ref: React.ForwardedRef<HTMLTableCellElement>
  ) {
    const allSelected =
      unprocessedRows.length > 0 &&
      selectedRows.length === unprocessedRows.length &&
      selectedRows.every((rowId) =>
        unprocessedRows.some((row) => row.id === rowId)
      );
    const noneSelected = selectedRows.length === 0;
    return (
      <TableHeadCell
        className={`${prefix}--datatable-head__cell-selection`}
        ref={ref}
        interactive
        {...rest}
      >
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
  }
);
