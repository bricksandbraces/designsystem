import React from "react";
import { prefix } from "../../settings";

export type TableFooterProps = {
  /**
   * Table Children
   */
  children: React.ReactNode;
};

export const TableFooter = React.forwardRef(function TableFooter(
  { children }: TableFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`${prefix}--datatable-footer`} ref={ref}>
      {children}
    </div>
  );
});
