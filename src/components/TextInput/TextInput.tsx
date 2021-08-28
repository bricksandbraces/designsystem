import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import useControlled from "../../hooks/useControlled";

type TextInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  type?: "password" | "text" | "email" | "number" | "search" | "time" | "url";

  autoComplete?: "off" | "on";

  defaultValue?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  children?: React.ReactNode;
};

const TextInput = (
  {
    id,
    className,
    label,
    placeholder,
    type = "text",
    value,
    defaultValue,
    autoComplete,
    onChange,
    children
  }: TextInputProps,
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
    <div>
      <input
        id={id}
        ref={ref}
        className={cx("", className)}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={textValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (!controlled) {
            setTextValue(event.target.value);
          }
          onChange?.(event);
        }}
      />
      {label && <label htmlFor={id}>{label}</label>}
      {children}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
