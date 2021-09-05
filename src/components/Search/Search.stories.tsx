import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import Search from "./Search";

export default { title: "Components/Search", decorators: [withKnobs] };

const sizeOptions = {
  Default: "default",
  Small: "small",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Search
        id={text("id", "search-1")}
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
