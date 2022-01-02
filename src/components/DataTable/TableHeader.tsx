import React from "react";
import { prefix } from "../../settings";

export type TableHeaderProps = {
  /**
   * Table Children
   */
  children: React.ReactNode;
};

export const TableHeader = React.forwardRef(function TableHeader(
  { children }: TableHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={`${prefix}--datatable-header`} ref={ref}>
      {children}
    </div>
  );
});
