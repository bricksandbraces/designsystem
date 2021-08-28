import React from "react";
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
      <div className="modal--footer">
        {secondaryLabel && (
          <Button
            fluid
            kind="ghost"
            className="modal--footer-ghost"
            onClick={onSecondaryClick}
          >
            {secondaryLabel}
          </Button>
        )}
        <Button
          fluid
          className="modal--footer-primary"
          onClick={onPrimaryClick}
        >
          {primaryLabel}
        </Button>
      </div>
    </>
  );
};

export default ModalFooter;
