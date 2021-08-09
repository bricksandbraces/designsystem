import React from "react";
import cx from "classnames";
import Button from "../Button/Button";
import Link from "../Link/Link";

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
    <div className={cx("cookiebanner", { "cookiebanner--open": open })}>
      <div className="cookiebanner--label">
        <p>{label}</p>
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
      </div>
      {buttonLabel && <Button onClick={onButtonClick}>{buttonLabel} </Button>}
    </div>
  );
};

export default CookieBanner;
