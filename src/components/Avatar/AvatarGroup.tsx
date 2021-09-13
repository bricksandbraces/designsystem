import React, { ReactNode } from "react";
import cx from "classnames";
import { IconUsers } from "@tabler/icons";
import Button from "../Button/Button";

type AvatarGroupProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * React Children
   */
  children?: ReactNode;

  /**
   * User Count
   */
  userCount?: number;

  /**
   * AvatarGroup size
   */
  size?: "large" | "default" | "small";

  /**
   * List Trigger Button
   */
  withListTrigger?: boolean;
};

const AvatarGroup = ({
  size = "default",
  withListTrigger,
  className,
  children,
  userCount
}: AvatarGroupProps) => {
  return (
    <div className={cx("avatar--group", className)}>
      {children}
      {withListTrigger && (
        <Button
          className="avatar--group-btn"
          size={size}
          kind="secondary"
          iconPosition="left"
          icon={<IconUsers />}
        >
          {userCount}
        </Button>
      )}
    </div>
  );
};

export default AvatarGroup;
