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
   * TableSelectionHeaderCell On Change
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * TableSelectionHeaderCell Title
   */
  title?: string;
};

const TableSelectionHeaderCell = (
  {
    selectedRows,
    unprocessedRows,
    onChange,
    title,
    ...rest
  }: TableSelectionHeaderCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableHeadCell ref={ref} interactive {...rest}>
      <Checkbox
        id="head-selection"
        value="selection"
        checked={selectedRows.length === unprocessedRows.length}
        onChange={onChange}
        label={title}
      />
    </TableHeadCell>
  );
};

export default React.forwardRef(TableSelectionHeaderCell);
