import React from "react";
import { prefix } from "../../settings";

export type TableHeaderProps = {
  /**
   * Table Children
   */
  children: React.ReactNode;
};

const TableHeader = (
  { children }: TableHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={`${prefix}--datatable-header`} ref={ref}>
      {children}
    </div>
  );
};

export default React.forwardRef(TableHeader);
