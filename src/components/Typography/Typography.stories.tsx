import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Headline from "./Headline";
import Body from "./Body";
import Label from "./Label";
import Caption from "./Caption";
import Marketing from "./Marketing";
import Quote from "./Quote";

export default { title: "Components/Typography", decorators: [withKnobs] };

const quoteType = {
  q1: "q1",
  q2: "q2"
};

const defaultQuoteType = "q1";

export const Headlines = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Headline type="h1">This is Headline 1</Headline>
      <Headline type="h2">This is Headline 2</Headline>
      <Headline type="h3">This is Headline 3</Headline>
      <Headline type="h4">This is Headline 4</Headline>
      <Headline type="h5">This is Headline 5</Headline>
      <Headline type="h6">This is Headline 6</Headline>
    </div>
  );
};

export const MarketingHeadlines = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Marketing type="m1">This is a Marketing Heading 1</Marketing>
      <Marketing type="m2">This is a Marketing Heading 2</Marketing>
    </div>
  );
};

export const QuoteType = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Quote type={select("type", quoteType, defaultQuoteType) as any}>
        This is a Marketing quote that can be used on websites.
      </Quote>
    </div>
  );
};

export const BodyType = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Body type="b1">
        Hello. I am a body text. I am a B1 body text. Nice to meet you.
      </Body>
      <Body type="b2">
        Hello. I am a body text. I am a B2 body text. Nice to meet you.
      </Body>
    </div>
  );
};

export const LabelAndCaption = () => {
  return (
    <div style={{ color: "white", margin: "32px" }}>
      <Label>Hello. I am a Label.</Label>
      <Caption>Hello. I am a Caption.</Caption>
    </div>
  );
};
