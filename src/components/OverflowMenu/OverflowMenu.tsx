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

const OverflowMenu = (
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
) => {
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
};

export default React.forwardRef(OverflowMenu);
