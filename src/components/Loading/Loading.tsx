import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LoadingProps = {
  /**
   * Label that is shown.
   */
  loadingDescription: string;

  /**
   * active
   */
  active?: boolean;

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
  active,
  disabled,
  className,
  withOverlay
}: LoadingProps) => {
  return (
    <>
      {active && (
        <div
          className={cx(
            `${prefix}--loading`,
            {
              [`${prefix}--loading-overlay`]: withOverlay,
              [`${prefix}--loading-active`]: active
            },
            className
          )}
        >
          <div
            className={cx(
              `${prefix}--loading-container`,
              `${prefix}--loading-${size}`,
              {
                [`${prefix}--loading-disabled`]: disabled
              }
            )}
            role="status"
            aria-live={active ? "assertive" : "off"}
          >
            <svg viewBox="0 0 100 100">
              <title>{loadingDescription}</title>
              <circle cx="50%" cy="50%" r="40" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
