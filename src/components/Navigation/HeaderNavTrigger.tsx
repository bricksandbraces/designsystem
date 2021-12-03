import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";

export type HeaderNavTriggerProps = {
  /**
   * HeaderNavTrigger Children
   */
  children?: React.ReactNode;

  /**
   * HeaderNavTrigger ClassName
   */
  className?: string;

  /**
   * HeaderNavTrigger Open
   */
  open?: boolean;

  /**
   * HeaderNavTrigger Selected
   */
  selected?: boolean;

  /**
   * HeaderNavTrigger OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const HeaderNavTrigger = (
  {
    className,
    children,
    onClick,
    open,
    selected,
    ...rest
  }: HeaderNavTriggerProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={cx(
        `${prefix}--navigation-header__nav-link ${prefix}--navigation-header__nav-trigger`,
        {
          [`${prefix}--navigation-header__nav-link--selected`]: selected,
          [`${prefix}--navigation-header__nav-trigger--open`]: open
        },
        className
      )}
      ref={ref}
    >
      {children}
      <IconChevronDown />
    </button>
  );
};

export default React.forwardRef(HeaderNavTrigger);
