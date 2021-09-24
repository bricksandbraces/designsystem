import React from "react";
import {
  IconAlertTriangle,
  IconCheck,
  IconInfoCircle,
  IconForbid,
  IconX
} from "@tabler/icons";
import cx from "classnames";
import { prefix } from "../../settings";

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
    <div className={`${prefix}--snackbar--container`}>
      <div
        className={cx(`${prefix}--snackbar`, {
          [`${prefix}--snackbar--open`]: open,
          [`${prefix}--snackbar--danger`]: messageType === "danger",
          [`${prefix}--snackbar--success`]: messageType === "success",
          [`${prefix}--snackbar--info`]: messageType === "info",
          [`${prefix}--snackbar--warning`]: messageType === "warning"
        })}
      >
        <span className={`${prefix}--snackbar--content`}>
          {messageType === "danger" && (
            <IconForbid
              size={16}
              color="#ff8080"
              stroke={2}
              strokeLinejoin="miter"
              className={`${prefix}--snackbar--icon`}
            />
          )}
          {messageType === "success" && (
            <IconCheck
              size={16}
              color="#a4fe80"
              stroke={2}
              strokeLinejoin="miter"
              className={`${prefix}--snackbar--icon`}
            />
          )}
          {messageType === "info" && (
            <IconInfoCircle
              size={16}
              color="#80aaff"
              stroke={2}
              strokeLinejoin="miter"
              className={`${prefix}--snackbar--icon`}
            />
          )}
          {messageType === "warning" && (
            <IconAlertTriangle
              size={16}
              color="#ffe180"
              stroke={2}
              strokeLinejoin="miter"
              className={`${prefix}--snackbar--icon`}
            />
          )}
          <p className={`${prefix}--snackbar--message`}>{message}</p>
        </span>
        <button
          type="button"
          className={`${prefix}--snackbar--close`}
          onClick={onClose}
        >
          <IconX size={16} stroke={2} strokeLinejoin="miter" />
        </button>
      </div>
    </div>
  );
};

export default SnackBar;
