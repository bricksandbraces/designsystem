import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Body from "../Typography/Body";
import Checkbox from "./Checkbox";
import CheckboxSkeleton from "./CheckboxSkeleton";

export default { title: "Components/A_REFA_Checkbox", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox"
          value="c1"
        />
        <Checkbox
          label={text("label", "Checkbox label")}
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
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox"
          value="c1"
        />
        <Checkbox
          label={text("label", "Checkbox label")}
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
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox"
          value="c1"
        />
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox-2"
          readOnly={boolean("readOnly (Checkbox 2)", false)}
          disabled={boolean("disabled (Checkbox 2)", false)}
          value="c2"
        >
          <Body type="body-02" style={{ marginTop: "8px", display: "block" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </Body>
        </Checkbox>
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
        <CheckboxSkeleton />
        <CheckboxSkeleton />
      </div>
    </div>
  );
};
