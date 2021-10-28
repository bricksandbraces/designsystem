import React, { forwardRef, JSXElementConstructor, ReactElement } from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import cx from "classnames";
import { prefix } from "../../settings";

export type IconTriggerProps = {
  /**
   * IconTrigger Children
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
};

const IconTrigger = (
  { children, ...props }: IconTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
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
};

export default forwardRef(IconTrigger);
