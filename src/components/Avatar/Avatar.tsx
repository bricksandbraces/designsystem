import React, { ReactNode } from "react";
import cx from "classnames";
import { IconUser } from "@tabler/icons";

type AvatarProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * React Children
   */
  children?: ReactNode | string;

  /** Avatar size */
  size?: "large" | "default" | "small";

  /**
   * Name of the avatar
   */
  name?: string;

  /**
   * Image of the avatar
   */
  imgUrl?: string;
};

const Avatar = ({
  size = "default",
  className,
  name,
  imgUrl,
  children = <IconUser size={20} />
}: AvatarProps) => {
  return (
    <div className={cx(`avatar avatar--${size}`, className)}>
      <div className="avatar--container">
        {imgUrl ? (
          <img src={imgUrl} className="avatar--img" alt={name} />
        ) : (
          <span className="avatar--icon">{children}</span>
        )}
      </div>
    </div>
  );
};

export default Avatar;
