import React from "react";
import { Checkbox, TableCell } from "../..";
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

const TableSelectionCell = (
  {
    id,
    defaultChecked,
    checked,
    onChange,
    label,
    ...rest
  }: TableSelectionCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableCell
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
    </TableCell>
  );
};

export default React.forwardRef(TableSelectionCell);
