import React from "react";
import { Checkbox, TableBodyCell } from "../..";
import { prefix } from "../../settings";
import cx from "classnames";

export type TableSelectionCellProps = {
  /**
   * TableSelectionCell ID
   */
  id: string;

  /**
   * TableSelectionCell defaultChecked (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * TableSelectionCell Checked (controlled)
   */
  checked?: boolean;

  /**
   * TableSelectionCell On Change
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * TableSelectionCell Label
   */
  label?: string;
};

export const TableSelectionCell = React.forwardRef(function TableSelectionCell(
  {
    id,
    defaultChecked,
    checked,
    onChange,
    label,
    ...rest
  }: TableSelectionCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  return (
    <TableBodyCell
      className={cx(`${prefix}--datatable-body__cell-selection`, {
        [`${prefix}--datatable-body__cell-selection--checked`]: checked
      })}
      ref={ref}
      {...rest}
    >
      <Checkbox
        id={id}
        value="selection"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        label={label}
      />
    </TableBodyCell>
  );
});
