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
import IconOnlyButton from "../Button/IconOnlyButton";
import Headline from "../Typography/Headline";
import Body from "../Typography/Body";

type ToastNotificationProps = {
  /**
   * ToastNotification Title
   */
  title: string;

  /**
   * ToastNotification SubTitle
   */
  subTitle?: string;

  /**
   * ToastNotification Time
   */
  time?: string;

  /**
   * InlineNotification Hide CloseButton
   */
  hideCloseButton?: boolean;

  /**
   * ToastNotification Type
   */
  type: string;

  /**
   * ToastNotification Open State
   */
  open: boolean;

  /**
   * ToastNotification closeTooltipLabel
   */
  closeTooltipLabel: string;

  /**
   * ToastNotification OnClose Function
   */
  onClose?: (event: any) => void;
};

const ToastNotification = ({
  title,
  subTitle,
  time,
  hideCloseButton,
  closeTooltipLabel,
  type,
  open,
  onClose
}: ToastNotificationProps) => {
  return (
    <div
      className={cx(
        `${prefix}--notification ${prefix}--notification-toast ${prefix}--notification-${type}`,
        {
          [`${prefix}--notification-open`]: open
        }
      )}
    >
      <div className={cx(`${prefix}--notification-container`)}>
        {type === "danger" && (
          <IconForbid
            size={16}
            stroke={2}
            strokeLinejoin="miter"
            className={`${prefix}--notification-icon`}
          />
        )}
        {type === "success" && (
          <IconCheck
            size={16}
            stroke={2}
            strokeLinejoin="miter"
            className={`${prefix}--notification-icon`}
          />
        )}
        {type === "info" && (
          <IconInfoCircle
            size={16}
            stroke={2}
            strokeLinejoin="miter"
            className={`${prefix}--notification-icon`}
          />
        )}
        {type === "warning" && (
          <IconAlertTriangle
            size={16}
            stroke={2}
            strokeLinejoin="miter"
            className={`${prefix}--notification-icon`}
          />
        )}
        <div className={cx(`${prefix}--notification-text`)}>
          <Headline type="h6" className={`${prefix}--notification-title`}>
            {title}
          </Headline>
          {subTitle && (
            <Body type="body-02" className={`${prefix}--notification-subtitle`}>
              {subTitle}
            </Body>
          )}
          {time && (
            <Body type="body-02" className={`${prefix}--notification-time`}>
              {time}
            </Body>
          )}
        </div>
      </div>

      {!hideCloseButton && (
        <IconOnlyButton
          type="button"
          kind="ghost"
          size="small"
          className={`${prefix}--notification-close`}
          onClick={onClose}
          tooltipProps={{ tooltipContent: closeTooltipLabel }}
          hideTooltip
          icon={<IconX />}
        />
      )}
    </div>
  );
};

export default ToastNotification;
