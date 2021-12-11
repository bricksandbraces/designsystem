import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { IconArrowDown, IconArrowsSort, IconArrowUp } from "@tabler/icons";

export type TableHeadCellProps = {
  /**
   * TableHeadCell ReactChildren usually used as title
   */
  children?: React.ReactNode;

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

const TableHeadCell = (
  { children, interactive, onClick, sortState, ...rest }: TableHeadCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  let HeaderIcon:
    | React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
    | (() => JSX.Element)
    | null;

  if (sortState === "ascending") {
    HeaderIcon = IconArrowDown;
  } else if (sortState === "descending") {
    HeaderIcon = IconArrowUp;
  } else if (sortState === "unsorted") {
    HeaderIcon = IconArrowsSort;
  } else {
    HeaderIcon = null;
  }

  return (
    <th
      className={cx(`${prefix}--datatable-head__cell`, { interactive })}
      scope="col"
      onClick={onClick}
      {...rest}
      ref={ref}
    >
      <div className={`${prefix}--datatable-head__cell-label`}>
        {children}{" "}
        {HeaderIcon && (
          <HeaderIcon
            className={cx(`${prefix}--datatable-head__cell-sorticon`, {
              [`${prefix}--datatable-head__cell-sorticon__active`]:
                sortState && sortState !== "unsorted"
            })}
          />
        )}
      </div>
    </th>
  );
};

export default React.forwardRef(TableHeadCell);
