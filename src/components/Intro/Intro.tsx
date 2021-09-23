import React from "react";
import Logo from "../Logo/Logo";
import Typography from "../Typography/Typography";

const Intro = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "linear-gradient(135deg, rgba(13,13,13,1), rgba(13,13,13,0)), url(https://isd-image-bucket.s3.au-syd.cloud-object-storage.appdomain.cloud/bbds.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div style={{ padding: "32px" }}>
        <Logo kind="logomark" size="xsmall" variant="white" />
        <Typography
          type="h1"
          token="heading-04"
          style={{ marginTop: "32px", color: "white" }}
        >
          Design System
        </Typography>
        <Typography
          type="h1"
          token="body-small"
          style={{ marginTop: "16px", color: "white" }}
        >
          v.0.0.1 React Storybook
        </Typography>
      </div>
    </div>
  );
};

export default Intro;
