import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { IconDots, IconFolder } from "@tabler/icons-react";
import React from "react";
import { OverflowMenu } from "../OverflowMenu/OverflowMenu";
import { OverflowMenuItem } from "../OverflowMenu/OverflowMenuItem";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbSkeleton } from "./BreadcrumbSkeleton";

export default { title: "Navigation/Breadcrumb", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Profile
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Bank Details
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Change IBAN
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithOverflowMenu = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          overflowMenu={
            <OverflowMenu icon={<IconDots />}>
              <OverflowMenuItem onClick={action("onClick")}>
                Private Account
              </OverflowMenuItem>
              <OverflowMenuItem onClick={action("onClick")}>
                Financial Details
              </OverflowMenuItem>
            </OverflowMenu>
          }
        ></BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Bank Details
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Change IBAN
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithCurrentItem = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          {" "}
          Profile
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }}>
          Bank Details
        </BreadcrumbItem>
        <BreadcrumbItem linkProps={{ onClick: action("onClick") }} currentItem>
          Change IBAN
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem
          linkProps={{ onClick: action("onClick") }}
          icon={<IconFolder />}
        >
          Home
        </BreadcrumbItem>
        <BreadcrumbItem
          linkProps={{ onClick: action("onClick") }}
          icon={<IconFolder />}
        >
          Profile
        </BreadcrumbItem>
        <BreadcrumbItem
          linkProps={{ onClick: action("onClick") }}
          icon={<IconFolder />}
        >
          Bank Details
        </BreadcrumbItem>
        <BreadcrumbItem
          linkProps={{ onClick: action("onClick") }}
          icon={<IconFolder />}
          currentItem
        >
          Change IBAN
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "8px" }}>
      <BreadcrumbSkeleton />
    </div>
  );
};
