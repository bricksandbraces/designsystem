import { object, select, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Search from "./Search";
import SearchInput from "./SearchInput";

export default { title: "Components/A_REFA_Search", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const SearchInputWithSubmit = () => {
  const [submittedValue, handleSubmit] = useState<string | null>(null);
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput
        id="search-1"
        label="Search"
        submitLabel="Go!"
        onSubmit={(valueToSubmit) => handleSubmit(valueToSubmit)}
      />
      Submitted value: {submittedValue}
    </div>
  );
};

export const SearchInputWithoutSubmit = () => {
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput id="search-2" label="Search" withSubmit={false} />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ padding: "32px" }}>
      <SearchInput
        id="search-1"
        label="Search"
        withSubmit={false}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Search
        id={text("id", "search-1") as any}
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
        clearLabel={text("clearLabel", "Clear results")}
        submitLabel={text("submitLabel", "Go!")}
        defaultValue={text("defaultValue", "Searchkitty")}
        placeholder={text("placeholder", "Search")}
        label={text("label", "Search")}
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
