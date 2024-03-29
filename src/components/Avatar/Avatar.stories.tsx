import { action } from "@storybook/addon-actions";
import {
  number,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import { IconAccessible, IconDotsVertical, IconUser } from "@tabler/icons";
import React from "react";
import { Button, IconOnlyButton } from "../..";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarGroupSkeleton } from "./AvatarGroupSkeleton";
import { AvatarList, AvatarListItem } from "./AvatarList";
import { AvatarSkeleton } from "./AvatarSkeleton";

export default { title: "Miscellaneous/Avatar", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Avatar
        name={text("name", "Erika Musterfrau")}
        size={select("size", sizeOptions, defaultSize) as any}
        imgUrl={text(
          "imgUrl",
          "https://randomuser.me/api/portraits/men/74.jpg"
        )}
      />
    </div>
  );
};

export const WithLetter = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Avatar
        name={text("name", "Erika Musterfrau")}
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Avatar
        name={text("name", "Erika Musterfrau")}
        size={select("size", sizeOptions, defaultSize) as any}
      >
        <IconUser />
      </Avatar>
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AvatarGroup
        size={select("size", sizeOptions, defaultSize) as any}
        handleMoreClick={action("handleMoreClick")}
        handleAddClick={action("handleAddClick")}
      >
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name="Erika Musterfrau"
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
        >
          <IconUser />
        </Avatar>
      </AvatarGroup>
    </div>
  );
};

export const GroupWithTrigger = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AvatarGroup
        itemsToDisplay={number("Items to display", 2)}
        handleMoreClick={action("handleMoreClick")}
        handleAddClick={action("handleAddClick")}
        size={select("size", sizeOptions, defaultSize) as any}
      >
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
        >
          <IconUser />
        </Avatar>
        <Avatar
          size={select("size", sizeOptions, defaultSize) as any}
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
        >
          <IconUser />
        </Avatar>
      </AvatarGroup>
    </div>
  );
};

export const GroupWithAddButton = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AvatarGroup
        itemsToDisplay={3}
        handleMoreClick={action("handleMoreClick")}
        handleAddClick={action("handleAddClick")}
        size={select("size", sizeOptions, defaultSize) as any}
      >
        <Avatar
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
          size={select("size", sizeOptions, defaultSize) as any}
        >
          <IconUser />
        </Avatar>
        <Avatar
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
          size={select("size", sizeOptions, defaultSize) as any}
        >
          <IconUser />
        </Avatar>
        <Avatar
          name={text("Name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
          size={select("size", sizeOptions, defaultSize) as any}
        >
          <IconUser />
        </Avatar>
        <Avatar
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
          size={select("size", sizeOptions, defaultSize) as any}
        >
          <IconUser />
        </Avatar>
        <Avatar
          name={text("name", "Erika Musterfrau")}
          imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
          size={select("size", sizeOptions, defaultSize) as any}
        >
          <IconUser />
        </Avatar>
      </AvatarGroup>
    </div>
  );
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

export const List = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AvatarList>
        {object("avatarItems", avatarItems).map((avatar) => {
          return <AvatarListItem key={avatar.id} {...avatar} />;
        })}
      </AvatarList>
    </div>
  );
};

export const ListWithActions = () => {
  return (
    <div style={{ margin: "32px" }}>
      <AvatarList>
        {object("avatarItems", avatarItems).map((avatar) => {
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
};

export const ListWithChildren = () => {
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
        {object("avatarItems", avatarItems).map((avatar) => {
          return <AvatarListItem key={avatar.id} {...avatar} />;
        })}
      </AvatarList>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ margin: "32px", display: "flex", gap: "16px" }}>
      <AvatarSkeleton size={select("size", sizeOptions, defaultSize) as any} />
      <AvatarGroupSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
    </div>
  );
};
