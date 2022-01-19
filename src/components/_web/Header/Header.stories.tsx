import { action } from "@storybook/addon-actions";
import { object, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
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
        title="Without the human, it’s just work."
        text="Want to cut your turnover in half?* Improve engagement and belonging? Create resilient, more human workplaces that last? You can with Workhuman® solutions by motivating employees to recognize, develop, and celebrate each other all in one place. Be the place that thrives."
      />
    </>
  );
};
