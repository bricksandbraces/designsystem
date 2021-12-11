import React from "react";
import { TableHeadCell } from "../..";

export type TableSelectionRadioHeaderCellProps = {};

const TableSelectionRadioHeaderCell = (
  { ...rest }: TableSelectionRadioHeaderCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableHeadCell ref={ref} {...rest}>
      <p />
    </TableHeadCell>
  );
};

export default React.forwardRef(TableSelectionRadioHeaderCell);
