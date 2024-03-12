import React from "react";
import { prefix } from "../../settings";

export type TableTitleProps = {
  /**
   * Table Title Children
   */
  children: React.ReactNode;
};

export const TableTitle = React.forwardRef(function TableTitle(
  { children }: TableTitleProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  return (
    <p ref={ref} className={`${prefix}--datatable-title`}>
      {children}
    </p>
  );
});
