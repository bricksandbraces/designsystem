import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Headline from "./Headline";
import Body from "./Body";

export default { title: "Components/Typography", decorators: [withKnobs] };

const type = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6"
};

const defaultType = "h1";

export const Playground = () => {
  return (
    <div style={{ maxWidth: "405px", color: "white", margin: "32px" }}>
      <Headline
        style={{ color: "white" }}
        type={select("Type", type, defaultType) as any}
      >
        {text("Text", "Dogs bark louder at night.")}
      </Headline>
      <Body type="b1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Body>
    </div>
  );
};
