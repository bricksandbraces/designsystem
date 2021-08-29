import { IconChevronDown } from "@tabler/icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { useMeasure } from "react-use";
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
  defaultSelectedIndices?: number[];

  /**
   * Index
   */
  selectedIndices?: number[];
};

const Accordion = ({
  children,
  className,
  onChange,
  defaultSelectedIndices,
  selectedIndices
}: AccordionProps) => {
  const [ref, { height }] = useMeasure();
  const [collapse, setCollapse] = useState(false);
  const [expand, setExpand] = useState(false);
  const { current: controlled } = useRef(selectedIndices != null);
  const [selectedIndexList, setSelectedIndexList] = useState<number[]>(
    (controlled ? selectedIndices : defaultSelectedIndices) ?? []
  );
  useEffect(() => {
    if (controlled) {
      setSelectedIndexList(selectedIndices ?? []);
    }
  }, [selectedIndices]);
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
              ref={ref}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={cx("accordion--item", {
                "accordion--item-collapse":
                  collapse && selectedIndexList.includes(i),
                "accordion--item-expand":
                  expand && selectedIndexList.includes(i),
                "accordion--item-open": selectedIndexList.includes(i)
              })}
            >
              <button
                className="accordion--heading"
                onClick={() => {
                  if (!controlled) {
                    if (selectedIndexList.includes(i)) {
                      setCollapse(true);
                      setSelectedIndexList(
                        selectedIndexList.filter(
                          (selectedItemIndex) => i !== selectedItemIndex
                        )
                      );
                      setTimeout(() => {
                        setCollapse(false);
                      }, 200);
                    } else {
                      setExpand(true);
                      setSelectedIndexList([...selectedIndexList, i]);
                      setTimeout(() => {
                        setExpand(false);
                      }, 200);
                    }
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
