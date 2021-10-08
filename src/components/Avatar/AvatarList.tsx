import React, { ReactNode } from "react";
import cx from "classnames";
import FloatingPanel from "../FloatingPanel/FloatingPanel";
import Avatar from "./Avatar";
import { prefix } from "../../settings";

type AvatarListItem = {
  /**
   * AvatarListItem Id
   */
  id: string;

  /**
   * AvatarListItem Name
   */
  name: string;

  /**
   * AvatarListItem Image URL
   */
  imgUrl?: string;

  /**
   * AvatarListItem Additional Information
   */
  additionalInformation?: string;
};

type AvatarListProps = {
  /**
   * AvatarList ClassName
   */
  className?: string;

  /**
   * AvatarList Action Items
   */
  avatarActions?: ReactNode;

  /**
   * AvatarList Children
   */
  children?: ReactNode;

  /** 
   * AvatarList Items 
   */
  avatarItems: AvatarListItem[];
};

const AvatarList = ({
  avatarItems,
  className,
  children,
  avatarActions
}: AvatarListProps) => {
  return (
    <FloatingPanel className={`${prefix}--avatar-list__panel`}>
      <ul className={cx(`${prefix}--avatar-list`, className)}>
        {avatarItems.map((avatar) => {
          return (
            <li key={avatar.id} className={`${prefix}--avatar-list__item`}>
              <Avatar name={avatar.name} imgUrl={avatar.imgUrl} />
              <div className={`${prefix}--avatar-list__item-container`}>
                <div className={`${prefix}--avatar-list__item-text`}>
                  <p className={`${prefix}--avatar-list__item-text--heading`}>
                    {avatar.name}
                  </p>
                  <p className={`${prefix}--avatar-list__item-text--body`}>
                    {avatar.additionalInformation}
                  </p>
                </div>
                {avatarActions && (
                  <div
                    className={`${prefix}--avatar-list__item-container--actions`}
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
        <div className={`${prefix}--avatar-list__children`}>{children}</div>
      )}
    </FloatingPanel>
  );
};

export default AvatarList;
