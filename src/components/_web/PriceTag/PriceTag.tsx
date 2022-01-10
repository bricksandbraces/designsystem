import { IconCircleCheck } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { Button } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";

export type PriceTagFeature = {
  /**
   * PriceTagItem Label
   */
  label: string;
};

export type PriceTagProps = {
  /**
   * PriceTagItems
   */
  features?: PriceTagFeature[];

  /**
   * PriceTag LinkTitle
   */
  cta?: React.ReactNode;

  /**
   * PriceTag Title
   */
  title?: string;

  /**
   * PriceTag Currency
   */
  currency?: string;

  /**
   * PriceTag Time
   */
  time?: string;

  /**
   * PriceTag Description
   */
  description?: string;

  /**
   * PriceTag ButtonLabel
   */
  buttonLabel?: string;

  /**
   * PriceTag Price
   */
  price?: string;

  /**
   * PriceTag onButtonClick
   */
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * PriceTag LinkTitle
   */
  promotion?: boolean;
};

export const PriceTag = React.forwardRef(function PriceTag(
  {
    promotion,
    currency,
    price,
    title,
    time,
    description,
    features,
    onButtonClick,
    buttonLabel
  }: PriceTagProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const indexedFeatures = idfy(features);
  return (
    <div
      ref={ref}
      className={cx(`${prefix}--pricetag`, {
        [`${prefix}--pricetag-promotion`]: promotion
      })}
    >
      <h4 className={`${prefix}--pricetag-title`}>{title}</h4>
      <div className={`${prefix}--pricetag-price`}>
        <div className={`${prefix}--pricetag-price__currency`}>
          {currency}
          {price}
        </div>
        <div className={`${prefix}--pricetag-price__time`}>
          <span className={`${prefix}--pricetag-price__divider`}>/</span>
          {time}
        </div>
      </div>
      <div className={`${prefix}--pricetag-description`}>{description}</div>
      <ul className={`${prefix}--pricetag-list`}>
        {indexedFeatures?.map((feature) => {
          return (
            <li key={feature.id} className={`${prefix}--pricetag-list__item`}>
              <IconCircleCheck />
              {feature.label}
            </li>
          );
        })}
      </ul>
      <Button
        className={`${prefix}--pricetag-button`}
        fluid
        kind="tertiary"
        onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </div>
  );
});
