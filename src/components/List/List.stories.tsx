import React from "react";
import { Body } from "../Typography/Typography";
import { ListItem } from "./ListItem";
import { OrderedList } from "./OrderedList";
import { UnorderedList } from "./UnorderedList";

export default {
  title: "Layout/List",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
        <Story />
      </div>
    )
  ]
};

export const Ordered = {
  render: (args: any) => {
    return (
      <>
        <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
          Ordered List
        </Body>
        <OrderedList {...args}>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
        </OrderedList>
      </>
    );
  }
};

export const OrderedNested = {
  render: (args: any) => {
    return (
      <>
        <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
          Ordered List Nested
        </Body>
        <OrderedList {...args}>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <OrderedList nested>
            <ListItem>Level 2 Item</ListItem>
            <OrderedList nested>
              <ListItem>Level 3 Item</ListItem>
              <ListItem>Level 3 Item</ListItem>
            </OrderedList>
            <ListItem>Level 2 Item</ListItem>
          </OrderedList>
          <ListItem>Level 1 Item</ListItem>
        </OrderedList>
      </>
    );
  }
};

export const Unordered = {
  render: (args: any) => {
    return (
      <>
        <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
          Unordered List
        </Body>
        <UnorderedList {...args}>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
        </UnorderedList>
      </>
    );
  }
};

export const UnorderedNested = {
  render: (args: any) => {
    return (
      <>
        <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
          Unordered List Nested
        </Body>
        <UnorderedList {...args}>
          <ListItem>Level 1 Item</ListItem>
          <ListItem>Level 1 Item</ListItem>
          <UnorderedList nested>
            <ListItem>Level 2 Item</ListItem>
            <UnorderedList nested>
              <ListItem>Level 3 Item</ListItem>
              <ListItem>Level 3 Item</ListItem>
            </UnorderedList>
            <ListItem>Level 2 Item</ListItem>
          </UnorderedList>
          <ListItem>Level 1 Item</ListItem>
        </UnorderedList>
      </>
    );
  }
};
