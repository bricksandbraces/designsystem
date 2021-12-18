import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type BreadcrumbProps = {} & React.HTMLAttributes<HTMLElement>;

const Breadcrumb = (
  { className, children, ...rest }: BreadcrumbProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  return (
    <nav className={cx(`${prefix}--breadcrumb`, className)} {...rest} ref={ref}>
      <ol className={cx(`${prefix}--breadcrumb-list`, className)}>
        {children}
      </ol>
    </nav>
  );
};

export default React.forwardRef(Breadcrumb);
