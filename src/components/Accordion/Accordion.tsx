import { IconChevronDown } from "@tabler/icons-react";
import cx from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import { mapReactChildren } from "../../helpers/reactUtilities";
import { useControlled } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import { AccordionItemProps } from "./AccordionItem";

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

  /**
   * Accordion Light
   */
  light?: boolean;
};

export enum AnimationType {
  NONE,
  COLLAPSE,
  EXPAND
}

export const Accordion = React.forwardRef(function Accordion(
  {
    children,
    className,
    onChange,
    size = "default",
    light,
    defaultOpenIndices,
    openIndices
  }: AccordionProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
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
        { [`${prefix}--accordion-light`]: light },
        className
      )}
    >
      <ul className={cx(`${prefix}--accordion-list`)} ref={ref}>
        {mapReactChildren<AccordionItemProps>(
          children,
          ({ props, index, key }) => {
            const open = openIndexList.includes(index);
            return (
              <li
                key={key}
                className={cx(`${prefix}--accordion-list__item`, {
                  [`${prefix}--accordion-list__item-collapse`]:
                    itemAnimations[index] === AnimationType.COLLAPSE && open,
                  [`${prefix}--accordion-list__item-expand`]:
                    itemAnimations[index] === AnimationType.EXPAND && open,
                  [`${prefix}--accordion-list__item-open`]: open
                })}
                onAnimationEnd={() => {
                  setAnimationForItem(index, AnimationType.NONE);
                }}
              >
                <button
                  id={`${props.id}_label`}
                  disabled={props.disabled}
                  className={`${prefix}--accordion-list__item-title`}
                  aria-expanded={open}
                  aria-controls={`${props.id}_content`}
                  onClick={() => {
                    const alreadyOpen = openIndexList.includes(index);
                    const newOpenList = alreadyOpen
                      ? openIndexList.filter(
                          (selectedItemIndex) => index !== selectedItemIndex
                        )
                      : [...openIndexList, index];
                    if (!controlled) {
                      setAnimationForItem(
                        index,
                        alreadyOpen
                          ? AnimationType.COLLAPSE
                          : AnimationType.EXPAND
                      );
                      setOpenIndexList(newOpenList);
                    }
                    onChange?.(index, !alreadyOpen, newOpenList);
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
          }
        )}
      </ul>
    </div>
  );
});
