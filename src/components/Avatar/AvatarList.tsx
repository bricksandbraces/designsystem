import React from "react";
import cx from "classnames";
import { FloatingPanel } from "../FloatingPanel/FloatingPanel";
import { Avatar } from "./Avatar";
import { prefix } from "../../settings";

export type AvatarListItemProps = {
  /**
   * AvatarListItem Id
   */
  id?: string;

  /**
   * AvatarListItem Name
   */
  name: string;

  /**
   * AvatarListItem Image URL
   */
  imgUrl?: string;

  /**
   * AvatarListItem Additional Information
   */
  additionalInformation?: string;

  /**
   * AvatarListItem Actions
   */
  actions?: React.ReactNode;
};

export const AvatarListItem = ({
  name,
  imgUrl,
  additionalInformation,
  actions
}: AvatarListItemProps) => {
  return (
    <li className={`${prefix}--avatar-list__item`}>
      <Avatar name={name} imgUrl={imgUrl} size="small" />
      <div className={`${prefix}--avatar-list__item-container`}>
        <div className={`${prefix}--avatar-list__item-text`}>
          <p className={`${prefix}--avatar-list__item-text--heading`}>{name}</p>
          <p className={`${prefix}--avatar-list__item-text--body`}>
            {additionalInformation}
          </p>
        </div>
        {actions && (
          <div className={`${prefix}--avatar-list__item-container--actions`}>
            {actions}
          </div>
        )}
      </div>
    </li>
  );
};

export type AvatarListProps = {
  /**
   * AvatarList ID
   */
  id?: string;

  /**
   * AvatarList ClassName
   */
  className?: string;

  /**
   * AvatarList Children
   */
  children?: React.ReactNode;

  /**
   * AvatarList Footer for items that should be placed below the list within the panel
   */
  footer?: React.ReactNode;
};

export const AvatarList = React.forwardRef(function AvatarList(
  { id, className, children, footer }: AvatarListProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  return (
    <FloatingPanel className={`${prefix}--avatar-list__panel`}>
      <ul id={id} className={cx(`${prefix}--avatar-list`, className)} ref={ref}>
        {children}
      </ul>
      {footer && (
        <div className={`${prefix}--avatar-list__footer`}>{footer}</div>
      )}
    </FloatingPanel>
  );
});
