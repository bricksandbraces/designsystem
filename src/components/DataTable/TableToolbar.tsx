import React from "react";
import { prefix } from "../../settings";

export type TableToolbarProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

const TableToolbar = (
  { children, ...rest }: TableToolbarProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={`${prefix}--datatable-toolbar`} {...rest} ref={ref}>
      {children}
    </div>
  );
};

export default React.forwardRef(TableToolbar);
