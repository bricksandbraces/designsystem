import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type FloatingPanelProps = {} & React.HTMLAttributes<HTMLDivElement>;

const FloatingPanel = (
  { className, children, ...rest }: FloatingPanelProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      className={cx(`${prefix}--floatingpanel`, className)}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FloatingPanel;
