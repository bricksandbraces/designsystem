import { IconArrowDown, IconArrowUp, IconSortDescending } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type TableHeadCellProps = {
  /**
   * TableHeadCell ReactChildren usually used as title
   */
  children?: React.ReactNode;

  /**
   * TableHeadCell ReactChildren usually used as title
   */
  className?: string;

  /**
   * TableHeadCell Interactive tells if the HeadCell should be interactive
   */
  interactive?: boolean;

  /**
   * TableHeadCell Defines the sort state. Can be `ascending` sorted, `descending` sorted or `unsorted` for columns that could be sorted but are currently not.
   * If the sort state is `undefined` it means, that this column is not sortable at all.
   */
  sortState?: "unsorted" | "ascending" | "descending";

  /**
   * TableHeadCell OnClick When clicked at the header of the column
   */
  onClick?: React.MouseEventHandler<HTMLTableCellElement>;
};

export const TableHeadCell = React.forwardRef(function TableHeadCell(
  {
    children,
    interactive,
    className,
    onClick,
    sortState,
    ...rest
  }: TableHeadCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  let HeaderIcon:
    | React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
    | (() => JSX.Element)
    | null;

  if (sortState === "ascending") {
    HeaderIcon = IconArrowDown;
  } else if (sortState === "descending") {
    HeaderIcon = IconArrowUp;
  } else if (sortState === "unsorted") {
    HeaderIcon = IconSortDescending;
  } else {
    HeaderIcon = null;
  }

  return (
    <th
      className={cx(
        `${prefix}--datatable-head__cell`,
        {
          [`${prefix}--datatable-head__cell-interactive`]:
            sortState !== undefined,
          [`${prefix}--datatable-head__cell-active`]:
            sortState === "ascending" || sortState === "descending"
        },
        className
      )}
      scope="col"
      onClick={onClick}
      {...rest}
      ref={ref}
      role="button"
    >
      <div className={`${prefix}--datatable-head__cell-label`}>
        {children}
        {HeaderIcon && (
          <HeaderIcon
            className={cx(`${prefix}--datatable-head__cell-icon`, {
              [`${prefix}--datatable-head__cell-icon__active`]:
                sortState && sortState !== "unsorted"
            })}
          />
        )}
      </div>
    </th>
  );
});
