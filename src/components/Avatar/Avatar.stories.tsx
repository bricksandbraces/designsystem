import {
  number,
  object,
  select,
  text,
  withKnobs
} from "@storybook/addon-knobs";
import React from "react";
import Avatar from "./Avatar";
import { Grid, Column } from "../Grid/Grid";
import AvatarGroup from "./AvatarGroup";

export default { title: "Components/Avatar", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

const statusOptions = {
  NoStatus: "",
  Active: "active",
  inactive: "inactive"
};

const defaultStatus = "";

export const Single = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            status={
              select("Status Options", statusOptions, defaultStatus) as any
            }
            id={text("Id", "1")}
            name={text("Name", "Erika Musterfrau")}
            size={select("Size", sizeOptions, defaultSize) as any}
          />
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
          <AvatarGroup
            size={select("Size", sizeOptions, defaultSize) as any}
            userCount={number("userCount", 4)}
            avatarItems={object("Avatars", [
              {
                id: "1",
                name: "Dominic Müller",
                imgUrl: "https://randomuser.me/api/portraits/men/74.jpg"
              },
              {
                id: "2",
                name: "Tom Mustermann"
              },
              {
                id: "3",
                name: "Jana Slavic",
                imgUrl: "https://randomuser.me/api/portraits/women/88.jpg"
              },
              {
                id: "4",
                name: "Maria Hulahoop",
                imgUrl: "https://randomuser.me/api/portraits/women/23.jpg"
              }
            ])}
          />
        </Column>
      </Grid>
    </div>
  );
};
