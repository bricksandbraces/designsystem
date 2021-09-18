import React, { ReactNode } from "react";
import cx from "classnames";
import TooltipTrigger from "../Tooltip/TooltipTrigger";
import HoverTooltipText from "../Tooltip/HoverTooltipText";

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
   * The tooltip text to display. Wraps the component into a tooltip container if present.
   */
  tooltipLabel?: string;

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
  tooltipLabel,
  imgUrl,
  children
}: AvatarProps) => {
  const avatar = (
    <div className={cx(`avatar avatar--${size}`, className)}>
      <div className="avatar--container">
        {imgUrl && <img src={imgUrl} className="avatar--img" alt={name} />}
        <span className="avatar--icon">
          {children}
          {!children &&
            !imgUrl &&
            name
              ?.split(" ")
              .map((str) => str[0] ?? "")
              .join("")}
        </span>
      </div>
    </div>
  );

  return tooltipLabel ? (
    <TooltipTrigger>
      {avatar}
      <HoverTooltipText tooltipPosition="bottom" tooltipLabel={tooltipLabel} />
    </TooltipTrigger>
  ) : (
    avatar
  );
};

export default Avatar;
