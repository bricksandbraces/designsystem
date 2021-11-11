import React from "react";
import Logo from "../../../src/components/Logo/Logo";
import Headline from "../../../src/components/Typography/Headline";
import Body from "../../../src/components/Typography/Body";
import packageJSON from "../../../package.json";

const Intro = () => {
  return (
    <div
      className="sb-intro--container"
      style={{
        backgroundImage: `linear-gradient(135deg,rgba(13, 13, 13, 100%),rgba(13, 13, 13, 0%)),url(https://user-images.githubusercontent.com/8998518/141280567-d9442db3-fbff-4294-80c0-fca94d2a9f20.png)`
      }}
    >
      <div className="sb-intro">
        <Logo type="logomark" size="xsmall" color="white" />
        <Headline type="h1" className="sb-intro--headline">
          Design System
        </Headline>
        <Body type="body-02" className="sb-intro--subline">
          v{packageJSON.version} React Storybook
        </Body>
      </div>
    </div>
  );
};

export default Intro;
