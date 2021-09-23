import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

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
      columncount={childrenCount}
      className={cx(
        `${prefix}--grid--container`,
        {
          [`${prefix}--grid--fullwidth`]: fullWidth,
          [`${prefix}--grid--container-no-gutter`]: narrow,
          [`${prefix}--grid--container-no-gutter__left`]: condensed
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
        span && `${prefix}--grid--col-${span}`,
        offset && `${prefix}--grid--col-${span}__offset-${offset}`,
        sm && sm <= 4 && `${prefix}--grid--col-sm__${sm}`,
        smOffset && `${prefix}--grid--col-sm__${sm}__offset-${smOffset}`,
        md && md <= 8 && `${prefix}--grid--col-md__${md}`,
        mdOffset && `${prefix}--grid--col-md__${md}__offset-${mdOffset}`,
        lg && lg <= 16 && `${prefix}--grid--col-lg__${lg}`,
        lgOffset && `${prefix}--grid--col-lg__${lg}__offset-${lgOffset}`,
        xlg && xlg <= 16 && `${prefix}--grid--col-xlg__${xlg}`,
        xlgOffset && `${prefix}--grid--col-xlg__${xlg}__offset-${xlgOffset}`,
        { [`${prefix}--grid--col`]: defaultColumn },
        className
      )}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};
