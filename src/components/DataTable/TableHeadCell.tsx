import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type TableHeadCellProps = {
  /**
   * TableHeadCell ReactChildren usually used as title
   */
  children: React.ReactNode;

  /**
   * TableHeadCell Interactive tells if the HeadCell should be interactive
   */
  interactive?: boolean;
};

const TableHeadCell = (
  { children, interactive, ...rest }: TableHeadCellProps,
  ref: React.ForwardedRef<HTMLTableHeaderCellElement>
) => {
  return (
    <th
      className={cx(`${prefix}--datatable-head__cell`, { interactive })}
      scope="col"
      {...rest}
      ref={ref}
    >
      <div className={`${prefix}--datatable-head__cell-label`}>{children}</div>
    </th>
  );
};

export default React.forwardRef(TableHeadCell);
