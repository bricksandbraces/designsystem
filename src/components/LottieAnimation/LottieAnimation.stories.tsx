import React, { useEffect, useRef, useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { LottieAnimation } from "./LottieAnimation";
import animation from "./animation.json";
import { Button } from "../..";
import { AnimationItem } from "lottie-web";

export default {
  title: "Components/LottieAnimation",
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
      animationItem.current?.playSegments([0, 90], true);

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
      animationItem.current?.playSegments([91, 180], true);

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
      <div style={{ padding: "32px" }}>
        <Button
          disabled={isDisabled}
          onClick={() => {
            setLoading(true);
            setDisabled(true);
          }}
        >
          {!isDisabled ? "Send huge data" : "Sending..."}
          <LottieAnimation
            className="bb--lottie-example"
            ref={containerRef}
            animationProps={{
              animationData: animation,
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
