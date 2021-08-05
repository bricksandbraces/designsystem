import React, { ReactNode, useEffect, useRef } from "react";
import cx from "classnames";
import { IconX } from "@tabler/icons";
import Button from "../Button/Button";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";

type ModalProps = {
  /**
   * Size
   */
  size?: "sm" | "md" | "lg" | "xlg";

  /**
   * Open
   */
  open: boolean;

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
  const modalContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) {
      console.log("LOL");
      modalContainerRef.current?.focus();
    }
  }, [open]);
  return (
    <div
      className={cx("modal", {
        "modal--open": open,
        "modal--with-divider": withDivider
      })}
    >
      <OutsideClickListener
        disabled={!open}
        onClickOutside={(event) => {
          onClose?.(event);
        }}
      >
        <div
          ref={modalContainerRef}
          role="button"
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
            if (open && event.key === "Escape") {
              onClose?.(event);
            }
          }}
          tabIndex={0}
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
            onClick={(event: any) => {
              onClose?.(event);
            }}
            autoFocus
          />
          {children}
        </div>
      </OutsideClickListener>
    </div>
  );
};

export default Modal;
