import React, { ReactNode } from "react";
import cx from "classnames";
import CopyButton from "../CopyButton/CopyButton";

export type CodeSnippetProps = {
  /**
   * Inline snippet
   */
  inline?: boolean;

  /**
   * React Children
   */
  children: ReactNode;

  /**
   * ClassName
   */
  className?: string;
};

const CodeSnippet = ({
  inline,
  children,
  className,
  ...rest
}: CodeSnippetProps) => {
  return (
    <div className={cx("codesnippet-container", className)} {...rest}>
      <div className="codesnippet-container--overlay" />
      <CopyButton
        position="bottom"
        onClick={() => {}}
        toolTipLabel="Copied!"
        className={cx("codesnippet-container--button", {
          "codesnippet-container--button__inline": inline
        })}
      />
      <div
        className={cx("codesnippet-innercontainer", {
          "codesnippet-innercontainer--inline": inline
        })}
      >
        <pre className="codesnippet-pre">
          <code
            className={cx("codesnippet-code", {
              "codesnippet-code--inline": inline
            })}
          >
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
