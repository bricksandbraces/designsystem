import { action } from "@storybook/addon-actions";
import React, { useEffect, useState } from "react";
import { Column, Grid } from "../Grid/Grid";
import { Body } from "../Typography/Typography";
import { Switcher } from "./Switcher";
import { SwitcherItem } from "./SwitcherItem";
import { SwitcherSkeleton } from "./SwitcherSkeleton";

export default {
  title: "Layout/Switcher",
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: "32px"
        }}
      >
        <Grid narrow>
          <Column xlg={16} lg={16} md={8} sm={4}>
            <Story />
          </Column>
        </Grid>
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["default", "small", "large"]
      }
    }
  },
  args: {
    light: false
  }
};

export const Uncontrolled = {
  render: (args: any) => {
    return (
      <Switcher {...args} defaultIndex={1} onChange={action("onChange")}>
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
    );
  }
};

export const Controlled = {
  render: (args: any) => {
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
      <Switcher
        {...args}
        index={selectedIndex}
        onChange={(newIndex) => {
          setSelectedIndex(newIndex);
          action("onChange")(newIndex);
        }}
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
    );
  }
};

export const Skeleton = () => {
  return <SwitcherSkeleton />;
};
