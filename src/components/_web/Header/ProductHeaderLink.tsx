import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../../settings";

export type ProductHeaderLinkProps = {
  /**
   * ProductHeaderLink Children
   */
  children: ReactNode;

  /**
   * ProductHeaderLink Location
   */
  href?: string;

  /**
   * ProductHeaderLink Target
   */
  target?: string;

  /**
   * ProductHeaderLink ClassName
   */
  className?: string;

  /**
   * ProductHeaderLink Promo
   */
  promo?: boolean;

  /**
   * ProductHeaderLink Icon
   */
  icon?: ReactNode;

  /**
   * ProductHeaderLink IconPosition
   */
  iconPosition?: "start" | "end";

  /**
   * ProductHeaderLink OnClick Event
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export const ProductHeaderLink = React.forwardRef(function ProductHeaderLink({
  children,
  href,
  target,
  icon,
  promo,
  iconPosition = "end",
  onClick,
  className,
  ...rest
}: ProductHeaderLinkProps) {
  const Element = React.createElement(href ? "a" : "button").type;

  return (
    <Element
      className={cx(
        `${prefix}--header-product__link`,
        {
          [`${prefix}--header-product__link-icon--${iconPosition}`]:
            iconPosition && icon,
          [`${prefix}--header-product__link-promo`]: promo
        },
        className
      )}
      {...rest}
      href={href}
      target={target}
      onClick={onClick as React.MouseEventHandler<HTMLElement>}
    >
      <span className={`${prefix}--header-product__link-label`}>
        {children}
      </span>
      {icon}
    </Element>
  );
});
