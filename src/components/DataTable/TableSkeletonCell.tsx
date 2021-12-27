import cx from "classnames";
import React from "react";
import { SkeletonText } from "../..";
import { prefix } from "../../settings";

export type TableSkeletonCellProps = {
  /**
   * TableSkeletonCell ClassName
   */
  className?: string;
};

export const TableSkeletonCell = React.forwardRef(function TableSkeletonCell(
  { className, ...rest }: TableSkeletonCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  return (
    <td
      className={cx(`${prefix}--datatable-skeleton__cell`, className)}
      {...rest}
      ref={ref}
    >
      <span className={cx(`${prefix}--datatable-skeleton__cell-label`)}>
        <SkeletonText style={{ width: "100%", maxWidth: "8rem" }} />
      </span>
    </td>
  );
});
