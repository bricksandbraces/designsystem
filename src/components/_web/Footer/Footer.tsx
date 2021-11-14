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

type WebFooterProps = {
  /**
   * WebFooter LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * WebFooter ClassName
   */
  className?: string;

  /**
   * WebFooter BaseUrl
   */
  baseUrl?: string;

  /**
   * WebFooter Description
   */
  description?: string;

  /**
   * WebFooter DescriptionLink
   */
  descriptionLink?: LinkItem;
};

const WebFooter = (
  { linkItems, className, description, descriptionLink }: WebFooterProps,
  ref?: React.ForwardedRef<HTMLElement>
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

export default React.forwardRef(WebFooter);
