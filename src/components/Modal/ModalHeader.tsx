import React from "react";
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
    <div className="modal--header">
      <Typography
        type="text"
        token="heading-02"
        className="modal--header-headline"
      >
        {headline}
      </Typography>
      <Typography
        type="text"
        token="body-small"
        className="modal--header-subheadline"
      >
        {subheadline}
      </Typography>
    </div>
  );
};

export default ModalHeader;
