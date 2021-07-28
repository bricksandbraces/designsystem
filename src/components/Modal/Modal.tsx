import React, { ReactNode } from "react";
import cx from "classnames";
import { IconX } from "@tabler/icons";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

type ModalProps = {
  /**
   * Size
   */
  size?: "sm" | "md" | "lg" | "xlg";

  /**
   * Open
   */
  open?: boolean;

  /**
   * Text labels
   */
  cancelLabel?: string;
  primaryLabel?: string;
  headline: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * OnClose
   */
  onClose?: (event: any) => void;

  /**
   * OnPrimary
   */
  onPrimary?: (event: any) => void;
};

const Modal = ({
  size,
  open,
  onClose,
  onPrimary,
  cancelLabel,
  primaryLabel,
  headline,
  children
}: ModalProps) => {
  return (
    <div className={cx("modal", { "modal--open": open })}>
      <div className="modal--overlay" />
      <div
        className={cx("modal--container", {
          "modal--container-small": size === "sm",
          "modal--container-medium": size === "md",
          "modal--container-large": size === "lg",
          "modal--container-xlarge": size === "xlg"
        })}
      >
        <Typography
          type="text"
          token="heading-02"
          className="modal--container-headline"
        >
          {headline}
        </Typography>
        <div className="modal--container-subline">{children}</div>
        {((cancelLabel && primaryLabel) || primaryLabel) && (
          <div className="modal--buttongroup">
            {cancelLabel && primaryLabel && (
              <Button
                fluid
                kind={size === "sm" ? "outline" : "ghost"}
                className={cx("modal--buttongroup-ghost", {
                  "modal--buttongroup-fluid": size === "sm"
                })}
                onClick={onClose}
              >
                {cancelLabel}
              </Button>
            )}
            {primaryLabel && (
              <Button
                fluid
                className={cx("modal--buttongroup-primary", {
                  "modal--buttongroup-fluid": size === "sm"
                })}
                onClick={onPrimary}
              >
                {primaryLabel}
              </Button>
            )}
          </div>
        )}
        <Button
          kind="ghost"
          renderIcon={<IconX />}
          iconOnly
          className="modal--close"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
