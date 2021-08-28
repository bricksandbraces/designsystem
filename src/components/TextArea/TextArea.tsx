import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconEye } from "@tabler/icons";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";

type TextAreaProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  id?: string;

  defaultValue?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  children?: React.ReactNode;
};

const TextArea = (
  {
    id,
    className,
    label,
    placeholder,
    value,
    defaultValue,
    onChange
  }: TextAreaProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const controlled = useControlled(value);
  const [textValue, setTextValue] = useState<string>(
    (controlled ? value : defaultValue) ?? ""
  );

  useEffect(() => {
    if (controlled) {
      setTextValue(value ?? "");
    }
  }, [value]);

  return (
    <div className="textarea">
      {label && (
        <label htmlFor={id} className="textarea--label">
          {label}
        </label>
      )}
      <div className="textarea--input-container">
        <textarea
          id={id}
          ref={ref}
          className={cx("textarea--input", className)}
          placeholder={placeholder}
          value={textValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (!controlled) {
              setTextValue(event.target.value);
            }
            onChange?.(event);
          }}
        />
      </div>
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextAreaProps>(TextArea);
