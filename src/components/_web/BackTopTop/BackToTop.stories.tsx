import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Column, Grid } from "../../..";
import Headline from "../../Typography/Headline";
import Marketing from "../../Typography/Marketing";
import Footer from "../Footer/Footer";
import LeadSpace from "../LeadSpace/LeadSpace";
import WebHeader from "../WebHeader/WebHeader";
import BackToTop from "./BackToTop";

export default { title: "Web/BackToTop", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw" }}>
      <WebHeader
        baseUrl="#"
        linkItems={[
          { href: "#", label: "About us" },
          { href: "#", label: "Contact" },
          { href: "#", label: "Blog" }
        ]}
      />
      <LeadSpace
        ctaItems={[
          { href: "#", label: "What we do", showChevron: true },
          { href: "#", label: "Learn more about us", showChevron: false }
        ]}
        backgroundImage="https://i.pinimg.com/originals/30/c6/c3/30c6c39d2ad38b4be22a4932707b0550.png"
        title="Creating a better tomorrow."
      />
      <Grid narrow>
        <Column
          sm={4}
          md={6}
          mdOffset={1}
          lg={8}
          lgOffset={2}
          xlg={12}
          xlgOffset={2}
        >
          <div style={{ color: "#e0e0e0", marginTop: "40px", padding: "1rem" }}>
            <Marketing type="marketing-01">Hello &amp; Hi!</Marketing>
            <Headline type="h1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </Headline>
          </div>
        </Column>
      </Grid>
      <BackToTop />
      <Footer
        baseUrl="#"
        linkItems={[
          { href: "#", label: "Imprint" },
          { href: "#", label: "Legal" },
          { href: "#", label: "Cookies" },
          { href: "#", label: "Privacy" },
          { href: "#", label: "Contact" }
        ]}
        description="Wir nutzen Cookies, um deine Experience zu verbessern. Deine Einstellungen kannst du jederzeit in den Einstellungen ändern."
        descriptionLink={{
          href: "#",
          label: "Zu den Cookieeinstellungen"
        }}
      />
    </div>
  );
};
