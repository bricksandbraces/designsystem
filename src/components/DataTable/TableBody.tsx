import React from "react";
import { prefix } from "../../settings";

export type TableBodyProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

const TableBody = (
  { children, ...rest }: TableBodyProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <tbody {...rest} ref={ref} className={`${prefix}--datatable-body`}>
      {children}
    </tbody>
  );
};

export default React.forwardRef(TableBody);
