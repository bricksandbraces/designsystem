import cx from "classnames";
import React, { JSXElementConstructor, ReactElement } from "react";
import { prefix } from "../../settings";

export type IconTriggerProps = {
  /**
   * IconTrigger Children
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
};

export const IconTrigger = React.forwardRef(function IconTrigger(
  { children, ...props }: IconTriggerProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      className={cx(`${prefix}--tooltip-icontrigger`)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});
