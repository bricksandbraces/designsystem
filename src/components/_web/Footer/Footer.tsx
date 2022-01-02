import cx from "classnames";
import React from "react";
import { Column, Grid, Link, Logo } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";
import { WordBand } from "../WordBand/WordBand";

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
   * Footer CtaHeadline
   */
  ctaHeadline?: string;

  /**
   * Footer CtaText
   */
  ctaText?: string;

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

export const Footer = React.forwardRef(function Footer(
  { linkItems, className }: FooterProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedLinkItems = idfy(linkItems);
  return (
    <>
      <WordBand />
      <footer className={cx(`${prefix}--webfooter`, className)} ref={ref}>
        <Grid narrow className={`${prefix}--webfooter-grid`}>
          <Column
            sm={3}
            md={4}
            lg={4}
            xlg={4}
            className={`${prefix}--webfooter-column`}
          >
            <Logo
              size="xsmall"
              type="logotype"
              color="white"
              className={`${prefix}--webfooter-logo`}
            />
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
    </>
  );
});
