import React from "react";
import cx from "classnames";
import { IconUsers } from "@tabler/icons";
import Typography from "../Typography/Typography";
import Avatar from "./Avatar";
import Button from "../Button/Button";

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
  return (
    <ul className={cx("avatar avatar--group", className)}>
      {avatarItems
        .map((avatar) => {
          return (
            <li key={avatar.id} className="avatar--group-item">
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
          className={`avatar--group-item avatar--group-usercount avatar--${size}`}
        >
          <Button
            className="avatar--group-btn"
            size={size}
            kind="secondary"
            iconPosition="left"
            icon={<IconUsers />}
          >
            {userCount}
          </Button>
        </li>
      )}
    </ul>
  );
};

export default AvatarGroup;
