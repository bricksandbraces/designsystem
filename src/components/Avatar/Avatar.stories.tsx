import { action } from "@storybook/addon-actions";

import { StoryObj } from "@storybook/react";
import {
  IconAccessible,
  IconDotsVertical,
  IconUser
} from "@tabler/icons-react";
import React from "react";
import { Button, IconOnlyButton } from "../..";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarGroupSkeleton } from "./AvatarGroupSkeleton";
import { AvatarList, AvatarListItem } from "./AvatarList";
import { AvatarSkeleton } from "./AvatarSkeleton";

export default {
  component: Avatar,
  title: "Miscellaneous/Avatar",
  decorators: [
    (Story: any) => (
      <div style={{ margin: "32px" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  args: {
    size: "default",
    name: "Erika Musterfrau"
  }
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imgUrl: "https://randomuser.me/api/portraits/men/74.jpg"
  }
};

export const WithLetter: Story = {};

export const WithIcon: Story = {
  render: (args: any) => {
    return (
      <Avatar {...args}>
        <IconUser />
      </Avatar>
    );
  }
};

export const Group: Story = {
  render: (args: any) => {
    return (
      <AvatarGroup
        {...args}
        handleMoreClick={action("handleMoreClick")}
        handleAddClick={action("handleAddClick")}
      >
        <Avatar
          size={args.size}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={args.size}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={args.size}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
        >
          <IconUser />
        </Avatar>
      </AvatarGroup>
    );
  }
};

export const GroupWithTrigger = (args: any) => {
  return (
    <AvatarGroup
      itemsToDisplay={3}
      handleMoreClick={action("handleMoreClick")}
      handleAddClick={action("handleAddClick")}
      size={args.size}
    >
      <Avatar {...args}>
        <IconUser />
      </Avatar>
      <Avatar {...args}>
        <IconUser />
      </Avatar>
      <Avatar {...args}>
        <IconUser />
      </Avatar>
    </AvatarGroup>
  );
};

export const GroupWithAddButton = {
  render: (args: any) => {
    return (
      <div style={{ margin: "32px" }}>
        <AvatarGroup
          itemsToDisplay={3}
          handleMoreClick={action("handleMoreClick")}
          handleAddClick={action("handleAddClick")}
          size={args.size}
        >
          <Avatar {...args}>
            <IconUser />
          </Avatar>
          <Avatar {...args}>
            <IconUser />
          </Avatar>
          <Avatar {...args}>
            <IconUser />
          </Avatar>
          <Avatar {...args}>
            <IconUser />
          </Avatar>
          <Avatar {...args}>
            <IconUser />
          </Avatar>
        </AvatarGroup>
      </div>
    );
  }
};

const avatarItems = [
  {
    id: "1",
    name: "Dominic Müller",
    imgUrl: "https://randomuser.me/api/portraits/men/74.jpg",
    additionalInformation: "22. September 2021"
  },
  {
    id: "2",
    name: "Tom Mustermann",
    additionalInformation: "09. August 2021"
  },
  {
    id: "3",
    name: "Jana Slavic",
    imgUrl: "https://randomuser.me/api/portraits/women/88.jpg"
  },
  {
    id: "4",
    name: "Maria Hulahoop",
    imgUrl: "https://randomuser.me/api/portraits/women/23.jpg",
    additionalInformation: "Today, 18:55"
  }
];

export const List = {
  render: (args: any) => {
    return (
      <div style={{ margin: "32px" }}>
        <AvatarList {...args}>
          {args.avatarItems.map((avatar: any) => {
            return <AvatarListItem key={avatar.id} {...avatar} />;
          })}
        </AvatarList>
      </div>
    );
  }
};

export const ListWithActions = {
  argTypes: {
    avatarItems: {
      control: {
        type: "object"
      }
    },
    args: {
      avatarItems
    },

    render: (args: any) => {
      return (
        <div style={{ margin: "32px" }}>
          <AvatarList>
            {args.avatarItems.map((avatar: any) => {
              return (
                <AvatarListItem
                  key={avatar.id}
                  {...avatar}
                  actions={
                    <>
                      <IconOnlyButton
                        size="small"
                        kind="ghost"
                        onClick={action("onFirstActionClick")}
                        icon={<IconAccessible />}
                      />
                      <IconOnlyButton
                        size="small"
                        kind="ghost"
                        onClick={action("onSeconActionClick")}
                        icon={<IconDotsVertical />}
                      />
                    </>
                  }
                />
              );
            })}
          </AvatarList>
        </div>
      );
    }
  }
};

export const ListWithChildren = {
  argTypes: {
    avatarItems: {
      control: {
        type: "object"
      }
    }
  },
  args: {
    avatarItems
  },
  render: (args: any) => {
    return (
      <div style={{ margin: "32px" }}>
        <AvatarList
          footer={
            <>
              <Button fluid size="default">
                Sharing Settings
              </Button>
              <IconOnlyButton
                icon={<IconDotsVertical />}
                type="button"
                size="default"
                kind="ghost"
              />
            </>
          }
        >
          {args.avatarItems.map((avatar: any) => {
            return <AvatarListItem key={avatar.id} {...avatar} />;
          })}
        </AvatarList>
      </div>
    );
  }
};

export const Skeleton = {
  render: (args: any) => {
    return (
      <div style={{ display: "flex", gap: "16px" }}>
        <AvatarSkeleton {...args} />
        <AvatarGroupSkeleton {...args} />
      </div>
    );
  }
};
