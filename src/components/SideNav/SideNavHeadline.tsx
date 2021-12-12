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

  /**
   * SideNavHeadline FromHeader
   */
  fromHeader?: boolean;
};

const SideNavHeadline = (
  { className, children, fromHeader }: SideNavHeadlineProps,
  ref: React.ForwardedRef<HTMLHeadingElement>
) => {
  return (
    <div
      className={cx(
        `${prefix}--sidenav-headline`,
        { [`${prefix}--sidenav-from-header`]: fromHeader },
        className
      )}
    >
      <h3 ref={ref}>{children}</h3>
    </div>
  );
};

export default React.forwardRef(SideNavHeadline);