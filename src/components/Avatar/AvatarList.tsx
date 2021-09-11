import React from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import Avatar from "./Avatar";

type AvatarGroupItem = {
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
};

type AvatarGroupProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * User Count
   */
  userCount?: number;

  /** AvatarGroup size */
  size?: "large" | "default" | "small";

  /** AvatarGroup size */
  avatarItems: AvatarGroupItem[];
};

const AvatarGroup = ({
  avatarItems,
  size = "default",
  className,
  userCount
}: AvatarGroupProps) => {
  const calculatedUserCount = userCount && userCount - 3;
  return (
    <ul className={cx("avatar avatar--list", className)}>
      {avatarItems
        .map((avatar) => {
          return (
            <li key={avatar.id} className="avatar--list-item">
              <Avatar
                size={size}
                id={avatar.id}
                name={avatar.name}
                imgUrl={avatar.imgUrl}
              />
            </li>
          );
        })
        .slice(0, 3)}
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
  );
};

export default AvatarGroup;
