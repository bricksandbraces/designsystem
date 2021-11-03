import React, {
  MutableRefObject,
  SetStateAction,
  useRef,
  useState
} from "react";
import useControlled from "./useControlled";

/**
 * A hook for easily managing uncontrolled and controlled input behaviour while maintaining the original
 * synchronous event management.
 * Fusions controlled and uncontrolled usage into one single interface for consumption and value mutation.
 *
 * @param value The value prop of the input interface
 * @param defaultValue The defaultValue prop of the input interface
 * @returns
 * @interface[
 *   inputRef = the ref that has to be passed to the input
 *   value = the current value (from the current usage)
 *   handleOnChange = a function to be called within the onChangeEvent
 *   updateValue = a function that executes a value change
 * ]
 */
const useControlledValue = <V>(
  value: V,
  defaultValue: V,
  onChange?: React.ChangeEventHandler<HTMLInputElement>
): [
  MutableRefObject<HTMLInputElement | null>,
  V | undefined,
  (
    overrideValue?: React.SetStateAction<V | undefined>,
    additional?: React.ChangeEventHandler<HTMLInputElement> | undefined
  ) => ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
  React.Dispatch<React.SetStateAction<V | undefined>>
] => {
  const inputRef = useRef<HTMLInputElement>(null);

  const controlled = useControlled(value);
  const [cachedControlledValue, setCachedUncontrolledValue] = useState<
    V | undefined
  >(defaultValue);
  const currentValue = controlled ? value : cachedControlledValue;

  /**
     * Generates a controlled-safe listener to always call when the input value changes.
     * 
     * @param event The ChangeEvent from the input.
     * @param onChange The onChange function provided by the props
     * @param overrideValue By default the target.value will be used. But as some inputs
         have not value but checked as their valueable attribute, there's
         also the possibility to override the value via providing an additional argument.
     * @param additional If you want to perform actions before the parents onChange handler is being executed, you can
         use this callback to do so.
     */
  const handleOnChange = (
    overrideValue?: SetStateAction<V | undefined>,
    additional?: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    if (!onChange && controlled) return undefined;
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      // Only notify the cache for uncontrolled usage
      if (!controlled) {
        setCachedUncontrolledValue(
          overrideValue ?? (event.target.value as any)
        );
      }

      additional?.(event);

      onChange?.(event);
    };
  };

  return [inputRef, currentValue, handleOnChange, setCachedUncontrolledValue];
};

export default useControlledValue;
