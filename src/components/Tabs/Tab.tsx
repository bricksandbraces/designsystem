import React, { ReactNode } from "react";

export type TabProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Label
   */
  label: string;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
