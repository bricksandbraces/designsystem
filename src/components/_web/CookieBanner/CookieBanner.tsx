import React from "react";
import cx from "classnames";
import { Button } from "../../Button/Button";
import { Link } from "../../Link/Link";
import { prefix } from "../../../settings";
import { Column, Grid } from "../../Grid/Grid";

export type CookieBannerProps = {
  /**
   * CookieBanner Label that is shown.
   */
  label: string;

  /**
   * CookieBanner Button label that is shown.
   */
  buttonLabel?: string;

  /**
   * CookieBanner Link Label that is shown.
   */
  linkLabel?: string;

  /**
   * CookieBanner Link target location that is shown.
   */
  linkHref?: string;

  /**
   * CookieBanner open state.
   */
  open: boolean;

  /**
   * CookieBanner onDismiss function
   */
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * CookieBanner Link Action function
   */
  onLinkClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * CookieBanner Custom Link Element
   */
  linkElement?: React.ElementType;
};

const CookieBanner = (
  {
    label,
    linkLabel,
    linkHref,
    buttonLabel,
    open,
    linkElement,
    onButtonClick,
    onLinkClick
  }: CookieBannerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const LinkElement = linkElement ?? Link;
  return (
    <div
      className={cx(`${prefix}--cookiebanner`, {
        [`${prefix}--cookiebanner-open`]: open
      })}
      ref={ref}
    >
      <Grid narrow fullWidth className={`${prefix}--cookiebanner-grid`}>
        <Column
          sm={4}
          md={6}
          lg={8}
          xlg={8}
          className={`${prefix}--cookiebanner-label__container`}
        >
          <p className={`${prefix}--cookiebanner-label`}>
            {label}
            {linkLabel && (
              <LinkElement
                inline
                href={linkHref ?? "#"}
                onClick={onLinkClick}
                target="_blank"
              >
                {linkLabel}
              </LinkElement>
            )}
          </p>
        </Column>
        <Column
          sm={4}
          md={2}
          lg={8}
          xlg={8}
          className={`${prefix}--cookiebanner-button__container`}
        >
          {buttonLabel && (
            <Button
              className={`${prefix}--cookiebanner-button`}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </Button>
          )}
        </Column>
      </Grid>
    </div>
  );
};

export default React.forwardRef(CookieBanner);
