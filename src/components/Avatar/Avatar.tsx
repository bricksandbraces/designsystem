import React from "react";
import cx from "classnames";
import { IconUser } from "@tabler/icons";
import TooltipTrigger from "../Tooltip/TooltipTrigger";
import HoverTooltipText from "../Tooltip/HoverTooltipText";

type AvatarProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /** Avatar size */
  size?: "large" | "default" | "small";

  /** Avatar status */
  status?: "active" | "inactive";

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

const Avatar = ({
  size = "default",
  className,
  name,
  status,
  id,
  imgUrl
}: AvatarProps) => {
  return (
    <div className={cx(`avatar avatar--${size}`, className)}>
      {status && (
        <span className={cx("avatar--status", `avatar--status-${status}`)} />
      )}
      <TooltipTrigger>
        <div className="avatar--container">
          {imgUrl ? (
            <img id={id} src={imgUrl} className="avatar--img" alt={name} />
          ) : (
            <span className="avatar--icon">
              <IconUser />
            </span>
          )}
        </div>
        <HoverTooltipText tooltipPosition="bottom" tooltipLabel={name} />
      </TooltipTrigger>
    </div>
  );
};

export default Avatar;
