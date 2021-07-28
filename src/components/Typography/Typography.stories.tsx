import { select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Typography from "./Typography";

export default { title: "Typography", decorators: [withKnobs] };

const type = {
  Text: "text",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6"
};

const defaultType = "text";

const token = {
  footnote: "footnote",
  label: "label",
  "body-small": "body-small",
  body: "body",
  "heading-01": "heading-01",
  "heading-02": "heading-02",
  "heading-03": "heading-03",
  "heading-04": "heading-04",
  "heading-05": "heading-05",
  "heading-06": "heading-06",
  "display-01": "display-01",
  "display-02": "display-02"
};

const defaultToken = "body";

export const Playground = () => {
  return (
    <Typography
      style={{ color: "white" }}
      type={select("Type", type, defaultType) as any}
      token={select("Token", token, defaultToken) as any}
    >
      {text("Text", "Dogs bark louder at night.")}
    </Typography>
  );
};
