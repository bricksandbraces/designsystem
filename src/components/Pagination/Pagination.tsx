import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
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
};

const Pagination = ({ size = "default", className }: PaginationProps) => {
  return (
    <nav
      className={cx(
        `${prefix}--pagination ${prefix}--pagination-${size}`,

        className
      )}
    >
      <IconOnlyButton kind="ghost" icon={<IconChevronLeft />} size={size} />
      <ul className={cx(`${prefix}--pagination-list`)}>
        <li className={cx(`${prefix}--pagination-list__item`)}>
          <Button kind="ghost">1</Button>
        </li>
        <li className={cx(`${prefix}--pagination-list__item`)}>
          <Button kind="ghost">2</Button>
        </li>
        <li className={cx(`${prefix}--pagination-list__item`)}>
          <Button kind="ghost">3</Button>
        </li>
        <li
          className={cx(
            `${prefix}--pagination-list__item ${prefix}--pagination-list__item-active`
          )}
        >
          <Button kind="ghost">4</Button>
        </li>
      </ul>
      <IconOnlyButton kind="ghost" icon={<IconChevronRight />} size={size} />
    </nav>
  );
};

export default Pagination;
