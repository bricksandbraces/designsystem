import { action } from "@storybook/addon-actions";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import { IconArrowNarrowRight } from "@tabler/icons";
import React from "react";
import { Body } from "../Typography/Typography";
import { Link } from "./Link";

export default { title: "Components Ready/Link", decorators: [withKnobs] };

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Link
          href="https://google.de"
          target="_blank"
          icon={<IconArrowNarrowRight />}
          size={select("size", sizeOptions, defaultSize) as any}
          onClick={action("onClick")}
        >
          {text("children", "Link text")}
        </Link>
      </div>
    </div>
  );
};

export const AsButton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Link
          icon={<IconArrowNarrowRight />}
          size={select("size", sizeOptions, defaultSize) as any}
          onClick={action("onClick")}
        >
          {text("children", "Link Button text")}
        </Link>
      </div>
    </div>
  );
};

export const Inline = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px", color: "white" }}>
        <Body type="body-02">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.{" "}
          <Link
            href="https://google.de"
            target="_blank"
            inline
            onClick={action("onClick")}
          >
            Stet clita kasd
          </Link>{" "}
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Body>
      </div>
    </div>
  );
};
