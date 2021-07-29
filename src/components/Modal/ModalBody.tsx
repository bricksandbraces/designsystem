import React, { ReactNode } from "react";

type ModalBodyProps = {
  /**
   * Text labels
   */
  children: ReactNode;
};

const ModalBody = ({ children }: ModalBodyProps) => {
  return (
    <div className="modal--body">
      <div className="modal--body-content">{children}</div>
    </div>
  );
};

export default ModalBody;
