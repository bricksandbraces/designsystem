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
import { Button } from "../..";
import { useControlledValue } from "../../hooks/useControlled";
import { generateVisiblePagesArray } from "../../helpers/paginationUtilities";

export type PaginationProps = {
  /**
   * Pagination Size
   */
  size?: "large" | "default" | "small";

  /**
   * Pagination ClassName
   */
  className?: string;

  /**
   * Pagination Total Pages
   */
  totalPages: number;

  /**
   * Pagination Default Page (Uncontrolled)
   */
  defaultPage?: number;

  /**
   * Pagination Page (Controlled)
   */
  page?: number;

  /**
   * Pagination OnPageChange
   */
  onPageChange?: (newPage: number) => void;

  /**
   * Pagination PagesShown
   */
  pagesShown?: number;

  /**
   * Pagination HideFastforward
   */
  hideFastforward?: boolean;

  /**
   * Pagination HideNav
   */
  hideNav?: boolean;

  /**
   * Pagination Loop
   */
  loop?: boolean;
};

const Pagination = (
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
  }: PaginationProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  const [currentIndex, performPageChange] = useControlledValue(
    page,
    defaultPage,
    onPageChange,
    0
  );

  // positionOfCurrentIndexInPageArray
  const visiblePagesArray = generateVisiblePagesArray(
    totalPages,
    pagesShown ?? totalPages,
    currentIndex
  );

  return (
    <nav
      className={cx(
        `${prefix}--pagination ${prefix}--pagination-${size}`,
        className
      )}
      ref={ref}
    >
      <ul className={cx(`${prefix}--pagination-list`)}>
        {!hideFastforward && (
          <li className={cx(`${prefix}--pagination-list__item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronsLeft />}
              size={size}
            />
          </li>
        )}
        {!hideNav && (
          <li className={cx(`${prefix}--pagination-list__item`)}>
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
              className={cx(`${prefix}--pagination-list__item`, {
                [`${prefix}--pagination-list__item-active`]:
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
          <li className={cx(`${prefix}--pagination-list__item`)}>
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
          <li className={cx(`${prefix}--pagination-list__item`)}>
            <IconOnlyButton
              kind="ghost"
              icon={<IconChevronsRight />}
              size={size}
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default React.forwardRef(Pagination);
