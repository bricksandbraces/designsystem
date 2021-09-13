import React, { ReactNode } from "react";
import cx from "classnames";
import { IconUser } from "@tabler/icons";
import Typography from "../Typography/Typography";
import FloatingPanel from "../ComponentUtilities/FloatingPanel";
import Avatar from "./Avatar";

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
  actions?: ReactNode;

  /** AvatarList size */
  avatarItems: AvatarListItem[];
};

const AvatarList = ({ avatarItems, className, actions }: AvatarListProps) => {
  return (
    <FloatingPanel className="avatar--list-panel">
      <ul className={cx("avatar--list", className)}>
        {avatarItems.map((avatar) => {
          return (
            <li key={avatar.id} className="avatar--list-item">
              <Avatar name={avatar.name} imgUrl={avatar.imgUrl} />
              <div className="avatar--list-item__container">
                <div className="avatar--list-item__text">
                  <Typography
                    token="body-small"
                    type="text"
                    className="avatar--list-item__text-heading"
                  >
                    {avatar.name}
                  </Typography>
                  <Typography
                    token="label"
                    type="text"
                    className="avatar--list-item__text-body"
                  >
                    {avatar.additionalInformation}
                  </Typography>
                </div>
                {actions && (
                  <div className="avatar--list-item__container-actions">
                    {actions}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </FloatingPanel>
  );
};

export default AvatarList;
