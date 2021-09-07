import React, { ReactNode } from "react";

type SelectItemGroupProps = {
  /**
   * Select ItemGroup label
   */
  label?: string;

  /**
   * Children
   */
  children: ReactNode;
};

const SelectItemGroup = ({ label, children }: SelectItemGroupProps) => {
  return <optgroup label={label}>{children}</optgroup>;
};

export default SelectItemGroup;
