import React, { ReactNode } from "react";

export type AccordionItemProps = {
  /**
   * AccordionItem Children
   */
  children?: ReactNode;

  /**
   * AccordionItem Title
   */
  title: string | ReactNode;

  /**
   * AccordionItem ID - Required for accessibility
   */
  id: string;

  /**
   * AccordionItem Disabled
   */
  disabled?: boolean;
};

export const AccordionItem = function AccordionItem({
  children
}: AccordionItemProps) {
  return <>{children}</>;
};
