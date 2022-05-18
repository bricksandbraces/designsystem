import cx from "classnames";
import React, { ReactNode } from "react";
import { Body } from "../..";
import { prefix } from "../../settings";

export type HeaderProps = {
  /**
   * Header Children
   */
  children?: ReactNode;

  /**
   * Header Title
   */
  title: string;

  /**
   * Header Border Width
   */
  borderWidth?: 0 | 1 | 2 | 3;

  /**
   * Header Description
   */
  description?: string;

  /**
   * Header Breadcrumbs
   */
  breadcrumbs?: React.ReactNode;

  /**
   * Header Classnames
   */
  className?: string;
};

export const Header = function Header({
  children,
  title = "Title",
  description,
  borderWidth = 1,
  className,
  breadcrumbs,
  ...rest
}: HeaderProps) {
  return (
    <div
      className={cx(
        `${prefix}--header`,
        {
          [`${prefix}--header-children`]: children,
          [`${prefix}--functional-divider__bottom-0${borderWidth}`]: borderWidth
        },
        className
      )}
      {...rest}
    >
      {breadcrumbs && (
        <div className={cx(`${prefix}--header-breadcrumbs`)}>{breadcrumbs}</div>
      )}
      <h1 className={cx(`${prefix}--header-title`)}>{title}</h1>
      <Body className={cx(`${prefix}--header-description`)} type="body-02">
        {description}
      </Body>
      {children}
    </div>
  );
};
