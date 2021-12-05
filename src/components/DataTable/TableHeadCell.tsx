import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type TableHeadCellProps = {
  /**
   * TableHeadCell ReactChildren usually used as title
   */
  children?: React.ReactNode;

  /**
   * TableHeadCell Interactive tells if the HeadCell should be interactive
   */
  interactive?: boolean;

  onClick?: React.MouseEventHandler<HTMLTableCellElement>;
};

const TableHeadCell = (
  { children, interactive, onClick, ...rest }: TableHeadCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <th
      className={cx(`${prefix}--datatable-head__cell`, { interactive })}
      scope="col"
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      <div className={`${prefix}--datatable-head__cell-label`}>{children}</div>
    </th>
  );
};

export default React.forwardRef(TableHeadCell);
