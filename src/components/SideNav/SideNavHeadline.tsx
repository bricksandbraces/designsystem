import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type SideNavHeadlineProps = {
  /**
   * SideNavHeadlineProps ClassName
   */
  className?: string;

  /**
   * SideNavHeadline Children
   */
  children: string;
};

const SideNavHeadline = (
  { className, children }: SideNavHeadlineProps,
  ref: React.ForwardedRef<HTMLHeadingElement>
) => {
  return (
    <div className={cx(`${prefix}--sidenav-headline`, className)}>
      <h3 ref={ref}>{children}</h3>
    </div>
  );
};

export default React.forwardRef(SideNavHeadline);
