import React, { useState } from "react";
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

type PaginationProps = {
  /**
   * Pagination Size
   */
  size?: "large" | "default" | "small";

  /**
   * Pagination ClassName
   */
  className?: string;

  /**
   * Pagination PageItems
   */
  pageItems?: number;

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

const Pagination = ({
  pageItems,
  pagesShown,
  loop,
  hideNav,
  hideFastforward,
  size = "default",
  className
}: PaginationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <nav
      className={cx(
        `${prefix}--pagination ${prefix}--pagination-${size}`,

        className
      )}
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
                setCurrentIndex(currentIndex + -1);
              }}
            />
          </li>
        )}
        {new Array(pageItems).fill("").map((item, i) => {
          return (
            <li
              key={i}
              className={cx(`${prefix}--pagination-list__item`, {
                [`${prefix}--pagination-list__item-active`]: currentIndex === i
              })}
            >
              <Button
                kind="ghost"
                onClick={() => {
                  setCurrentIndex(i);
                }}
              >
                {i + 1}
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
                setCurrentIndex(currentIndex + 1);
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

export default Pagination;
