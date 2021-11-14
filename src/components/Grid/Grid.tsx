import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type GridProps = {
  /**
   * Grid Grid Children
   */
  children?: React.ReactNode;

  /**
   * Grid Classnames
   */
  className?: string;

  /**
   * Grid Fullwidth
   */
  fullWidth?: boolean;

  /**
   * Grid Gutter Narrow
   */
  narrow?: boolean;

  /**
   * Grid Gutter Condensed
   */
  condensed?: boolean;

  /**
   * Grid Gutter NarrowRight
   */
  narrowRight?: boolean;

  /**
   * Grid React inline styles for the Grid
   */
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
};

export type ColumnProps = {
  /**
   * Grid Column Children
   */
  children?: React.ReactNode;

  /**
   * Grid Classnames
   */
  className?: string;

  /**
   * Grid Span
   */
  span?: number;

  /**
   * Grid Offset
   */
  offset?: number;

  /**
   * Grid Breakpoint sm
   */
  sm?: number;

  /**
   * Grid Breakpoint md
   */
  md?: number;

  /**
   * Grid Breakpoint lg
   */
  lg?: number;

  /**
   * Grid Breakpoint xlg
   */
  xlg?: number;

  /**
   * Grid Breakpoint sm offset
   */
  smOffset?: number;

  /**
   * Grid Breakpoint md offset
   */
  mdOffset?: number;

  /**
   * Grid Breakpoint lg offset
   */
  lgOffset?: number;

  /**
   * Grid Breakpoint xlg offset
   */
  xlgOffset?: number;

  /**
   * Grid default column
   */
  defaultColumn?: boolean;

  /**
   * Grid React inline styles for the column
   */
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
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
