import React from "react";
import cx from "classnames";
import Button, { ButtonProps } from "./Button";
import { prefix } from "../../settings";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";

export type IconOnlyButtonProps = {
  /**
   * IconOnlyButton Tooltip Props
   */
  tooltipProps?: TooltipProps;

  /**
   * IconOnlyButton Hide Tooltip
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
}: IconOnlyButtonProps) => (
  <>
    {hideTooltip ? (
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
    ) : (
      <Tooltip placement="bottom" disabled={disabled} {...tooltipProps}>
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
      </Tooltip>
    )}
  </>
);

export default IconOnlyButton;
