import React, { ReactNode } from "react";

export type AccordionItemProps = {
  /**
   * Aspect Ratio Children
   */
  children?: ReactNode;

  /**
   * Ratio
   */
  title: string | ReactNode;
};

const AccordionItem = ({ children }: AccordionItemProps) => {
  return <>{children}</>;
};

export default AccordionItem;
