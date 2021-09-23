import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LoadingProps = {
  /**
   * Label that is shown.
   */
  loadingDescription: string;

  /**
   * isLoading
   */
  isLoading?: boolean;

  /**
   * Overlay anzeigen?
   */
  withOverlay?: boolean;

  /**
   * Disabled loading spinner
   */
  disabled?: boolean;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Size
   */
  size?: "small" | "default" | "large" | "inline";
};

const Loading = ({
  size = "default",
  loadingDescription,
  isLoading,
  disabled,
  className,
  withOverlay
}: LoadingProps) => {
  return (
    <>
      {isLoading && (
        <div
          className={cx(
            `${prefix}--loading`,
            {
              [`${prefix}--loading--overlay`]: withOverlay,
              [`${prefix}--loading--isloading`]: isLoading
            },
            className
          )}
        >
          <div
            className={cx(
              `${prefix}--loading--container`,
              `${prefix}--loading--${size}`,
              {
                [`${prefix}--loading--disabled`]: disabled
              }
            )}
            role="status"
            aria-live={isLoading ? "assertive" : "off"}
          >
            <svg className={`${prefix}--loading--svg`} viewBox="0 0 100 100">
              <title>{loadingDescription}</title>
              <circle
                className={`${prefix}--loading--stroke`}
                cx="50%"
                cy="50%"
                r="40"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
