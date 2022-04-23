import cx from "classnames";
import React, { ReactNode } from "react";
import { Body, Caption, Headline } from "../..";
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
   * Header Description
   */
  description?: string;

  /**
   * Header Classnames
   */
  className?: string;
};

export const Header = function Header({
  children,
  title = "Title",
  description,
  className,
  ...rest
}: HeaderProps) {
  return (
    <>
      <div
        className={cx(
          `${prefix}--header`,
          { [`${prefix}--header-children`]: children },
          className
        )}
        {...rest}
      >
        <h1 className={cx(`${prefix}--header-title`)}>{title}</h1>
        <Body className={cx(`${prefix}--header-description`)} type="body-02">
          {description}
        </Body>
      </div>
      {children && (
        <div className={cx(`${prefix}--header-children__container`)}>
          {children}
        </div>
      )}
    </>
  );
};
