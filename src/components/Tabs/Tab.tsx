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

  /**
   * Disabled
   */
  disabled: boolean;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
