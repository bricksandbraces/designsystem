/* eslint-disable no-console */
import React, { ReactNode, useEffect, useRef } from "react";
import cx from "classnames";
import FocusLock from "react-focus-lock";
import { IconX } from "@tabler/icons";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import useMounted from "../../hooks/useMounted";

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
   * Automatically focus the close button of the modal
   */
  autoFocus?: boolean;
};

const Modal = ({
  size,
  open,
  onClose,
  closeOnOutsideClick = true,
  autoFocus = true,
  withDivider,
  children
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (open && event.key === "Escape") {
        onClose?.(event);
      }
    };

    // Maintain global CSS class on the body element
    const bodyEl = document?.body;
    const modalOpenClassName = "body--modal-open";
    if (bodyEl) {
      if (bodyEl.classList.contains(modalOpenClassName) && !open) {
        bodyEl.classList.remove(modalOpenClassName);
      } else if (!bodyEl.classList.contains(modalOpenClassName) && open) {
        bodyEl.classList.add(modalOpenClassName);
      }
    }

    if (open && modalRef.current) {
      window?.addEventListener("keydown", handleKeyDown, true);
    }

    return () => {
      window?.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [modalRef, open]);
  const mounted = useMounted();

  return (
    <div>
      {mounted &&
        ReactDOM.createPortal(
          <div
            ref={modalRef}
            className={cx("modal", {
              "modal--open": open,
              "modal--with-divider": withDivider
            })}
          >
            <OutsideClickListener
              disabled={!closeOnOutsideClick || !open}
              onClickOutside={(event: any) => {
                onClose?.(event);
              }}
            >
              <FocusLock
                className={cx("modal--container", {
                  "modal--container-small": size === "sm",
                  "modal--container-medium": size === "md",
                  "modal--container-large": size === "lg",
                  "modal--container-xlarge": size === "xlg"
                })}
                disabled={!open}
              >
                <Button
                  kind="ghost"
                  renderIcon={<IconX />}
                  iconOnly
                  className="modal--close"
                  onClick={(event: any) => {
                    onClose?.(event);
                  }}
                  data-autofocus={autoFocus}
                />
                {children}
              </FocusLock>
            </OutsideClickListener>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Modal;
