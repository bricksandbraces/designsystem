import React from "react";

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
    <tbody {...rest} ref={ref}>
      {children}
    </tbody>
  );
};

export default React.forwardRef(TableBody);
