import React from "react";
import cx from "classnames";
import { IconInfoCircle } from "@tabler/icons";

type ContainerTooltipIconProps = {
  /**
   * DOM class names for the trigger
   */
  className?: string;

  /**
   * Disables the tooltip when the children is disabled
   */
  disabled?: boolean;

  /** Provide the click handler for the button */
  onClick?: (event: any) => void;
  onHover?: (event: any) => void;
};

const ContainerTooltipIcon = ({
  className,
  disabled,
  ...rest
}: ContainerTooltipIconProps) => {
  return (
    <button className={cx(className, "tooltip--icon")} {...rest}>
      <IconInfoCircle size={16} />
    </button>
  );
};

export default ContainerTooltipIcon;
