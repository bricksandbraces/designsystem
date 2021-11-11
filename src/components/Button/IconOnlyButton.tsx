import React from "react";
import cx from "classnames";
import Button, { ButtonProps } from "./Button";
import { prefix } from "../../settings";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";

export type IconOnlyButtonProps = {
  /**
   * IconOnlyButton TooltipProps
   */
  tooltipProps?: TooltipProps;

  /**
   * IconOnlyButton HideTooltip
   */
  hideTooltip?: boolean;
} & ButtonProps;

const IconOnlyButton = ({
  kind = "primary",
  size = "default",
  danger,
  disabled,
  isLoading,
  href,
  className,
  hideTooltip,
  icon,
  loadingDescription = "Loading",
  tooltipProps = { tooltipContent: "Tooltip content" },
  ...rest
}: IconOnlyButtonProps) => {
  const WrapperElement: any = hideTooltip ? React.Fragment : Tooltip;
  const wrapperProps = hideTooltip
    ? {}
    : { placement: "bottom", disabled, delay: 300, ...tooltipProps };
  return (
    <WrapperElement {...wrapperProps}>
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
    </WrapperElement>
  );
};

export default IconOnlyButton;
