import { text, object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import UserProfile from "./UserProfile";

export default { title: "UserProfile", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <UserProfile
        name={text("Name", "Hendrik Ulbrich")}
        subName={text("Subname", "@hendriku")}
        onLogout={() => {}}
        links={object("Link data", [
          { href: "#", label: "User profile" },
          { href: "#", label: "Settings" },
          { href: "#", label: "FAQ" }
        ])}
        imgUrl="https://media-exp3.licdn.com/dms/image/C4D03AQEbx-TmQ9JFsQ/profile-displayphoto-shrink_200_200/0/1595233386946?e=1629331200&v=beta&t=sqAMMqBOm1K8Xe5N5kP3g1Loxt0UsD4QmmNeOal_V6s"
      />
    </div>
  );
};
