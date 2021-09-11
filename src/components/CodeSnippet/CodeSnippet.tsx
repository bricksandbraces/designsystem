import React from "react";
import cx from "classnames";
import CopyButton from "../CopyButton/CopyButton";

export type CodeSnippetProps = {
  /**
   * Inline snippet
   */
  inline?: boolean;

  /**
   * Code to copy
   */
  code: string;

  /**
   * ClassName
   */
  className?: string;
};

const CodeSnippet = ({
  inline,
  code,
  className,
  ...rest
}: CodeSnippetProps) => {
  return (
    <div className={cx("codesnippet--container", className)} {...rest}>
      <div className="codesnippet--container-overlay" />
      <CopyButton
        valueToCopy={code}
        label="Copy"
        tooltipPosition="bottom"
        onClick={() => {}}
        tooltipLabel="Copied!"
        wrapperClassName={cx("codesnippet--container-button", {
          "codesnippet--container-button__inline": inline
        })}
      />
      <div
        className={cx("codesnippet--innercontainer", {
          "codesnippet--innercontainer-inline": inline
        })}
      >
        <pre className="codesnippet--pre">
          <code
            className={cx("codesnippet--code", {
              "codesnippet--code-inline": inline
            })}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
