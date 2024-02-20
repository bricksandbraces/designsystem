import { IconPlus, IconUsers } from "@tabler/icons-react";
import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";
import { Button } from "../Button/Button";
import { IconOnlyButton } from "../Button/IconOnlyButton";

export type AvatarGroupProps = {
  /**
   * AvatarGroup ClassNames
   */
  className?: string;

  /**
   * AvatarGroup Children
   */
  children?: ReactNode;
  /**
   * AvatarGroup Size
   */
  size?: "large" | "default" | "small";

  /**
   * AvatarGroup Items to display
   */
  itemsToDisplay?: number;

  /**
   * AvatarGroup Add Button
   */
  handleAddClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  >;

  /**
   * AvatarGroup Trigger Button for List
   */
  handleMoreClick?: React.MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  >;
};

export const AvatarGroup = React.forwardRef(function AvatarGroup(
  {
    size = "default",
    handleAddClick,
    handleMoreClick,
    className,
    itemsToDisplay,
    children
  }: AvatarGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const avatarAmount = React.Children.count(children);
  return (
    <div className={cx(`${prefix}--avatar-group`, className)} ref={ref}>
      <div className={cx(`${prefix}--avatar-group__container`, className)}>
        {React.Children.toArray(children).slice(0, itemsToDisplay)}
      </div>

      {handleAddClick && (
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
});
