import React from "react";
import Logo from "../../../src/components/Logo/Logo";
import Headline from "../../../src/components/Typography/Headline";
import Body from "../../../src/components/Typography/Body";

const Intro = () => {
  return (
    <div className="sb-intro--container">
      <div className="sb-intro">
        <Logo kind="logomark" size="xsmall" variant="white" />
        <Headline type="h1" className="sb-intro--headline">
          Design System
        </Headline>
        <Body type="body-02" className="sb-intro--subline">
          v.0.0.1 React Storybook
        </Body>
      </div>
    </div>
  );
};

export default Intro;
