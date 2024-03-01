import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";

export default {
  component: Accordion,
  title: "Miscellaneous/Accordion",
  decorators: [
    (Story: any) => (
      <div style={{ margin: "32px" }}>
        <Story />
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
    light: false,
    size: "default"
  }
} as Meta;

export const Uncontrolled: StoryObj<typeof Accordion> = {
  args: {
    children: [
      <AccordionItem id="c1" title="Title 1" key={1}>
        Content 1
      </AccordionItem>,
      <AccordionItem id="c2" title="Title 2" key={2}>
        Content 2
      </AccordionItem>,
      <AccordionItem id="c3" title="Title 3" key={3}>
        Content 3
      </AccordionItem>
    ]
  }
};

export const Controlled: StoryObj<typeof Accordion> = {
  render: (args: any) => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);
    return (
      <Accordion
        {...args}
        openIndices={openIndices}
        onChange={(i, newOpenState, newOpenIndexList) => {
          setOpenIndices(newOpenIndexList);
        }}
      >
        <AccordionItem id="c1" title="Title 1" key={1}>
          Content 1
        </AccordionItem>
        <AccordionItem id="c2" title="Title 2" key={2}>
          Content 2
        </AccordionItem>
        <AccordionItem id="c3" title="Title 3" key={3}>
          Content 3
        </AccordionItem>
      </Accordion>
    );
  }
};
