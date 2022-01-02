import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type ModalBodyProps = {
  /**
   * ModalBody Children
   */
  children: React.ReactNode;

  /**
   * ModalBody ClassName
   */
  className?: string;
};

export const ModalBody = React.forwardRef(function ModalBody(
  { children, className }: ModalBodyProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={cx(`${prefix}--modal-body`, className)} ref={ref}>
      <div className={`${prefix}--modal-body__content`}>{children}</div>
    </div>
  );
});
