import React from "react";
import { prefix } from "../../settings";
import Body from "../Typography/Body";
import Headline from "../Typography/Headline";

type ModalHeaderProps = {
  /**
   * Text labels
   */
  headline: string;
  subheadline?: string;
};

const ModalHeader = ({ headline, subheadline }: ModalHeaderProps) => {
  return (
    <div className={`${prefix}--modal--header`}>
      <Headline type="h4" className={`${prefix}--modal--header-headline`}>
        {headline}
      </Headline>
      <Body type="b2" className={`${prefix}--modal--header-subheadline`}>
        {subheadline}
      </Body>
    </div>
  );
};

export default ModalHeader;
