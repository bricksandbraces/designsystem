import { IconChevronDown } from "@tabler/icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AccordionItemProps } from "./AccordionItem";
import { prefix } from "../../settings";

type AccordionProps = {
  /**
   * Accordion Children
   */
  children?: ReactNode;

  /**
   * Accordion ClassName
   */
  className?: string;

  /**
   * Accordion WrapperClassName
   */
  wrapperClassName?: string;

  /**
   * Accordion OnChange Function delivering the toggled index
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
  wrapperClassName,
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
    <div className={cx(`${prefix}--accordion`, wrapperClassName)}>
      <ul className={cx(`${prefix}--accordion-list`, className)}>
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
                key={child.key}
                className={cx(`${prefix}--accordion-list__item`, {
                  [`${prefix}--accordion-list__item-collapse`]:
                    itemAnimations[i] === AnimationType.COLLAPSE && open,
                  [`${prefix}--accordion-list__item-expand`]:
                    itemAnimations[i] === AnimationType.EXPAND && open,
                  [`${prefix}--accordion-list__item-open`]: open
                })}
                onAnimationEnd={() => {
                  setAnimationForItem(i, AnimationType.NONE);
                }}
              >
                <button
                  disabled={props.disabled}
                  className={`${prefix}--accordion-list__item-title`}
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
                  <p
                    className={`${prefix}--accordion-list__item-title--headline`}
                  >
                    {props.title}
                  </p>
                  <IconChevronDown
                    className={`${prefix}--accordion-list__item-title--icon`}
                    size={16}
                  />
                </button>
                <p className={`${prefix}--accordion-list__item-content`}>
                  {props.children}
                </p>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
