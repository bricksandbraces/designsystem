import React from "react";
import { RadioButton, TableBodyCell } from "../..";
import { prefix } from "../../settings";
import cx from "classnames";

export type TableSelectionRadioCellProps = {
  /**
   * TableSelectionRadioCell ID
   */
  id: string;

  /**
   * TableSelectionRadioCell DefaultChecked (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * TableSelectionRadioCell Checked (controlled)
   */
  checked?: boolean;

  /**
   * TableSelectionRadioCell OnChange
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * TableSelectionRadioCell Label
   */
  label?: string;
};

const TableSelectionRadioCell = (
  {
    id,
    defaultChecked,
    checked,
    onChange,
    label,
    ...rest
  }: TableSelectionRadioCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableBodyCell
      className={cx(`${prefix}--datatable-body__cell-selection`, {
        [`${prefix}--datatable-body__cell-selection--checked`]: checked
      })}
      ref={ref}
      {...rest}
    >
      <RadioButton
        id={id}
        value="radio-selection"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        label={label}
      />
    </TableBodyCell>
  );
};

export default React.forwardRef(TableSelectionRadioCell);
