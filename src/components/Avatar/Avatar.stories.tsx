import { number, object, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Avatar from "./Avatar";
import { Grid, Column } from "../Grid/Grid";

export default { title: "Components/Avatar", decorators: [withKnobs] };

const sizeOptions = {
  Small: "small",
  Default: "default",
  Large: "large"
};

const defaultSize = "default";

export const Uncontrolled = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Avatar
            size={select("Size", sizeOptions, defaultSize) as any}
            userCount={number("userCount", 3)}
            avatarItems={object("Avatars", [
              {
                id: "1",
                name: "Dominic Müller"
              },
              {
                id: "2",
                name: "Tom Mustermann",
                imgUrl: "https://randomuser.me/api/portraits/men/74.jpg"
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
            type="multiple"
          />
        </Column>
      </Grid>
    </div>
  );
};
