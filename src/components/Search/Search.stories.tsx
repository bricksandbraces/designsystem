import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { Label } from "../Typography/Typography";
import { Search } from "./Search";
import { SearchInput } from "./SearchInput";
import { SearchSkeleton } from "./SearchSkeleton";

export default {
  component: Search,
  title: "Input/Search",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    light: false,
    id: "search-1",
    label: "Search",
    submitLabel: "Go!",
    size: "default"
  }
};

export const InputWithSubmit = {
  render: (args: any) => {
    const [submittedValue, handleSubmit] = useState<string | null>(null);
    return (
      <>
        <SearchInput
          {...args}
          onBlur={action("onBlur")}
          onFocus={action("onFocus")}
          onChange={action("onChange")}
          onClickInput={action("onClickInput")}
          onKeyDown={action("onKeyDown")}
          onSubmit={(valueToSubmit, event) => {
            handleSubmit(valueToSubmit);
            action("onSubmit")(valueToSubmit, event);
          }}
        />
        <Label> Submitted value: {submittedValue}</Label>
      </>
    );
  }
};

export const InputWithoutSubmit = {
  args: {
    withSubmit: false,
    submitLabel: "Go!",
    placeholder: "Search",
    clearLabel: "Clear",
    defaultValue: ""
  },
  render: (args: any) => {
    return (
      <SearchInput
        {...args}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onChange={action("onChange")}
        onClickInput={action("onClickInput")}
        onKeyDown={action("onKeyDown")}
      />
    );
  }
};

export const ControlledInput = {
  args: {
    withSubmit: false,
    submitLabel: "Go!",
    placeholder: "Search",
    clearLabel: "Clear",
    value: ""
  },
  render: (args: any) => {
    const [value, setValue] = useState(args.value);
    return (
      <SearchInput
        {...args}
        value={value}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        onClickInput={action("onClickInput")}
        onKeyDown={action("onKeyDown")}
      />
    );
  }
};

export const FullSearchWithContainer = {
  args: {
    defaultOpen: true,
    recents: [
      { href: "#", label: "User profile" },
      { href: "#", label: "Settings" },
      { href: "#", label: "FAQ" }
    ],
    results: [
      { href: "#", label: "User profile with google" },
      { href: "#", label: "Settings in bricks & braces" },
      { href: "#", label: "FAQ 124" }
    ],
    badges: [
      { label: "User profile with google" },
      { label: "Settings in bricks & braces" }
    ],
    placeholder: "Search",
    clearLabel: "Clear",
    defaultValue: ""
  },
  render: (args: any) => {
    return (
      <Search
        {...args}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onKeyDown={action("onKeyDown")}
        onChange={action("onChange")}
        onClickInput={action("onClick")}
        onItemFocusChange={action("onItemFocusChange")}
        onSubmit={action("onSubmit")}
      />
    );
  }
};

export const Skeleton = {
  render: () => {
    return <SearchSkeleton />;
  }
};
