import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { Body, Headline } from "../Typography/Typography";

type BottomSheetHeaderProps = {
  /**
   * BottomSheetHeader ClassName
   */
  className?: string;

  /**
   * BottomSheetHeader Children
   */
  children?: React.ReactNode;

  /**
   * BottomSheetHeader Border Width
   */
  borderWidth?: 0 | 1 | 2 | 3;

  /**
   * BottomSheetHeader Headline
   */
  headline: string;

  /**
   * BottomSheetHeader SubHeadline
   */
  subHeadline?: string;
};

export const BottomSheetHeader = React.forwardRef(function BottomSheetHeader(
  {
    className,
    headline,
    borderWidth = 0,
    subHeadline,
    children
  }: BottomSheetHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--bottomsheet-header`,
        {
          [`${prefix}--bottomsheet-header__divider ${prefix}--functional-divider__bottom-0${borderWidth}`]:
            borderWidth
        },
        className
      )}
      ref={ref}
    >
      <Headline type="h4" className={`${prefix}--bottomsheet-header__headline`}>
        {headline}
      </Headline>
      <Body
        type="body-02"
        className={`${prefix}--bottomsheet-header__subheadline`}
      >
        {subHeadline}
      </Body>
      {children}
    </div>
  );
});
