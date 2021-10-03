import React, { useState, ReactNode, useRef, useEffect } from "react";
import cx from "classnames";
import { TabProps } from "./Tab";
import { prefix } from "../../settings";
import Body from "../Typography/Body";

type TabsProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * OnChange Function
   */
  onChange?: (selectedIndex: number) => void;

  /**
   * DefaultIndex
   */
  defaultIndex?: number;

  /**
   * Index
   */
  index?: number;

  /**
   * className
   */
  className?: string;
};

const Tabs = ({
  children,
  onChange,
  defaultIndex,
  className,
  index
}: TabsProps) => {
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
    <div className={cx(`${prefix}--tabs`, className)}>
      <div className={`${prefix}--tabs--btn-container`}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<TabProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<TabProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <button
                disabled={props.disabled}
                type="button"
                tabIndex={0}
                key={child.key}
                className={cx(`${prefix}--tabs--btn`, {
                  [`${prefix}--tabs--btn-selected`]: selectedIndex === i
                })}
                onClick={() => {
                  if (!controlled) {
                    setSelectedIndex(i);
                  }
                  onChange?.(i);
                }}
              >
                <Body type="b2" className={`${prefix}--tabs--btn-label`}>
                  {props.title}
                </Body>
              </button>
            )
          );
        })}
      </div>
      <div className={`${prefix}--tabs--content`}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<TabProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<TabProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <div
                className={cx(`${prefix}--tabs--content-item`, {
                  [`${prefix}--tabs--content-item__selected`]:
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

export default Tabs;
