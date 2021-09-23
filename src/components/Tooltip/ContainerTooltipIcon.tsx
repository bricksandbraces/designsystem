import React from "react";
import cx from "classnames";
import { IconInfoCircle } from "@tabler/icons";
import { prefix } from "../../settings";

type ContainerTooltipIconProps = {
  /**
   * DOM class names for the trigger
   */
  className?: string;

  /** Provide the click handler for the button */
  onClick?: (event: any) => void;
  onHover?: (event: any) => void;
};

const ContainerTooltipIcon = ({
  className,
  ...rest
}: ContainerTooltipIconProps) => {
  return (
    <button className={cx(className, `${prefix}--tooltip--btn`)} {...rest}>
      <IconInfoCircle size={16} />
    </button>
  );
};

export default ContainerTooltipIcon;
