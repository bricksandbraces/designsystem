import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";

type DropdownItem = {
  /**
   * Link to location
   */
  href: string;

  /**
   * Label that is shown
   */
  label: string;

  /**
   * Selected item
   */
  selected?: boolean;
};

export type DropdownProps = {
  /**
   * Classname
   */
  className?: string;

  /**
   * Dropdown ID
   */
  id: string;

  /**
   * Size
   */
  size?: "default" | "small" | "large";

  /**
   * DropdownItems
   */
  dropdownItems: DropdownItem[];
};

const Dropdown = ({
  dropdownItems,
  id,
  size = "default",
  className
}: DropdownProps) => {
  return (
    <div className="dropdown">
      <button
        className={cx(
          "dropdown--button dropdown-toggle",
          {
            "dropdown--default": size === "default",
            "dropdown--small": size === "small",
            "dropdown--large": size === "large"
          },
          className
        )}
        type="button"
        id={id}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
        <IconChevronDown />
      </button>
      <ul
        className={cx("dropdown-menu", {
          "dropdown--default": size === "default" || undefined,
          "dropdown--small": size === "small",
          "dropdown--large": size === "large"
        })}
        aria-labelledby={id}
      >
        {dropdownItems?.map((item) => {
          return (
            <li key={item.href}>
              <a
                className={cx("dropdown-item", {
                  active: item.selected
                })}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
