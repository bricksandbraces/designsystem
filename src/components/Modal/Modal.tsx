import React, { ReactNode } from "react";
import cx from "classnames";
import { IconX } from "@tabler/icons";
import Button from "../Button/Button";

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
   * With Divider
   */
  withDivider?: boolean;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * OnClose
   */
  onClose?: (event: any) => void;
};

const Modal = ({ size, open, onClose, withDivider, children }: ModalProps) => {
  return (
    <div
      className={cx("modal", {
        "modal--open": open,
        "modal--with-divider": withDivider
      })}
      onClick={onClose}
      onKeyPress={onClose}
      role="button"
      tabIndex={0}
    >
      <div
        className={cx("modal--container", {
          "modal--container-small": size === "sm",
          "modal--container-medium": size === "md",
          "modal--container-large": size === "lg",
          "modal--container-xlarge": size === "xlg"
        })}
      >
        <Button
          kind="ghost"
          renderIcon={<IconX />}
          iconOnly
          className="modal--close"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
