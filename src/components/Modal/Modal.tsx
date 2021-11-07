/* eslint-disable no-console */
import React, {
  forwardRef,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef
} from "react";
import cx from "classnames";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
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
   * Modal Autofocus Close Button
   */
  autoFocus?: boolean;
};

const Modal = (
  {
    size = "sm",
    open,
    onClose,
    closeOnOutsideClick = true,
    autoFocus = true,
    withDivider,
    children
  }: ModalProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
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
                <AutoFocusInside disabled={!open || !autoFocus}>
                  <IconOnlyButton
                    kind="ghost"
                    icon={<IconX />}
                    wrapperClassName={`${prefix}--modal--close`}
                    tooltipPosition="left"
                    onClick={(event: any) => {
                      onClose?.(event);
                    }}
                  />
                </AutoFocusInside>
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
