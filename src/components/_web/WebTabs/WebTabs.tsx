import cx from "classnames";
import React from "react";
import { mapReactChildren } from "../../../helpers/reactUtilities";
import { useControlledValue } from "../../../hooks/useControlled";
import { prefix } from "../../../settings";
import { WebTabProps } from "./WebTab";

export type WebTabsProps = {
  /**
   * WebTabs Children
   */
  children?: React.ReactNode;

  /**
   * WebTabs OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * WebTabs DefaultIndex
   */
  defaultIndex?: number;

  /**
   * WebTabs Index
   */
  index?: number;

  /**
   * WebTabs ClassName
   */
  className?: string;
};

export const WebTabs = React.forwardRef(function WebTabs(
  { children, onChange, defaultIndex, className, index }: WebTabsProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [selectedIndex, performIndexChange] = useControlledValue(
    index,
    defaultIndex,
    onChange,
    0
  );

  return (
    <div className={cx(`${prefix}--webtabs`, className)} ref={ref}>
      <div className={`${prefix}--webtabs-btn__container`}>
        {mapReactChildren<WebTabProps>(children, ({ props, key, index: i }) => {
          return (
            <button
              disabled={props.disabled}
              type="button"
              tabIndex={0}
              key={key}
              className={cx(`${prefix}--webtabs-btn`, {
                [`${prefix}--webtabs-btn__selected`]: selectedIndex === i
              })}
              onClick={() => {
                performIndexChange(i);
              }}
            >
              <p
                title={props.title}
                className={`${prefix}--webtabs-btn__label`}
              >
                {props.title}
              </p>
            </button>
          );
        })}
      </div>
      <div className={`${prefix}--webtabs-content`}>
        {mapReactChildren<WebTabProps>(children, ({ props, key, index: i }) => {
          return (
            props && (
              <div
                key={key}
                className={cx(`${prefix}--webtabs-content__item`, {
                  [`${prefix}--webtabs-content__item-selected`]:
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
});
