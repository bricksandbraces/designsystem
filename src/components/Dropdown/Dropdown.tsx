import React, { useState } from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";

type DropdownProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Checkbox ID
   */
  id?: string;

  /**
   * Dropdown size
   */
  size?: "large" | "small" | "default";

  /**
   * Checkbox Label
   */
  label?: string;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
};

const Dropdown = ({
  id,
  value,
  size,
  checked,
  defaultChecked,
  label,
  className,
  ...rest
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={cx(
          "dropdown",
          {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default"
          },
          className
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {label}
        <IconChevronDown
          size={16}
          className={cx("dropdown--icon", { "dropdown--icon-open": open })}
        />
      </button>
      <div className={cx("dropdown--menu", { "dropdown--menu-open": open })}>
        <div
          className={cx("dropdown--menu-item", {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default"
          })}
        >
          <span className="dropdown--menu-item__label">Option 1</span>
        </div>

        <div
          className={cx("dropdown--menu-item", {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default"
          })}
        >
          <span className="dropdown--menu-item__label">Option 2</span>
        </div>
        <div
          className={cx("dropdown--menu-item", {
            "dropdown--large": size === "large",
            "dropdown--small": size === "small",
            "dropdown--default": size === "default"
          })}
        >
          <span className="dropdown--menu-item__label">Option 3</span>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
