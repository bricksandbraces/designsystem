import React from "react";
import Accordion from "../../Accordion/Accordion";
import { prefix } from "../../../settings";
import WebTabs from "./WebTabs";

export type ResonsiveTabsProps = {
  /**
   * ResponsiveWebTabs ReactChildren
   */
  children?: React.ReactNode;

  /**
   * ResponsiveWebTabs OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * ResponsiveWebTabs DefaultIndex
   */
  defaultIndex?: number;

  /**
   * ResponsiveWebTabs Index
   */
  index?: number;
};

const ResponsiveWebTabs = (
  { children, onChange, defaultIndex, index }: ResonsiveTabsProps,
  ref: React.ForwardedRef<HTMLDivElement | HTMLUListElement>
) => {
  return (
    <>
      <WebTabs
        onChange={onChange}
        index={index}
        defaultIndex={defaultIndex}
        className={`${prefix}--responsivewebtabs-webtabs`}
        ref={ref as React.ForwardedRef<HTMLDivElement>}
      >
        {children}
      </WebTabs>
      <Accordion
        defaultOpenIndices={
          defaultIndex === undefined ? undefined : [defaultIndex]
        }
        openIndices={index === undefined ? undefined : [index]}
        onChange={onChange}
        className={`${prefix}--responsivewebtabs-accordion`}
        ref={ref as React.ForwardedRef<HTMLUListElement>}
      >
        {children}
      </Accordion>
    </>
  );
};

export default React.forwardRef(ResponsiveWebTabs);
