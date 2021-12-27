import { action } from "@storybook/addon-actions";
import { text, object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { UserProfile } from "./UserProfile";

export default {
  title: "Components Ready/UserProfile",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <UserProfile
        name={text("Name", "Hendrik Ulbrich")}
        subName={text("Subname", "@hendriku")}
        onPrimaryAction={action("onPrimaryAction")}
        links={object("Link data", [
          { href: "#", label: "User profile" },
          { href: "#", label: "Settings" },
          { href: "#", label: "FAQ" }
        ])}
        imgUrl="https://randomuser.me/api/portraits/men/74.jpg"
      />
    </div>
  );
};
