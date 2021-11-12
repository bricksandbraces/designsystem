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

const AccordionItem = ({ children }: AccordionItemProps) => {
  return <>{children}</>;
};

export default AccordionItem;
