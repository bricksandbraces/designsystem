import React from "react";
import { prefix } from "../../../settings";
import { Accordion } from "../../Accordion/Accordion";
import { WebTabs } from "./WebTabs";

export type ResonsiveWebTabsProps = {
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

export const ResponsiveWebTabs = React.forwardRef(function ResponsiveWebTabs(
  { children, onChange, defaultIndex, index }: ResonsiveWebTabsProps,
  ref: React.ForwardedRef<HTMLDivElement | HTMLUListElement>
) {
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
});
