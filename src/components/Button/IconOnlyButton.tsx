import React, { ReactNode } from "react";
import cx from "classnames";
import Button from "./Button";
import { prefix } from "../../settings";
import TTooltip from "../Tooltip/Tooltip";

export type IconOnlyButtonProps = {
  /**
   * Button Id
   */
  id?: string;

  /**
   * Button Children
   */
  children?: ReactNode;

  /**
   * Button Kind
   */
  kind?: "primary" | "secondary" | "tertiary" | "ghost";

  /**
   * Danger
   */
  danger?: boolean;

  /**
   * Button ClassName
   */
  className?: string;

  /**
   * Button Href (sets the button to anchor)
   */
  href?: string;

  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";

  /**
   * Button role
   */
  role?: string;

  /**
   * Button loadingDescription
   */
  loadingDescription?: string;

  /**
   * Button disabled
   */
  disabled?: boolean;

  /**
   * Button size
   */
  size?: "large" | "default" | "small";

  /**
   * Button icon
   */
  icon?: ReactNode;

  /**
   * Button iconPosition
   */
  iconPosition?: "right" | "left";

  /**
   * Button fluid
   */
  fluid?: boolean;

  /**
   * Button title
   */
  title?: string;

  /**
   * Tab index for the button
   */
  tabIndex?: number;

  /**
   * Button isLoading
   */
  isLoading?: boolean;

  /**
   * Button Tooltip label
   */
  tooltipLabel?: string;

  /**
   * Button Tooltip label position
   */
  tooltipPosition?: "top" | "bottom" | "left" | "right";

  /**
   * Automatically focus the button
   */
  autoFocus?: boolean;
};

const IconOnlyButton = ({
  kind = "primary",
  size = "default",
  danger,
  tooltipLabel = "Tooltip Label",
  disabled,
  isLoading,
  href,
  className,
  icon,
  loadingDescription = "Loading",
  ...rest
}: IconOnlyButtonProps) => (
  <TTooltip
    tooltipContent={tooltipLabel}
    placement="bottom"
    disabled={disabled}
  >
    <Button
      className={cx(`${prefix}--button-icon-only`, className)}
      href={href}
      kind={kind}
      size={size}
      danger={danger}
      icon={icon}
      isLoading={isLoading}
      loadingDescription={loadingDescription}
      disabled={disabled}
      {...rest}
    />
  </TTooltip>
);

export default IconOnlyButton;
