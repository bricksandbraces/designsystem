import { IconCheckbox, IconCircleCheck } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { Button, Column, Grid } from "../../..";
import { prefix } from "../../../settings";

export type PriceTagProps = {
  /**
   * PriceTag Headline
   */
  headline?: string;

  /**
   * PriceTag LinkTitle
   */
  cta?: React.ReactNode;

  /**
   * PriceTag LinkTitle
   */
  promotion?: boolean;
};

export const PriceTag = React.forwardRef(function PriceTag(
  {
    headline = "Let's create the next big innovation for the world of tomorrow.",
    cta = "Together.",
    promotion
  }: PriceTagProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <div
      className={cx(`${prefix}--pricetag`, {
        [`${prefix}--pricetag-promotion`]: promotion
      })}
    >
      <h4 className={`${prefix}--pricetag-title`}>Title</h4>
      <div className={`${prefix}--pricetag-price`}>
        <div className={`${prefix}--pricetag-price__currency`}>$23</div>
        <div className={`${prefix}--pricetag-price__time`}>
          <span className={`${prefix}--pricetag-price__divider`}>/</span>Monat
        </div>
      </div>
      <div className={`${prefix}--pricetag-description`}>
        For most businesses that want to optimize web queries.
      </div>
      <ul className={`${prefix}--pricetag-list`}>
        <li className={`${prefix}--pricetag-list__item`}>
          <IconCircleCheck />
          123
        </li>
        <li className={`${prefix}--pricetag-list__item`}>
          <IconCircleCheck />
          4567e8iofk ughrfejdokwl,dedfmrjf fiejdkolswdmjnf gjefdklmw
        </li>
        <li className={`${prefix}--pricetag-list__item`}>
          <IconCircleCheck />
          123
        </li>
      </ul>
      <Button className={`${prefix}--pricetag-button`} fluid kind="tertiary">
        Choose Plan
      </Button>
    </div>
  );
});
