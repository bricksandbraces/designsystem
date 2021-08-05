import React, { ReactNode, useEffect, useRef } from "react";
import cx from "classnames";
import { IconX } from "@tabler/icons";
import ReactDOM from "react-dom";
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

  /**
   * Determines whether the modal should be closed when the user clicks outside of the modal.
   */
  closeOnOutsideClick?: boolean;

  /**
   * Setting the tab index
   */
  tabIndex?: number;

  /** Sets the modal disabled */
  disabled?: boolean;
};

const Modal = ({
  size,
  open,
  onClose,
  closeOnOutsideClick = true,
  withDivider,
  tabIndex,
  disabled,
  children
}: ModalProps): React.ReactPortal => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      console.log("You should be open and focused!");
      console.log(closeButtonRef.current);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 2000);
    }
  }, [open]);
  return ReactDOM.createPortal(
    <div
      className={cx("modal", {
        "modal--open": open,
        "modal--with-divider": withDivider
      })}
      tabIndex={tabIndex}
    >
      <OutsideClickListener
        disabled={!closeOnOutsideClick || !open}
        onClickOutside={(event) => {
          onClose?.(event);
        }}
      >
        <div
          role="button"
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
            if (open && event.key === "Escape") {
              onClose?.(event);
            }
          }}
          tabIndex={0}
          className={cx("modal--container", {
            "modal--container-disabled": disabled,
            "modal--container-small": size === "sm",
            "modal--container-medium": size === "md",
            "modal--container-large": size === "lg",
            "modal--container-xlarge": size === "xlg"
          })}
        >
          <Button
            kind="ghost"
            ref={closeButtonRef}
            renderIcon={<IconX />}
            iconOnly
            className="modal--close"
            onClick={(event: any) => {
              onClose?.(event);
            }}
          />
          {children}
        </div>
      </OutsideClickListener>
    </div>,
    document.body
  );
};

export default Modal;
