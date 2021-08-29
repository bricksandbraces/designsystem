import React, { ReactNode } from "react";

export type AccordionItemProps = {
  /**
   * Accordion Children
   */
  children?: ReactNode;

  /**
   * Title
   */
  title: string | ReactNode;

  /**
   * Disabled Property
   */
  disabled?: boolean;
};

const AccordionItem = ({ children }: AccordionItemProps) => {
  return <>{children}</>;
};

export default AccordionItem;
