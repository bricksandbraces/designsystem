import React, { useState } from "react";
import cx from "classnames";
import { useCopyToClipboard } from "react-use";
import { IconCopy, IconCheck } from "@tabler/icons";
import Button from "../Button/Button";
import { prefix } from "../../settings";

export type CopyButtonProps = {
  /**
   * Provide optional click handler for the button
   */
  onClick?: (event: any) => void;

  /**
   * Label of tooltip.
   */
  labelCopied: string;

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

  /**
   * Value to copy
   */
  valueToCopy: string;
};

const CopyButton = ({
  labelCopied = "Copied",
  onClick,
  label = "Copy",
  className,
  timeout,
  valueToCopy
}: CopyButtonProps) => {
  const [showState, setShowState] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  return (
    <Button
      className={cx(
        `${prefix}--copybutton`,
        { [`${prefix}--copybutton--copied`]: showState },
        className
      )}
      kind="secondary"
      withIcon
      iconPosition="right"
      size="small"
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
    >
      {showState ? labelCopied : label}
    </Button>
  );
};

export default CopyButton;
