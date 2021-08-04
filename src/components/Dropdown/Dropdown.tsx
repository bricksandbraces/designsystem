import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";

export type DropdownProps = {
  /**
   * Classname
   */
  className?: string;

  /**
   * Large
   */
  large?: boolean;

  /**
   * Small
   */
  small?: boolean;
};

const Dropdown = ({ large, small, className }: DropdownProps) => {
  return (
    <div className="dropdown">
      <button
        className={cx("dropdown--button dropdown-toggle", {
          "dropdown--small": small,
          "dropdown--large": large
        })}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
        <IconChevronDown />
      </button>
      <ul
        className={cx("dropdown-menu", {
          "dropdown--small": small,
          "dropdown--large": large
        })}
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item active" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
