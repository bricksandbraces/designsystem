import React, { ReactNode } from "react";

export type TabProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Title
   */
  title: string;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
