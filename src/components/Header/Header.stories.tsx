import { action } from "@storybook/addon-actions";
import React, { useRef } from "react";
import { Body, Breadcrumb, BreadcrumbItem, Headline, Tab, Tabs } from "../..";
import { Progress } from "../Progress/Progress";
import { ProgressStep } from "../Progress/ProgressStep";
import { Header } from "./Header";

export default {
  component: Header,
  title: "Pattern/Header",
  args: {
    title: "Stammdaten",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: "100vw",
          height: "100vh"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Default = {
  args: {
    borderWidth: 1
  }
};

export const WithProgress = {
  args: { borderWidth: 2 },
  render: (args: any) => {
    return (
      <Header {...args}>
        <Progress>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </Header>
    );
  }
};

export const WithTabs = {
  args: {
    borderWidth: 3
  },
  render: (args: any) => {
    const containerRef = useRef(null);

    return (
      <>
        <Header {...args}>
          <Tabs
            defaultIndex={1}
            containerRef={containerRef}
            className="bb--header-tabs"
            containerClassName="bb--header-tabs__content"
          >
            <Tab title="Info">
              <Headline type="h4">Info</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Innovation Sprints</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Experience Design</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Header>
        <div ref={containerRef} />
      </>
    );
  }
};

export const WithBreadcrumbs = {
  render: (args: any) => {
    return (
      <>
        <Header
          {...args}
          breadcrumbs={
            <>
              <Breadcrumb aria-label="Breadcrumb nav">
                <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
                  Mieterverwaltung
                </BreadcrumbItem>
                <BreadcrumbItem
                  linkProps={{ onClick: action("onClick") }}
                  currentItem
                >
                  Stammdaten
                </BreadcrumbItem>
              </Breadcrumb>
            </>
          }
        />
      </>
    );
  }
};
