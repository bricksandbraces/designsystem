import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { Body, Headline } from "../Typography/Typography";

type ModalHeaderProps = {
  /**
   * ModalHeader ClassName
   */
  className?: string;

  /**
   * ModalHeader Children
   */
  children?: React.ReactNode;

  /**
   * ModalHeader Border Width
   */
  borderWidth?: 0 | 1 | 2 | 3;

  /**
   * ModalHeader Headline
   */
  headline: string;

  /**
   * ModalHeader SubHeadline
   */
  subHeadline?: string;
};

export const ModalHeader = React.forwardRef(function ModalHeader(
  {
    className,
    headline,
    borderWidth = 0,
    subHeadline,
    children
  }: ModalHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--modal-header`,
        {
          [`${prefix}--modal-header__divider ${prefix}--functional-divider__bottom-0${borderWidth}`]:
            borderWidth
        },
        className
      )}
      ref={ref}
    >
      <Headline type="h4" className={`${prefix}--modal-header__headline`}>
        {headline}
      </Headline>
      <Body type="body-02" className={`${prefix}--modal-header__subheadline`}>
        {subHeadline}
      </Body>
      {children}
    </div>
  );
});
