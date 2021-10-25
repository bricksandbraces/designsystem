import React from "react";
import { prefix } from "../../settings";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";

type ModalHeaderProps = {
  /**
   * ModalHeader Headline
   */
  headline: string;

  /**
   * ModalHeader SubHeadline
   */
  subHeadline?: string;
};

const ModalHeader = ({ headline, subHeadline }: ModalHeaderProps) => {
  return (
    <div className={`${prefix}--modal-header`}>
      <Headline type="h4" className={`${prefix}--modal-header__headline`}>
        {headline}
      </Headline>
      <Body type="body-02" className={`${prefix}--modal-header__subheadline`}>
        {subHeadline}
      </Body>
    </div>
  );
};

export default ModalHeader;
