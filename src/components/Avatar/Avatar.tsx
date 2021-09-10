import { IconUser } from "@tabler/icons";
import React from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";

type AvatarItem = {
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

type AvatarProps = {
  /**
   * Type
   */
  type?: "single" | "multiple";

  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * User Count
   */
  userCount?: number;

  /** Avatar size */
  size?: "large" | "default" | "small";

  /** Avatar size */
  avatarItems: AvatarItem[];
};

const Avatar = ({
  type = "single",
  avatarItems,
  size = "default",
  className,
  userCount
}: AvatarProps) => {
  const calculatedUserCount = userCount && userCount - 3;
  return (
    <>
      {type === "single" ? (
        <div
          className={cx(`avatar avatar--${type} avatar--${size}`, className)}
        >
          <img
            src="https://randomuser.me/api/portraits/women/49.jpg"
            className="avatar--img"
            alt="Linda"
          />
        </div>
      ) : (
        <ul className="avatar--list">
          {avatarItems
            .map((avatar) => {
              return (
                <li key={avatar.id} className="avatar--list-item">
                  <div
                    className={cx(
                      `avatar avatar--${type} avatar--${size}`,
                      className
                    )}
                  >
                    {avatar.imgUrl ? (
                      <img
                        src={avatar.imgUrl}
                        className="avatar--img"
                        alt={avatar.name}
                      />
                    ) : (
                      <div className="avatar--icon">
                        <IconUser size={20} />
                      </div>
                    )}
                  </div>
                </li>
              );
            })
            .slice(0, 3)}
          {userCount && userCount > 3 && (
            <li className="avatar--list-item">
              <Typography
                token="body-small"
                type="span"
                className="avatar--usercount"
              >
                + {calculatedUserCount}
              </Typography>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default Avatar;
