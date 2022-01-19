import { IconChevronDown } from "@tabler/icons";
import Tippy from "@tippyjs/react";
import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../../settings";

export type ProductHeaderMenuProps = {
  /**
   * ProductHeaderMenu Children
   */
  children: ReactNode;

  /**
   * ProductHeaderMenu Children
   */
  label: string;
};

export const ProductHeaderMenu = React.forwardRef(function ProductHeaderMenu({
  children,
  label
}: ProductHeaderMenuProps) {
  return (
    <Tippy
      interactive
      className={cx(`${prefix}--header-product__list`)}
      animation="bbds-animation"
      placement="bottom-start"
      offset={[-32, 16]}
      allowHTML
      arrow={false}
      content={children}
      maxWidth={800}
    >
      <button
        className={cx(
          `${prefix}--header-product__link ${prefix}--header-product__list-trigger `
        )}
      >
        <span className={cx(`${prefix}--header-product__link-label`)}>
          {label}
        </span>
        <IconChevronDown />
      </button>
    </Tippy>
  );
});
