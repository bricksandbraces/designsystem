import React from "react";
import { prefix } from "../../settings";

export type TableRowProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

const TableRow = (
  { children, ...rest }: TableRowProps,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  return (
    <tr className={`${prefix}--datatable-row`} {...rest} ref={ref}>
      {children}
    </tr>
  );
};

export default React.forwardRef(TableRow);
