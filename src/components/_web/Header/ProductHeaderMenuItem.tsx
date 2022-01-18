import { IconArrowRight } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../../settings";

export type ProductHeaderMenuItemProps = {
  /**
   * ProductHeaderMenuItem Title
   */
  title: string;

  /**
   * ProductHeaderMenuItem SubTitle
   */
  subtitle: string;

  /**
   * ProductHeaderMenuItem Icon
   */
  icon?: React.ReactNode;

  /**
   * ProductHeaderMenuItem Location
   */
  href?: string;

  /**
   * ProductHeaderMenuItem Target
   */
  target?: string;

  /**
   * ProductHeaderMenuItem ClassName
   */
  className?: string;

  /**
   * ProductHeaderMenuItem OnClick Event
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export const ProductHeaderMenuItem = React.forwardRef(
  function ProductHeaderMenuItem({
    title,
    subtitle,
    icon,
    href,
    target,
    onClick,
    className,
    ...rest
  }: ProductHeaderMenuItemProps) {
    const Element = React.createElement(href ? "a" : "button").type;

    return (
      <Element
        className={cx(`${prefix}--header-product__list-item`, className)}
        {...rest}
        href={href}
        target={target}
        onClick={onClick as React.MouseEventHandler<HTMLElement>}
      >
        <div className={cx(`${prefix}--header-product__list-item--content`)}>
          {icon && (
            <span className={cx(`${prefix}--header-product__list-item--icon`)}>
              {icon}
            </span>
          )}
          <div>
            <p className={cx(`${prefix}--header-product__list-item--title`)}>
              {title}
            </p>
            <p className={cx(`${prefix}--header-product__list-item--subtitle`)}>
              {subtitle}
            </p>
          </div>
        </div>
        <IconArrowRight
          className={cx(`${prefix}--header-product__list-item--arrow`)}
        />
      </Element>
    );
  }
);
