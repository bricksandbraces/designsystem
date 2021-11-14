import type { ForwardedRef } from "react";

/**
 * A function for settings refs via callback that supports created struct refs as well as function refs
 *
 * @param element the element to reference
 * @param ref the ref function or struct
 */
const setRef = <T>(element: T, ref: ForwardedRef<T>) => {
  if (ref) {
    if (typeof ref === "function") {
      ref(element);
    } else {
      ref.current = element;
    }
  }
};

export { setRef };
