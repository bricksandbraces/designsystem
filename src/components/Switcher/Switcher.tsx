import React, { useState, ReactNode, useRef, useEffect } from "react";
import cx from "classnames";
import { SwitcherItemProps } from "./SwitcherItem";
import { prefix } from "../../settings";
import Body from "../Typography/Body";

type SwitcherProps = {
  /**
   * Switcher Children
   */
  children?: ReactNode;

  /**
   * Switcher OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * Switcher DefaultIndex
   */
  defaultIndex?: number;

  /**
   * Switcher Index
   */
  index?: number;

  /**
   * Switcher Size
   */
  size?: "small" | "default" | "large";

  /**
   * Switcher ClassName
   */
  className?: string;
};

const Switcher = ({
  children,
  onChange,
  defaultIndex,
  className,
  index,
  size = "default"
}: SwitcherProps) => {
  const { current: controlled } = useRef(index != null);
  const [selectedIndex, setSelectedIndex] = useState(
    (controlled ? index : defaultIndex) ?? 0
  );
  useEffect(() => {
    if (controlled) {
      setSelectedIndex(index ?? 0);
    }
  }, [index]);

  return (
    <div
      className={cx(
        `${prefix}--switcher ${prefix}--switcher-${size}`,
        className
      )}
    >
      <div className={`${prefix}--switcher-btn__container`}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<SwitcherItemProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<SwitcherItemProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <button
                disabled={props.disabled}
                type="button"
                tabIndex={0}
                key={child.key}
                className={cx(`${prefix}--switcher-btn`, {
                  [`${prefix}--switcher-btn__selected`]: selectedIndex === i
                })}
                onClick={() => {
                  if (!controlled) {
                    setSelectedIndex(i);
                  }
                  onChange?.(i);
                }}
              >
                <Body
                  type="body-02"
                  className={`${prefix}--switcher-btn__label`}
                >
                  {props.title}
                </Body>
              </button>
            )
          );
        })}
      </div>
      <div className={`${prefix}--switcher-content`}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<SwitcherItemProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<SwitcherItemProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <div
                className={cx(`${prefix}--switcher-content__item`, {
                  [`${prefix}--switcher-content__item-selected`]:
                    selectedIndex === i
                })}
              >
                {selectedIndex === i && props.children}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Switcher;
