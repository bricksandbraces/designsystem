import { useRef } from "react";

/**
 * Enforce a value to be constant over the whole component lifetime.
 * @param value The value to fix
 * @returns Always the initial value
 */
export const useConstant = <T>(value: T) => {
  const ref = useRef(value);
  return ref.current;
};
