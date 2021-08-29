import React, { ReactNode } from "react";
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
      <Accordion
        defaultOpenIndices={
          defaultIndex === undefined ? undefined : [defaultIndex]
        }
        openIndices={index === undefined ? undefined : [index]}
        onChange={onChange}
        className="responsivetabs--accordion"
      >
        {children}
      </Accordion>
    </>
  );
};

export default ResponsiveTabs;
