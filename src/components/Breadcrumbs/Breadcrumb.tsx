import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type BreadcrumbProps = {
  /**
   * Breadcrumb Children
   */
  children?: ReactNode;

  /**
   * Breadcrumb ClassName
   */
  className?: string;
};

const Breadcrumb = ({ className, children, ...rest }: BreadcrumbProps) => {
  return (
    <nav className={cx(`${prefix}--breadcrumb`, className)} {...rest}>
      <ol className={cx(`${prefix}--breadcrumb-list`, className)}>
        {children}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
