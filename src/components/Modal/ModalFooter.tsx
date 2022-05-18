import cx from "classnames";
import React from "react";
import { withoutPropagation } from "../../helpers/eventUtilities";
import { prefix } from "../../settings";
import { Button } from "../Button/Button";

export type ModalFooterProps = {
  /**
   * ModalFooter ClassName
   */
  className?: string;

  /**
   * ModalFooter Primary Label
   */
  primaryLabel: string;

  /**
   * ModalFooter Border Width
   */
  borderWidth?: 0 | 1 | 2 | 3;

  /**
   * ModalFooter OnPrimaryClick
   */
  onPrimaryClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * ModalFooter Secondary Label
   */
  secondaryLabel?: string;

  /**
   * ModalFooter OnSecondaryClick
   */
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ModalFooter = React.forwardRef(function ModalFooter(
  {
    className,
    onSecondaryClick,
    onPrimaryClick,
    borderWidth = 0,
    secondaryLabel,
    primaryLabel
  }: ModalFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--modal-footer`,
        {
          [`${prefix}--modal-footer__divider ${prefix}--functional-divider__top-0${borderWidth}`]:
            borderWidth
        },
        className
      )}
      ref={ref}
    >
      {secondaryLabel && (
        <Button
          kind="secondary"
          className={`${prefix}--modal-footer__secondary`}
          onClick={withoutPropagation(onSecondaryClick)}
        >
          {secondaryLabel}
        </Button>
      )}
      <Button
        className={`${prefix}--modal-footer__primary`}
        onClick={withoutPropagation(onPrimaryClick)}
      >
        {primaryLabel}
      </Button>
    </div>
  );
});
