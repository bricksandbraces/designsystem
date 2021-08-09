import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { IconArrowNarrowRight } from "@tabler/icons";
import React from "react";
import Link from "./Link";

export default { title: "Components/Link", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "405px" }}>
        <Link
          href="https://google.de"
          target="_blank"
          inline={boolean("Inline", false)}
        >
          {text("Link label", "Link text")}
          <IconArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
