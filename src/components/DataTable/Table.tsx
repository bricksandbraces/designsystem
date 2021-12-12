import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type TableProps = {
  /**
   * React Children
   */
  children: ReactNode;
};

const Table = (
  { children, ...rest }: TableProps,
  ref: React.ForwardedRef<HTMLTableElement>
) => {
  return (
    <table className={`${prefix}--datatable-table`} {...rest} ref={ref}>
      {children}
    </table>
  );
};

export default React.forwardRef(Table);
