import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

type FormLabelProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * Children
   */
  children?: ReactNode;

  /**
   * HTML for label
   */
  htmlFor?: string;
};

const FormLabel = ({ children, htmlFor, className }: FormLabelProps) => {
  return (
    <Label htmlFor={htmlFor} className={cx(`${prefix}--formlabel`, className)}>
      {children}
    </Label>
  );
};

export default FormLabel;
