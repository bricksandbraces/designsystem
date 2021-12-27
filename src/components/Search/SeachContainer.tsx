import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type SearchContainerProps = {
  /**
   * SearchContainer Open Defining if the Container is expanded (open) or closed
   */
  open?: boolean;

  /**
   * SearchContainer ClassName
   */
  className?: string;

  /**
   * SearchConatiner Children
   */
  children: React.ReactNode;
};

export const SearchContainer = React.forwardRef(function SearchContainer(
  { open, children, className }: SearchContainerProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cx(
        `${prefix}--search-box`,
        {
          [`${prefix}--search-box__open`]: open
        },
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});
