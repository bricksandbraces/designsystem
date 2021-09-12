import React from "react";
import cx from "classnames";
import { IconShare, IconUser, IconUserX } from "@tabler/icons";
import Typography from "../Typography/Typography";
import FloatingPanel from "../ComponentUtilities/FloatingPanel";
import IconOnlyButton from "../Button/IconOnlyButton";

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
   * User Count
   */
  userCount?: number;

  /** AvatarList size */
  size?: "large" | "default" | "small";

  /** AvatarList size */
  avatarItems: AvatarListItem[];
};

const AvatarList = ({
  avatarItems,
  size = "default",
  className,
  userCount
}: AvatarListProps) => {
  const calculatedUserCount = userCount && userCount - 3;
  return (
    <FloatingPanel>
      <ul className={cx("avatar--list", className)}>
        {avatarItems.map((avatar) => {
          return (
            <li key={avatar.id} className="avatar--list-item">
              <div className="avatar--list-item__avatar">
                {avatar.imgUrl ? (
                  <img
                    id={avatar.id}
                    src={avatar.imgUrl}
                    className="avatar--img"
                    title={`${avatar.name} Avatar`}
                    alt={avatar.name}
                  />
                ) : (
                  <span className="avatar--icon">
                    <IconUser />
                  </span>
                )}
              </div>
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
                <div className="avatar--list-item__container-actions">
                  <IconOnlyButton
                    icon={<IconShare />}
                    size="small"
                    kind="secondary"
                  />
                  <IconOnlyButton
                    icon={<IconUserX />}
                    size="small"
                    kind="secondary"
                  />
                </div>
              </div>
            </li>
          );
        })}
        {userCount && userCount > 3 && (
          <li
            className={`avatar--list-item avatar--list-usercount avatar--${size}`}
          >
            <Typography token="label" type="span">
              + {calculatedUserCount}
            </Typography>
          </li>
        )}
      </ul>
    </FloatingPanel>
  );
};

export default AvatarList;
