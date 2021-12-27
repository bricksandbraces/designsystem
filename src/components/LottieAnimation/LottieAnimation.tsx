import React, { useEffect, useRef } from "react";
import Lottie, {
  AnimationConfig,
  AnimationConfigWithData,
  AnimationConfigWithPath,
  AnimationItem
} from "lottie-web";
import cx from "classnames";
import mergeRefs from "react-merge-refs";

export type LottieProps = {
  title?: string;
  role?: string;
  className?: string;
  animationProps:
    | (Omit<AnimationConfigWithPath, "container" | "path"> & { path: string })
    | (Omit<AnimationConfigWithData, "container" | "animationData"> & {
        animationData: any;
      });

  onAnimationLoaded?: (item: AnimationItem) => void;
};

const defaultAnimationProps: Partial<AnimationConfig> = {
  renderer: "svg",
  loop: true,
  autoplay: true
};

export const LottieAnimation = React.forwardRef(function LottieAnimation(
  { className, animationProps, onAnimationLoaded, ...rest }: LottieProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const item = Lottie.loadAnimation({
        ...defaultAnimationProps,
        ...animationProps,
        container: containerRef.current
      });
      onAnimationLoaded?.(item);
    }
  }, []);
  return (
    <div
      className={cx("", className)}
      ref={mergeRefs([ref, containerRef])}
      {...rest}
    />
  );
});
