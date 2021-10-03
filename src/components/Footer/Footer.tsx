import React from "react";
import Logo from "../Logo/Logo";
import { Grid, Column } from "../Grid/Grid";
import Link from "../Link/Link";
import { prefix } from "../../settings";
import { idfy } from "../../helpers/arrayUtilities";
import Label from "../Typography/Label";

type LinkItem = {
  /**
   * Link to location
   */
  href?: string;

  /**
   * Label that is shown
   */
  label: string;

  /** onClick action (acts as button) */
  onClick?: (event: Event) => void;
};

type FooterProps = {
  /**
   * Link section / Buttons
   */
  linkItems?: LinkItem[];

  /**
   * Base Url for footer
   */
  baseUrl?: string;

  /**
   * Description for footer
   */
  description?: string;

  /**
   * DescriptionLink for footer
   */
  descriptionLink?: LinkItem;
};

const Footer = ({
  linkItems,
  baseUrl,
  description,
  descriptionLink
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const indexedLinkItems = idfy(linkItems);
  return (
    <footer className={`${prefix}--footer`}>
      <Grid narrow className={`${prefix}--footer--grid`}>
        <Column
          sm={4}
          md={6}
          mdOffset={1}
          lg={12}
          lgOffset={2}
          xlg={12}
          xlgOffset={2}
        >
          <hr className={`${prefix}--footer--divider`} />
        </Column>
        <Column
          sm={3}
          md={3}
          mdOffset={1}
          lg={4}
          lgOffset={2}
          xlg={4}
          xlgOffset={2}
          className={`${prefix}--footer--column`}
        >
          <a className={`${prefix}--footer--logo`} href={baseUrl}>
            <Logo
              className={`${prefix}--footer--logo-logomark`}
              variant="white"
              size="medium"
              kind="logomark"
            />
          </a>
          <Label className={`${prefix}--footer--logo-label`}>
            &copy; {currentYear} BRICKS &amp; BRACES
          </Label>
          {(description || descriptionLink) && (
            <Label className={`${prefix}--footer--logo-cookies`}>
              {description}
              {descriptionLink && (
                <div className={`${prefix}--footer--logo-link`}>
                  <Link
                    href={descriptionLink.href}
                    onClick={descriptionLink.onClick}
                    inline
                  >
                    {descriptionLink.label}
                  </Link>
                </div>
              )}
            </Label>
          )}
        </Column>
        <Column
          sm={4}
          md={3}
          mdOffset={4}
          lg={6}
          lgOffset={8}
          xlg={6}
          xlgOffset={8}
          className={`${prefix}--footer--column`}
        >
          <div className={`${prefix}--footer--linksection`}>
            {indexedLinkItems?.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`${prefix}--footer--linksection-item`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </Column>
      </Grid>
    </footer>
  );
};

export default Footer;
