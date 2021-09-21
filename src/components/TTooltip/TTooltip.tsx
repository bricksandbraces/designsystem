import React, { JSXElementConstructor, ReactElement } from "react";
import Tippy, { TippyProps } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type TTooltipProps = {
  tooltipContent: React.ReactNode;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
} & Omit<TippyProps, "content">;

const TTooltip = ({ children, ...props }: TTooltipProps) => {
  return <Tippy {...props}>{children}</Tippy>;
};

export default TTooltip;
