import React from "react";
import { TableHeadCell } from "../..";
import { prefix } from "../../settings";
import cx from "classnames";

export type TableSelectionRadioHeaderCellProps = {};

const TableSelectionRadioHeaderCell = (
  { ...rest }: TableSelectionRadioHeaderCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableHeadCell
      className={cx(`${prefix}--datatable-body__cell-selection`)}
      ref={ref}
      {...rest}
    >
      <span />
    </TableHeadCell>
  );
};

export default React.forwardRef(TableSelectionRadioHeaderCell);
