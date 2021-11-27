import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import useControlled from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

type TextAreaProps = {
  /**
   * TextArea ClassName
   */
  className?: string;

  /**
   * TextArea Label
   */
  label?: string;

  /**
   * TextArea Placeholder
   */
  placeholder?: string;

  /**
   * TextArea Id
   */
  id?: string;

  /**
   * TextArea Character Limit
   */
  characterLimit?: number;

  /**
   * TextArea Character Limit Exceeded Text
   */
  characterLimitExceededText?: string;

  /**
   * TextArea Maximum Length
   */
  maxLength?: number;

  /**
   * TextArea Error State & Text
   */
  error?: boolean;
  errorText?: string;

  /**
   * TextArea Warning State & Text
   */
  warning?: boolean;
  warningText?: string;

  /**
   * TextArea Default Value
   */
  defaultValue?: string;

  /**
   * TextArea Value
   */
  value?: string;

  /**
   * TextArea OnChange Function
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;

  /**
   * TextArea Children
   */
  children?: React.ReactNode;

  /**
   * TextArea Disabled
   */
  disabled?: boolean;

  /**
   * TextArea ReadOnly
   */
  readOnly?: boolean;
};

const TextArea = (
  {
    id,
    error,
    errorText,
    warningText,
    warning,
    characterLimit,
    characterLimitExceededText,
    maxLength,
    className,
    label,
    disabled,
    readOnly,
    placeholder,
    value,
    defaultValue,
    children,
    onChange
  }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
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
    <div
      className={cx(`${prefix}--textarea`, {
        [`${prefix}--textarea-disabled`]: disabled,
        [`${prefix}--textarea-readonly`]: readOnly
      })}
    >
      <div className={`${prefix}--textarea-top`}>
        {label && <Label htmlFor={id}>{label}</Label>}
        {characterLimit && (
          <div
            className={cx(`${prefix}--textarea-charcounter`, {
              [`${prefix}--textarea-charcounter__exceeded`]:
                textValue.length > characterLimit
            })}
          >
            {textValue.length} / {characterLimit}
          </div>
        )}
      </div>
      <div className={`${prefix}--textarea-input__container`}>
        <textarea
          maxLength={maxLength}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          ref={ref}
          className={cx(
            `${prefix}--textarea-input`,
            {
              [`${prefix}--textarea-error`]:
                ((error || errorText) && !(warning || warningText)) ||
                (characterLimit && textValue.length > characterLimit),
              [`${prefix}--textarea-warning`]:
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          placeholder={placeholder}
          value={textValue}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            if (!controlled) {
              setTextValue(event.target.value);
            }
            onChange?.(event);
          }}
        />
        {children}
      </div>
      {/* Error text or character limit exceeded. Error text overwrites character limit */}
      {(errorText || (characterLimit && textValue.length > characterLimit)) && (
        <div className={`${prefix}--textinput-error__text`}>
          <IconAlertCircle size={16} />
          {errorText || characterLimitExceededText}
        </div>
      )}
      {warningText && !errorText && (
        <div className={`${prefix}--textinput-warning__text`}>
          <IconAlertTriangle size={16} />
          {warningText}
        </div>
      )}
    </div>
  );
};

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
