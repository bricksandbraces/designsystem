import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Body from "../Typography/Body";
import RadioButton from "./RadioButton";
import RadioButtonGroup from "./RadioButtonGroup";
import RadioButtonSkeleton from "./RadioButtonSkeleton";

export default {
  title: "Components/A_REFA_RadioButton",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup name="1" legendLabel="RadioButtons">
            <RadioButton
              label={text("label", "RadioButton label")}
              id="checkbox"
              value="value-1"
            />
            <RadioButton
              label={text("label", "RadioButton label")}
              id="checkbox-2"
              value="value-2"
            />
          </RadioButtonGroup>
        </form>
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <fieldset>
            <RadioButton
              label={text("label", "RadioButton label")}
              value="value-1"
              id="checkbox"
              name="1"
            />
            <RadioButton
              label={text("label", "RadioButton label")}
              value="value-2"
              id="checkbox-2"
              name="1"
              checked={checked}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setChecked(event.target.checked);
              }}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export const WithChildren = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <fieldset>
            <RadioButton
              label={text("label", "RadioButton label")}
              value="value-1"
              id="checkbox"
              name="1"
            />
            <RadioButton
              label={text("label", "RadioButton label")}
              value="value-2"
              id="checkbox-2"
              readOnly={boolean("readOnly (Radio 2)", false)}
              disabled={boolean("disabled (Radio 2)", false)}
              name="1"
            >
              <Body
                type="body-02"
                style={{ marginTop: "8px", display: "block" }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </Body>
            </RadioButton>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export const AsGroupUncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            defaultValue="coffee2"
          >
            <RadioButton id="c1" value="coffee1" label="Coffee" />
            <RadioButton id="c2" value="coffee2" label="Espresso" />
          </RadioButtonGroup>
        </form>
      </div>
    </div>
  );
};

export const AsGroupControlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            value={selectedValue}
            onChange={(newValue) => {
              setSelectedValue(newValue);
            }}
          >
            <RadioButton id="c3" value="coffee1" label="Coffee" />
            <RadioButton id="c42" value="coffee2" label="Espresso" />
          </RadioButtonGroup>
        </form>
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
        <RadioButtonSkeleton />
        <RadioButtonSkeleton />
      </div>
    </div>
  );
};
