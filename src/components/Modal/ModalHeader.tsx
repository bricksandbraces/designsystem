import React from "react";
import { prefix } from "../../settings";
import Typography from "../Typography/Typography";

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
      <Typography
        type="text"
        token="heading-02"
        className={`${prefix}--modal--header-headline`}
      >
        {headline}
      </Typography>
      <Typography
        type="text"
        token="body-small"
        className={`${prefix}--modal--header-subheadline`}
      >
        {subheadline}
      </Typography>
    </div>
  );
};

export default ModalHeader;
