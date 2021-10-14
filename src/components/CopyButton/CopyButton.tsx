import React, { useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy, IconCheck } from "@tabler/icons";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";

export type CopyButtonProps = {
  /**
   * Provide optional click handler for the button
   */
  onClick?: (event: any) => void;

  /**
   * Label of tooltip.
   */
  tooltipLabelCopied: string;

  /**
   * Label of Button
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
   * Button size
   */
  size?: "large" | "default" | "small";
};

const CopyButton = ({
  tooltipLabelCopied = "Copied",
  size = "default",
  onClick,
  tooltipLabel = "Copy",
  className,
  timeout,
  valueToCopy
}: CopyButtonProps) => {
  const [showState, setShowState] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <IconOnlyButton
      className={cx(
        `${prefix}--copybutton`,
        { [`${prefix}--copybutton--copied`]: showState },
        className
      )}
      kind="ghost"
      size={size}
      tooltipLabel={showState ? tooltipLabelCopied : tooltipLabel}
      // TODO: adjust color to be extended from a config
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
