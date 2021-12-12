import React from "react";
import cx from "classnames";
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

const ModalBody = (
  { children, className }: ModalBodyProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={cx(`${prefix}--modal-body`, className)} ref={ref}>
      <div className={`${prefix}--modal-body__content`}>{children}</div>
    </div>
  );
};

export default React.forwardRef(ModalBody);
