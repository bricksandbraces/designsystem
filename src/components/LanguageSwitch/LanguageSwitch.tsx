import React, { forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import mergeRefs from "react-merge-refs";
import useControlled from "../../hooks/useControlled";

type LanguageSwitchItem = {
  /**
   * LanguageSwitch ID
   */
  id: string;

  /**
   * LanguageSwitch label
   */
  label: string;

  /**
   * LanguageSwitch value
   */
  value: string;
};

type LanguageSwitchProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * LanguageSwitch ID
   */
  id?: string;

  /**
   * LanguageSwitch Value (Controlled)
   */
  value?: string;

  /**
   * LanguageSwitch Default Value (Uncontrolled)
   */
  defaultValue?: string;

  onChange?: (
    newValue: string,
    event: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => void;
  disabled?: boolean;

  /**
   * LanguageSwitch Items
   */
  items: LanguageSwitchItem[];
};

const LanguageSwitch = (
  {
    id,
    className,
    items,
    value,
    defaultValue,
    onChange,
    ...rest
  }: LanguageSwitchProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>(
    (controlled ? value : defaultValue) ?? items[0].value
  );
  useEffect(() => {
    if (controlled) {
      setSelectedValue(value ?? items[0].value);
    }
  }, [value]);

  return (
    <form>
      <fieldset>
        <label className="language-switch">
          <input
            className="language-switch--input"
            tabIndex={0}
            ref={mergeRefs([ref, inputRef])}
            type="select"
            value={selectedValue}
            id={id}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                inputRef.current?.click();
              }
            }}
            onChange={() => {}}
            onClick={(event) => {
              const currentIndex =
                items.findIndex((el) => el.value === selectedValue) ?? 0;
              const nextIndex =
                currentIndex === items.length - 1 ? 0 : currentIndex + 1;
              const newValue = items[nextIndex].value;
              if (!controlled) {
                setSelectedValue(newValue);
              }
              onChange?.(newValue, event);
            }}
            {...rest}
          />
          <div className="language-switch--slider">
            <div className="language-switch--lang">
              {items.map((item, i) => {
                return (
                  <React.Fragment key={item.id}>
                    <span
                      className={cx("language-switch--lang-item", {
                        "language-switch--lang-item__selected":
                          selectedValue === item.value
                      })}
                    >
                      {item.label}
                    </span>
                    {i !== items.length - 1 && (
                      <span className="language-switch--lang-item__divider" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </label>
      </fieldset>
    </form>
  );
};

export default forwardRef<HTMLInputElement, LanguageSwitchProps>(
  LanguageSwitch
);
