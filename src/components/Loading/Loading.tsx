import cx from "classnames";
import React, { forwardRef } from "react";
import { prefix } from "../../settings";
import { LottieAnimation } from "../LottieAnimation/LottieAnimation";
import defaultLoadingAnimation from "./animation.json";

export type LoadingProps = {
  /**
   * Loading active
   */
  active?: boolean;

  /**
   * Loading Overlay anzeigen?
   */
  withOverlay?: boolean;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Loading Animation
   */
  loadingAnimation?: object;

  /**
   * Loading Description
   */
  loadingDescription?: string;

  /**
   * Loading Size
   */
  size?: "small" | "default" | "large" | "inline";
};

export const Loading = forwardRef(function Loading(
  {
    size = "default",
    loadingDescription,
    loadingAnimation = defaultLoadingAnimation,
    active,
    className,
    withOverlay
  }: LoadingProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
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
          <LottieAnimation
            title={loadingDescription}
            className={cx(
              `${prefix}--loading-container`,
              `${prefix}--loading-${size}`
            )}
            role="status"
            aria-live={active ? "assertive" : "off"}
            animationProps={{
              animationData: loadingAnimation,
              autoplay: true,
              loop: true
            }}
          />
        </div>
      )}
    </>
  );
});
