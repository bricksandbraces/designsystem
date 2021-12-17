import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight
} from "@tabler/icons";
import { Button, Select } from "../..";
import { useControlledValue } from "../../hooks/useControlled";
import { generateVisiblePagesArray } from "../../helpers/paginationUtilities";

export type TablePaginationProps = {
  /**
   * TablePagination Size
   */
  size?: "large" | "default" | "small";

  /**
   * TablePagination ClassName
   */
  className?: string;

  /**
   * TablePagination Total Pages
   */
  totalPages: number;

  /**
   * TablePagination Default Page (Uncontrolled)
   */
  defaultPage?: number;

  /**
   * TablePagination Page (Controlled)
   */
  page?: number;

  /**
   * TablePagination OnPageChange
   */
  onPageChange?: (newPage: number) => void;

  /**
   * TablePagination PagesShown
   */
  pagesShown?: number;

  /**
   * TablePagination HideFastforward
   */
  hideFastforward?: boolean;

  /**
   * TablePagination HideNav
   */
  hideNav?: boolean;

  /**
   * TablePagination Loop
   */
  loop?: boolean;
};

const TablePagination = (
  {
    totalPages,
    pagesShown,
    defaultPage,
    page,
    onPageChange,
    loop = true,
    hideNav,
    hideFastforward,
    size = "default",
    className
  }: TablePaginationProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [currentIndex, performPageChange] = useControlledValue(
    page,
    defaultPage,
    onPageChange,
    0
  );

  const visiblePagesArray = generateVisiblePagesArray(
    totalPages,
    pagesShown ?? totalPages,
    currentIndex
  );

  return (
    <div
      className={cx(
        `${prefix}--datatable-pagination ${prefix}--datatable-pagination__${size}`,
        className
      )}
      ref={ref}
    >
      <div className={cx(`${prefix}--datatable-pagination__rows`)}>
        <p>Rows per page</p>
        <Select
          id="1"
          options={[
            { value: "50", text: "50" },
            { value: "100", text: "100" },
            { value: "200", text: "200" }
          ]}
        />
      </div>
      <ul className={cx(`${prefix}--datatable-pagination__list`)}>
        {!hideFastforward && (
          <li className={cx(`${prefix}--datatable-pagination__list-item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronsLeft />}
              size={size}
              onClick={() => {
                if (currentIndex === 0) {
                  if (loop) {
                    performPageChange(totalPages - 1);
                  }
                } else {
                  performPageChange(0);
                }
              }}
            />
          </li>
        )}
        {!hideNav && (
          <li className={cx(`${prefix}--datatable-pagination__list-item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronLeft />}
              size={size}
              onClick={() => {
                if (currentIndex === 0) {
                  if (loop) {
                    performPageChange(totalPages - 1);
                  }
                } else {
                  performPageChange(currentIndex - 1);
                }
              }}
            />
          </li>
        )}
        {visiblePagesArray.map((pageIndex) => {
          return (
            <li
              key={pageIndex}
              className={cx(`${prefix}--datatable-pagination__list-item`, {
                [`${prefix}--datatable-pagination__list-item--active`]:
                  currentIndex === pageIndex
              })}
            >
              <Button
                kind="ghost"
                onClick={() => {
                  performPageChange(pageIndex);
                }}
              >
                {pageIndex + 1}
              </Button>
            </li>
          );
        })}
        {!hideNav && (
          <li className={cx(`${prefix}--datatable-pagination__list-item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronRight />}
              size={size}
              onClick={() => {
                if (currentIndex === totalPages - 1) {
                  if (loop) {
                    performPageChange(0);
                  }
                } else {
                  performPageChange(currentIndex + 1);
                }
              }}
            />
          </li>
        )}
        {!hideFastforward && (
          <li className={cx(`${prefix}--datatable-pagination__list-item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronsRight />}
              size={size}
              onClick={() => {
                if (currentIndex === totalPages - 1) {
                  if (loop) {
                    performPageChange(0);
                  }
                } else {
                  performPageChange(totalPages - 1);
                }
              }}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default React.forwardRef(TablePagination);
