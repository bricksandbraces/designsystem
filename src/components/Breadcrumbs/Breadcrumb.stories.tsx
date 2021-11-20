import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbSkeleton from "./BreadcrumbSkeleton";
import { IconFolder, IconHome } from "@tabler/icons";
import OverflowMenu from "../OverflowMenu/OverflowMenu";
import OverflowMenuItem from "../OverflowMenu/OverflowMenuItem";

export default { title: "Components/Breadcrumb", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Profile</BreadcrumbItem>
        <BreadcrumbItem>Bank Details</BreadcrumbItem>
        <BreadcrumbItem>Change IBAN</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithOverflowMenu = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>
          <OverflowMenu>
            <OverflowMenuItem>Private Account</OverflowMenuItem>
            <OverflowMenuItem>Financial Details</OverflowMenuItem>
          </OverflowMenu>
        </BreadcrumbItem>
        <BreadcrumbItem>Bank Details</BreadcrumbItem>
        <BreadcrumbItem>Change IBAN</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithCurrentItem = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Profile</BreadcrumbItem>
        <BreadcrumbItem>Bank Details</BreadcrumbItem>
        <BreadcrumbItem currentItem>Change IBAN</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export const WithIcons = () => {
  return (
    <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
      <Breadcrumb aria-label="Breadcrumb nav">
        <BreadcrumbItem icon={<IconFolder />}>Home</BreadcrumbItem>
        <BreadcrumbItem icon={<IconFolder />}>Profile</BreadcrumbItem>
        <BreadcrumbItem icon={<IconFolder />}>Bank Details</BreadcrumbItem>
        <BreadcrumbItem icon={<IconFolder />} currentItem>
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
