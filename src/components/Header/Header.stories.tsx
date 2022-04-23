import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Body, Headline, Tab, Tabs } from "../..";
import { prefix } from "../../settings";
import { Progress } from "../Progress/Progress";
import { ProgressStep } from "../Progress/ProgressStep";
import { Header } from "./Header";

export default {
  title: "Pattern/Header",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Header
        title={text("title", "Stammdaten") as any}
        description={
          text(
            "description",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          ) as any
        }
      />
    </div>
  );
};

export const WithProgress = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Header
        title={text("title", "Stammdaten") as any}
        description={
          text(
            "description",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          ) as any
        }
      >
        <Progress>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </Header>
    </div>
  );
};

export const WithTabs = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Header
        title={text("title", "Stammdaten") as any}
        description={
          text(
            "description",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          ) as any
        }
      >
        <Tabs defaultIndex={1}>
          <Tab title="Info">
            <Headline type="h4">Mobile Design is the new standard</Headline>
            <Body type="body-02">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Body>
          </Tab>
          <Tab title="Innovation Sprints">
            <Headline type="h4">Mobile Design is the new standard 1</Headline>
            <Body type="body-02">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Body>
          </Tab>
          <Tab title="Experience Design">
            <Headline type="h4">Mobile Design is the new standard 2</Headline>
            <Body type="body-02">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Body>
          </Tab>
        </Tabs>
      </Header>
    </div>
  );
};
