import { IconChevronDown } from "@tabler/icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AccordionItemProps } from "./AccordionItem";
import { prefix } from "../../settings";
import Body from "../Typography/Body";

type AccordionProps = {
  /**
   * Children
   */
  children?: ReactNode;

  /**
   * Classnames for the parent element
   */
  className?: string;

  /**
   * OnChange function delivering the toggled index
   */
  onChange?: (selectedIndex: number) => void;
  defaultOpenIndices?: number[];
  openIndices?: number[];
};

enum AnimationType {
  NONE,
  COLLAPSE,
  EXPAND
}

const Accordion = ({
  children,
  className,
  onChange,
  defaultOpenIndices,
  openIndices
}: AccordionProps) => {
  const [itemAnimations, setItemAnimations] = useState<AnimationType[]>(
    React.Children.map(children, () => AnimationType.NONE) as AnimationType[]
  );

  const setAnimationForItem = (
    itemIndex: number,
    animationType: AnimationType
  ) => {
    setItemAnimations(
      itemAnimations.map((itemAnimation, j) =>
        itemIndex === j ? animationType : itemAnimation
      )
    );
  };

  const { current: controlled } = useRef(openIndices != null);
  const [openIndexList, setOpenIndexList] = useState<number[]>(
    (controlled ? openIndices : defaultOpenIndices) ?? []
  );
  useEffect(() => {
    if (controlled) {
      const newOpenIndices = openIndices ?? [];
      const newAnimations = React.Children.map(children, (_, childIndex) => {
        if (
          openIndexList.includes(childIndex) !==
          newOpenIndices.includes(childIndex)
        ) {
          if (newOpenIndices.includes(childIndex)) {
            return AnimationType.EXPAND;
          }
          return AnimationType.COLLAPSE;
        }
        return AnimationType.NONE;
      });
      setItemAnimations(newAnimations ?? []);
      setOpenIndexList(openIndices ?? []);
    }
  }, [openIndices]);
  return (
    <ul className={cx(`${prefix}--accordion`, className)}>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement<AccordionItemProps>(child)) {
          return child;
        }
        const elementChild: React.ReactElement<AccordionItemProps> = child;
        const { props } = elementChild;
        const open = openIndexList.includes(i);
        return (
          props && (
            <li
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={cx(`${prefix}--accordion--item`, {
                [`${prefix}--accordion--item-collapse`]:
                  itemAnimations[i] === AnimationType.COLLAPSE && open,
                [`${prefix}--accordion--item-expand`]:
                  itemAnimations[i] === AnimationType.EXPAND && open,
                [`${prefix}--accordion--item-open`]: open
              })}
              onAnimationEnd={() => {
                setAnimationForItem(i, AnimationType.NONE);
              }}
            >
              <button
                disabled={props.disabled}
                className={`${prefix}--accordion--heading`}
                onClick={() => {
                  if (!controlled) {
                    if (openIndexList.includes(i)) {
                      setAnimationForItem(i, AnimationType.COLLAPSE);
                      setOpenIndexList(
                        openIndexList.filter(
                          (selectedItemIndex) => i !== selectedItemIndex
                        )
                      );
                    } else {
                      setAnimationForItem(i, AnimationType.EXPAND);
                      setOpenIndexList([...openIndexList, i]);
                    }
                  }
                  onChange?.(i);
                }}
              >
                <Body
                  type="b1"
                  className={`${prefix}--accordion--heading-title`}
                >
                  {props.title}
                </Body>
                <IconChevronDown
                  className={`${prefix}--accordion--heading-icon`}
                  size={16}
                />
              </button>
              <Body type="b1" className={`${prefix}--accordion--content`}>
                {props.children}
              </Body>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default Accordion;
