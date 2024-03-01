import { action } from "@storybook/addon-actions";
import React, { ChangeEvent, useState } from "react";
import { Body } from "../Typography/Typography";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup } from "./CheckboxGroup";
import { CheckboxSkeleton } from "./CheckboxSkeleton";

export default {
  title: "Input/Checkbox",
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
    label: "Checkbox"
  }
};

export const Default = {
  render: (args: any) => {
    return (
      <>
        <Checkbox
          id="checkbox"
          {...args}
          value="c1"
          onChange={action("onChange")}
        />
        <Checkbox
          id="checkbox-2"
          {...args}
          defaultChecked
          onChange={action("onChange")}
          value="c2"
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
        <Checkbox
          {...args}
          id="checkbox"
          value="c1"
          onChange={action("onChange")}
        />
        <Checkbox
          {...args}
          id="checkbox-2"
          checked={checked}
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

export const WithChildren = {
  args: {
    readOnly: false,
    disabled: false
  },
  render: (args: any) => {
    return (
      <>
        <Checkbox
          {...args}
          id="checkbox"
          value="c1"
          onChange={action("onChange")}
        />
        <Checkbox
          {...args}
          id="checkbox-2"
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
      </>
    );
  }
};

export const AsGroupUncontrolled = {
  decorators: [],
  args: {
    disabled: false,
    legendLabel: "Legend Label",
    name: "checkbox-group-demo"
  },
  render: (args: any) => {
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <form>
          <CheckboxGroup
            {...args}
            defaultValue={["fries"]}
            onChange={action("onChange")}
          >
            <Checkbox
              label={"Checkbox label 1"}
              id="checkbox-1"
              value="fries"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <Checkbox
              label={"Checkbox label 2"}
              id="checkbox-2"
              value="wedges"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
          </CheckboxGroup>
        </form>
      </div>
    );
  }
};

export const AsGroupControlled = {
  args: {
    disabled: false,
    legendLabel: "Legend Label",
    name: "checkbox-group-demo"
  },
  decorators: [],
  render: (args: any) => {
    const [selectedList, setSelectedList] = useState<string[]>([]);
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <form>
          <CheckboxGroup
            {...args}
            value={selectedList}
            onChange={(newValue, event) => {
              setSelectedList(newValue);
              action("onChange")(event);
            }}
          >
            <Checkbox
              label={"Checkbox label 1"}
              id="checkbox-1"
              value="fries"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
            <Checkbox
              label={"Checkbox label 2"}
              id="checkbox-2"
              value="wedges"
              onBlur={action("onBlur")}
              onFocus={action("onFocus")}
            />
          </CheckboxGroup>
        </form>
      </div>
    );
  }
};

export const Indeterminate = {
  render: () => {
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
      <>
        <Checkbox
          label={"Parent checkbox"}
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
            label={"Child checkbox"}
            id="checkbox-2"
            value="c1"
            checked={checked.includes("c1")}
            onChange={() => {
              toggleChecked("c1");
            }}
          />
          <Checkbox
            label={"Child checkbox"}
            id="checkbox-3"
            value="c2"
            checked={checked.includes("c2")}
            onChange={() => {
              toggleChecked("c2");
            }}
          />
        </Checkbox>
      </>
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return (
      <>
        <CheckboxSkeleton {...args} />
        <CheckboxSkeleton {...args} />
      </>
    );
  }
};
