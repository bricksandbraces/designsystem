import {
  number,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import { IconAccessible, IconDotsVertical, IconUser } from "@tabler/icons";
import Avatar from "./Avatar";
import { Grid, Column } from "../Grid/Grid";
import AvatarGroup from "./AvatarGroup";
import AvatarList from "./AvatarList";
import IconOnlyButton from "../Button/IconOnlyButton";
import Button from "../Button/Button";
import Link from "../Link/Link";

export default { title: "Components/Avatar", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("name", "Erika Musterfrau")}
            size={select("size", sizeOptions, defaultSize) as any}
            imgUrl={text(
              "imgUrl",
              "https://randomuser.me/api/portraits/men/74.jpg"
            )}
          />
        </Column>
      </Grid>
    </div>
  );
};

export const WithLetter = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("name", "Erika Musterfrau")}
            size={select("size", sizeOptions, defaultSize) as any}
          />
        </Column>
      </Grid>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("name", "Erika Musterfrau")}
            size={select("size", sizeOptions, defaultSize) as any}
          >
            <IconUser />
          </Avatar>
        </Column>
      </Grid>
    </div>
  );
};

export const Group = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup size={select("size", sizeOptions, defaultSize) as any}>
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
        </Column>
      </Grid>
    </div>
  );
};

export const GroupWithTrigger = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup
            itemsToDisplay={number("Items to display", 2)}
            handleMoreClick={() => {}}
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
        </Column>
      </Grid>
    </div>
  );
};

export const GroupWithTooltip = () => {
  const name = "Erika Musterfrau";
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup
            handleMoreClick={() => {}}
            size={select("size", sizeOptions, defaultSize) as any}
          >
            <Avatar
              name={name}
              tooltipLabel={name}
              imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("name", "Erika Musterfrau")}
              tooltipLabel={name}
              imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("name", "Erika Musterfrau")}
              tooltipLabel={name}
              imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
            >
              <IconUser />
            </Avatar>
          </AvatarGroup>
        </Column>
      </Grid>
    </div>
  );
};

export const GroupWithAddButton = () => {
  return (
    <div style={{ margin: "32px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup
            itemsToDisplay={3}
            handleMoreClick={() => {}}
            handleAddClick={() => {}}
            withAddButton
            size={select("size", sizeOptions, defaultSize) as any}
          >
            <Avatar
              name={text("name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
            >
              <IconUser />
            </Avatar>
          </AvatarGroup>
        </Column>
      </Grid>
    </div>
  );
};

export const List = () => {
  return (
    <div style={{ margin: "16px" }}>
      <AvatarList
        avatarItems={object("avatars", [
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
            imgUrl: "https://randomuser.me/api/portraits/women/88.jpg",
            additionalInformation: "21. September 2021"
          },
          {
            id: "4",
            name: "Maria Hulahoop",
            imgUrl: "https://randomuser.me/api/portraits/women/23.jpg",
            additionalInformation: "Today, 18:55"
          }
        ])}
      />
    </div>
  );
};

export const ListWithActions = () => {
  return (
    <div style={{ margin: "16px" }}>
      <AvatarList
        avatarItems={object("avatars", [
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
            imgUrl: "https://randomuser.me/api/portraits/women/88.jpg",
            additionalInformation: "21. September 2021"
          },
          {
            id: "4",
            name: "Maria Hulahoop",
            imgUrl: "https://randomuser.me/api/portraits/women/23.jpg",
            additionalInformation: "Today, 18:55"
          }
        ])}
        avatarActions={
          <>
            <IconOnlyButton
              size="small"
              kind="ghost"
              icon={<IconAccessible />}
            />
            <IconOnlyButton
              size="small"
              kind="ghost"
              icon={<IconDotsVertical />}
            />
          </>
        }
      />
    </div>
  );
};

export const ListWithChildren = () => {
  return (
    <div style={{ margin: "16px" }}>
      <AvatarList
        avatarItems={object("avatars", [
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
            imgUrl: "https://randomuser.me/api/portraits/women/88.jpg",
            additionalInformation: "21. September 2021"
          },
          {
            id: "4",
            name: "Maria Hulahoop",
            imgUrl: "https://randomuser.me/api/portraits/women/23.jpg",
            additionalInformation: "Today, 18:55"
          }
        ])}
      >
        <Button size="small">Sharing Settings</Button>
        <div style={{ marginLeft: "16px", transform: "translateY(-1px)" }}>
          <Link href="#">Link Settings</Link>
        </div>
      </AvatarList>
    </div>
  );
};
