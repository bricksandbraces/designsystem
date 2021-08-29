import React, { useState, ReactNode, useRef, useEffect } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import Tab, { TabProps } from "./Tab";
import Tabs from "./Tabs";
import Accordion from "../Accordion/Accordion";

type ResonsiveTabsProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * DefaultIndex
   */
  defaultIndex?: number;

  /**
   * Index
   */
  index?: number;
};

const ResponsiveTabs = ({
  children,
  onChange,
  defaultIndex,
  index
}: ResonsiveTabsProps) => {
  return (
    <>
      <Tabs
        onChange={onChange}
        index={index}
        defaultIndex={defaultIndex}
        className="responsivetabs--tabs"
      >
        {children}
      </Tabs>
      <Accordion onChange={onChange} className="responsivetabs--accordion">
        {children}
      </Accordion>
    </>
  );
};

export default ResponsiveTabs;
