import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { Tooltip, TooltipProps } from "../Tooltip/Tooltip";
import { Button, ButtonProps } from "./Button";

export type IconOnlyButtonProps = {
  /**
   * IconOnlyButton TooltipProps
   */
  tooltipProps?: TooltipProps;

  /**
   * IconOnlyButton HideTooltip
   */
  hideTooltip?: boolean;

  /**
   * IconOnlyButton Icon
   */
  icon: React.ReactElement;
} & Omit<ButtonProps, "icon">;

export const IconOnlyButton = React.forwardRef(function IconOnlyButton(
  {
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
  }: IconOnlyButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const WrapperElement: any = hideTooltip ? React.Fragment : Tooltip;
  const wrapperProps = hideTooltip
    ? {}
    : { placement: "bottom", disabled, delay: 300, ...tooltipProps };
  return (
    <WrapperElement {...wrapperProps}>
      <Button
        ref={ref}
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
});
