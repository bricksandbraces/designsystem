import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type TableToolbarFilterPanelProps = {
  /**
   * TableToolbarFilterPanel Children
   */
  children: React.ReactNode;

  /**
   * TableToolbarFilterPanel Open
   */
  open?: boolean;
};

const TableToolbarFilterPanel = (
  { open, children, ...rest }: TableToolbarFilterPanelProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <div
      className={cx(`${prefix}--datatable-filterpanel`, {
        [`${prefix}--datatable-filterpanel__open`]: open
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(TableToolbarFilterPanel);
