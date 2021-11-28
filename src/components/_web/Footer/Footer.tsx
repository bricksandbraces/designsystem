import React from "react";
import cx from "classnames";
import { Grid, Column, Link } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";

export type LinkItem = {
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

export type FooterProps = {
  /**
   * Footer LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * Footer CompanyLabel
   */
  companyLabel?: React.ReactNode;

  /**
   * Footer ClassName
   */
  className?: string;

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
  {
    linkItems,
    className,
    description,
    descriptionLink,
    companyLabel = <>BRICKS &amp; BRACES</>
  }: FooterProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  const currentYear = new Date().getFullYear();
  const indexedLinkItems = idfy(linkItems);
  return (
    <footer className={cx(`${prefix}--webfooter`, className)} ref={ref}>
      <Grid narrow className={`${prefix}--webfooter-grid`}>
        <Column
          sm={3}
          md={4}
          lg={4}
          xlg={4}
          className={`${prefix}--webfooter-column`}
        >
          <p className={`${prefix}--webfooter-label`}>
            &copy; {currentYear} {companyLabel}
          </p>
          {(description || descriptionLink) && (
            <p className={`${prefix}--webfooter-label`}>
              {description}
              {descriptionLink && (
                <Link
                  href={descriptionLink.href}
                  onClick={descriptionLink.onClick}
                  inline
                >
                  {descriptionLink.label}
                </Link>
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

export default React.forwardRef(Footer);
