import React, { useState, ReactNode, useRef, useEffect } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import { TabProps } from "./Tab";

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
};

const Tabs = ({ children, onChange, defaultIndex, index }: TabsProps) => {
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
    <div className="tabs">
      <div className="tabs--btn-container">
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<TabProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<TabProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <button
                type="button"
                tabIndex={0}
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className={cx("tabs--btn", {
                  "tabs--btn-selected": selectedIndex === i
                })}
                onClick={() => {
                  if (!controlled) {
                    setSelectedIndex(i);
                  }
                  onChange?.(i);
                }}
              >
                <Typography
                  type="text"
                  token="body-small"
                  name={props.label}
                  className="tabs--btn-label"
                >
                  {props.label}
                </Typography>
              </button>
            )
          );
        })}
      </div>
      <div className="tabs--content">
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<TabProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<TabProps> = child;
          const { props } = elementChild;
          return (
            props && (
              <div
                className={cx("tabs--content-item", {
                  "tabs--content-item__selected": selectedIndex === i
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
