import React, { ReactNode } from "react";
import TooltipTrigger from "../Tooltip/TooltipTrigger";
import HoverTooltipText from "../Tooltip/HoverTooltipText";
import Avatar from "./Avatar";

type AvatarWithTooltipProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * ReactNode
   */
  children?: ReactNode;

  /** AvatarWithTooltip size */
  size?: "large" | "default" | "small";

  /**
   * Name of the avatar
   */
  name: string;

  /**
   * Image of the avatar
   */
  imgUrl?: string;
};

const AvatarWithTooltip = ({
  size = "default",
  className,
  name,
  children,
  imgUrl
}: AvatarWithTooltipProps) => {
  return (
    <TooltipTrigger>
      <Avatar name={name} size={size} imgUrl={imgUrl} className={className}>
        {children}
      </Avatar>
      <HoverTooltipText tooltipPosition="bottom" tooltipLabel={name} />
    </TooltipTrigger>
  );
};

export default AvatarWithTooltip;
