import React from "react";
import cx from "classnames";
import CopyButton from "../CopyButton/CopyButton";
import { prefix } from "../../settings";

export type CodeSnippetProps = {
  /**
   * Code to copy
   */
  code: string;

  /**
   * ClassName
   */
  className?: string;
};

const CodeSnippet = ({ code, className, ...rest }: CodeSnippetProps) => {
  return (
    <div
      className={cx(`${prefix}--codesnippet--container`, className)}
      {...rest}
    >
      <div className={`${prefix}--codesnippet--container-overlay`} />
      <CopyButton
        valueToCopy={code}
        label="Copy"
        onClick={() => {}}
        labelCopied="Copied!"
        className={cx(`${prefix}--codesnippet--container-button`)}
      />
      <div className={cx(`${prefix}--codesnippet--innercontainer`)}>
        <pre className={`${prefix}--codesnippet--pre`}>
          <code className={cx(`${prefix}--codesnippet--code`)}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
