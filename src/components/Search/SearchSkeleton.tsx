import { IconSearch } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type SearchSkeletonProps = {
  /**
   * SearchSkeleton ClassName
   */
  className?: string;

  /**
   * SearchSkeleton Size
   */
  size?: "large" | "default" | "small";
};

export const SearchSkeleton = function SearchSkeleton({
  size = "default",
  className
}: SearchSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--search ${prefix}--skeleton ${prefix}--search-${size}`,

        className
      )}
    >
      <SkeletonAnimatedContainer
        style={{ width: "100%" }}
        className={`${prefix}--search-${size}`}
      >
        <IconSearch size={16} />
      </SkeletonAnimatedContainer>
    </div>
  );
};
