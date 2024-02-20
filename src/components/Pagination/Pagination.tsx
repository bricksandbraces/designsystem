import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight
} from "@tabler/icons-react";
import cx from "classnames";
import React, { ReactHTML } from "react";
import { Button } from "../..";
import { generateVisiblePagesArray } from "../../helpers/paginationUtilities";
import { useControlledValue } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";

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

  /**
   * Pagination NavWrapper wraps the pagination into
   */
  navWrapper?: boolean;
};

export const Pagination = React.forwardRef(function Pagination(
  {
    totalPages,
    pagesShown,
    defaultPage,
    page,
    onPageChange,
    navWrapper,
    loop = true,
    hideNav,
    hideFastforward,
    size = "default",
    className
  }: PaginationProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
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

  const WrapperElement = React.createElement(navWrapper ? "nav" : "div")
    .type as unknown as ReactHTML["div"] | ReactHTML["nav"];

  return (
    <WrapperElement
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
    </WrapperElement>
  );
});
