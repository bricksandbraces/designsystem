import { text, object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import LeadSpace from "./LeadSpace";
import Header from "../WebHeader/WebHeader";

export default { title: "Web/LeadSpace", decorators: [withKnobs] };

export const WithImage = () => {
  return (
    <LeadSpace
      ctaItems={object("CTA", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      backgroundImage={text(
        "Background Image",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("Leadspace title", "Creating a better tomorrow.")}
    />
  );
};

export const WithVideo = () => {
  return (
    <LeadSpace
      ctaItems={object("CTA", [
        { href: "#", label: "What we do", showChevron: true },
        { href: "#", label: "Learn more about us", showChevron: false }
      ])}
      videoUrl={text(
        "Video Url",
        "https://think-2021-cos-bucket.s3.eu-de.cloud-object-storage.appdomain.cloud/pexels-nikita-ryumshin-7782667.mp4"
      )}
      backgroundImage={text(
        "Background Image",
        "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
      )}
      title={text("Leadspace title", "Creating a better tomorrow.")}
    />
  );
};

export const WithHeader = () => {
  return (
    <>
      <Header
        baseUrl={text("Header URL", "#")}
        linkItems={object("Header items", [
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" }
        ])}
      />
      <LeadSpace
        ctaItems={object("CTA", [
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ])}
        videoUrl={text(
          "Video Url",
          "https://think-2021-cos-bucket.s3.eu-de.cloud-object-storage.appdomain.cloud/pexels-nikita-ryumshin-7782667.mp4"
        )}
        backgroundImage={text(
          "Background Image",
          "https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
        )}
        title={text("Leadspace title", "Creating a better tomorrow.")}
      />
    </>
  );
};
