import React, { ReactNode } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import FloatingPanel from "../FloatingPanel/FloatingPanel";
import Avatar from "./Avatar";
import { prefix } from "../../settings";

type AvatarListItem = {
  /**
   * Id
   */
  id: string;

  /**
   * Name of the avatar
   */
  name: string;

  /**
   * Image of the avatar
   */
  imgUrl?: string;

  /**
   * Additional information
   */
  additionalInformation?: string;
};

type AvatarListProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * Action items for List
   */
  avatarActions?: ReactNode;

  /**
   * Children
   */
  children?: ReactNode;

  /** AvatarList size */
  avatarItems: AvatarListItem[];
};

const AvatarList = ({
  avatarItems,
  className,
  children,
  avatarActions
}: AvatarListProps) => {
  return (
    <FloatingPanel className={`${prefix}--avatar--list-panel`}>
      <ul className={cx(`${prefix}--avatar--list`, className)}>
        {avatarItems.map((avatar) => {
          return (
            <li key={avatar.id} className={`${prefix}--avatar--list-item`}>
              <Avatar name={avatar.name} imgUrl={avatar.imgUrl} />
              <div className={`${prefix}--avatar--list-item__container`}>
                <div className={`${prefix}--avatar--list-item__text`}>
                  <Typography
                    token="body-small"
                    type="text"
                    className={`${prefix}--avatar--list-item__text-heading`}
                  >
                    {avatar.name}
                  </Typography>
                  <Typography
                    token="label"
                    type="text"
                    className={`${prefix}--avatar--list-item__text-body`}
                  >
                    {avatar.additionalInformation}
                  </Typography>
                </div>
                {avatarActions && (
                  <div
                    className={`${prefix}--avatar--list-item__container-actions`}
                  >
                    {avatarActions}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {children && (
        <div className={`${prefix}--avatar--list-children`}>{children}</div>
      )}
    </FloatingPanel>
  );
};

export default AvatarList;
