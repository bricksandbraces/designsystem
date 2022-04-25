import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Body, Caption, Headline, Label, Marketing, Quote } from "../..";
export default {
  title: "Layout/Typography",
  decorators: [withKnobs]
};

export const Headlines = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Headline type="h1" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 1
      </Headline>
      <Headline type="h2" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 2
      </Headline>
      <Headline type="h3" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 3
      </Headline>
      <Headline type="h4" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 4
      </Headline>
      <Headline type="h5" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 5
      </Headline>
      <Headline type="h6" style={{ color: "var(--color-font-text-01)" }}>
        This is Headline 6
      </Headline>
    </div>
  );
};

export const MarketingHeadlines = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Marketing
        type="marketing-01"
        style={{ color: "var(--color-font-text-01)" }}
      >
        This is a Marketing Heading 1
      </Marketing>
      <Marketing
        type="marketing-02"
        style={{ color: "var(--color-font-text-01)" }}
      >
        This is a Marketing Heading 2
      </Marketing>
    </div>
  );
};

export const QuoteType = () => {
  return (
    <div
      style={{
        color: "white",
        margin: "32px",
        display: "flex",
        flexWrap: "nowrap"
      }}
    >
      <Quote
        type="quote-01"
        name="Hendrik"
        position="Marketing Campaign Lead"
        company="Bricks &amp; Braces of Hamburg"
      >
        This is a quote and can be used to emphasize external views.
      </Quote>
      <Quote
        type="quote-02"
        name="Hendrik"
        position="Marketing Campaign Lead"
        company="Bricks &amp; Braces of Hamburg"
      >
        This is a quote and can be used to emphasize external views.
      </Quote>
    </div>
  );
};

export const BodyType = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Body type="body-01" style={{ color: "var(--color-font-text-01)" }}>
        Hello. I am a body text. I am a B1 body text. Nice to meet you.
      </Body>
      <Body type="body-02" style={{ color: "var(--color-font-text-01)" }}>
        Hello. I am a body text. I am a B2 body text. Nice to meet you.
      </Body>
    </div>
  );
};

export const LabelAndCaption = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Label>Hello. I am a Label.</Label>
      <Caption style={{ color: "var(--color-font-text-01)" }}>
        Hello. I am a Caption.
      </Caption>
    </div>
  );
};
