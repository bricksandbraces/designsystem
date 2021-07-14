import React, { ReactNode, useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy } from "@tabler/icons";
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";

export type CopyButtonProps = {
  /**
   * Provide the click handler for the button
   */
  onClick?: (event: any) => void;

  /**
   * Position of tooltip.
   */
  tooltipPosition: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  tooltipLabel: string;

  /**
   * Sets the timeout after which the tooltip should hide.
   */
  timeout?: number;

  /**
   * Classname
   */
  className?: string;

  /**
   * Value to copy
   */
  valueToCopy: string;

  /**
   * Children
   */
  children?: ReactNode;
};

const CopyButton = ({
  tooltipPosition,
  tooltipLabel,
  onClick,
  className,
  timeout,
  children,
  valueToCopy
}: CopyButtonProps) => {
  const [showState, setShowState] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <Tooltip
      className={cx(
        "copybutton",
        { "copybutton-copied": showState },
        className
      )}
      label={tooltipLabel}
      position={tooltipPosition}
    >
      <Button
        kind="ghost"
        iconOnly
        onClick={(event) => {
          setShowState(true);
          copyToClipboard(valueToCopy);
          setTimeout(() => {
            setShowState(false);
          }, timeout ?? 2000);
          onClick?.(event);
        }}
      >
        {children || <IconCopy />}
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
