import React from "react";
import cx from "classnames";
import CopyButton from "../CopyButton/CopyButton";

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
    <div className={cx("codesnippet--container", className)} {...rest}>
      <div className="codesnippet--container-overlay" />
      <CopyButton
        valueToCopy={code}
        label="Copy"
        onClick={() => {}}
        labelCopied="Copied!"
        className={cx("codesnippet--container-button")}
      />
      <div className={cx("codesnippet--innercontainer")}>
        <pre className="codesnippet--pre">
          <code className={cx("codesnippet--code")}>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
