import React, { ReactNode, FocusEvent } from "react";
import cx from "classnames";
import Button from "./Button";
import TooltipText from "../Tooltip/HoverTooltipText";
import TooltipContainer from "../Tooltip/TooltipTrigger";
import { prefix } from "../../settings";

export type IconOnlyButtonProps = {
  /** Unique identifier for your button */
  id?: string;

  /** Specify button kind */
  kind?: "primary" | "secondary" | "tertiary" | "danger" | "ghost";

  /** Specify an optional className to be added to your button */
  className?: string;
  wrapperClassName?: string;

  /** Use the button as an anchor link. Sets component wrapping type to 'a' instead of 'button'. */
  href?: string;

  /** Provide the click handler for the button */
  onClick?: (event: any) => void;
  onHover?: (event: any) => void;

  /** Triggered when the event receives focus */
  onFocus?: (event: FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

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
  tooltipLabel = "Tooltip Label",
  tooltipPosition = "bottom",
  disabled,
  isLoading,
  wrapperClassName,
  href,
  className,
  icon,
  loadingDescription = "Loading",
  ...rest
}: IconOnlyButtonProps) => (
  <TooltipContainer className={cx(wrapperClassName)}>
    <Button
      className={cx(`${prefix}--icon-only`, className)}
      href={href}
      kind={kind}
      size={size}
      withIcon
      icon={icon}
      isLoading={isLoading}
      loadingDescription={loadingDescription}
      disabled={disabled}
      {...rest}
    />
    <TooltipText
      tooltipLabel={tooltipLabel}
      tooltipPosition={tooltipPosition}
    />
  </TooltipContainer>
);

export default IconOnlyButton;
