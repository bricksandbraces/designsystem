import { IconChevronDown } from "@tabler/icons";
import React, { ReactNode, useEffect, useState, forwardRef } from "react";
import cx from "classnames";
import { AccordionItemProps } from "./AccordionItem";
import { prefix } from "../../settings";
import useControlled from "../../hooks/useControlled";

export type AccordionProps = {
  /**
   * Accordion Children
   */
  children?: ReactNode;

  /**
   * Accordion Size
   */
  size?: "large" | "default" | "small";

  /**
   * Accordion ClassName
   */
  className?: string;

  /**
   * Accordion OnChange Function delivering the toggled index
   */
  onChange?: (
    selectedIndex: number,
    newOpenState: boolean,
    newOpenIndexList: number[]
  ) => void;

  /**
   * Accordion Default Open Indices
   */
  defaultOpenIndices?: number[];

  /**
   * Accordion Open Indices
   */
  openIndices?: number[];
};

export enum AnimationType {
  NONE,
  COLLAPSE,
  EXPAND
}

const Accordion = (
  {
    children,
    className,
    onChange,
    size = "default",
    defaultOpenIndices,
    openIndices
  }: AccordionProps,
  ref: React.ForwardedRef<HTMLUListElement>
) => {
  const controlled = useControlled(openIndices);
  const [openIndexList, setOpenIndexList] = useState<number[]>(
    (controlled ? openIndices : defaultOpenIndices) ?? []
  );
  const [itemAnimations, setItemAnimations] = useState<AnimationType[]>(
    React.Children.map(children, () => AnimationType.NONE) as AnimationType[]
  );

  useEffect(() => {
    if (controlled) {
      const newOpenIndices = openIndices ?? [];
      const newAnimations = React.Children.map(children, (_, childIndex) => {
        const isOpen = openIndexList.includes(childIndex);
        const shouldBeOpen = newOpenIndices.includes(childIndex);
        // check if inclusion state has changed for this index
        if (isOpen !== shouldBeOpen) {
          return shouldBeOpen ? AnimationType.EXPAND : AnimationType.COLLAPSE;
        }
        return AnimationType.NONE;
      });
      setItemAnimations(newAnimations ?? []);
      setOpenIndexList(openIndices ?? []);
    }
  }, [openIndices]);

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

  return (
    <div
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size} `,
        className
      )}
    >
      <ul className={cx(`${prefix}--accordion-list`)} ref={ref}>
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement<AccordionItemProps>(child)) {
            return child;
          }
          const elementChild: React.ReactElement<AccordionItemProps> = child;
          const { props } = elementChild;
          const open = openIndexList.includes(i);
          return (
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
                id={`${props.id}_label`}
                disabled={props.disabled}
                className={`${prefix}--accordion-list__item-title`}
                aria-expanded={open}
                aria-controls={`${props.id}_content`}
                onClick={() => {
                  const alreadyOpen = openIndexList.includes(i);
                  const newOpenList = alreadyOpen
                    ? openIndexList.filter(
                        (selectedItemIndex) => i !== selectedItemIndex
                      )
                    : [...openIndexList, i];
                  if (!controlled) {
                    setAnimationForItem(
                      i,
                      alreadyOpen
                        ? AnimationType.COLLAPSE
                        : AnimationType.EXPAND
                    );
                    setOpenIndexList(newOpenList);
                  }
                  onChange?.(i, !alreadyOpen, newOpenList);
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
              <p
                className={`${prefix}--accordion-list__item-content`}
                id={`${props.id}_content`}
                aria-labelledby={`${props.id}_label`}
              >
                {props.children}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default forwardRef<HTMLUListElement, AccordionProps>(Accordion);
