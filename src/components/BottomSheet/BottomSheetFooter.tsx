import cx from "classnames";
import React from "react";
import { withoutPropagation } from "../../helpers/eventUtilities";
import { prefix } from "../../settings";
import { Button } from "../Button/Button";

export type BottomSheetFooterProps = {
  /**
   * BottomSheetFooter ClassName
   */
  className?: string;

  /**
   * BottomSheetFooter Primary Label
   */
  primaryLabel: string;

  /**
   * BottomSheetFooter Border Width
   */
  borderWidth?: 0 | 1 | 2 | 3;

  /**
   * BottomSheetFooter OnPrimaryClick
   */
  onPrimaryClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * BottomSheetFooter Secondary Label
   */
  secondaryLabel?: string;

  /**
   * BottomSheetFooter OnSecondaryClick
   */
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const BottomSheetFooter = React.forwardRef(function BottomSheetFooter(
  {
    className,
    onSecondaryClick,
    onPrimaryClick,
    borderWidth = 0,
    secondaryLabel,
    primaryLabel
  }: BottomSheetFooterProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--bottomsheet-footer`,
        {
          [`${prefix}--bottomsheet-footer__divider ${prefix}--functional-divider__top-0${borderWidth}`]:
            borderWidth
        },
        className
      )}
      ref={ref}
    >
      {secondaryLabel && (
        <Button
          kind="secondary"
          className={`${prefix}--bottomsheet-footer__secondary`}
          onClick={withoutPropagation(onSecondaryClick)}
        >
          {secondaryLabel}
        </Button>
      )}
      <Button
        className={`${prefix}--bottomsheet-footer__primary`}
        onClick={withoutPropagation(onPrimaryClick)}
      >
        {primaryLabel}
      </Button>
    </div>
  );
});
