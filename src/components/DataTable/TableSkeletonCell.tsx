import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";
import { SkeletonText } from "../..";

export type TableSkeletonCellProps = {
  /**
   * TableSkeletonCell ClassName
   */
  className?: string;
};

const TableSkeletonCell = (
  { className, ...rest }: TableSkeletonCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
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
};

export default React.forwardRef(TableSkeletonCell);
