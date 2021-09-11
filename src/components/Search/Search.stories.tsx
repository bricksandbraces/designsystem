import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React, { useState } from "react";
import Search from "./Search";
import SearchInput from "./SearchInput";

export default { title: "Components/Search", decorators: [withKnobs] };

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
      <SearchInput id="search-1" label="Search" withSubmit={false} />
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
        showResults={boolean("Show Results", false)}
        searchRecentItems={object("Recent Items", [
          { href: "#", label: "User profile" },
          { href: "#", label: "Settings" },
          { href: "#", label: "FAQ" }
        ])}
        searchResultItems={object("Result Items", [
          { href: "#", label: "User profile with google" },
          { href: "#", label: "Settings in bricks & braces" },
          { href: "#", label: "FAQ 124" }
        ])}
        searchBadgeItems={object("Badge Items", [
          { href: "#", label: "User profile with google" },
          { href: "#", label: "Settings in bricks & braces" },
          { href: "#", label: "FAQ 124" }
        ])}
        clearLabel={text("clearLabel", "Clear results")}
        searchLabel={text("searchLabel", "Go!")}
        defaultValue={text("defaultValue", "Searchkitty")}
        placeholder={text("placeholder", "Search")}
        label={text("Label", "Search")}
        size={select("Size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
