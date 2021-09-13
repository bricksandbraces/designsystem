import {
  number,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import { IconUser } from "@tabler/icons";
import Avatar from "./Avatar";
import { Grid, Column } from "../Grid/Grid";
import AvatarGroup from "./AvatarGroup";
import AvatarList from "./AvatarList";
import AvatarWithTooltip from "./AvatarWithTooltip";

export default { title: "Components/Avatar", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Default = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("Name", "Erika Musterfrau")}
            size={select("Size", sizeOptions, defaultSize) as any}
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
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("Name", "Erika Musterfrau")}
            size={select("Size", sizeOptions, defaultSize) as any}
          >
            E
          </Avatar>
        </Column>
      </Grid>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            name={text("Name", "Erika Musterfrau")}
            size={select("Size", sizeOptions, defaultSize) as any}
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
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup size={select("Size", sizeOptions, defaultSize) as any}>
            <Avatar
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("Name", "Erika Musterfrau")}
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
          </AvatarGroup>
        </Column>
      </Grid>
    </div>
  );
};

export const GroupWithTrigger = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup
            withListTrigger
            size={select("Size", sizeOptions, defaultSize) as any}
            userCount={4}
          >
            <Avatar
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
            >
              <IconUser />
            </Avatar>
            <Avatar
              name={text("Name", "Erika Musterfrau")}
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
          </AvatarGroup>
        </Column>
      </Grid>
    </div>
  );
};

export const GroupWithTooltip = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <AvatarGroup
            withListTrigger
            size={select("Size", sizeOptions, defaultSize) as any}
            userCount={4}
          >
            <AvatarWithTooltip
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
            >
              <IconUser />
            </AvatarWithTooltip>
            <AvatarWithTooltip
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/88.jpg"
            >
              <IconUser />
            </AvatarWithTooltip>
            <AvatarWithTooltip
              name={text("Name", "Erika Musterfrau")}
              imgUrl="https://randomuser.me/api/portraits/women/48.jpg"
            >
              <IconUser />
            </AvatarWithTooltip>
          </AvatarGroup>
        </Column>
      </Grid>
    </div>
  );
};

export const GroupList = () => {
  return (
    <div style={{ margin: "16px" }}>
      <AvatarList
        avatarItems={object("Avatars", [
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
