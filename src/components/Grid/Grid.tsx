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
      data-columncount={childrenCount}
      className={cx(
        `${prefix}--grid-container`,
        {
          [`${prefix}--grid-fullwidth`]: fullWidth,
          [`${prefix}--grid-container__no-gutter`]: narrow,
          [`${prefix}--grid-container__no-gutter-left`]: condensed
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
        {
          [`${prefix}--grid-col`]: defaultColumn,
          [`${prefix}--grid-col__${span}`]: span,
          [`${prefix}--grid-col__${span}--offset-${offset}`]: offset,
          [`${prefix}--grid-col__sm-${sm}`]: sm && sm <= 4,
          [`${prefix}--grid-col__sm-${sm}--offset-${smOffset}`]: smOffset,
          [`${prefix}--grid-col__md-${md}`]: md && md <= 8,
          [`${prefix}--grid-col__md-${md}--offset-${mdOffset}`]: mdOffset,
          [`${prefix}--grid-col__lg-${lg}`]: lg && lg <= 16,
          [`${prefix}--grid-col__lg-${lg}--offset-${lgOffset}`]: lgOffset,
          [`${prefix}--grid-col__xlg-${xlg}`]: xlg && xlg <= 16,
          [`${prefix}--grid-col__xlg-${xlg}--offset-${xlgOffset}`]: xlgOffset
        },
        className
      )}
      {...rest}
    >
      <div>{children}</div>
    </div>
  );
};
