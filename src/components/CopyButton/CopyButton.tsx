import React, { useState } from "react";
import cx from "classnames";
import { IconCopy } from "@tabler/icons";
import Button from "../Button/Button";

export type CopyButtonProps = {
  /**
   * Provide the click handler for the button
   */
  onClick: (event: any) => void;

  /**
   * Position of tooltip.
   */
  position: "top" | "bottom" | "left" | "right";

  /**
   * Label of tooltip.
   */
  toolTipLabel: string;

  /**
   * Classname
   */
  className?: string;
};

const CopyButton = ({
  position,
  toolTipLabel,
  onClick,
  className
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cx("copybutton", { "copybutton-copied": copied }, className)}
    >
      <Button
        kind="ghost"
        iconOnly
        onClick={() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
          onClick();
        }}
      >
        <IconCopy />
      </Button>
      <span
        className={cx("tooltip-text", {
          "tooltip-top": position === "top",
          "tooltip-bottom": position === "bottom",
          "tooltip-left": position === "left",
          "tooltip-right": position === "right"
        })}
      >
        {toolTipLabel}
      </span>
    </div>
  );
};

export default CopyButton;
