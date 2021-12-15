import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Button from "../../Button/Button";
import WebTab from "./WebTab";
import WebTabs from "./WebTabs";
import ResponsiveTabs from "./ResponsiveWebTabs";
import { Grid, Column } from "../../Grid/Grid";
import Headline from "../../Typography/Headline";
import Body from "../../Typography/Body";
import { action } from "@storybook/addon-actions";
import TabsSkeleton from "./WebTabsSkeleton";
import ResponsiveWebTabs from "./ResponsiveWebTabs";

export default { title: "Web/WebTabs", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <WebTabs defaultIndex={1} onChange={action("onChange")}>
            <WebTab title="Web &amp; Mobile Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
            <WebTab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </WebTab>
            <WebTab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
          </WebTabs>
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
          <WebTabs
            index={selectedIndex}
            onChange={(newIndex) => {
              setSelectedIndex(newIndex);
              action("onChange")(newIndex);
            }}
          >
            <WebTab title="Web &amp; Mobile Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
            <WebTab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </WebTab>
            <WebTab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
          </WebTabs>
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
          <ResponsiveWebTabs defaultIndex={1} onChange={action("onChange")}>
            <WebTab title="Web &amp; Mobile Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
            <WebTab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </WebTab>
            <WebTab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
          </ResponsiveWebTabs>
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
          <ResponsiveWebTabs
            index={selectedIndex}
            onChange={(newIndex) => {
              setSelectedIndex(newIndex);
              action("onChange")(newIndex);
            }}
          >
            <WebTab title="Web &amp; Mobile Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
            <WebTab title="Innovation Sprints">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
              <Button>Hello Button</Button>
            </WebTab>
            <WebTab title="Experience Design">
              <Headline type="h4">Mobile Design is the new standard</Headline>
              <Body type="body-02">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </WebTab>
          </ResponsiveWebTabs>
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
