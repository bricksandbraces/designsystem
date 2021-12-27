import React from "react";

export type SwitcherItemProps = {
  /**
   * SwitcherItem Children
   */
  children?: React.ReactNode;

  /**
   * SwitcherItem Title
   */
  title: string;

  /**
   * SwitcherItem Disabled
   */
  disabled?: boolean;
};

export const SwitcherItem = function SwitcherItem({
  children
}: SwitcherItemProps) {
  return <>{children}</>;
};
