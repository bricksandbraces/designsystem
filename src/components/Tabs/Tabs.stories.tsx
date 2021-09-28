import { withKnobs } from "@storybook/addon-knobs";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Tab from "./Tab";
import Tabs from "./Tabs";
import ResponsiveTabs from "./ResponsiveTabs";
import { Grid, Column } from "../Grid/Grid";
import Headline from "../Typography/Headline";

export default { title: "Components/Tabs", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <Grid narrow>
      <Column xlg={16} lg={16} md={8} sm={4}>
        <Tabs defaultIndex={1}>
          <Tab title="Web &amp; Mobile Design">
            <Headline type="h3">Mobile Design is the new standard</Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
          </Tab>
          <Tab title="Innovation Sprints">
            <Headline type="h3">
              Innovation sprints boost your business
            </Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
            <Button>Hello Button</Button>
          </Tab>
          <Tab title="Experience Design">
            <Headline type="h3">Experience Design matters</Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
          </Tab>
        </Tabs>
      </Column>
    </Grid>
  );
};

export const Controlled = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex(selectedIndex + 1 > 2 ? 0 : selectedIndex + 1);
    }, 1500);

    // cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [selectedIndex]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px"
      }}
    >
      <Tabs
        index={selectedIndex}
        onChange={(newIndex) => {
          setSelectedIndex(newIndex);
        }}
      >
        <Tab title="Web &amp; Mobile Design">
          <Headline type="h3">Mobile Design is the new standard</Headline>
          <Headline type="h4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Headline>
        </Tab>
        <Tab title="Innovation Sprints">
          <Headline type="h3">Mobile Design is the new standard</Headline>
          <Headline type="h4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Headline>
          <Button>Hello Button</Button>
        </Tab>
        <Tab title="Experience Design">
          <Headline type="h3">Mobile Design is the new standard</Headline>
          <Headline type="h4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Headline>
        </Tab>
      </Tabs>
    </div>
  );
};

export const Responsive = () => {
  return (
    <Grid narrow>
      <Column xlg={16} lg={16} md={8} sm={4}>
        <ResponsiveTabs defaultIndex={1}>
          <Tab title="Web &amp; Mobile Design">
            <Headline type="h3">Mobile Design is the new standard</Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
          </Tab>
          <Tab title="Innovation Sprints">
            <Headline type="h3">Mobile Design is the new standard</Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
            <Button>Hello Button</Button>
          </Tab>
          <Tab title="Experience Design" disabled>
            <Headline type="h3">Mobile Design is the new standard</Headline>
            <Headline type="h4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Headline>
          </Tab>
        </ResponsiveTabs>
      </Column>
    </Grid>
  );
};
