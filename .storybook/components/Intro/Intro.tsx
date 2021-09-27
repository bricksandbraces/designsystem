import React from "react";
import Logo from "../../../src/components/Logo/Logo";
import Typography from "../../../src/components/Typography/Typography";

const Intro = () => {
  return (
    <div className="sb-intro--container">
      <div className="sb-intro">
        <Logo kind="logomark" size="xsmall" variant="white" />
        <Typography type="h1" token="heading-04" className="sb-intro--headline">
          Design System
        </Typography>
        <Typography type="h1" token="body-small" className="sb-intro--subline">
          v.0.0.1 React Storybook
        </Typography>
      </div>
    </div>
  );
};

export default Intro;
