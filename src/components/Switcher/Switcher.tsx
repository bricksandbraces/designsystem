import React from "react";
import cx from "classnames";
import { SwitcherItemProps } from "./SwitcherItem";
import { prefix } from "../../settings";
import Body from "../Typography/Body";
import { useControlledValue } from "../../hooks/useControlled";
import { mapReactChildren } from "../../helpers/reactUtilities";

export type SwitcherProps = {
  /**
   * Switcher Children
   */
  children?: React.ReactNode;

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

const Switcher = (
  {
    children,
    onChange,
    defaultIndex,
    className,
    index,
    size = "default"
  }: SwitcherProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [selectedIndex, performIndexChange] = useControlledValue(
    index,
    defaultIndex,
    onChange,
    0
  );

  return (
    <div
      className={cx(
        `${prefix}--switcher ${prefix}--switcher-${size}`,
        className
      )}
      ref={ref}
    >
      <div className={`${prefix}--switcher-btn__container`}>
        {mapReactChildren<SwitcherItemProps>(
          children,
          ({ props, key, index: i }) => {
            return (
              <button
                disabled={props.disabled}
                type="button"
                key={key}
                className={cx(`${prefix}--switcher-btn`, {
                  [`${prefix}--switcher-btn__selected`]: selectedIndex === i
                })}
                onClick={() => {
                  performIndexChange(i);
                }}
              >
                <Body
                  type="body-02"
                  className={`${prefix}--switcher-btn__label`}
                >
                  {props.title}
                </Body>
              </button>
            );
          }
        )}
      </div>
      <div className={`${prefix}--switcher-content`}>
        {mapReactChildren<SwitcherItemProps>(
          children,
          ({ props, key, index: i }) => {
            return (
              <div
                key={key}
                className={cx(`${prefix}--switcher-content__item`, {
                  [`${prefix}--switcher-content__item-selected`]:
                    selectedIndex === i
                })}
              >
                {selectedIndex === i && props.children}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Switcher);
