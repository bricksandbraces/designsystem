/* eslint-disable import/prefer-default-export */
import { KeyboardEvent } from "react";

function filterForKeys<T>(
  keys: string[],
  callback?: (event: KeyboardEvent<T>) => void
): (event: KeyboardEvent<T>) => void {
  return (event: KeyboardEvent<T>) => {
    if (keys.includes(event.key)) {
      callback?.(event);
    }
  };
}

export { filterForKeys };
