import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import React, { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { Column, Grid } from "../Grid/Grid";
import { Body, Headline } from "../Typography/Typography";
import { ResponsiveTabs } from "./ResponsiveTabs";
import { Tab } from "./Tab";
import { Tabs } from "./Tabs";
import { TabsSkeleton } from "./TabsSkeleton";

export default { title: "Layout/Tabs", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <Tabs defaultIndex={1} asContainer onChange={action("onChange")}>
            <Tab title="Info">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
};

export const WithPortal = () => {
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
            borderWidth={number("BorderWidth", 3) as any}
          >
            <Tab title="Info">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
};

export const Controlled = () => {
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </Tabs>
        </Column>
      </Grid>
    </div>
  );
};

export const ResponsiveUncontrolled = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <ResponsiveTabs defaultIndex={1} onChange={action("onChange")}>
            <Tab title="Info">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </ResponsiveTabs>
        </Column>
      </Grid>
    </div>
  );
};

export const ResponsiveControlled = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <ResponsiveTabs
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
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
            <Tab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </Tab>
            <Tab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </Tab>
          </ResponsiveTabs>
        </Column>
      </Grid>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <TabsSkeleton />
        </Column>
      </Grid>
    </div>
  );
};
