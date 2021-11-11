/* eslint-disable no-console */
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState
} from "react";
import cx from "classnames";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import { useMounted } from "../../hooks/useMounted";
// import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";
import { setRef } from "../../helpers/refUtilities";
import { Button } from "../..";

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
  children?: React.ReactNode;

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
  ref: ForwardedRef<HTMLDivElement>
) => {
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
      setTimeout(() => {
        // focus the given element or the closeBtn as fallback
        console.log("Applying focus logic");
        if (primaryFocus) {
          const element = modalEl.querySelector(primaryFocus) as HTMLElement;
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
      }, 300);
    }

    return () => {
      window?.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [modalEl, open]);
  const mounted = useMounted();

  return (
    <div>
      {mounted &&
        ReactDOM.createPortal(
          <div
            ref={(el) => {
              setRef(el, ref);
              setModalEl(el);
            }}
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
                <Button
                  title="Close X"
                  onClick={(event: any) => onClose?.(event)}
                />
                {/* <IconOnlyButton
                  hideTooltip
                  kind="ghost"
                  icon={<IconX />}
                  className={`${prefix}--modal-close`}
                  onClick={(event: any) => {
                    onClose?.(event);
                  }} */}
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
