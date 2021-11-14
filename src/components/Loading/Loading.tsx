import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type LoadingProps = {
  /**
   * Loading Label that is shown.
   */
  loadingDescription: string;

  /**
   * Loading active if the component should indicate loading
   */
  active?: boolean;

  /**
   * Loading Overlay anzeigen?
   */
  withOverlay?: boolean;

  /**
   * Loading Disabled loading spinner
   */
  disabled?: boolean;

  /**
   * Loading ClassName
   */
  className?: string;

  /**
   * Loading Size
   */
  size?: "small" | "default" | "large" | "inline";
};

const Loading = (
  {
    size = "default",
    loadingDescription,
    active,
    disabled,
    className,
    withOverlay
  }: LoadingProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
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
          ref={ref}
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

export default React.forwardRef(Loading);
