import cx from "classnames";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlledValue } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { Body } from "../Typography/Typography";
import { TabProps } from "./Tab";

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

  /**
   * Tabs ContainerClassName
   */
  containerClassName?: string;

  /** Tabs ContainerRef A ref to a DOM element you can pass to render the tabs content on another place than the tab navigation. */
  containerRef?: React.MutableRefObject<HTMLElement | null>;
};

export const Tabs = React.forwardRef(function Tabs(
  {
    children,
    onChange,
    defaultIndex,
    className,
    containerClassName,
    index,
    containerRef
  }: TabsProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [selectedIndex, performIndexChange] = useControlledValue(
    index,
    defaultIndex,
    onChange,
    0
  );

  const [containerElement, setContainerElement] = useState(
    containerRef?.current
  );

  useEffect(() => {
    setContainerElement(containerRef?.current);
  }, [containerRef?.current]);

  const content = (
    <div className={containerClassName}>
      {mapReactChildren<TabProps>(children, ({ props, key, index: i }) => {
        return (
          props && (
            <div
              key={key}
              className={cx(`${prefix}--tabs-content__item`, {
                [`${prefix}--tabs-content__item-selected`]: selectedIndex === i
              })}
            >
              {selectedIndex === i && props.children}
            </div>
          )
        );
      })}
    </div>
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
      {containerElement
        ? ReactDOM.createPortal(content, containerElement)
        : content}
    </div>
  );
});
