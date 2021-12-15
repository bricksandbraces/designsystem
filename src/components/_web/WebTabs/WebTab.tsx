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

const WebTab = ({ children }: WebTabProps) => {
  return <>{children}</>;
};

export default WebTab;
