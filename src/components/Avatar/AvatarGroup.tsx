import React, { ReactNode } from "react";
import cx from "classnames";
import { IconPlus, IconUsers } from "@tabler/icons";
import Button from "../Button/Button";
import IconOnlyButton from "../Button/IconOnlyButton";
import { prefix } from "../../settings";

type AvatarGroupProps = {
  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * Accepts a set of avatars as react children
   */
  children?: ReactNode;
  /**
   * AvatarGroup size
   */
  size?: "large" | "default" | "small";

  /**
   * Define the amount of items to display
   */
  itemsToDisplay?: number;

  /**
   * Render a add button when the handler is present
   */
  handleAddClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  >;

  /**
   * Render a trigger button when the handler is present
   */
  handleMoreClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  >;

  /**
   * Add Button
   */
  withAddButton?: boolean;
};

const AvatarGroup = ({
  size = "default",
  handleAddClick,
  handleMoreClick,
  withAddButton,
  className,
  itemsToDisplay,
  children
}: AvatarGroupProps) => {
  const avatarAmount = React.Children.count(children);
  return (
    <div className={cx(`${prefix}--avatar-group`, className)}>
      {React.Children.toArray(children).slice(0, itemsToDisplay)}
      {withAddButton && (
        <IconOnlyButton
          className={`${prefix}--avatar-group__btn`}
          size={size}
          kind="primary"
          icon={<IconPlus />}
          onClick={handleAddClick}
        />
      )}
      {itemsToDisplay && avatarAmount > itemsToDisplay && handleMoreClick && (
        <Button
          className={`${prefix}--avatar-group__btn`}
          size={size}
          kind="secondary"
          iconPosition="left"
          icon={<IconUsers />}
          onClick={handleMoreClick}
        >
          {avatarAmount}
        </Button>
      )}
    </div>
  );
};

export default AvatarGroup;
