import React, { useState } from "react";
import cx from "classnames";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import CopyButton from "../CopyButton/CopyButton";
import { prefix } from "../../settings";
import Button from "../Button/Button";

export type CodeSnippetProps = {
  /**
   * CodeSnippet Code
   */
  code: string;

  /**
   * CodeSnippet Show More Label
   */
  showMoreLabel?: string;

  /**
   * CodeSnippet Show Less Label
   */
  showLessLabel?: string;

  /**
   * CodeSnippet Button TooltipLabel
   */
  tooltipLabel?: string;

  /**
   * CodeSnippet Button TooltipLabel Copied
   */
  tooltipLabelCopied?: string;

  /**
   * CodeSnippet ClassName
   */
  className?: string;
};

const CodeSnippet = ({
  code,
  className,
  showMoreLabel = "Show more",
  showLessLabel = "Show less",
  tooltipLabel = "Copy",
  tooltipLabelCopied = "Copy Cat!",
  ...rest
}: CodeSnippetProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={cx(`${prefix}--codesnippet-container`, className)}
      {...rest}
    >
      <div className={`${prefix}--codesnippet-button__container`}>
        <Button
          size="small"
          icon={expanded ? <IconChevronUp /> : <IconChevronDown />}
          iconPosition="right"
          kind="ghost"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </Button>
        <CopyButton
          valueToCopy={code}
          tooltipLabel={tooltipLabel}
          onClick={() => {}}
          tooltipLabelCopied={tooltipLabelCopied}
          className={cx(`${prefix}--codesnippet-button`)}
          size="small"
        />
      </div>
      <div
        className={cx(`${prefix}--codesnippet-innercontainer`, {
          [`${prefix}--codesnippet-innercontainer__expanded`]: expanded
        })}
      >
        <pre className={`${prefix}--codesnippet-pre`}>
          <code className={cx(`${prefix}--codesnippet-code`)}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
