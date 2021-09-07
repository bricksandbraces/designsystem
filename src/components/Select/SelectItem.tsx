import React from "react";

type SelectItemProps = {
  /**
   * Select Item label
   */
  text?: string;

  /**
   * Value
   */
  value: string;
};

const SelectItem = ({ text, value }: SelectItemProps) => {
  return <option value={value}>{text}</option>;
};

export default SelectItem;
