import React from "react";
import { RadioButton, TableCell } from "../..";

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
    <TableCell ref={ref} {...rest}>
      <RadioButton
        id={id}
        value="radio-selection"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        label={label}
      />
    </TableCell>
  );
};

export default React.forwardRef(TableSelectionRadioCell);
