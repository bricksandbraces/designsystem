import React from "react";
import { prefix } from "../../settings";

export type TableToolbarActionsProps = {
  /**
   * TableToolbarActions Children
   */
  children: React.ReactNode;
};

const TableToolbarActions = (
  { children, ...rest }: TableToolbarActionsProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      className={`${prefix}--datatable-toolbar__actions`}
      {...rest}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(TableToolbarActions);
