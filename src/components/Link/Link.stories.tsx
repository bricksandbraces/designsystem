import { action } from "@storybook/addon-actions";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import { Body } from "../Typography/Typography";
import { Link } from "./Link";

export default {
  title: "Navigation/Link",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Story />
        </div>
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "default", "small"]
      }
    }
  },
  args: {
    size: "default",
    href: "https://google.de",
    target: "_blank",
    icon: <IconArrowNarrowRight />,
    onClick: action("onClick"),
    children: "Link text"
  }
};

export const Default = {};

export const AsButton = { href: undefined };

export const Inline = {
  args: { inline: true },
  render: (args: any) => {
    return (
      <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. <Link {...args}>Stet clita kasd</Link> gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.
      </Body>
    );
  }
};
