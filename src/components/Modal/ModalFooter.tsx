import React from "react";
import Button from "../Button/Button";

type ModalFooterProps = {
  /**
   * Text labels
   */
  secondaryLabel?: string;
  primaryLabel: string;

  /**
   * OnClose
   */
  onClose?: (event: any) => void;

  /**
   * OnPrimary
   */
  onPrimary: (event: any) => void;
};

const ModalFooter = ({
  onClose,
  onPrimary,
  secondaryLabel,
  primaryLabel
}: ModalFooterProps) => {
  return (
    <>
      <div className="modal--footer">
        {secondaryLabel && primaryLabel && (
          <Button
            fluid
            kind="ghost"
            className="modal--footer-ghost"
            onClick={onClose}
          >
            {secondaryLabel}
          </Button>
        )}
        {primaryLabel && (
          <Button fluid className="modal--footer-primary" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        )}
      </div>
    </>
  );
};

export default ModalFooter;
