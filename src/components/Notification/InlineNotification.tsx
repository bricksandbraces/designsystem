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

type InlineNotificationProps = {
  /**
   * InlineNotification Title
   */
  title: string;

  /**
   * InlineNotification SubTitle
   */
  subTitle?: string;

  /**
   * InlineNotification ToolTipLabel
   */
  tooltipLabel: string;

  /**
   * InlineNotification Type
   */
  type: string;

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
  onClose?: (event: any) => void;
};

const InlineNotification = ({
  title,
  subTitle,
  tooltipLabel,
  type,
  open,
  hideCloseButton,
  onClose
}: InlineNotificationProps) => {
  return (
    <div
      className={cx(
        `${prefix}--notification ${prefix}--notification-inline ${prefix}--notification-${type}`,
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
        </div>
      </div>
      {!hideCloseButton && (
        <IconOnlyButton
          type="button"
          kind="ghost"
          size="small"
          className={`${prefix}--notification-close`}
          onClick={onClose}
          tooltipProps={{ tooltipContent: tooltipLabel }}
          icon={<IconX />}
        />
      )}
    </div>
  );
};

export default InlineNotification;
