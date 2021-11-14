import React from "react";
import cx from "classnames";
import Button from "../Button/Button";
import Link from "../Link/Link";
import { prefix } from "../../settings";
import { Column, Grid } from "../..";

type CookieBannerProps = {
  /**
   * Label that is shown.
   */
  label: string;

  /**
   * Button label that is shown.
   */
  buttonLabel?: string;

  /**
   * Link Label that is shown.
   */
  linkLabel?: string;

  /**
   * Link target location that is shown.
   */
  linkHref?: string;

  /**
   * Cookiebanner open state.
   */
  open: boolean;

  /**
   * onDismiss function
   */
  onButtonClick?: (event: any) => void;

  /**
   * Link Action function
   */
  onLinkClick?: (event: any) => void;
};

const CookieBanner = ({
  label,
  linkLabel,
  linkHref,
  buttonLabel,
  open,
  onButtonClick,
  onLinkClick
}: CookieBannerProps) => {
  return (
    <div
      className={cx(`${prefix}--cookiebanner`, {
        [`${prefix}--cookiebanner-open`]: open
      })}
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
              <Link
                inline
                href={linkHref ?? "#"}
                onClick={onLinkClick}
                target="_blank"
              >
                {linkLabel}
              </Link>
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

export default CookieBanner;
