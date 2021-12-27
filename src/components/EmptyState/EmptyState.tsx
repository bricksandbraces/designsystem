import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Body, Headline } from "../..";
import { IconAB } from "@tabler/icons";

export type EmptyStateProps = {
  /**
   * Empty State Icon
   */
  icon?: React.ReactNode;

  /**
   * Empty State Actions
   */
  actions?: React.ReactNode;

  /**
   * Empty State Title
   */
  title: string;

  /**
   * Empty State SubTitle
   */
  subTitle?: string;

  /**
   * Empty State Orientation
   */
  orientation?: "vertical" | "horizontal";
} & React.HTMLAttributes<HTMLDivElement>;

export const EmptyState = React.forwardRef(function EmptyState(
  {
    icon = <IconAB />,
    title,
    orientation = "vertical",
    actions,
    subTitle,
    className,
    children,
    ...rest
  }: EmptyStateProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--emptystate ${prefix}--emptystate-${orientation}`,
        className
      )}
      {...rest}
      ref={ref}
    >
      {icon && <div className={cx(`${prefix}--emptystate-icon`)}>{icon}</div>}
      <div className={cx(`${prefix}--emptystate-text`)}>
        <Headline className={cx(`${prefix}--emptystate-title`)} type="h4">
          {title}
        </Headline>
        {subTitle && (
          <Body className={cx(`${prefix}--emptystate-subtitle`)} type="body-02">
            {subTitle}
          </Body>
        )}
        {actions && (
          <div className={cx(`${prefix}--emptystate-actions`)}>{actions}</div>
        )}
      </div>
    </div>
  );
});
