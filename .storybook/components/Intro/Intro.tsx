import React from "react";
import Logo from "../../../src/components/Logo/Logo";
import { Body, Headline } from "../../../src/components/Typography/Typography";
import packageJSON from "../../../package.json";

const Intro = () => {
  return (
    <div
      className="sb-intro--container"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(13, 13, 13, 100%),rgba(13, 13, 13, 30%)),url(https://user-images.githubusercontent.com/8998518/141280567-d9442db3-fbff-4294-80c0-fca94d2a9f20.png)`
      }}
    >
      <div className="sb-intro">
        <Headline type="h1" className="sb-intro--headline">
          Design System
        </Headline>
        <Body type="body-02" className="sb-intro--subline">
          v{packageJSON.version} <br />
          React Storybook
        </Body>
        <Logo
          type="logotype"
          size="xsmall"
          className="sb-intro--logo"
          color="white"
        />
      </div>
    </div>
  );
};

export default Intro;
