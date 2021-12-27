import React from "react";
import { prefix } from "../../settings";
import { Accordion } from "../Accordion/Accordion";
import { Tabs } from "./Tabs";

export type ResonsiveTabsProps = {
  /**
   * ResponsiveTabs ReactChildren
   */
  children?: React.ReactNode;

  /**
   * ResponsiveTabs OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * ResponsiveTabs DefaultIndex
   */
  defaultIndex?: number;

  /**
   * ResponsiveTabs Index
   */
  index?: number;
};

export const ResponsiveTabs = React.forwardRef(function ResponsiveTabs(
  { children, onChange, defaultIndex, index }: ResonsiveTabsProps,
  ref: React.ForwardedRef<HTMLDivElement | HTMLUListElement>
) {
  return (
    <>
      <Tabs
        onChange={onChange}
        index={index}
        defaultIndex={defaultIndex}
        className={`${prefix}--responsivetabs-tabs`}
        ref={ref as React.ForwardedRef<HTMLDivElement>}
      >
        {children}
      </Tabs>
      <Accordion
        defaultOpenIndices={
          defaultIndex === undefined ? undefined : [defaultIndex]
        }
        openIndices={index === undefined ? undefined : [index]}
        onChange={onChange}
        className={`${prefix}--responsivetabs-accordion`}
        ref={ref as React.ForwardedRef<HTMLUListElement>}
      >
        {children}
      </Accordion>
    </>
  );
});
