import { action, actions } from "@storybook/addon-actions";
import React, { ChangeEvent, useState } from "react";
import { Body } from "../Typography/Typography";
import { Toggle } from "./Toggle";
import { ToggleSkeleton } from "./ToggleSkeleton";

export default {
  title: "Input/Toggle",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    label: "Toggle label",
    disabled: false,
    readOnly: false
  }
};

const toggleActions = actions("onBlur", "onFocus", "onChange", "onClick");

export const Small = {
  render: (args: any) => {
    return (
      <>
        <Toggle
          {...args}
          size="small"
          id="checkbox"
          value="c1"
          {...toggleActions}
        />
        <Toggle
          {...args}
          size="small"
          id="checkbox-2"
          defaultChecked
          value="c2"
          {...toggleActions}
        />
      </>
    );
  }
};

export const Default = {
  render: (args: any) => {
    return (
      <>
        <Toggle {...args} id="checkbox" value="c1" {...toggleActions} />
        <Toggle
          {...args}
          id="checkbox-2"
          defaultChecked
          value="c2"
          {...toggleActions}
        />
      </>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <Toggle {...args} id="checkbox" value="c1" {...toggleActions} />
        <Toggle
          {...args}
          id="checkbox-2"
          checked={checked}
          {...toggleActions}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
            action("onChange")(event);
          }}
          value="c2"
        />
      </>
    );
  }
};

export const WithChildren = (args: any) => {
  return (
    <>
      <Toggle {...args} id="checkbox" value="c1" {...toggleActions} />
      <Toggle {...args} id="checkbox-2" value="c2" {...toggleActions}>
        <Body type="body-02" style={{ marginTop: "8px", display: "block" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Body>
      </Toggle>
    </>
  );
};

export const Skeleton = () => {
  return (
    <div
      style={{
        width: "405px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
      }}
    >
      <ToggleSkeleton />
    </div>
  );
};
