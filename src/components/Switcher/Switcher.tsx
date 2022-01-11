import cx from "classnames";
import React from "react";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlledValue } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { SwitcherItemProps } from "./SwitcherItem";

export type SwitcherProps = {
  /**
   * Switcher Children
   */
  children?: React.ReactNode;

  /**
   * Switcher Light
   */
  light?: boolean;

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

export const Switcher = React.forwardRef(function Switcher(
  {
    children,
    onChange,
    defaultIndex,
    light,
    className,
    index,
    size = "default"
  }: SwitcherProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [selectedIndex, performIndexChange] = useControlledValue(
    index,
    defaultIndex,
    onChange,
    0
  );
  const childrenCount = React.Children.count(children);
  return (
    <div
      className={cx(
        `${prefix}--switcher ${prefix}--switcher-${size}`,
        { [`${prefix}--switcher-light`]: light },
        className
      )}
      ref={ref}
    >
      <div
        className={`${prefix}--switcher-btn__container`}
        data-childrencount={childrenCount}
      >
        {mapReactChildren<SwitcherItemProps>(
          children,
          ({ props, key, index: i }) => {
            return (
              <>
                <button
                  disabled={props.disabled}
                  data-itemcount={i + 1}
                  type="button"
                  key={key}
                  className={cx(`${prefix}--switcher-btn`, {
                    [`${prefix}--switcher-btn__selected`]: selectedIndex === i
                  })}
                  onClick={() => {
                    performIndexChange(i);
                  }}
                >
                  <p className={`${prefix}--switcher-btn__label`}>
                    {props.title}
                  </p>
                </button>
                {i + 1 < childrenCount && (
                  <span className={`${prefix}--switcher-btn__divider`} />
                )}
              </>
            );
          }
        )}
        <span className={`${prefix}--switcher-indicator`} />
      </div>
      <div className={`${prefix}--switcher-content`}>
        {mapReactChildren<SwitcherItemProps>(
          children,
          ({ props, key, index: i }) => {
            const isSelected = selectedIndex === i;
            return (
              <div
                key={key}
                className={cx(`${prefix}--switcher-content__item`, {
                  [`${prefix}--switcher-content__item-selected`]: isSelected
                })}
              >
                {isSelected && props.children}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
});
