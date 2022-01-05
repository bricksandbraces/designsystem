import React from "react";
import { Logo } from "../../../src/components/Logo/Logo";
import { Body, Headline } from "../../../src/components/Typography/Typography";
import packageJSON from "../../../package.json";

const Intro = () => {
  return (
    <div
      className="sb-intro--container">
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
