import React, { JSXElementConstructor, ReactElement } from "react";
import Tippy, { TippyProps } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type TTooltipProps = {
  tooltipContent: React.ReactNode;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
} & Omit<TippyProps, "content">;

const TTooltip = ({ children, tooltipContent, ...props }: TTooltipProps) => {
  return (
    <Tippy {...props} content={tooltipContent}>
      {children}
    </Tippy>
  );
};

export default TTooltip;
