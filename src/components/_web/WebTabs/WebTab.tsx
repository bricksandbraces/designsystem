import React from "react";

export type WebTabProps = {
  /**
   * WebTab Children
   */
  children?: React.ReactNode;

  /**
   * WebTab Title
   */
  title: string;

  /**
   * WebTab Disabled
   */
  disabled?: boolean;
};

export const WebTab = function WebTab({ children }: WebTabProps) {
  return <>{children}</>;
};
