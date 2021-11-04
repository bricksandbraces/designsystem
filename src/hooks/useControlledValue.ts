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
 * @param onChange The onChange listener for the input. Required for controlled usage.
 * @returns
 * @interface[
 *   inputRef = the ref that has to be passed to the input
 *   value = the current value (hybrid: uncontrolled | controlled)
 *   handleOnChange = a function to be called within the onChange event of the input
 *   setUncontrolledCacheValue = update the internal cache for holding the uncontrolled input value
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
  // A mirrored value that is getting updated when the value changed and the input is uncontrolled
  const [uncontrolledCacheValue, setUncontrolledCacheValue] = useState<
    V | undefined
  >(defaultValue);
  // Current value is being returned dynamically depending on if the value is controlled or uncontrolled
  const currentValue = controlled ? value : uncontrolledCacheValue;

  /**
     * Generates a controlled-safe listener to always call when the input value changes.
     * 
     * @param overrideValue By default the target.value will be used. But as some inputs
         have not value but checked as their valueable attribute, there's
         also the possibility to override the value via providing an additional argument.
     * @param additional If you want to perform actions before the parents onChange handler is being executed, you can
         use this callback to do so.
       @returns Returns an onChange listener that has to be passed to the input. If no onChange listener was passed to
       the hook and the input is controlled, undefined will be returned.
     */
  const handleOnChange = (
    overrideValue?: SetStateAction<V | undefined>,
    additional?: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    // if the input is controlled and no onChange listener is being returned,
    // no onChange function will be returned, resulting in a useful native error
    if (!onChange && controlled) return undefined;
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      // Only notify the cache for uncontrolled usage, controlled usage always takes the value directly from the parent
      if (!controlled) {
        setUncontrolledCacheValue(overrideValue ?? (event.target.value as any));
      }

      additional?.(event);

      onChange?.(event);
    };
  };

  return [inputRef, currentValue, handleOnChange, setUncontrolledCacheValue];
};

export default useControlledValue;
