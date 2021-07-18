import React from "react";
import {
  IconAlertTriangle,
  IconCheck,
  IconInfoCircle,
  IconForbid,
  IconX
} from "@tabler/icons";
import cx from "classnames";

type SnackBarProps = {
  /**
   * Message that is shown.
   */
  message: string;

  /**
   * Type of message (info, warning etc).
   */
  messageType: string;

  /**
   * Open state
   */
  open: boolean;

  /**
   * onClose function
   */
  onClose?: (event: any) => void;
};

const SnackBar = ({ message, messageType, open, onClose }: SnackBarProps) => {
  return (
    <div className="snackbar--container">
      <div
        className={cx("snackbar", {
          "snackbar--open": open,
          "snackbar--danger": messageType === "danger",
          "snackbar--success": messageType === "success",
          "snackbar--info": messageType === "info",
          "snackbar--warning": messageType === "warning"
        })}
      >
        <span className="snackbar--content">
          {messageType === "danger" && (
            <IconForbid
              size={16}
              color="#c53a3a"
              stroke={2}
              strokeLinejoin="miter"
              className="snackbar--icon"
            />
          )}
          {messageType === "success" && (
            <IconCheck
              size={16}
              color="#68b748"
              stroke={2}
              strokeLinejoin="miter"
              className="snackbar--icon"
            />
          )}
          {messageType === "info" && (
            <IconInfoCircle
              size={16}
              color="#05f"
              stroke={2}
              strokeLinejoin="miter"
              className="snackbar--icon"
            />
          )}
          {messageType === "warning" && (
            <IconAlertTriangle
              size={16}
              color="#dbb024"
              stroke={2}
              strokeLinejoin="miter"
              className="snackbar--icon"
            />
          )}
          <p className="snackbar--message">{message}</p>
        </span>
        <button type="button" className="snackbar--close" onClick={onClose}>
          <IconX size={16} stroke={2} strokeLinejoin="miter" />
        </button>
      </div>
    </div>
  );
};

export default SnackBar;
