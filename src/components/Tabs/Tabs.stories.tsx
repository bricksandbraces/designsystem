import { boolean, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Button from "../Button/Button";
import Tab from "./Tab";
import Tabs from "./Tabs";

export default { title: "Components/Tabs", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px",
        display: "flex"
      }}
    >
      <Tabs>
        <Tab label="Tab 1" id={1}>
          Hello 1
        </Tab>
        <Tab label="Tab 2" id={2}>
          Hello 2<Button>Hello Button</Button>
        </Tab>
        <Tab label="Tab 3 with longer label" id={3}>
          Hello 3
        </Tab>
      </Tabs>
    </div>
  );
};
