import React, { useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy, IconCheck } from "@tabler/icons";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";

export type CopyButtonProps = {
  /**
   * CopyButton Provide optional click handler for the button
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;

  /**
   * CopyButton Label of tooltip.
   */
  tooltipLabelCopied: string;

  /**
   * CopyButton Label of Button
   */
  tooltipLabel: string;

  /**
   * CopyButton Sets the timeout after which the tooltip should hide.
   */
  timeout?: number;

  /**
   * CopyButton Classname
   */
  className?: string;

  /**
   * CopyButton Value to copy
   */
  valueToCopy: string;

  /**
   * CopyButton size
   */
  size?: "large" | "default" | "small";
};

const CopyButton = (
  {
    tooltipLabelCopied = "Copied",
    size = "default",
    onClick,
    tooltipLabel = "Copy",
    className,
    timeout = 2000,
    valueToCopy
  }: CopyButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
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
      tooltipProps={{
        tooltipContent: showState ? tooltipLabelCopied : tooltipLabel
      }}
      // TODO: adjust color to be extended from a config
      icon={showState ? <IconCheck color="#7FD55D" /> : <IconCopy />}
      onClick={(event) => {
        setShowState(true);
        copyToClipboard(valueToCopy);
        setTimeout(() => {
          setShowState(false);
        }, timeout);
        onClick?.(event);
      }}
      ref={ref}
    />
  );
};

export default CopyButton;
