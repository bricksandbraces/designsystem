import { action } from "@storybook/addon-actions";
import { IconDots, IconFolder } from "@tabler/icons-react";
import React from "react";
import { OverflowMenu } from "../OverflowMenu/OverflowMenu";
import { OverflowMenuItem } from "../OverflowMenu/OverflowMenuItem";
import { Breadcrumb } from "./Breadcrumb";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbSkeleton } from "./BreadcrumbSkeleton";

export default {
  component: Breadcrumb,
  title: "Navigation/Breadcrumb",
  decorators: [
    (Story: any) => (
      <div style={{ padding: "32px", display: "flex", gap: "16px" }}>
        <Story />
      </div>
    )
  ]
};

export const Default = {
  render: (args: any) => {
    return (
      <Breadcrumb aria-label="Breadcrumb nav" {...args}>
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
    );
  }
};

export const WithOverflowMenu = {
  render: (args: any) => {
    return (
      <Breadcrumb aria-label="Breadcrumb nav" {...args}>
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
    );
  }
};

export const WithCurrentItem = {
  render: (args: any) => {
    return (
      <Breadcrumb aria-label="Breadcrumb nav" {...args}>
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
    );
  }
};

export const WithIcons = {
  render: (args: any) => {
    return (
      <Breadcrumb aria-label="Breadcrumb nav" {...args}>
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
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return <BreadcrumbSkeleton {...args} />;
  }
};
