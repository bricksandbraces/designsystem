import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Body } from "../Typography/Typography";
import { ListItem } from "./ListItem";
import { OrderedList } from "./OrderedList";
import { UnorderedList } from "./UnorderedList";

export default { title: "Components Ready/List", decorators: [withKnobs] };

export const Ordered = () => {
  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Body type="body-02">Ordered List</Body>
      <OrderedList>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
      </OrderedList>
    </div>
  );
};

export const OrderedNested = () => {
  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Body type="body-02">Ordered List Nested</Body>
      <OrderedList>
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
    </div>
  );
};

export const Unordered = () => {
  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Body type="body-02">Unordered List</Body>
      <UnorderedList>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
        <ListItem>Level 1 Item</ListItem>
      </UnorderedList>
    </div>
  );
};

export const UnorderedNested = () => {
  return (
    <div style={{ padding: "32px", color: "white" }}>
      <Body type="body-02">Unordered List Nested</Body>
      <UnorderedList>
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
    </div>
  );
};
