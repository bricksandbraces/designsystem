import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography/Typography";
import Toggle from "./Toggle";

export default { title: "Components/Toggle", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Toggle
          label={text("Label", "Toggle label")}
          id="checkbox"
          value="c1"
        />
        <Checkbox
          label={text("Label", "Toggle label")}
          id="checkbox 1"
          value="c3"
        />
        <Toggle
          label={text("Label", "Toggle label")}
          id="checkbox-2"
          defaultChecked
          value="c2"
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
          label={text("Label", "Toggle label")}
          id="checkbox"
          value="c1"
        />
        <Toggle
          label={text("Label", "Toggle label")}
          id="checkbox-2"
          checked={checked}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
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
          label={text("Label", "Toggle label")}
          id="checkbox"
          value="c1"
        />
        <Toggle
          label={text("Label", "Toggle label")}
          id="checkbox-2"
          disabled={boolean("Toggle 2 disabled", false)}
          value="c2"
        >
          <Typography
            type="span"
            token="body-small"
            style={{ marginTop: "8px", display: "block" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Typography>
        </Toggle>
      </div>
    </div>
  );
};
