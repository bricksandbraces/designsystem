import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical } from "@tabler/icons";
import Tippy from "@tippyjs/react";

type OverflowMenuProps = {
  /**
   * OverflowMenu Children
   */
  children?: string | ReactNode;

  /**
   * OverflowMenu ClassName
   */
  className?: string;

  /**
   * OverflowMenu Icon
   */
  icon?: ReactNode;

  /**
   * OverflowMenu Size
   */
  size?: "large" | "default" | "small";

  /**
   * OverflowMenu Light
   */
  light?: boolean;
};

const OverflowMenu = ({
  size = "default",
  children,
  icon = <IconDotsVertical />,
  className,
  light,
  ...props
}: OverflowMenuProps) => {
  return (
    <>
      <Tippy
        interactive
        arrow={false}
        className={cx(
          `${prefix}--overflowmenu ${prefix}--overflowmenu-${size}`,
          { [`${prefix}--overflowmenu-light`]: light }
        )}
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
    </>
  );
};

export default OverflowMenu;
