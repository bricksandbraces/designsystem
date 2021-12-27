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
import { Headline, Body } from "../Typography/Typography";

export type InlineNotificationProps = {
  /**
   * InlineNotification ClassName
   */
  className?: string;

  /**
   * InlineNotification Title
   */
  title: string;

  /**
   * InlineNotification SubTitle
   */
  subTitle?: string;

  /**
   * InlineNotification Type
   */
  type: "danger" | "success" | "info" | "warning";

  /**
   * InlineNotification Hide CloseButton
   */
  hideCloseButton?: boolean;

  /**
   * InlineNotification Open State
   */
  open: boolean;

  /**
   * InlineNotification OnClose Function
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};

const InlineNotification = (
  {
    className,
    title,
    subTitle,
    type,
    open,
    hideCloseButton,
    onClose
  }: InlineNotificationProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const icons = {
    danger: IconForbid,
    success: IconCheck,
    info: IconInfoCircle,
    warning: IconAlertTriangle
  };
  const IconElement = icons[type];
  return (
    <div
      className={cx(
        `${prefix}--notification ${prefix}--notification-inline ${prefix}--notification-${type}`,
        {
          [`${prefix}--notification-open`]: open
        },
        className
      )}
      ref={ref}
    >
      <div className={cx(`${prefix}--notification-container`)}>
        <IconElement
          size={16}
          stroke={2}
          strokeLinejoin="miter"
          className={`${prefix}--notification-icon`}
        />
        <div className={cx(`${prefix}--notification-text`)}>
          <Headline type="h6" className={`${prefix}--notification-title`}>
            {title}
          </Headline>
          {subTitle && (
            <Body type="body-02" className={`${prefix}--notification-subtitle`}>
              {subTitle}
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
};

export default React.forwardRef(InlineNotification);
