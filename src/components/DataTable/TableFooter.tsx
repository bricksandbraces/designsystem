import React from "react";
import { prefix } from "../../settings";

export type TableFooterProps = {
  /**
   * Table Children
   */
  children?: React.ReactNode;
};

const TableFooter = (
  { children }: TableFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={`${prefix}--datatable-footer`} ref={ref}>
      {children}
    </div>
  );
};

export default React.forwardRef(TableFooter);
