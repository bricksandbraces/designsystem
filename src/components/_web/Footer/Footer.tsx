import React from "react";
import cx from "classnames";
import { Grid, Column, Link } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";

type LinkItem = {
  /**
   * LinkItem Href
   */
  href?: string;

  /**
   * LinkItem Label
   */
  label: string;

  /** LinkItem OnClick Action (acts as button) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

type FooterProps = {
  /**
   * Footer className
   */
  className?: string;

  /**
   * Footer LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * Footer BaseUrl
   */
  baseUrl?: string;

  /**
   * Footer Description
   */
  description?: string;

  /**
   * Footer DescriptionLink
   */
  descriptionLink?: LinkItem;
};

const Footer = (
  { className, linkItems, description, descriptionLink }: FooterProps,
  ref?: React.ForwardedRef<HTMLElement>
) => {
  const currentYear = new Date().getFullYear();
  const indexedLinkItems = idfy(linkItems);
  return (
    <footer className={cx(`${prefix}--Footer`, className)} ref={ref}>
      <Grid narrow className={`${prefix}--Footer-grid`}>
        <Column
          sm={3}
          md={4}
          lg={4}
          xlg={4}
          className={`${prefix}--Footer-column`}
        >
          <p className={`${prefix}--Footer-label`}>
            &copy; {currentYear} BRICKS &amp; BRACES
          </p>
          {(description || descriptionLink) && (
            <p className={`${prefix}--Footer-label`}>
              {description}
              {descriptionLink && (
                <p className={`${prefix}--Footer-label__link`}>
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
          className={`${prefix}--Footer-column`}
        >
          <div className={`${prefix}--Footer-linksection`}>
            {indexedLinkItems?.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`${prefix}--Footer-linksection__item`}
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

export default React.forwardRef(Footer);
