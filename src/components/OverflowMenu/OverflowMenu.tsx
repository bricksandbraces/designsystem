import React, { ReactNode, useState, useRef } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButton from "../Button/IconOnlyButton";
import { IconDotsVertical } from "@tabler/icons";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";

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
  const divRef = useRef<HTMLDivElement>(null);
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
        <OutsideClickListener
          onClickOutside={() => {
            setOpen(false);
          }}
          disabled={!open}
          ref={divRef}
        >
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
        </OutsideClickListener>
      </div>
    </>
  );
};

export default OverflowMenu;
