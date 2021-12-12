import React, {
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react";

/**
 * A hook that checks a value for being defined (with a value or null).
 * Refs the resulting existance check and therefore returns a consistent information about
 * if the component is uncontrolled or controlled.
 *
 * @param value The value for the input
 * @returns True, if the component is controlled. False else.
 */
const useControlled = (value: any) => {
  const ref = useRef(value !== undefined);
  return ref.current;
};

/**
 *  A hook that manages an internal state and applies the uncontrolled/controlled pattern to it.
 *
 * @param value The controlled value property
 * @param defaultValue The uncontrolled value property
 * @param onChange The onChange handler function (necessary for controlled usage)
 * @param fallback The fallback if e.g. the input is controlled and the value property is being ommited
 * @returns
 * @interface[
 *   currentValue = the current value (hybrid: uncontrolled | controlled)
 *   performChange = a function to be called within the onChange event of the input and whenever a change should be performed
 *   setCurrentValue = manually update the internal state (independent of controlling pattern)
 * ]
 */
const useControlledValue = <V>(
  value: V | undefined,
  defaultValue: V | undefined,
  onChange:
    | ((
        newValue: V,
        event?: React.ChangeEvent<HTMLElement & { value?: string }>
      ) => void)
    | undefined,
  fallback: V
): [
  V,
  (
    newValue: V,
    event?: React.ChangeEvent<HTMLElement & { value?: string }>
  ) => void,
  React.Dispatch<SetStateAction<V>>
] => {
  const controlled = useControlled(value);
  const [currentValue, setCurrentValue] = useState<V>(
    (controlled ? value : defaultValue) ?? fallback
  );

  useEffect(() => {
    if (controlled) {
      setCurrentValue(value ?? fallback);
    }
  }, [value]);

  const performChange = (
    newValue: V,
    event?: React.ChangeEvent<HTMLElement & { value?: string }>
  ) => {
    if (!controlled) {
      setCurrentValue(newValue);
    }
    onChange?.(newValue, event);
  };

  return [currentValue, performChange, setCurrentValue];
};

/**
 * A hook for easily managing uncontrolled and controlled input behaviour while maintaining the original
 * synchronous event management.
 * Fusions controlled and uncontrolled usage into one single interface for consumption and value mutation.
 *
 * @param value The value prop of the input interface
 * @param defaultValue The defaultValue prop of the input interface
 * @param onChange The onChange listener for the input. Required for controlled usage.
 * @returns
 * @interface[
 *   inputRef = the ref that has to be passed to the input
 *   value = the current value (hybrid: uncontrolled | controlled)
 *   handleChange = a function to be called within the onChange event of the input
 *   setValueManually = set the target elements value and update the internal cache
 *   setUncontrolledCacheValue = update the internal cache for holding the uncontrolled input value
 * ]
 */
const useControlledInput = <
  E extends HTMLElement & { value?: string | undefined } = HTMLInputElement
>(
  value?: string,
  defaultValue?: string,
  onChange?: (
    newValue: string | undefined,
    event?: React.ChangeEvent<E>
  ) => void
): [
  MutableRefObject<E | null>,
  string | undefined,
  (
    overrideValue?: React.SetStateAction<string | undefined> | undefined,
    additional?: (
      newValue?: string | undefined,
      event?: React.ChangeEvent<E>
    ) => void
  ) =>
    | ((
        first: string | React.ChangeEvent<E> | undefined,
        event?: React.ChangeEvent<E>
      ) => void)
    | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>,
  React.Dispatch<React.SetStateAction<string | undefined>>
] => {
  const inputRef = useRef<E>(null);
  const controlled = useControlled(value);
  // A mirrored value that is getting updated when the value changed and the input is uncontrolled
  const [uncontrolledCacheValue, setUncontrolledCacheValue] = useState<
    string | undefined
  >(defaultValue);
  // Current value is being returned dynamically depending on if the value is controlled or uncontrolled
  const currentValue = controlled ? value : uncontrolledCacheValue;

  /**
   * Generates a controlled-safe listener to always call when the input value changes.
   *
   * @param overrideValue By default the target.value will be used. But as some inputs
   *   have not value but checked as their valueable attribute, there's
   *   also the possibility to override the value via providing an additional argument.
   * @param additional If you want to perform actions before the parents onChange handler is being executed, you can
   *   use this callback to do so.
   * @returns Returns an onChange listener that has to be passed to the input. If no onChange listener was passed to
   *   the hook and the input is controlled, undefined will be returned.
   */
  const handleChange = (
    overrideValue?: SetStateAction<string | undefined>,
    additional?: (
      newValue: string | undefined,
      event?: React.ChangeEvent<E>
    ) => void
  ):
    | ((
        first: string | React.ChangeEvent<E> | undefined,
        event?: React.ChangeEvent<E>
      ) => void)
    | undefined => {
    // if the input is controlled and no onChange listener is being returned,
    // no onChange function will be returned, resulting in a useful native error
    if (!onChange && controlled) return undefined;

    return (
      first: string | React.ChangeEvent<E> | undefined,
      event?: React.ChangeEvent<E>
    ) => {
      // normalize the value for handling all cases that
      // 1) native change handler is being used
      // 2) newvalue + event change handler is being used.
      const newValue =
        typeof first === "string"
          ? first
          : (first as React.ChangeEvent<E> | undefined)?.target?.value ?? "";
      // Only notify the cache for uncontrolled usage, controlled usage always takes the value directly from the parent
      if (!controlled) {
        setUncontrolledCacheValue(overrideValue ?? newValue);
      }

      additional?.(newValue, event);

      onChange?.(newValue, event);
    };
  };

  /**
   * Set the value of the DOM element manually and update the
   * cache value for uncontrolled value.
   *
   * @param newValue New value to set
   */
  const setValueManually = (newValue: SetStateAction<string | undefined>) => {
    if (inputRef.current) {
      inputRef.current.value = `${newValue}`;
      setUncontrolledCacheValue(newValue);
    }
  };

  return [
    inputRef,
    currentValue,
    handleChange,
    setValueManually,
    setUncontrolledCacheValue
  ];
};

export { useControlled, useControlledInput, useControlledValue };
