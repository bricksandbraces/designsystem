import React, { useEffect, useState } from "react";
import cx from "classnames";
import { findNextItem } from "../../helpers/arrayUtilities";
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
  index?: number;

  /**
   * LanguageSwitch Default Value (Uncontrolled)
   */
  defaultIndex?: number;

  onChange?: (
    newIndex: number,
    event: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => void;
  disabled?: boolean;

  /**
   * LanguageSwitch Items
   */
  items: LanguageSwitchItem[];
};

const LanguageSwitch = ({
  id,
  className,
  items,
  index,
  defaultIndex,
  onChange,
  ...rest
}: LanguageSwitchProps) => {
  const controlled = useControlled(index);
  const [selectedIndex, setSelectedIndex] = useState<number>(
    (controlled ? index : defaultIndex) ?? 0
  );
  useEffect(() => {
    if (!controlled) {
      setSelectedIndex(index ?? 0);
    }
  }, [index]);
  return (
    <form>
      <fieldset>
        <label className="language-switch">
          <input
            className="language-switch--input"
            tabIndex={0}
            type="select"
            value={items[selectedIndex].value}
            id={id}
            onChange={() => {}}
            onClick={(event) => {
              const newIndex =
                findNextItem(items, () => true, 0, true).index ?? 0;
              if (!controlled) {
                setSelectedIndex(newIndex);
              }
              onChange?.(newIndex, event);
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
                          selectedIndex === i
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

export default LanguageSwitch;
