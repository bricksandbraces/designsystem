import React from "react";
import cx from "classnames";
import { TabProps } from "./Tab";
import { prefix } from "../../settings";
import Body from "../Typography/Body";
import { useControlledValue } from "../../hooks/useControlled";
import { mapReactChildren } from "../../helpers/reactUtilities";

export type TabsProps = {
  /**
   * Tabs Children
   */
  children?: React.ReactNode;

  /**
   * Tabs OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * Tabs DefaultIndex
   */
  defaultIndex?: number;

  /**
   * Tabs Index
   */
  index?: number;

  /**
   * Tabs ClassName
   */
  className?: string;
};

const Tabs = (
  { children, onChange, defaultIndex, className, index }: TabsProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const [selectedIndex, performIndexChange] = useControlledValue(
    index,
    defaultIndex,
    onChange,
    0
  );

  return (
    <div className={cx(`${prefix}--tabs`, className)} ref={ref}>
      <div className={`${prefix}--tabs-btn__container`}>
        {mapReactChildren<TabProps>(children, ({ props, key, index: i }) => {
          return (
            <button
              disabled={props.disabled}
              type="button"
              tabIndex={0}
              key={key}
              className={cx(`${prefix}--tabs-btn`, {
                [`${prefix}--tabs-btn__selected`]: selectedIndex === i
              })}
              onClick={() => {
                performIndexChange(i);
              }}
            >
              <Body type="body-02" className={`${prefix}--tabs-btn__label`}>
                {props.title}
              </Body>
            </button>
          );
        })}
      </div>
      <div className={`${prefix}--tabs-content`}>
        {mapReactChildren<TabProps>(children, ({ props, key, index: i }) => {
          return (
            props && (
              <div
                key={key}
                className={cx(`${prefix}--tabs-content__item`, {
                  [`${prefix}--tabs-content__item-selected`]:
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

export default React.forwardRef(Tabs);
