import { action, actions } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import { Body } from "../Typography/Typography";
import { Toggle } from "./Toggle";
import { ToggleSkeleton } from "./ToggleSkeleton";

export default { title: "Components/Toggle", decorators: [withKnobs] };

const toggleActions = actions("onBlur", "onFocus", "onChange", "onClick");

export const Small = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Toggle
          size="small"
          label={text("label", "Toggle label")}
          id="checkbox"
          value="c1"
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          {...actions}
        />
        <Toggle
          size="small"
          label={text("label", "Toggle label")}
          id="checkbox-2"
          defaultChecked
          value="c2"
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          {...actions}
        />
      </div>
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox"
          value="c1"
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          {...actions}
        />
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox-2"
          defaultChecked
          value="c2"
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          {...actions}
        />
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox"
          value="c1"
          {...toggleActions}
        />
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox-2"
          checked={checked}
          {...toggleActions}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
            action("onChange")(event);
          }}
          value="c2"
        />
      </div>
    </div>
  );
};

export const WithChildren = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox"
          value="c1"
          {...toggleActions}
        />
        <Toggle
          label={text("label", "Toggle label")}
          id="checkbox-2"
          value="c2"
          {...toggleActions}
        >
          <Body type="body-02" style={{ marginTop: "8px", display: "block" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Body>
        </Toggle>
      </div>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
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
    </div>
  );
};
