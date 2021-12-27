import { IconChevronDown } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type HeaderNavTriggerProps = {
  /**
   * HeaderNavTrigger Label
   */
  label?: string;

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

export const HeaderNavTrigger = React.forwardRef(function HeaderNavTrigger(
  { className, label, onClick, open, selected, ...rest }: HeaderNavTriggerProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
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
      {label}
      <IconChevronDown />
    </button>
  );
});
