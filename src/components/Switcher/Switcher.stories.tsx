import { action } from "@storybook/addon-actions";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";
import React, { useEffect, useState } from "react";
import { Column, Grid } from "../Grid/Grid";
import { Body } from "../Typography/Typography";
import { Switcher } from "./Switcher";
import { SwitcherItem } from "./SwitcherItem";
import { SwitcherSkeleton } from "./SwitcherSkeleton";

export default { title: "Layout/Switcher", decorators: [withKnobs] };

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <Switcher
            light={boolean("light", false)}
            defaultIndex={1}
            size={select("size", sizeOptions, defaultSize) as any}
            onChange={action("onChange")}
          >
            <SwitcherItem title="List view">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">List view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="Tile view">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">Tile view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="No view 1">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">No view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="No view 2">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">No view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="No view 3">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">No view</Body>
              </div>
            </SwitcherItem>
          </Switcher>
        </Column>
      </Grid>
    </div>
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
        padding: "32px"
      }}
    >
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <Switcher
            light={boolean("light", false)}
            index={selectedIndex}
            onChange={(newIndex) => {
              setSelectedIndex(newIndex);
              action("onChange")(newIndex);
            }}
            size={select("size", sizeOptions, defaultSize) as any}
          >
            <SwitcherItem title="List view">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">List view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="Tile view">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">Tile view</Body>
              </div>
            </SwitcherItem>
            <SwitcherItem title="No view">
              <div style={{ padding: "24px 0" }}>
                <Body type="body-02">No view</Body>
              </div>
            </SwitcherItem>
          </Switcher>
        </Column>
      </Grid>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div
      style={{
        padding: "32px"
      }}
    >
      <Grid narrow>
        <Column xlg={16} lg={16} md={8} sm={4}>
          <SwitcherSkeleton />
        </Column>
      </Grid>
    </div>
  );
};
