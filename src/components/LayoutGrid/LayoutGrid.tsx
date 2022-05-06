import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type LayoutGridProps = {
  /**
   * LayoutGrid Children
   */
  children?: React.ReactNode;

  /**
   * LayoutGrid Classnames
   */
  className?: string;

  /**
   * LayoutGrid React inline styles for the LayoutGrid
   */
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
};

export type LayoutGridItemProps = {
  /**
   * LayoutGridItem Children
   */
  children?: React.ReactNode;

  /**
   * LayoutGridItem Type
   */
  type?: "left" | "top" | "content" | "bottom";

  /**
   * LayoutGridItem Classnames
   */
  className?: string;

  /**
   * LayoutGridItem React inline styles for the LayoutGrid
   */
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
};

const LayoutGrid = ({ children, className, ...rest }: LayoutGridProps) => {
  return (
    <div className={cx(`${prefix}--layoutgrid`, className)} {...rest}>
      {children}
    </div>
  );
};

const LayoutGridItem = ({
  children,
  type,
  className,
  ...rest
}: LayoutGridItemProps) => {
  return (
    <div
      className={cx(
        `${prefix}--layoutgrid-item ${prefix}--layoutgrid-item__${type}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { LayoutGrid, LayoutGridItem };
