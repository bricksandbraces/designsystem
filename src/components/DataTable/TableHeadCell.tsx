import React from "react";

type TableHeadCellProps = {
  /**
   * Header item title
   */
  title: string;
};

const TableHeadCell = ({ title }: TableHeadCellProps) => {
  return (
    <th className="datatable--head-cell" scope="col">
      <div className="datatable--head-cell__label">{title}</div>
    </th>
  );
};

export default TableHeadCell;
