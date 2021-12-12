import React from "react";
import cx from "classnames";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons";
import { useControlledInput } from "../../hooks/useControlled";
import { prefix } from "../../settings";
import Label from "../Typography/Label";
import { TextInputProps } from "../TextInput/TextInput";
import mergeRefs from "react-merge-refs";

export type TextAreaProps = {
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
   * TextArea OnChange Function
   */
  onChange?: (
    newValue?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  /**
   * TextArea OnBlur Function
   */
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;

  /**
   * TextArea OnFocus Function
   */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;

  /**
   * TextArea OnChange Function
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
} & Omit<
  TextInputProps,
  "onChange" | "onBlur" | "onFocus" | "onKeyDown" | "fluid"
>;

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
    autoComplete,
    className,
    label,
    disabled,
    readOnly,
    placeholder,
    value,
    defaultValue,
    children,
    onChange,
    onBlur,
    onFocus,
    onKeyDown
  }: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const [inputRef, textValue, handleChange] =
    useControlledInput<HTMLTextAreaElement>(
      value,
      defaultValue,
      onChange &&
        ((newValue, event) => {
          onChange(newValue, event);
        })
    );
  const textLength = textValue?.length ?? 0;

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
                textLength > characterLimit
            })}
          >
            {textLength} / {characterLimit}
          </div>
        )}
      </div>
      <div className={`${prefix}--textarea-input__container`}>
        <textarea
          maxLength={maxLength}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          ref={mergeRefs([ref, inputRef])}
          className={cx(
            `${prefix}--textarea-input`,
            {
              [`${prefix}--textarea-error`]:
                ((error || errorText) && !(warning || warningText)) ||
                (characterLimit && textLength > characterLimit),
              [`${prefix}--textarea-warning`]:
                !(error || errorText) && (warning || warningText)
            },
            className
          )}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange()}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        />
        {children}
      </div>
      {/* Error text or character limit exceeded. Error text overwrites character limit */}
      {(errorText || (characterLimit && textLength > characterLimit)) && (
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

export default React.memo(
  React.forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea)
);
