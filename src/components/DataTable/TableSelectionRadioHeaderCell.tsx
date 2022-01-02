import cx from "classnames";
import React from "react";
import { TableHeadCell } from "../..";
import { prefix } from "../../settings";

export type TableSelectionRadioHeaderCellProps = {};

export const TableSelectionRadioHeaderCell = React.forwardRef(
  function TableSelectionRadioHeaderCell(
    { ...rest }: TableSelectionRadioHeaderCellProps,
    ref: React.ForwardedRef<HTMLTableCellElement>
  ) {
    return (
      <TableHeadCell
        className={cx(`${prefix}--datatable-body__cell-selection`)}
        ref={ref}
        {...rest}
      >
        <span />
      </TableHeadCell>
    );
  }
);
