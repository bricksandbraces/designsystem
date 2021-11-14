import React from "react";
import cx from "classnames";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import { prefix } from "../../../settings";

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
        [`${prefix}--cookiebanner--open`]: open
      })}
      ref={ref}
    >
      <div className={`${prefix}--cookiebanner--label`}>
        <p>{label}</p>
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
      </div>
      {buttonLabel && <Button onClick={onButtonClick}>{buttonLabel}</Button>}
    </div>
  );
};

export default React.forwardRef(CookieBanner);
