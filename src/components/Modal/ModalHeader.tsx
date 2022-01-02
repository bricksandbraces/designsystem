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
   * ModalHeader Headline
   */
  headline: string;

  /**
   * ModalHeader SubHeadline
   */
  subHeadline?: string;
};

export const ModalHeader = React.forwardRef(function ModalHeader(
  { className, headline, subHeadline }: ModalHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cx(`${prefix}--modal-header`, className)} ref={ref}>
      <Headline type="h4" className={`${prefix}--modal-header__headline`}>
        {headline}
      </Headline>
      <Body type="body-02" className={`${prefix}--modal-header__subheadline`}>
        {subHeadline}
      </Body>
    </div>
  );
});
