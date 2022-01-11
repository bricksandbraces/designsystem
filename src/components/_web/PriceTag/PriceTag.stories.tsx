import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { PriceTag } from "./PriceTag";

export default { title: "Web/PriceTag", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div
      style={{ width: "256px", margin: "32px", display: "flex", gap: "32px" }}
    >
      <PriceTag
        title="Starter"
        time="Month"
        currency="€"
        price="25"
        description="For most businesses that want to optimize web queries"
        features={[
          { label: "Analytics Platform" },
          { label: "Unlimited Mail sending" },
          { label: "SAML SSO Login" },
          { label: "Optimization of campaigns" },
          { label: "24/7 Support" }
        ]}
        buttonLabel="Choose Plan"
      />
      <PriceTag
        promotion
        title="Expert"
        time="Month"
        currency="€"
        price="99"
        description="For most businesses that want to optimize web queries"
        features={[
          { label: "Analytics Platform" },
          { label: "Unlimited Mail sending" },
          { label: "SAML SSO Login" },
          { label: "Optimization of campaigns" },
          { label: "24/7 Support" }
        ]}
        buttonLabel="Choose Plan"
      />
      <PriceTag
        title="Pro"
        time="Month"
        currency="€"
        price="129"
        description="For most businesses that want to optimize web queries"
        features={[
          { label: "Analytics Platform" },
          { label: "Unlimited Mail sending" },
          { label: "SAML SSO Login" },
          { label: "Optimization of campaigns" },
          { label: "24/7 Support" }
        ]}
        buttonLabel="Choose Plan"
      />
    </div>
  );
};
