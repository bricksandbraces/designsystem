import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconChevronDown
} from "@tabler/icons";
import { findNextItem } from "../../helpers/arrayUtilities";
import { useControlled } from "../../hooks/useControlled";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import { prefix } from "../../settings";
import Label from "../Typography/Label";
import { withoutPropagation } from "../../helpers/eventUtilities";

export type DropdownItem = {
  /**
   * DropdownItem Id
   */
  id?: string;

  /**
   * DropdownItem Value
   */
  value: string;

  /**
   * DropdownItem Label
   */
  text: string;

  /**
   * DropdownItem Disabled
   */
  disabled?: boolean;
};

export type DropdownProps = {
  /**
   * Dropdown Id
   */
  id: string;

  /**
   * Dropdown ClassName
   */
  className?: string;

  /**
   * Dropdown Size
   */
  size?: "large" | "small" | "default";

  /**
   * Dropdown Label
   */
  label?: string;

  /**
   * Dropdown Disabled
   */
  disabled?: boolean;

  /**
   * Dropdown ReadOnly
   */
  readOnly?: boolean;

  /**
   * Dropdown Error State Active. Overwrites warning state.
   */
  error?: boolean;

  /**
   * Dropdown Error Text. Only visible on error state.
   */
  errorText?: string;

  /**
   * Dropdown Warning State Active. Gets overwritten by error state.
   */
  warning?: boolean;

  /**
   * Dropdown Warning Text. Only visible on warning state.
   */
  warningText?: string;

  /**
   * Dropdown Title
   */
  title: string;

  /**
   * Dropdown Items
   */
  items: DropdownItem[];

  /**
   * Dropdown Controlled value of the selected dropdown item
   */
  value?: string | null;

  /**
   * Dropdown Uncontrolled default value of the selected dropdown item
   */
  defaultValue?: string | null;

  /**
   * Dropdown OnChange Function for listeners or value change requests in controlled mode
   */
  onChange?: (
    newValue: string | null,
    event:
      | React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => void;

  /**
   * Dropdown OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;

  /**
   * Dropdown OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
};

const Dropdown = (
  {
    value,
    id,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    size = "default",
    label,
    className,
    title,
    items,
    error,
    errorText,
    warning,
    warningText,
    disabled,
    readOnly
  }: DropdownProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const controlled = useControlled(value);

  const ulRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedValue, setSelectedValue] = useState<string | null>(
    (controlled ? value : defaultValue) ?? null
  );
  const selectedText =
    items.filter((el) => el.value === selectedValue)[0]?.text ?? "";
  const [open, setOpen] = useState(false);

  const selectValue = (
    newValue: string | null,
    event:
      | React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (!controlled) {
      setSelectedValue(newValue);
    }
    onChange?.(newValue, event);
  };

  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? null);
    }
  }, [value]);

  const focusListItem = (index: number) => {
    (ulRef.current?.children[index].children[0] as HTMLDivElement).focus();
  };

  const handleKeyPressOnItem = (
    event: React.KeyboardEvent<HTMLDivElement>,
    key: string,
    valueToSelect: string,
    i: number
  ) => {
    if (key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();
      // find the next item that is not disabled. Start from the beginning again.
      const { index: newIndex } = findNextItem(
        items,
        (it) => !it.disabled,
        i,
        key === "ArrowDown"
      );
      if (newIndex != null) {
        focusListItem(newIndex);
      }
    } else if (key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    } else if (key === " " || key === "Enter") {
      selectValue(valueToSelect, event);
      btnRef.current?.focus();
    }
  };

  return (
    <div
      className={cx(
        `${prefix}--dropdown`,
        {
          [`${prefix}--dropdown-error`]: error || errorText,
          [`${prefix}--dropdown-warning`]:
            !(error || errorText) && (warning || warningText),
          [`${prefix}--dropdown-readonly`]: readOnly
        },
        className
      )}
      ref={ref}
    >
      <Label htmlFor={`${id}-toggle-button`}>{label}</Label>
      <button
        id={`${id}-toggle-button`}
        disabled={disabled}
        ref={btnRef}
        aria-expanded={open}
        className={cx(`${prefix}--dropdown-${size} ${prefix}--dropdown-toggle`)}
        onClick={withoutPropagation(() => {
          setOpen(!open);
        })}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <p className={`${prefix}--dropdown-toggle__title`} title={selectedText}>
          {selectedValue == null ? title : selectedText}
        </p>
        <IconChevronDown
          size={16}
          className={cx(`${prefix}--dropdown-icon`, {
            [`${prefix}--dropdown-icon__open`]: open
          })}
        />
      </button>
      {errorText && !warningText && (
        <div className={`${prefix}--dropdown-error__text`}>
          <IconAlertCircle size={16} />

          {errorText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--dropdown-warning__text`}>
          <IconAlertTriangle size={16} />

          {warningText}
        </div>
      )}
      <OutsideClickListener
        onClickOutside={() => {
          setOpen(false);
        }}
        disabled={!open}
        ref={ulRef}
      >
        <ul
          role="menu"
          className={cx(`${prefix}--dropdown-menu`, {
            [`${prefix}--dropdown-menu__open`]: open
          })}
          aria-hidden={!open}
        >
          {items.map((item, i) => {
            return (
              <li
                key={item.value}
                className={cx(
                  `${prefix}--dropdown-menu__item ${prefix}--dropdown-${size}`,
                  {
                    [`${prefix}--dropdown-menu__item-disabled`]: item.disabled,
                    [`${prefix}--dropdown-menu__item-selected`]:
                      selectedValue === item.value
                  }
                )}
                id={item.id}
                value={item.value}
                title={item.text}
              >
                <div
                  role="button"
                  className={`${prefix}--dropdown-menu__item-interactible`}
                  tabIndex={item.disabled || !open ? -1 : 0}
                  onClick={(event) => {
                    selectValue(item.value, event);
                    setOpen(false);
                  }}
                  onKeyDown={(event) =>
                    handleKeyPressOnItem(event, event.key, item.value, i)
                  }
                >
                  <div
                    className={`${prefix}--dropdown-menu__item-text`}
                    role="button"
                  >
                    <span title={item.text}>{item.text}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </OutsideClickListener>
    </div>
  );
};

export default React.forwardRef(Dropdown);
