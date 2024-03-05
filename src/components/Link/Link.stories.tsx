import { action } from "@storybook/addon-actions";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import { Body } from "../Typography/Typography";
import { Link } from "./Link";

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export default {
  title: "Navigation/Link",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: sizeOptions
      }
    }
  },
  args: { size: defaultSize }
};

export const Default = {
  render: (args: any) => {
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Link
            {...args}
            href="https://google.de"
            target="_blank"
            icon={<IconArrowNarrowRight />}
            onClick={action("onClick")}
          >
            Stet clita kasd
          </Link>
        </div>
      </div>
    );
  }
};

export const AsButton = {
  render: (args: any) => {
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Link
            {...args}
            icon={<IconArrowNarrowRight />}
            onClick={action("onClick")}
          >
            Stet clita kasd
          </Link>
        </div>
      </div>
    );
  }
};

export const Inline = {
  render: (args: any) => {
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px", color: "white" }}>
          <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.{" "}
            <Link
              {...args}
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
  }
};
