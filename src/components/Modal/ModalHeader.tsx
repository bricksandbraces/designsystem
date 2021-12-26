import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Body from "../Typography";
import Headline from "../Typography";

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

const ModalHeader = (
  { className, headline, subHeadline }: ModalHeaderProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
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
};

export default React.forwardRef(ModalHeader);
