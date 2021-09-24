import React from "react";
import { prefix } from "../../settings";
import Button from "../Button/Button";

type ModalFooterProps = {
  /**
   * Text labels
   */
  secondaryLabel?: string;
  primaryLabel: string;

  /**
   * OnSecondaryClick
   */
  onSecondaryClick?: (event: any) => void;

  /**
   * OnPrimaryClick
   */
  onPrimaryClick: (event: any) => void;
};

const ModalFooter = ({
  onSecondaryClick,
  onPrimaryClick,
  secondaryLabel,
  primaryLabel
}: ModalFooterProps) => {
  return (
    <>
      <div className={`${prefix}--modal--footer`}>
        {secondaryLabel && (
          <Button
            fluid
            kind="ghost"
            className={`${prefix}--modal--footer-ghost`}
            onClick={onSecondaryClick}
          >
            {secondaryLabel}
          </Button>
        )}
        <Button
          fluid
          className={`${prefix}--modal--footer-primary`}
          onClick={onPrimaryClick}
        >
          {primaryLabel}
        </Button>
      </div>
    </>
  );
};

export default ModalFooter;
