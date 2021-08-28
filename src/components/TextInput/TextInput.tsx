import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconEye } from "@tabler/icons";
import Button from "../Button/Button";
import useControlled from "../../hooks/useControlled";

type TextInputProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  type?: "password" | "text" | "email" | "number" | "search" | "time" | "url";
  size?: "default" | "small" | "large";

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
    size = "default",
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
    <div className="textinput">
      {label && (
        <label htmlFor={id} className="textinput--label">
          {label}
        </label>
      )}
      <div className="textinput--input-container">
        <input
          id={id}
          ref={ref}
          className={cx(
            "textinput--input",
            {
              "textinput--large": size === "large",
              "textinput--default": size === "default" || undefined,
              "textinput--small": size === "small"
            },
            className
          )}
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
        {type === "password" && (
          <Button
            className="textinput--togglepassword"
            type="button"
            kind="ghost"
            iconOnly
            renderIcon={<IconEye />}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default forwardRef<HTMLInputElement, TextInputProps>(TextInput);
