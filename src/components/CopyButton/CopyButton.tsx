import React, { useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy, IconCheck } from "@tabler/icons";
import IconOnlyButton from "../Button/IconOnlyButton";

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
   * Label of Button
   */
  label: string;

  /**
   * Sets the timeout after which the tooltip should hide.
   */
  timeout?: number;

  /**
   * Classname
   */
  className?: string;
  wrapperClassName?: string;

  /**
   * Value to copy
   */
  valueToCopy: string;
};

const CopyButton = ({
  tooltipLabel = "Copied",
  onClick,
  label = "Copy",
  className,
  timeout,
  wrapperClassName,
  valueToCopy
}: CopyButtonProps) => {
  const [showState, setShowState] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <IconOnlyButton
      className={cx(
        "copybutton",
        { "copybutton--copied": showState },
        className
      )}
      wrapperClassName={wrapperClassName}
      kind="ghost"
      tooltipLabel={showState ? tooltipLabel : label}
      tooltipPosition="bottom"
      size="small"
      icon={showState ? <IconCheck color="#7FD55D" /> : <IconCopy />}
      onClick={(event) => {
        setShowState(true);
        copyToClipboard(valueToCopy);
        setTimeout(() => {
          setShowState(false);
        }, timeout ?? 2000);
        onClick?.(event);
      }}
    />
  );
};

export default CopyButton;
