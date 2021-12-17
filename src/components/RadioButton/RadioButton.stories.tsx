import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Body from "../Typography/Body";
import RadioButton from "./RadioButton";
import RadioButtonGroup from "./RadioButtonGroup";
import RadioButtonSkeleton from "./RadioButtonSkeleton";

export default {
  title: "Components Ready/RadioButton",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <fieldset>
            <RadioButton
              label={text("label1", "Cappuccino")}
              id="checkbox"
              value="value-1"
              name="1"
              onChange={action("onChange")}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              label={text("label2", "Espresso")}
              id="checkbox-2"
              value="value-2"
              name="1"
              onChange={action("onChange")}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("value-1");
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <fieldset>
            <RadioButton
              label={text("label1", "Cappuccino")}
              value="value-1"
              id="checkbox-1"
              name="1"
              checked={selectedValue === "value-1"}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.checked) {
                  setSelectedValue("value-1");
                }
                action("onChange")(event);
              }}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              label={text("label2", "Espresso")}
              value="value-2"
              id="checkbox-2"
              name="1"
              checked={selectedValue === "value-2"}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.checked) {
                  setSelectedValue("value-2");
                }
                action("onChange")(event);
              }}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
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
              label={text("label1", "Espresso")}
              value="value-1"
              id="checkbox"
              name="1"
              onChange={action("onChange")}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              label={text("label2", "Espresso Macchiato")}
              value="value-2"
              id="checkbox-2"
              readOnly={boolean("readOnly (Radio 2)", false)}
              disabled={boolean("disabled (Radio 2)", false)}
              name="1"
              onChange={action("onChange")}
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
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

export const AsHorizontalGroupUncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup
            orientation="horizontal"
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            defaultValue="coffee2"
            onChange={action("onChange")}
          >
            <RadioButton
              id="c1"
              value="coffee1"
              label="Coffee"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              id="c2"
              value="coffee2"
              label="Espresso"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
          </RadioButtonGroup>
        </form>
      </div>
    </div>
  );
};

export const AsHorizontalGroupControlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup
            orientation="horizontal"
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            value={selectedValue}
            onChange={(newValue, event) => {
              setSelectedValue(newValue);
              action("onChange")(newValue, event);
            }}
          >
            <RadioButton
              id="c3"
              value="coffee1"
              label="Coffee"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              id="c42"
              value="coffee2"
              label="Espresso"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
          </RadioButtonGroup>
        </form>
      </div>
    </div>
  );
};

export const AsVerticalGroupControlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <form>
          <RadioButtonGroup
            orientation="vertical"
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            value={selectedValue}
            onChange={(newValue, event) => {
              setSelectedValue(newValue);
              action("onChange")(newValue, event);
            }}
          >
            <RadioButton
              id="c3"
              value="coffee1"
              label="Coffee"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <RadioButton
              id="c42"
              value="coffee2"
              label="Espresso"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
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
