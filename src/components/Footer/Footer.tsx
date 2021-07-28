import React from "react";
import Logo from "../Logo/Logo";
import { Grid, Column } from "../Grid/Grid";
import Typography from "../Typography/Typography";
import Link from "../Link/Link";

type LinkItem = {
  /**
   * Link to location
   */
  href: string;

  /**
   * Label that is shown
   */
  label: string;
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
  return (
    <footer className="footer">
      <Grid narrow className="footer--grid">
        <Column
          sm={4}
          md={6}
          mdOffset={1}
          lg={12}
          lgOffset={2}
          xlg={12}
          xlgOffset={2}
        >
          <hr className="footer--divider" />
        </Column>
        <Column
          sm={3}
          md={3}
          mdOffset={1}
          lg={4}
          lgOffset={2}
          xlg={4}
          xlgOffset={2}
          className="footer--column"
        >
          <a className="footer--logo" href={baseUrl}>
            <Logo
              className="footer--logo-logomark"
              variant="white"
              size="medium"
              kind="logomark"
            />
          </a>
          <Typography type="text" token="label" className="footer--logo-label">
            <br />
            &copy; {currentYear} BRICKS &amp; BRACES
            <br />
          </Typography>
          {(description || descriptionLink) && (
            <Typography
              type="text"
              token="label"
              className="footer--logo-cookies"
            >
              {description}
              {descriptionLink && (
                <p className="footer--logo-link">
                  <Link href={descriptionLink.href} inline>
                    {descriptionLink.label}
                  </Link>
                </p>
              )}
            </Typography>
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
          className="footer--column"
        >
          <div className="footer--linksection">
            {linkItems?.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer--linksection-item"
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
