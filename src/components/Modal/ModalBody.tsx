import React, { ReactNode } from "react";
import { prefix } from "../../settings";

type ModalBodyProps = {
  /**
   * Text labels
   */
  children: ReactNode;
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return (
    <div className={`${prefix}--modal-body`}>
      <div className={`${prefix}--modal-body__content`}>{children}</div>
    </div>
  );
};

export default ModalBody;
