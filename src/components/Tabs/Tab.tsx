import React from "react";

export type TabProps = {
  /**
   * Tab Children
   */
  children?: React.ReactNode;

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
