import { IconDotsVertical } from "@tabler/icons-react";
import type { TippyProps } from "@tippyjs/react";
import Tippy from "@tippyjs/react";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";

export type OverflowMenuProps = {
  /**
   * OverflowMenu Children
   */
  children: React.ReactNode;

  /**
   * OverflowMenu Icon
   */
  icon?: React.ReactElement;

  /**
   * OverflowMenu Custom TriggerNode. Ignores Icon
   */
  triggerElement?: React.ReactElement;

  /**
   * OverflowMenu Size
   */
  size?: "large" | "default" | "small";

  /**
   * OverflowMenu Light
   */
  light?: boolean;
} & Omit<TippyProps, "content" | "children">;

export const OverflowMenu = React.forwardRef(function OverflowMenu(
  {
    size = "default",
    children,
    light,
    icon = <IconDotsVertical />,
    className,
    triggerElement,
    ...props
  }: OverflowMenuProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <Tippy
      ref={ref}
      interactive
      arrow={false}
      className={cx(`${prefix}--overflowmenu ${prefix}--overflowmenu-${size}`, {
        [`${prefix}--overflowmenu-light`]: light
      })}
      animation="bbds-animation"
      trigger="click"
      placement="bottom-start"
      theme="dark"
      {...props}
      offset={[0, 8]}
      allowHTML
      content={children}
    >
      {triggerElement ? (
        triggerElement
      ) : (
        <IconOnlyButton
          icon={icon}
          size={size}
          kind="ghost"
          hideTooltip
          className={cx(`${prefix}--overflowmenu-trigger`)}
        />
      )}
    </Tippy>
  );
});
