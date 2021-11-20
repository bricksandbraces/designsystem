import React, { ReactNode, useState, useRef } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical } from "@tabler/icons";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import Tippy from "@tippyjs/react";

type OverflowMenuProps = {
  /**
   * OverflowMenu Message
   */
  children?: string | ReactNode;

  /**
   * OverflowMenu ClassName
   */
  className?: string;

  /**
   * OverflowMenu Size
   */
  size?: "large" | "default" | "small";
};

const OverflowMenu = ({
  size = "default",
  children,
  className,
  ...props
}: OverflowMenuProps) => {
  return (
    <>
      <Tippy
        arrow={false}
        className={cx(
          `${prefix}--overflowmenu ${prefix}--overflowmenu-${size}`
        )}
        animation="bbds-animation"
        duration={150}
        trigger="click"
        placement="bottom-start"
        theme="dark"
        {...props}
        allowHTML
        content={children}
      >
        <button
          className={cx(
            `${prefix}--overflowmenu-trigger ${prefix}--overflowmenu-trigger__${size}`
          )}
        >
          <IconDotsVertical />
        </button>
      </Tippy>
    </>
  );
};

export default OverflowMenu;
