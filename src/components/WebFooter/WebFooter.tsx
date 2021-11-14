import React from "react";
import { Grid, Column } from "../Grid/Grid";
import Link from "../Link/Link";
import { prefix } from "../../settings";
import { idfy } from "../../helpers/arrayUtilities";

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

type WebFooterProps = {
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

const WebFooter = ({
  linkItems,
  description,
  descriptionLink
}: WebFooterProps) => {
  const currentYear = new Date().getFullYear();
  const indexedLinkItems = idfy(linkItems);
  return (
    <footer className={`${prefix}--webfooter`}>
      <Grid narrow className={`${prefix}--webfooter-grid`}>
        <Column
          sm={3}
          md={4}
          lg={4}
          xlg={4}
          className={`${prefix}--webfooter-column`}
        >
          <p className={`${prefix}--webfooter-label`}>
            &copy; {currentYear} BRICKS &amp; BRACES
          </p>
          {(description || descriptionLink) && (
            <p className={`${prefix}--webfooter-label`}>
              {description}
              {descriptionLink && (
                <p className={`${prefix}--webfooter-label__link`}>
                  <Link
                    href={descriptionLink.href}
                    onClick={descriptionLink.onClick}
                    inline
                  >
                    {descriptionLink.label}
                  </Link>
                </p>
              )}
            </p>
          )}
        </Column>
        <Column
          sm={4}
          md={4}
          lg={12}
          xlg={12}
          className={`${prefix}--webfooter-column`}
        >
          <div className={`${prefix}--webfooter-linksection`}>
            {indexedLinkItems?.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`${prefix}--webfooter-linksection__item`}
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

export default WebFooter;
