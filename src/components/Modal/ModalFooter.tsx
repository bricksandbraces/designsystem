import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Button from "../Button/Button";
import { withoutPropagation } from "../../helpers/eventUtilities";

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

const ModalFooter = (
  {
    className,
    onSecondaryClick,
    onPrimaryClick,
    secondaryLabel,
    primaryLabel
  }: ModalFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={cx(`${prefix}--modal-footer`, className)} ref={ref}>
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
};

export default React.forwardRef(ModalFooter);
