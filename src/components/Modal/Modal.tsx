import { IconX } from "@tabler/icons";
import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import FocusLock from "react-focus-lock";
import { withoutPropagation } from "../../helpers/eventUtilities";
import { setRef } from "../../helpers/refUtilities";
import { useMounted } from "../../hooks/useMounted";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { OutsideClickListener } from "../util/OutsideClickListener/OutsideClickListener";

export type ModalProps = {
  /**
   * Modal ID
   */
  id?: string;

  /**
   * Modal Size
   */
  size?: "sm" | "md" | "lg" | "xlg";

  /**
   * Modal Open
   */
  open: boolean;

  /**
   * Modal Children
   */
  children?: React.ReactNode;

  /**
   * Modal ClassName
   */
  className?: string;

  /**
   * Modal OnClose
   */
  onClose?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | KeyboardEvent
      | MouseEvent
  ) => void;

  /**
   * Modal Close On OutsideClick
   */
  closeOnOutsideClick?: boolean;

  /**
   * Modal HTMLSelector that focusses the element after opening
   */
  primaryFocus?: string;
};

export const Modal = React.forwardRef(function Modal(
  {
    id,
    size = "sm",
    open,
    className,
    onClose,
    closeOnOutsideClick = true,
    primaryFocus,
    children
  }: ModalProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [modalEl, setModalEl] = useState<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

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

    if (open && modalEl) {
      window?.addEventListener("keydown", handleKeyDown, true);
      // focus the given element or the closeBtn as fallback
      if (primaryFocus) {
        const element = modalEl.querySelector(primaryFocus) as HTMLElement;
        if (element) {
          element.focus();
        }
      } else {
        closeBtnRef.current?.focus();
      }
    }

    return () => {
      window?.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [modalEl, open]);
  const mounted = useMounted();

  return (
    <>
      {mounted &&
        ReactDOM.createPortal(
          <div
            id={id}
            aria-hidden={!open}
            ref={(el) => {
              setRef(el, ref);
              setModalEl(el);
            }}
            className={cx(
              `${prefix}--modal`,
              {
                [`${prefix}--modal-open`]: open
              },
              className
            )}
          >
            <OutsideClickListener
              disabled={!closeOnOutsideClick || !open}
              onClickOutside={(event: MouseEvent) => {
                onClose?.(event);
              }}
            >
              <FocusLock
                className={cx(
                  `${prefix}--modal-container ${prefix}--modal-container__${size}`
                )}
                disabled={!open}
              >
                <IconOnlyButton
                  hideTooltip
                  kind="ghost"
                  ref={closeBtnRef}
                  icon={<IconX />}
                  className={`${prefix}--modal-close`}
                  onClick={(event) => {
                    const evt = event as React.MouseEvent<
                      HTMLButtonElement,
                      globalThis.MouseEvent
                    >;
                    withoutPropagation(onClose)(evt);
                  }}
                  manualFocus
                />
                {children}
              </FocusLock>
            </OutsideClickListener>
          </div>,
          document.body
        )}
    </>
  );
});
