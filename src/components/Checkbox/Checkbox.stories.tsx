import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import Body from "../Typography/Body";
import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
import CheckboxSkeleton from "./CheckboxSkeleton";

export default { title: "Components Ready/Checkbox", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox"
          value="c1"
          onChange={action("onChange")}
        />
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox-2"
          defaultChecked
          onChange={action("onChange")}
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
          onChange={action("onChange")}
        />
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox-2"
          checked={checked}
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
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox"
          value="c1"
          onChange={action("onChange")}
        />
        <Checkbox
          label={text("label", "Checkbox label")}
          id="checkbox-2"
          readOnly={boolean("readOnly (Checkbox 2)", false)}
          disabled={boolean("disabled (Checkbox 2)", false)}
          value="c2"
          onChange={action("onChange")}
        >
          <Body
            type="body-02"
            style={{ marginTop: "8px", marginBottom: "0", display: "block" }}
          >
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

export const AsGroupUncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <form>
        <CheckboxGroup
          disabled={boolean("disabled", false)}
          legendLabel={text("legendLabel", "Legend Label")}
          name={text("name", "checkbox-group-demo")}
          defaultValue={["fries"]}
          onChange={action("onChange")}
        >
          <Checkbox
            label={text("label1", "Checkbox label 1")}
            id="checkbox-1"
            value="fries"
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
          <Checkbox
            label={text("label2", "Checkbox label 2")}
            id="checkbox-2"
            value="wedges"
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
        </CheckboxGroup>
      </form>
    </div>
  );
};

export const AsGroupControlled = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <form>
        <CheckboxGroup
          disabled={boolean("disabled", false)}
          legendLabel={text("legendLabel", "Legend Label")}
          name={text("name", "checkbox-group-demo")}
          value={selectedList}
          onChange={(newValue, event) => {
            setSelectedList(newValue);
            action("onChange")(event);
          }}
        >
          <Checkbox
            label={text("label1", "Checkbox label 1")}
            id="checkbox-1"
            value="fries"
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
          <Checkbox
            label={text("label2", "Checkbox label 2")}
            id="checkbox-2"
            value="wedges"
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
        </CheckboxGroup>
      </form>
    </div>
  );
};

export const Indeterminate = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const toggleChecked = (value: string) => {
    if (checked.includes(value)) {
      setChecked(checked.filter((f) => f !== value));
    } else {
      setChecked([...checked, value]);
    }
  };

  const allChecked = checked.length === 2;
  const noneChecked = checked.length === 0;

  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Checkbox
          label={text("label", "Parent checkbox")}
          id="checkbox-1"
          value="c"
          indeterminate={!allChecked && !noneChecked}
          checked={allChecked}
          onChange={() => {
            if (noneChecked) {
              setChecked(["c1", "c2"]);
            } else {
              setChecked([]);
            }
          }}
        >
          <Checkbox
            label={text("childLabel", "Child checkbox")}
            id="checkbox-2"
            value="c1"
            checked={checked.includes("c1")}
            onChange={() => {
              toggleChecked("c1");
            }}
          />
          <Checkbox
            label={text("childLabel", "Child checkbox")}
            id="checkbox-3"
            value="c2"
            checked={checked.includes("c2")}
            onChange={() => {
              toggleChecked("c2");
            }}
          />
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
