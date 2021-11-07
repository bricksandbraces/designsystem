import React, { ReactNode } from "react";

export type TabProps = {
  /**
   * Tab Children
   */
  children?: ReactNode;

  /**
   * Tab Title
   */
  title: string;

  /**
   * Tab Disabled
   */
  disabled?: boolean;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
