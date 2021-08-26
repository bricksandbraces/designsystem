import { IconChevronDown } from "@tabler/icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import { AccordionItemProps } from "./AccordionItem";

type AccordionProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Classnames
   */
  className?: string;

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

const Accordion = ({
  children,
  className,
  onChange,
  defaultIndex,
  index
}: AccordionProps) => {
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
    <ul className={cx("accordion", className)}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement<AccordionItemProps>(child)) {
          return child;
        }
        const elementChild: React.ReactElement<AccordionItemProps> = child;
        const { props } = elementChild;
        return (
          props && (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={cx("accordion--item", {
                "accordion--item-open": selectedIndex === i
              })}
            >
              <button
                className="accordion--heading"
                onClick={() => {
                  if (!controlled) {
                    setSelectedIndex(i);
                  }
                  onChange?.(i);
                }}
              >
                <Typography
                  type="span"
                  token="body-small"
                  className="accordion--heading-title"
                >
                  {props.title}
                </Typography>
                <IconChevronDown
                  className="accordion--heading-icon"
                  size={16}
                />
              </button>
              <Typography
                type="text"
                token="body-small"
                className="accordion--content"
              >
                {props.children}
              </Typography>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Accordion;
