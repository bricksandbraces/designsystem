import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { LeadSpace } from "../LeadSpace/LeadSpace";
import { LeadSpaceProduct } from "../LeadSpace/LeadSpaceProduct";
import { Header } from "./Header";
import { ProductHeader } from "./ProductHeader";

export default { title: "Web/Header", decorators: [withKnobs] };

export const Web = () => {
  return (
    <Header
      baseUrl={text("baseUrl", "#")}
      linkItems={object("linkItems", [
        { href: "#", label: "About us" },
        { href: "#", label: "Contact" },
        { href: "#", label: "Blog" }
      ])}
      onOpenChange={action("onOpenChange")}
    />
  );
};

export const Product = () => {
  return (
    <>
      <ProductHeader
        baseUrl={text("baseUrl", "#")}
        linkItems={object("linkItems", [
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" },
          { href: "#", label: "Sign up now", promo: true }
        ])}
        onOpenChange={action("onOpenChange")}
      />
      <LeadSpaceProduct
        ctaItems={object("ctaItems", [
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ])}
        backgroundImage="https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
        title="Creating a better tomorrow."
        videoUrl="assets/video.mp4"
      />
    </>
  );
};
