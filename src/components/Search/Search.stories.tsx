import { action } from "@storybook/addon-actions";
import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import Label from "../Typography/Label";
import Search from "./Search";
import SearchInput from "./SearchInput";
import SearchSkeleton from "./SearchSkeleton";

export default { title: "Components/A_REFA_Search", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const InputWithSubmit = () => {
  const [submittedValue, handleSubmit] = useState<string | null>(null);
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput
        id="search-1"
        label={text("Label", "Search")}
        submitLabel={text("Submit Label", "Go!")}
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
    </div>
  );
};

export const InputWithoutSubmit = () => {
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput
        id="search-2"
        withSubmit={false}
        label={text("Label", "Search")}
        submitLabel={text("Submit Label", "Go!")}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onChange={action("onChange")}
        onClickInput={action("onClickInput")}
        onKeyDown={action("onKeyDown")}
        placeholder={text("Placeholder", "Search")}
        size={select("Size", sizeOptions, "default") as any}
        clearLabel={text("Clear Label", "Clear")}
        defaultValue={text("Default Value", "")}
      />
    </div>
  );
};

export const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput
        id="search-1"
        label={text("Label", "Search")}
        withSubmit={false}
        value={value}
        submitLabel={text("Submit Label", "Go!")}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onChange={(newValue, event) => {
          setValue(newValue);
          action("onChange")(newValue, event);
        }}
        onClickInput={action("onClickInput")}
        onKeyDown={action("onKeyDown")}
        placeholder={text("Placeholder", "Search")}
        size={select("Size", sizeOptions, "default") as any}
        clearLabel={text("Clear Label", "Clear")}
      />
    </div>
  );
};

export const FullSearchWithContainer = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Search
        id={text("ID", "search-1") as any}
        onBlur={action("onBlur")}
        onFocus={action("onFocus")}
        onKeyDown={action("onKeyDown")}
        onChange={action("onChange")}
        onClickInput={action("onClick")}
        onItemFocusChange={action("onItemFocusChange")}
        onSubmit={action("onSubmit")}
        defaultOpen={boolean("Default Open", false)}
        recents={object("recents", [
          { href: "#", label: "User profile" },
          { href: "#", label: "Settings" },
          { href: "#", label: "FAQ" }
        ])}
        results={object("results", [
          { href: "#", label: "User profile with google" },
          { href: "#", label: "Settings in bricks & braces" },
          { href: "#", label: "FAQ 124" }
        ])}
        badges={object("badges", [
          { label: "User profile with google" },
          { label: "Settings in bricks & braces" },
          { label: "FAQ 124" }
        ])}
        clearLabel={text("Clear Label", "Clear results")}
        submitLabel={text("Submit Label", "Go!")}
        defaultValue={text("Default Value", "Searchkitty")}
        placeholder={text("Placeholder", "Search")}
        label={text("Label", "Search")}
        size={select("Size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ padding: "32px" }}>
      <SearchSkeleton />
    </div>
  );
};
