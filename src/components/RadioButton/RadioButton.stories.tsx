import { action } from "@storybook/addon-actions";
import React, { ChangeEvent, useState } from "react";
import { Body } from "../Typography/Typography";
import { RadioButton } from "./RadioButton";
import { RadioButtonGroup } from "./RadioButtonGroup";
import { RadioButtonSkeleton } from "./RadioButtonSkeleton";

export default {
  title: "Input/RadioButton",
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
    label1: "Cappuccino",
    label2: "Espresso"
  }
};

export const Default = {
  render: (args: any) => {
    return (
      <form>
        <fieldset>
          <RadioButton
            label={args.label1}
            id="checkbox"
            value="value-1"
            name="1"
            onChange={action("onChange")}
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
          <RadioButton
            label={args.label2}
            id="checkbox-2"
            value="value-2"
            name="1"
            onChange={action("onChange")}
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
        </fieldset>
      </form>
    );
  }
};

export const Controlled = (args: any) => {
  const [selectedValue, setSelectedValue] = useState<string | null>("value-1");
  return (
    <form>
      <fieldset>
        <RadioButton
          label={args.label1}
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
          label={args.label2}
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
  );
};

export const WithChildren = {
  args: {
    readOnly2: false,
    disabled2: false
  },
  render: (args: any) => {
    return (
      <form>
        <fieldset>
          <RadioButton
            label={args.label1}
            value="value-1"
            id="checkbox"
            name="1"
            onChange={action("onChange")}
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          />
          <RadioButton
            label={args.label2}
            value="value-2"
            id="checkbox-2"
            readOnly={args.readOnly2}
            disabled={args.disabled2}
            name="1"
            onChange={action("onChange")}
            onBlur={action("onBlur")}
            onFocus={action("onFocus")}
          >
            <Body type="body-02" style={{ marginTop: "8px", display: "block" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </Body>
          </RadioButton>
        </fieldset>
      </form>
    );
  }
};

export const AsHorizontalGroupUncontrolled = {
  args: {
    disabled: false,
    legendLabel: "Legend Label",
    name: "radio-grop-demo"
  },
  render: (args: any) => {
    return (
      <form>
        <RadioButtonGroup
          orientation="horizontal"
          disabled={args.disabled}
          legendLabel={args.legendLabel}
          name={args.name}
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
    );
  }
};

export const AsHorizontalGroupControlled = {
  args: {
    disabled: false,
    legendLabel: "Legend Label",
    name: "radio-grop-demo"
  },
  render: (args: any) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return (
      <form>
        <RadioButtonGroup
          orientation="horizontal"
          disabled={args.disabled}
          legendLabel={args.legendLabel}
          name={args.name}
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
    );
  }
};

export const AsVerticalGroupControlled = {
  args: {
    disabled: false,
    legendLabel: "Legend Label",
    name: "radio-grop-demo"
  },
  render: (args: any) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return (
      <form>
        <RadioButtonGroup
          orientation="vertical"
          disabled={args.disabled}
          legendLabel={args.legendLabel}
          name={args.name}
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
    );
  }
};

export const Skeleton = {
  render: () => {
    return (
      <>
        <RadioButtonSkeleton />
        <RadioButtonSkeleton />
      </>
    );
  }
};
