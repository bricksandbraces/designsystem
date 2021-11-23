import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import LottieAnimation from "../LottieAnimation/LottieAnimation";
import animation from "./animation.json";

type LoadingProps = {
  /**
   * active
   */
  active?: boolean;

  /**
   * Overlay anzeigen?
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
   * Size
   */
  size?: "small" | "default" | "large" | "inline";
};

const Loading = ({
  size = "default",
  loadingAnimation = animation,
  loadingDescription = "Loading spinner",
  active,
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
};

export default Loading;
