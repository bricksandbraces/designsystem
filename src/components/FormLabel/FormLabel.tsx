import React, { ReactNode } from "react";
import cx from "classnames";
import Typography from "../Typography/Typography";
import { prefix } from "../../settings";

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
    <Typography
      type="label"
      token="label"
      htmlFor={htmlFor}
      className={cx(`${prefix}--formlabel`, className)}
    >
      {children}
    </Typography>
  );
};

export default FormLabel;
