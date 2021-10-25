import React from "react";
import { prefix } from "../../settings";
import Button from "../Button/Button";

type ModalFooterProps = {
  /**
   * ModalFooter Primary Label
   */
  primaryLabel: string;

  /**
   * ModalFooter OnPrimaryClick
   */
  onPrimaryClick: (event: any) => void;

  /**
   * ModalFooter Secondary Label
   */
  secondaryLabel?: string;

  /**
   * ModalFooter OnSecondaryClick
   */
  onSecondaryClick?: (event: any) => void;
};

const ModalFooter = ({
  onSecondaryClick,
  onPrimaryClick,
  secondaryLabel,
  primaryLabel
}: ModalFooterProps) => {
  return (
    <>
      <div className={`${prefix}--modal-footer`}>
        {secondaryLabel && (
          <Button
            kind="secondary"
            className={`${prefix}--modal-footer__secondary`}
            onClick={onSecondaryClick}
          >
            {secondaryLabel}
          </Button>
        )}
        <Button
          className={`${prefix}--modal-footer__primary`}
          onClick={onPrimaryClick}
        >
          {primaryLabel}
        </Button>
      </div>
    </>
  );
};

export default ModalFooter;
