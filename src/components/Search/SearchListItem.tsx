import React, { useEffect, useState } from "react";
import cx from "classnames";
import { IconClock } from "@tabler/icons";
import { prefix } from "../../settings";

/**
 * Determine whether the list item is a result item or a recents item.
 * By habit, the suitable recents are displayed before the result.
 */
export enum SearchListItemType {
  RESULT,
  RECENT
}

export type SearchListItemProps = {
  /**
   * SearchListItem Type See SearchListItemType
   */
  type: SearchListItemType;

  /**
   * SearchListItem Label
   */
  label: string;

  /**
   * SearchListItem Href
   */
  href: string;

  /**
   * SearchListItem ClassName
   */
  className?: string;

  /**
   * SearchListItem OnClick
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * SearchListItem OnMouseEnter
   */
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * SearchListItem OnMouseLeave
   */
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;

  /**
   * SearchListItem Provides a way to additionally trigger a manual hover. A falsy value does NOT override the real hover state.
   */
  manuallyHovered?: boolean;
};

const SearchListItem = (
  {
    className,
    type,
    label,
    href,
    manuallyHovered,
    onClick,
    onMouseEnter,
    onMouseLeave
  }: SearchListItemProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  const [hovered, setHovered] = useState<boolean>(manuallyHovered ?? false);
  useEffect(() => {
    if (manuallyHovered !== undefined) {
      setHovered(manuallyHovered);
    }
  }, [manuallyHovered]);

  const isRecent = type === SearchListItemType.RECENT;

  return (
    <a
      ref={ref}
      className={cx(
        `${prefix}--search-box__content-list-item`,
        {
          [`${prefix}--search-box__content-list-item--recent`]: isRecent,
          [`${prefix}--search-box__content-list-item--result`]: !isRecent,
          [`${prefix}--search-box__content-list-item--manual-hover`]: hovered
        },
        className
      )}
      href={href}
      tabIndex={-1}
      onClick={onClick}
      onMouseEnter={(event) => {
        setHovered(true);
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        setHovered(manuallyHovered ?? false);
        onMouseLeave?.(event);
      }}
    >
      {isRecent && (
        <IconClock
          size={16}
          className={cx(
            `${prefix}--search-box__content-list-item--recent__icon`
          )}
        />
      )}
      {label}
    </a>
  );
};

export default React.forwardRef<HTMLAnchorElement, SearchListItemProps>(
  SearchListItem
);
