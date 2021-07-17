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
   * Gutter
   */
  withGutter?: boolean;
  withGutterLeft?: boolean;
  withGutterRight?: boolean;
};

type RowProps = {
  /**
   * Row Children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;

  /**
   * Gutter
   */
  withGutter?: boolean;
  withGutterLeft?: boolean;
  withGutterRight?: boolean;
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
   * Breakpoints
   */
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export const Grid = ({
  children,
  className,
  withGutter,
  withGutterLeft,
  withGutterRight
}: GridProps) => {
  return (
    <div
      className={cx(
        "container",
        {
          "with-gutter": withGutter,
          "gutter-left": withGutterLeft,
          "gutter-right": withGutterRight
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export const Row = ({
  children,
  className,
  withGutter,
  withGutterLeft,
  withGutterRight
}: RowProps) => {
  return (
    <div
      className={cx(
        "row",
        {
          "with-gutter": withGutter,
          "gutter-left": withGutterLeft,
          "gutter-right": withGutterRight
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export const Column = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className
}: ColumnProps) => {
  return (
    <div
      className={cx(
        "col",
        xs && `col-${xs}`,
        sm && `col-sm-${sm}`,
        md && `col-md-${md}`,
        lg && `col-lg-${lg}`,
        xl && `col-xl-${xl}`,
        xxl && `col-xxl-${xxl}`,
        className
      )}
    >
      {children}
    </div>
  );
};
