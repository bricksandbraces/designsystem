/* eslint-disable no-console */
import React, {
  forwardRef,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef
} from "react";
import cx from "classnames";
import FocusLock from "react-focus-lock";
import { IconX } from "@tabler/icons";
import ReactDOM from "react-dom";
import mergeRefs from "react-merge-refs";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import { useMounted } from "../../hooks/useMounted";
import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";

type ModalProps = {
  /**
   * Modal Size
   */
  size?: "sm" | "md" | "lg" | "xlg";

  /**
   * Modal Open
   */
  open: boolean;

  /**
   * Modal WithDivider
   */
  withDivider?: boolean;

  /**
   * Modal Children
   */
  children?: ReactNode;

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
   * DModal Close On OutsideClick
   */
  closeOnOutsideClick?: boolean;

  /**
   * Modal HTMLSelector that focusses the element after opening
   */
  primaryFocus?: string;
};

const Modal = (
  {
    size = "sm",
    open,
    onClose,
    closeOnOutsideClick = true,
    primaryFocus,
    withDivider,
    children
  }: ModalProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  const modalRef = useRef<HTMLDivElement>(null);
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

    if (open && modalRef.current) {
      window?.addEventListener("keydown", handleKeyDown, true);
      setTimeout(() => {
        // focus the given element or the closeBtn as fallback
        console.log("Applying focus logic");
        if (primaryFocus) {
          const element = modalRef.current?.querySelector(
            primaryFocus
          ) as HTMLElement;
          console.log("Trying to focus custom element");
          console.log(element);
          if (element) {
            element.focus();
          }
        } else {
          console.log("Trying to focus close btn");
          console.log(closeBtnRef.current);
          closeBtnRef.current?.focus();
        }
      }, 100);
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
            ref={mergeRefs([modalRef, ref])}
            className={cx(`${prefix}--modal`, {
              [`${prefix}--modal-open`]: open,
              [`${prefix}--modal-with-divider`]: withDivider
            })}
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
                  kind="ghost"
                  ref={closeBtnRef}
                  icon={<IconX />}
                  tooltipProps={{
                    className: `${prefix}--modal--close`,
                    tooltipContent: "Close",
                    placement: "left",
                    trigger: "hover"
                  }}
                  onClick={(event: any) => {
                    onClose?.(event);
                  }}
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

export default forwardRef<HTMLDivElement, ModalProps>(Modal);
