import { action } from "@storybook/addon-actions";
import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Column, Grid } from "../Grid/Grid";
import { Body, Headline } from "../Typography/Typography";
import { ResponsiveTabs } from "./ResponsiveTabs";
import { Tab } from "./Tab";
import { Tabs } from "./Tabs";
import { TabsSkeleton } from "./TabsSkeleton";

export default {
  title: "Layout/Tabs"
};

export const Uncontrolled = {
  render: (args: any) => {
    return (
      <div style={{ padding: "32px" }}>
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <Tabs
              {...args}
              defaultIndex={1}
              asContainer
              onChange={action("onChange")}
            >
              <Tab title="Info">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
              <Tab title="Innovation Sprints">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
                <Button>Hello Button</Button>
              </Tab>
              <Tab title="Experience Design">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
            </Tabs>
          </Column>
        </Grid>
      </div>
    );
  }
};

export const WithPortal = {
  args: {
    borderWidth: 3
  },
  render: (args: any) => {
    const containerRef = useRef(null);

    return (
      <div style={{ padding: "32px" }}>
        <div className="bb--tabs" ref={containerRef} />
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <Tabs
              defaultIndex={1}
              onChange={action("onChange")}
              containerRef={containerRef}
              borderWidth={args.borderWidth}
            >
              <Tab title="Info">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
              <Tab title="Innovation Sprints">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
                <Button>Hello Button</Button>
              </Tab>
              <Tab title="Experience Design">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
            </Tabs>
          </Column>
        </Grid>
      </div>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
      <div
        style={{
          padding: "32px"
        }}
      >
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <Tabs
              {...args}
              index={selectedIndex}
              onChange={(newIndex) => {
                setSelectedIndex(newIndex);
                action("onChange")(newIndex);
              }}
            >
              <Tab title="Info">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
              <Tab title="Innovation Sprints">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
                <Button>Hello Button</Button>
              </Tab>
              <Tab title="Experience Design">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
            </Tabs>
          </Column>
        </Grid>
      </div>
    );
  }
};

export const ResponsiveUncontrolled = {
  render: (args: any) => {
    return (
      <div style={{ padding: "32px" }}>
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <ResponsiveTabs
              {...args}
              defaultIndex={1}
              onChange={action("onChange")}
            >
              <Tab title="Info">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
              <Tab title="Innovation Sprints">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
                <Button>Hello Button</Button>
              </Tab>
              <Tab title="Experience Design">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
            </ResponsiveTabs>
          </Column>
        </Grid>
      </div>
    );
  }
};

export const ResponsiveControlled = {
  render: (args: any) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    return (
      <div style={{ padding: "32px" }}>
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <ResponsiveTabs
              {...args}
              index={selectedIndex}
              onChange={(newIndex) => {
                setSelectedIndex(newIndex);
                action("onChange")(newIndex);
              }}
            >
              <Tab title="Info">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
              <Tab title="Innovation Sprints">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
                <Button>Hello Button</Button>
              </Tab>
              <Tab title="Experience Design">
                <Headline type="h4">Mobile Design is the new standard</Headline>
                <Body type="body-02">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Body>
              </Tab>
            </ResponsiveTabs>
          </Column>
        </Grid>
      </div>
    );
  }
};

export const Skeleton = {
  render: () => {
    return (
      <div style={{ padding: "32px" }}>
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <TabsSkeleton />
          </Column>
        </Grid>
      </div>
    );
  }
};
