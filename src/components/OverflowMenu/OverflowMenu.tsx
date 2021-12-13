import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical } from "@tabler/icons";
import type { TippyProps } from "@tippyjs/react";
import Tippy from "@tippyjs/react";

export type OverflowMenuProps = {
  /**
   * OverflowMenu Children
   */
  children?: string | React.ReactNode;

  /**
   * OverflowMenu Icon
   */
  icon?: React.ReactNode;

  /**
   * OverflowMenu Size
   */
  size?: "large" | "default" | "small";
} & Omit<TippyProps, "content">;

const OverflowMenu = (
  {
    size = "default",
    children,
    icon = <IconDotsVertical />,
    className,
    ...props
  }: OverflowMenuProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  return (
    <Tippy
      ref={ref}
      interactive
      arrow={false}
      className={cx(`${prefix}--overflowmenu ${prefix}--overflowmenu-${size}`)}
      animation="bbds-animation"
      trigger="click"
      placement="bottom-start"
      theme="dark"
      {...props}
      allowHTML
      content={children}
    >
      <IconOnlyButton
        icon={icon}
        size={size}
        kind="ghost"
        hideTooltip
        className={cx(`${prefix}--overflowmenu-trigger`)}
      />
    </Tippy>
  );
};

export default React.forwardRef(OverflowMenu);
