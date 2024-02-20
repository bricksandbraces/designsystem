import {
  IconAlertTriangle,
  IconCheck,
  IconForbid,
  IconInfoCircle,
  IconX
} from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { Body, Headline } from "../Typography/Typography";

export type ToastNotificationProps = {
  /**
   * ToastNotification ClassName
   */
  className?: string;

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
   * ToastNotification OnClose Function
   */
  onClose?: (event: any) => void;
};

export const ToastNotification = React.forwardRef(function ToastNotification(
  {
    className,
    title,
    subTitle,
    time,
    type,
    open,
    hideCloseButton,
    onClose
  }: ToastNotificationProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--notification ${prefix}--notification-toast ${prefix}--notification-${type}`,
        {
          [`${prefix}--notification-open`]: open
        },
        className
      )}
      ref={ref}
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
          hideTooltip
          icon={<IconX />}
        />
      )}
    </div>
  );
});
