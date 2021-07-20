import React, { ReactNode } from "react";
import cx from "classnames";

type GridProps = {
  /**
   * Grid Children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;

  /**
   * Fullwidth
   */
  fullWidth?: boolean;

  /**
   * Gutter
   */
  narrow?: boolean;
  condensed?: boolean;
  narrowRight?: boolean;

  /**
   * React inline styles for the Grid
   */
  style?: any;
};

type ColumnProps = {
  /**
   * Column Children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;

  /**
   * Span
   */
  span?: number;

  /**
   * Offset
   */
  offset?: number;

  /**
   * Breakpoint
   */
  sm?: number;
  md?: number;
  lg?: number;
  xlg?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlgOffset?: number;
  defaultColumn?: boolean;

  /**
   * React inline styles for the column
   */
  style?: any;
};

export const Grid = ({
  children,
  fullWidth,
  className,
  narrow,
  condensed,
  ...rest
}: GridProps) => {
  const childrenCount = React.Children.count(children);
  return (
    <div
      columnCount={childrenCount}
      className={cx(
        "grid--container",
        {
          "grid--fullwidth": fullWidth,
          "grid--container-no-gutter": narrow,
          "grid--container-no-gutter__left": condensed
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Column = ({
  children,
  span,
  offset,
  sm,
  md,
  lg,
  xlg,
  smOffset,
  mdOffset,
  lgOffset,
  xlgOffset,
  className,
  defaultColumn,
  ...rest
}: ColumnProps) => {
  return (
    <div
      className={cx(
        span && `grid--col-${span}`,
        offset && `grid--col-${span}__offset-${offset}`,
        sm && sm <= 4 && `grid--col-sm__${sm}`,
        smOffset && `grid--col-sm__${sm}__offset-${smOffset}`,
        md && md <= 8 && `grid--col-md__${md}`,
        mdOffset && `grid--col-md__${md}__offset-${mdOffset}`,
        lg && lg <= 16 && `grid--col-lg__${lg}`,
        lgOffset && `grid--col-lg__${lg}__offset-${lgOffset}`,
        xlg && xlg <= 16 && `grid--col-xlg__${xlg}`,
        xlgOffset && `grid--col-xlg__${xlg}__offset-${xlgOffset}`,
        { "grid--col": defaultColumn },
        className
      )}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};
