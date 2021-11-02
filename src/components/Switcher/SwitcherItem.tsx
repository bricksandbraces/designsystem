import React, { ReactNode } from "react";

export type SwitcherItemProps = {
  /**
   * SwitcherItem Children
   */
  children?: ReactNode;

  /**
   * SwitcherItem Title
   */
  title: string;

  /**
   * SwitcherItem Disabled
   */
  disabled?: boolean;
};

const SwitcherItem = ({ children }: SwitcherItemProps) => {
  return <>{children}</>;
};

export default SwitcherItem;
