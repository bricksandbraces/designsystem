import React, { ReactNode, useState } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical } from "@tabler/icons";

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
  className
}: OverflowMenuProps) => {
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  return (
    <>
      <div className={`${prefix}--overflowmenu-container`}>
        <IconOnlyButton
          hideTooltip
          kind="ghost"
          icon={<IconDotsVertical />}
          ref={setReferenceElement}
          onClick={() => {
            setOpen(!open);
          }}
          size={size}
        />
        <div
          ref={setPopperElement}
          className={cx(
            `${prefix}--overflowmenu ${prefix}--overflowmenu-${size}`,
            { [`${prefix}--overflowmenu-open`]: open },
            className
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default OverflowMenu;
