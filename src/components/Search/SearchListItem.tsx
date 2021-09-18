import React, { useEffect, useState } from "react";
import cx from "classnames";
import { IconClock } from "@tabler/icons";

export enum SearchListItemType {
  RESULT,
  RECENT
}

export type SearchListItemProps = {
  type: SearchListItemType;
  label: string;
  href: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * Provides a way to additionally trigger a manual hover. A falsy value does NOT override the real hover state.
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
  ref: ForwardedRef<HTMLAnchorElement>
) => {
  const [hovered, setHovered] = useState<boolean>(manuallyHovered ?? false);
  useEffect(() => {
    if (manuallyHovered !== undefined) {
      setHovered(manuallyHovered);
    }
  }, [manuallyHovered]);
  return (
    <a
      ref={ref}
      className={cx(
        {
          "search--box-content__list-item--recent":
            type === SearchListItemType.RECENT,
          "search--box-content__list-item--result":
            type === SearchListItemType.RESULT,
          "search--box-content__list-item__manual-hover": hovered
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
      {type === SearchListItemType.RECENT && (
        <IconClock
          size={16}
          className="search--box-content__list-items--recent-icon"
        />
      )}
      {label}
    </a>
  );
};

export default React.forwardRef<HTMLAnchorElement, SearchListItemProps>(
  SearchListItem
);
