import React, { useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy, IconCheck } from "@tabler/icons";
import Button from "../Button/Button";

export type CopyButtonProps = {
  /**
   * Provide optional click handler for the button
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
};

const CopyButton = ({
  tooltipPosition,
  tooltipLabel,
  onClick,
  className,
  timeout,
  valueToCopy
}: CopyButtonProps) => {
  const [showState, setShowState] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <div
      className={cx(
        "copybutton",
        { "copybutton--copied": showState },
        className
      )}
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
        {showState ? <IconCheck color="#7FD55D" /> : <IconCopy />}
      </Button>
      <span
        className={cx("tooltip--text", {
          "tooltip--top": tooltipPosition === "top",
          "tooltip--bottom": tooltipPosition === "bottom",
          "tooltip--left": tooltipPosition === "left",
          "tooltip--right": tooltipPosition === "right"
        })}
      >
        {tooltipLabel}
      </span>
    </div>
  );
};

export default CopyButton;
