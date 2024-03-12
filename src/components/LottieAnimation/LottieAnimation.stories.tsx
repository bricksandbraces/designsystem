import { AnimationItem } from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../..";
import animation from "./animation.json";
import { LottieAnimation } from "./LottieAnimation";

export default {
  title: "Utilities/LottieAnimation"
};

export const Uncontrolled = {
  render: (args: any) => {
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
            {...args}
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
    );
  }
};
