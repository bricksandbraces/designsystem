import React, { useState, ReactNode } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";

type TabProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Label
   */
  label: string;

  /**
   * ID
   */
  id: number;
};

type TabsProps = {
  /**
   * Children
   */
  children?: TabProps[];
};

const Tabs = ({ children }: TabsProps) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="tabs">
      <div className="tabs--btn-container">
        {React.Children.map(children, (child) => {
          return (
            <button
              tabIndex={0}
              key={child.props.label}
              className={cx("tabs--btn", {
                "tabs--btn-selected": index === child.props.id
              })}
              onClick={() => {
                setIndex(child.props.id);
              }}
            >
              <Typography
                type="text"
                token="body-small"
                name={child.props.label}
                className="tabs--btn-label"
              >
                {child.props.label}
              </Typography>
            </button>
          );
        })}
      </div>
      <div className="tabs--content">
        {React.Children.map(children, (child) => {
          return (
            <div
              className={cx("tabs--content-item", {
                "tabs--content-item__selected": index === child.props.id
              })}
            >
              {index === child.props.id && child.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
