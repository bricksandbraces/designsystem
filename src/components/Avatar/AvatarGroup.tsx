import React, { ReactNode } from "react";
import cx from "classnames";
import { IconPlus, IconUsers } from "@tabler/icons";
import Button from "../Button/Button";
import IconOnlyButton from "../Button/IconOnlyButton";

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

  /**
   * Add Button
   */
  withAddButton?: boolean;
};

const AvatarGroup = ({
  size = "default",
  withListTrigger,
  withAddButton,
  className,
  children,
  userCount
}: AvatarGroupProps) => {
  return (
    <div className={cx("avatar--group", className)}>
      {children}
      {withAddButton && (
        <IconOnlyButton
          className="avatar--group-btn"
          size={size}
          kind="primary"
          icon={<IconPlus />}
        />
      )}
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
