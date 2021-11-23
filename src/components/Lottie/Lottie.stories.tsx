import React, { useEffect, useRef, useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import LottieAnimation from "./LottieAnimation";
import loadingSuccessFailSpinner from "./loading-success-fail-spinner-stroke-update.json";
import { Button } from "../..";
import { AnimationItem } from "lottie-web";

export default {
  title: "Components/A_REFA_Lottie",
  decorators: [withKnobs]
};

export const Uncontrolled = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationItem = useRef<AnimationItem | null>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isDone, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      // started loading
      console.log("Starting to load");
      animationItem.current?.playSegments([0, 240], true);

      setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 4000);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDone) {
      // received success
      console.log("Starting to success animation");
      animationItem.current?.playSegments([241, 418], true);

      const onSuccessAnimationCompleted = () => {
        setDisabled(false);
        setDone(false);
        // remove event listeners after we dont need them anymore
        animationItem.current?.removeEventListener(
          "complete",
          onSuccessAnimationCompleted
        );
      };

      animationItem.current?.addEventListener(
        "complete",
        onSuccessAnimationCompleted
      );
    } else {
      // error
    }
  }, [isDone]);

  return (
    <>
      <div>
        <Button
          disabled={isDisabled}
          onClick={() => {
            setLoading(true);
            setDisabled(true);
          }}
        >
          {!isDisabled ? "Send huge data" : "Sending..."}
          <LottieAnimation
            ref={containerRef}
            animationProps={{
              animationData: loadingSuccessFailSpinner,
              autoplay: false,
              loop: false
            }}
            onAnimationLoaded={(item) => {
              animationItem.current = item;
            }}
          />
        </Button>
        <h2>{isDone ? "DONE" : ""}</h2>
      </div>
    </>
  );
};
