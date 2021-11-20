import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

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
  ref: React.ForwardedRef<HTMLLabelElement>
) => {
  return (
    <div className={cx(`${prefix}--sidenav-headline`, className)}>
      {/* TODO: Replace Label Component with h1,2,3 or so to improve SEO */}
      <Label ref={ref}>{children}</Label>
    </div>
  );
};

export default React.forwardRef(SideNavHeadline);
