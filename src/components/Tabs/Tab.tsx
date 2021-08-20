import React, { ReactNode } from "react";

type TabProps = {
  /**
   * Children
   */
  children?: ReactNode;
};

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

export default Tab;
