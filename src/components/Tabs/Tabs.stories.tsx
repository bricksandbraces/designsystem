import { withKnobs } from "@storybook/addon-knobs";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Tab from "./Tab";
import Tabs from "./Tabs";
import ResponsiveTabs from "./ResponsiveTabs";
import { Grid, Column } from "../Grid/Grid";

export default { title: "Components/Tabs", decorators: [withKnobs] };

export const Uncontrolled = () => {
  return (
    <Grid narrow>
      <Column xlg={16} lg={16} md={8} sm={4}>
        <Tabs defaultIndex={1}>
          <Tab title="Web &amp; Mobile Design">
            <Typography type="text" token="heading-03">
              Mobile Design is the new standard
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Tab>
          <Tab title="Innovation Sprints">
            <Typography type="text" token="heading-03">
              Innovation sprints boost your business
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{
                fontWeight: "200",
                marginTop: "8px",
                width: "80%",
                marginBottom: "16px"
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
            <Button>Hello Button</Button>
          </Tab>
          <Tab title="Experience Design">
            <Typography type="text" token="heading-03">
              Experience design is the base for success
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
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
          <Typography type="text" token="heading-03">
            Mobile Design is the new standard
          </Typography>
          <Typography
            type="text"
            token="heading-02"
            style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
        </Tab>
        <Tab title="Innovation Sprints">
          <Typography type="text" token="heading-03">
            Innovation sprints boost your business
          </Typography>
          <Typography
            type="text"
            token="heading-02"
            style={{
              fontWeight: "200",
              marginTop: "8px",
              width: "80%",
              marginBottom: "16px"
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
          <Button>Hello Button</Button>
        </Tab>
        <Tab title="Experience Design">
          <Typography type="text" token="heading-03">
            Experience design is the base for success
          </Typography>
          <Typography
            type="text"
            token="heading-02"
            style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
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
            <Typography type="text" token="heading-03">
              Mobile Design is the new standard
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Tab>
          <Tab title="Innovation Sprints">
            <Typography type="text" token="heading-03">
              Innovation sprints boost your business
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{
                fontWeight: "200",
                marginTop: "8px",
                width: "80%",
                marginBottom: "16px"
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
            <Button>Hello Button</Button>
          </Tab>
          <Tab title="Experience Design" disabled>
            <Typography type="text" token="heading-03">
              Experience design is the base for success
            </Typography>
            <Typography
              type="text"
              token="heading-02"
              style={{ fontWeight: "200", marginTop: "8px", width: "80%" }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Typography>
          </Tab>
        </ResponsiveTabs>
      </Column>
    </Grid>
  );
};
