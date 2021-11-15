import React from "react";

/**
 * Executes a callback on an event while stopping propagation before.
 *
 * NOTE: The propagation will only be stopped if a function callback is being passed.
 * It won't stop, if no function was passed.
 *
 * @param e The event (any Synthetic Event)
 * @param fn Function callback to exectue after propagation
 */
const withoutPropagation = <T extends React.BaseSyntheticEvent | Event>(
  fn?: (event: T) => void
) => {
  return (event: T) => {
    event.stopPropagation();
    if (fn) {
      fn?.(event);
    }
  };
};

export { withoutPropagation };
