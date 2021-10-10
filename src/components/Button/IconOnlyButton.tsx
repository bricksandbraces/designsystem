import React, { ReactNode } from "react";
import cx from "classnames";
import Button from "./Button";
import { prefix } from "../../settings";
import TTooltip from "../TTooltip/TTooltip";

export type IconOnlyButtonProps = {
  /** Unique identifier for your button */
  id?: string;

  /** Specify button kind */
  kind?: "primary" | "secondary" | "tertiary" | "ghost";

  danger?: boolean;

  /** Specify an optional className to be added to your button */
  className?: string;
  wrapperClassName?: string;

  /** Use the button as an anchor link. Sets component wrapping type to 'a' instead of 'button'. */
  href?: string;

  title?: string;

  /** Provide the click handler for the button */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;

  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;

  /** Triggered when the event receives focus */
  onFocus?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /** Triggered when the event drops focus */
  onBlur?: React.FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;

  /** Specify the type of the button */
  type?: "button" | "submit" | "reset";

  /** Specify the role of the button */
  role?: string;

  /** Specify the Loading description of the button */
  loadingDescription?: string;

  /** Set the button disabled */
  disabled?: boolean;

  /** Button size */
  size?: "large" | "default" | "small";

  /** Render icon */
  icon: ReactNode;

  /** Set the button loading */
  isLoading?: boolean;

  /** Tooltip label */
  tooltipLabel?: string;

  /** Tooltip label position */
  tooltipPosition?: "top" | "bottom" | "left" | "right";

  /** Automatically focus the button */
  autoFocus?: boolean;
};

const IconOnlyButton = ({
  kind = "primary",
  size = "default",
  danger,
  tooltipLabel = "Tooltip Label",
  disabled,
  isLoading,
  wrapperClassName,
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
      withIcon
      icon={icon}
      isLoading={isLoading}
      loadingDescription={loadingDescription}
      disabled={disabled}
      {...rest}
    />
  </TTooltip>
);

export default IconOnlyButton;
